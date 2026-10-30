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
test("localized navigation searches and changes language", async ({ page }) => {
  await page.goto("/en/introduction");
  await page.getByRole("link", { name: "Tiếng Việt" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hệ thống thiết kế React độc lập",
  );
  await page.getByRole("searchbox", { name: "Tìm tài liệu" }).fill("màu");
  await expect(page.getByRole("link", { name: "Màu sắc" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Cài đặt", exact: true }),
  ).toHaveCount(0);
});
test("templates update local settings, tasks and member status", async ({
  page,
}) => {
  await page.goto("/templates");
  await page.getByLabel("Workspace name").fill("Team");
  await page.getByRole("button", { name: "Save settings" }).click();
  await expect(page.getByRole("status")).toContainText("Team");
  await page.getByRole("tab", { name: "Productivity" }).click();
  await page.getByLabel("New task").fill("Ship documentation");
  await page.getByRole("button", { name: "Add task" }).click();
  await page.getByRole("checkbox", { name: "Ship documentation" }).check();
  await expect(
    page.getByRole("checkbox", { name: "Ship documentation" }),
  ).toBeChecked();
  await page.getByRole("tab", { name: "Administration" }).click();
  await page.getByRole("button", { name: "Pause Alex Chen" }).click();
  await expect(
    page.getByRole("button", { name: "Activate Alex Chen" }),
  ).toBeVisible();
});
test("menu, popover and sheet restore keyboard focus", async ({ page }) => {
  await page.goto("/lab");
  const menu = page.getByRole("button", { name: "Project actions" });
  await menu.focus();
  await page.keyboard.press("Enter");
  await page.getByRole("menuitem", { name: "Duplicate project" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "Project duplicated" }),
  ).toContainText("Project duplicated");
  await expect(menu).toBeFocused();
  const popover = page.getByRole("button", { name: "Open popover" });
  await popover.click();
  await page.getByRole("button", { name: "Close popover" }).click();
  await expect(popover).toBeFocused();
  const sheet = page.getByRole("button", { name: "Open sheet" });
  await sheet.click();
  await page.keyboard.press("Escape");
  await expect(sheet).toBeFocused();
});
test("advanced controls and glass fallback work", async ({ page }) => {
  await page.goto("/lab");
  await page.getByRole("button", { name: "Increase Guests" }).click();
  await expect(page.locator("output")).toHaveText("3");
  await page.getByRole("button", { name: "Tasks", exact: true }).click();
  await expect(
    page
      .getByRole("table", { name: "Projects", exact: true })
      .getByRole("row")
      .nth(1),
  ).toContainText("Atlas");
  await page.getByRole("button", { name: "Opaque glass fallback" }).click();
  await expect(page.getByTestId("glass")).toHaveCSS("backdrop-filter", "none");
});
for (const route of ["/lab", "/templates", "/vi/introduction"])
  test(`axe on ${route}`, async ({ page }) => {
    await page.goto(route);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
test("copy code writes the displayed source", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/en/installation");
  const code = await page.locator("pre code").textContent();
  await page.getByRole("button", { name: "Copy code" }).click();
  await expect(page.getByRole("status")).toHaveText("Copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(code);
});
test("forced colors disables glass blur", async ({ page }) => {
  await page.goto("/lab");
  await page.emulateMedia({ forcedColors: "active" });
  await expect(page.getByTestId("glass")).toHaveCSS("backdrop-filter", "none");
});
test("Vietnamese live demo labels and interactions are localized", async ({
  page,
}) => {
  await page.goto("/vi/components");
  await page.getByRole("button", { name: "Lưu tùy chọn" }).click();
  await expect(page.locator(".preview").getByRole("status")).toContainText("Đã lưu tùy chọn");
  await page.getByRole("button", { name: "Mở cài đặt" }).click();
  await expect(
    page.getByRole("dialog", { name: "Cài đặt không gian" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Đóng hộp thoại" }).click();
});
