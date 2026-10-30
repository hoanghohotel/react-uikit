import { test, expect } from "@playwright/test";

// Use the actual shipped stylesheet and all material/level combinations.
async function fixtures(page: import("@playwright/test").Page) {
  await page.goto("/lab");
  await page.getByTestId("glass").evaluate((element) => {
    for (const material of ["subtle", "regular", "prominent"]) {
      for (const level of ["basic", "enhanced"]) {
        const clone = element.cloneNode(true) as HTMLElement;
        clone.dataset.material = material;
        clone.dataset.level = level;
        clone.dataset.testid = "glass-case";
        element.parentElement!.append(clone);
      }
    }
  });
}
async function expectOpaque(page: import("@playwright/test").Page) {
  const cases = page.getByTestId("glass-case");
  await expect(cases).toHaveCount(6);
  for (const element of await cases.all()) {
    await expect(element).toHaveCSS("backdrop-filter", "none");
    await expect(element).toHaveCSS("background-image", "none");
    const color = await element.evaluate(
      (node) => getComputedStyle(node).backgroundColor,
    );
    expect(color).toMatch(/^rgb\(/);
  }
}
for (const theme of ["light", "dark"] as const) {
  test(`glass contrast fallback covers every material in ${theme}`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: theme, contrast: "more" });
    await fixtures(page);
    await expectOpaque(page);
  });
}
test("glass reduced-transparency CSS fallback covers every material", async ({
  page,
  context,
  browserName,
}) => {
  await fixtures(page);
  if (browserName === "chromium") {
    const cdp = await context.newCDPSession(page);
    await cdp.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-transparency", value: "reduce" }],
    });
    expect(
      await page.evaluate(
        () => matchMedia("(prefers-reduced-transparency: reduce)").matches,
      ),
    ).toBe(true);
  } else {
    // Playwright has no native transparency emulation for these engines.
    // Activate the shipped media rules via CSSOM; this tests the cascade,
    // not the OS preference integration.
    const activated = await page.evaluate(() => {
      let count = 0;
      for (const sheet of Array.from(document.styleSheets)) {
        for (const rule of Array.from(sheet.cssRules)) {
          if (
            rule instanceof CSSMediaRule &&
            rule.conditionText.includes("prefers-reduced-transparency")
          ) {
            rule.media.mediaText = "all";
            count++;
          }
        }
      }
      return count;
    });
    expect(activated).toBeGreaterThan(0);
  }
  await expectOpaque(page);
});
test("glass base styles remain opaque when blur enhancement is unavailable", async ({
  page,
}) => {
  await fixtures(page);
  // Remove conditional enhancements to exercise the shipped base fallback.
  // Current test browsers all support blur; this is a simulated capability loss.
  const removed = await page.evaluate(() => {
    let count = 0;
    for (const sheet of Array.from(document.styleSheets)) {
      for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
        const rule = sheet.cssRules[i];
        if (
          rule instanceof CSSSupportsRule &&
          rule.conditionText.includes("backdrop-filter")
        ) {
          sheet.deleteRule(i);
          count++;
        }
      }
    }
    return count;
  });
  expect(removed).toBeGreaterThan(0);
  await expectOpaque(page);
});
test("reduced motion prevents pointer highlight updates", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/lab");
  const surface = page.locator('.uik-glass[data-level="enhanced"]');
  await surface.dispatchEvent("pointermove", {
    pointerType: "mouse",
    clientX: 30,
    clientY: 40,
  });
  await expect(surface).toHaveCSS("--uik-light-x", "50%");
  await expect(surface).toHaveCSS("--uik-light-y", "0%");
});

test("forced colors removes blur and highlight from every material", async ({
  page,
}) => {
  await page.emulateMedia({ forcedColors: "active" });
  await fixtures(page);
  await expectOpaque(page);
});
