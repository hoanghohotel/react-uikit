import ts from "typescript";
import { readdir, readFile, writeFile } from "node:fs/promises";
const entries = [];
for (const pkg of ["core", "glass"])
  for (const file of await readdir(`packages/${pkg}/src`)) {
    if (!/\.tsx?$/.test(file)) continue;
    const text = await readFile(`packages/${pkg}/src/${file}`, "utf8");
    const source = ts.createSourceFile(
      file,
      text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    for (const node of source.statements) {
      if (
        !ts.isInterfaceDeclaration(node) ||
        !node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
      )
        continue;
      entries.push({
        package: pkg,
        name: node.name.text,
        inherits:
          node.heritageClauses?.map((h) => h.getText(source)).join("; ") ?? "",
        props: node.members
          .filter(ts.isPropertySignature)
          .map((member) => ({
            name: member.name.getText(source),
            type: member.type?.getText(source) ?? "unknown",
            required: !member.questionToken,
          })),
        source: `packages/${pkg}/src/${file}`,
      });
    }
  }
await writeFile(
  "apps/docs/app/api.json",
  JSON.stringify(entries, null, 2) + "\n",
);
console.log(`Generated ${entries.length} public prop interfaces.`);
