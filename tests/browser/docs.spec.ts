import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("form hydrates and responds to input", async ({ page }) => {
  await page.getByLabel("Workspace name").fill("Team");
  await page.getByRole("button", { name: "Save preferences" }).click();
  await expect(page.getByRole("status")).toContainText("Preferences saved");
});
test("dialog traps focus, closes on Escape and restores trigger", async ({
  page,
}) => {
  const trigger = page.getByRole("button", { name: "Open settings" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Workspace settings" });
  await expect(dialog).toBeVisible();
  await expect(page.getByLabel("Display name")).toBeFocused();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    expect(
      await dialog.evaluate((el) => el.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});
test("tabs support keyboard selection", async ({ page }) => {
  const general = page.getByRole("tab", { name: "General", exact: true });
  await general.focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: "Advanced", exact: true }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("Advanced workspace");
});
for (const theme of ["light", "dark"])
  test(`axe WCAG AA in ${theme} theme`, async ({ page }) => {
    await page.getByLabel("Preview appearance").selectOption(theme);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  });
test("open dialog passes axe", async ({ page }) => {
  await page.getByRole("button", { name: "Open settings" }).click();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
});
test("no horizontal page overflow", async ({ page }) => {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test("system theme follows browser appearance without inheriting outer light tokens", async ({
  page,
}) => {
  await page.getByLabel("Preview appearance").selectOption("system");
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator(".preview")).toHaveCSS(
    "background-color",
    "rgb(21, 21, 24)",
  );
  await page.emulateMedia({ colorScheme: "light" });
  await expect(page.locator(".preview")).toHaveCSS(
    "background-color",
    "rgb(245, 245, 247)",
  );
});
test("installation code is keyboard-focusable when overflowing", async ({
  page,
}) => {
  const code = page.getByLabel("Installation code");
  await code.focus();
  await expect(code).toBeFocused();
});
