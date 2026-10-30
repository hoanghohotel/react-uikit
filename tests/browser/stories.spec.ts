import { test, expect } from "@playwright/test";
test("every Storybook story renders without uncaught errors", async ({
  page,
  request,
}) => {
  test.setTimeout(240000);
  const response = await request.get("http://127.0.0.1:6006/index.json");
  expect(response.ok()).toBe(true);
  const index = (await response.json()) as {
    entries: Record<string, { id: string; type: string }>;
  };
  const stories = Object.values(index.entries).filter(
    (entry) => entry.type === "story",
  );
  expect(stories.length).toBeGreaterThan(100);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const story of stories) {
    await test.step(story.id, async () => {
      await page.goto(
        `http://127.0.0.1:6006/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`,
      );
      await expect(page.locator("#storybook-root > *").first()).toBeVisible({
        timeout: 15000,
      });
      expect(errors, story.id).toEqual([]);
    });
  }
});
