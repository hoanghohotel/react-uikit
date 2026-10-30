#!/usr/bin/env node
import { readFile, lstat, mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const registry = new URL("../registry/", import.meta.url);
const allowed = new Set(["button", "switch", "glass-button"]);
export async function install(args, cwd = process.cwd(), log = console.log) {
  if (args.includes("--help")) {
    log(
      "Usage: react-uikit add <button|switch|glass-button> [--dry-run]\nAdds independent React source and CSS to a new uikit directory. Existing files are never overwritten.",
    );
    return;
  }
  const [command, component, ...flags] = args;
  if (
    command !== "add" ||
    !allowed.has(component) ||
    flags.some((x) => x !== "--dry-run")
  )
    throw new Error("Use add <button|switch|glass-button> [--dry-run].");
  const project = JSON.parse(
    await readFile(path.join(cwd, "package.json"), "utf8"),
  );
  const deps = { ...project.dependencies, ...project.devDependencies };
  if (!deps.react)
    throw new Error(
      "Unsupported project: React must be declared in package.json.",
    );
  const manager =
    project.packageManager?.split("@")[0] ||
    ((await exists(path.join(cwd, "pnpm-lock.yaml")))
      ? "pnpm"
      : (await exists(path.join(cwd, "yarn.lock")))
        ? "yarn"
        : "npm");
  if (!["npm", "pnpm", "yarn", "bun"].includes(manager))
    throw new Error(`Unsupported package manager: ${manager}`);
  const target = path.join(cwd, "uikit");
  // Refuse all existing targets, including symlinks, to protect consumer files.
  if (await exists(target))
    throw new Error(
      "uikit already exists. Choose a clean project directory or merge the generated source manually; nothing was overwritten.",
    );
  const files = [`${component}.tsx`, "theme.css"];
  const contents = await Promise.all(
    files.map((f) => readFile(new URL(f, registry), "utf8")),
  );
  log(
    `${deps.next ? "Next.js" : "React"} project; package manager: ${manager}. No additional dependencies are needed.`,
  );
  if (flags.includes("--dry-run")) {
    log(`Would create: ${files.map((f) => "uikit/" + f).join(", ")}`);
    return;
  }
  await mkdir(target);
  const written = [];
  try {
    for (let i = 0; i < files.length; i++) {
      const dest = path.join(target, files[i]);
      await writeFile(dest, contents[i], { flag: "wx" });
      written.push(dest);
    }
  } catch (error) {
    for (const file of written) await unlink(file);
    throw error;
  }
  log(
    `Created ${files.map((f) => "uikit/" + f).join(", ")}. Import uikit/theme.css once from your application entry or Next.js root layout.`,
  );
}
async function exists(file) {
  try {
    await lstat(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  install(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
