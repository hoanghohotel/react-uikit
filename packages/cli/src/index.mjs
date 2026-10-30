#!/usr/bin/env node
import { readFile, lstat, mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execute = promisify(execFile);
import { fileURLToPath } from "node:url";
const registry = new URL("../registry/", import.meta.url);
const allowed = new Set(["button", "switch", "glass-button", "dialog"]);
export async function install(
  args,
  cwd = process.cwd(),
  log = console.log,
  run = execute,
) {
  if (args.includes("--help")) {
    log(
      "Usage: react-uikit add <button|switch|glass-button|dialog> [--dry-run]\nAdds independent React source and CSS to the uikit directory. Existing files are never overwritten.",
    );
    return;
  }
  const [command, component, ...flags] = args;
  if (
    command !== "add" ||
    !allowed.has(component) ||
    flags.some((x) => x !== "--dry-run")
  )
    throw new Error("Use add <button|switch|glass-button|dialog> [--dry-run].");
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
    ((await statOrNull(path.join(cwd, "pnpm-lock.yaml")))
      ? "pnpm"
      : (await statOrNull(path.join(cwd, "yarn.lock")))
        ? "yarn"
        : (await statOrNull(path.join(cwd, "bun.lock"))) ||
            (await statOrNull(path.join(cwd, "bun.lockb")))
          ? "bun"
          : "npm");
  if (!["npm", "pnpm", "yarn", "bun"].includes(manager))
    throw new Error(`Unsupported package manager: ${manager}`);
  const target = path.join(cwd, "uikit");
  const targetInfo = await statOrNull(target);
  if (targetInfo && (!targetInfo.isDirectory() || targetInfo.isSymbolicLink()))
    throw new Error(
      "uikit already exists and is not a regular directory. Nothing was overwritten.",
    );
  const files = [`${component}.tsx`, "theme.css"];
  const contents = await Promise.all(
    files.map((f) => readFile(new URL(f, registry), "utf8")),
  );
  const planned = [];
  for (let i = 0; i < files.length; i++) {
    const dest = path.join(target, files[i]);
    const info = await statOrNull(dest);
    if (info) {
      if (!info.isFile() || info.isSymbolicLink())
        throw new Error(
          `${files[i]} already exists and is not a regular file.`,
        );
      if ((await readFile(dest, "utf8")) !== contents[i])
        throw new Error(
          `${files[i]} already exists with modifications. Nothing was overwritten.`,
        );
    } else planned.push(i);
  }
  const dependencies =
    component === "dialog" && !deps["@radix-ui/react-dialog"]
      ? ["@radix-ui/react-dialog@^1.3.1"]
      : [];
  log(
    `${deps.next ? "Next.js" : "React"} project; package manager: ${manager}.`,
  );
  if (!planned.length && !dependencies.length) {
    log("Already installed; no changes.");
    return;
  }
  const commandArgs = [manager === "npm" ? "install" : "add", ...dependencies];
  if (flags.includes("--dry-run")) {
    log(
      `Would create: ${planned.map((i) => "uikit/" + files[i]).join(", ") || "none"}`,
    );
    if (dependencies.length)
      log(`Would run: ${manager} ${commandArgs.join(" ")}`);
    return;
  }
  if (dependencies.length) {
    log(`Installing ${dependencies.join(", ")}`);
    try {
      await run(manager, commandArgs, { cwd });
    } catch (error) {
      throw new Error(
        "Dependency installation failed; component files were not written. Check your package manager output and retry.",
        { cause: error },
      );
    }
  }
  if (!targetInfo) await mkdir(target);
  const written = [];
  try {
    for (const i of planned) {
      const dest = path.join(target, files[i]);
      await writeFile(dest, contents[i], { flag: "wx" });
      written.push(dest);
    }
  } catch (error) {
    for (const file of written) await unlink(file);
    throw error;
  }
  log(
    `Created ${planned.map((i) => "uikit/" + files[i]).join(", ")}. Import uikit/theme.css once from your application entry or Next.js root layout.`,
  );
}
async function statOrNull(file) {
  try {
    return await lstat(file);
  } catch (error) {
    if (error.code === "ENOENT") return null;
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
