import { test } from "node:test";
import assert from "node:assert/strict";
import {
  mkdtemp,
  writeFile,
  readFile,
  readdir,
  rm,
  symlink,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { install } from "./index.mjs";
async function project(t, react = true) {
  const dir = await mkdtemp(path.join(tmpdir(), "uikit-cli-"));
  t.after(() => rm(dir, { recursive: true, force: true }));
  await writeFile(
    path.join(dir, "package.json"),
    JSON.stringify({ dependencies: react ? { react: "^19" } : {} }),
  );
  return dir;
}
test("dry run does not write", async (t) => {
  const dir = await project(t);
  await install(["add", "button", "--dry-run"], dir, () => {});
  assert.deepEqual(await readdir(dir), ["package.json"]);
});
test("installs independent source and tokens without overwriting", async (t) => {
  const dir = await project(t);
  await install(["add", "button"], dir, () => {});
  const source = await readFile(path.join(dir, "uikit/button.tsx"), "utf8");
  assert.match(source, /forwardRef/);
  assert.doesNotMatch(source, /@react-uikit/);
  assert.match(
    await readFile(path.join(dir, "uikit/theme.css"), "utf8"),
    /--uik-primary/,
  );
  await assert.rejects(
    install(["add", "button"], dir, () => {}),
    /already exists/,
  );
  assert.equal(
    await readFile(path.join(dir, "uikit/button.tsx"), "utf8"),
    source,
  );
});
test("rejects unsupported projects and traversal", async (t) => {
  const dir = await project(t, false);
  await assert.rejects(
    install(["add", "switch"], dir, () => {}),
    /React must/,
  );
  await assert.rejects(
    install(["add", "../escape"], dir, () => {}),
    /Use add/,
  );
});
test("does not follow existing directory symlinks", async (t) => {
  const dir = await project(t);
  await symlink(tmpdir(), path.join(dir, "uikit"));
  await assert.rejects(
    install(["add", "button"], dir, () => {}),
    /already exists/,
  );
});
test("rejects dangling symlinks", async (t) => {
  const dir = await project(t);
  await symlink(path.join(dir, "missing"), path.join(dir, "uikit"));
  await assert.rejects(
    install(["add", "switch"], dir, () => {}),
    /already exists/,
  );
});
for (const component of ["switch", "glass-button"])
  test(`installs ${component}`, async (t) => {
    const dir = await project(t);
    await install(["add", component], dir, () => {});
    assert.match(
      await readFile(path.join(dir, `uikit/${component}.tsx`), "utf8"),
      /forwardRef/,
    );
  });
