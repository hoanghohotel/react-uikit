import { readFile, access, readdir } from "node:fs/promises";
import assert from "node:assert/strict";
for (const name of await readdir("packages")) {
  const dir = `packages/${name}`,
    manifest = JSON.parse(await readFile(`${dir}/package.json`, "utf8"));
  for (const [entry, target] of Object.entries(manifest.exports ?? {})) {
    const paths = typeof target === "string" ? [target] : Object.values(target);
    for (const file of paths) await access(`${dir}/${file}`);
    if (typeof target !== "string") {
      assert(target.types, `${name}${entry} must export declarations`);
      const source = await readFile(`${dir}/${target.import}`, "utf8");
      assert(
        !/from\s+["']next(?:\/|["'])/.test(source),
        `${name} imports Next.js`,
      );
      if (entry === "./interactive" || name === "hooks")
        assert(
          source.startsWith('"use client"') ||
            source.startsWith("'use client'"),
          `${name}${entry} missing client boundary`,
        );
    }
  }
  for (const file of Object.values(manifest.bin ?? {}))
    await access(`${dir}/${file}`);
  assert.equal(manifest.license, "MIT");
  console.log(`${manifest.name}: exports and declared artifacts verified`);
}
