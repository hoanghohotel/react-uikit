import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  timeout: 60000,
  workers: 2,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command:
        "pnpm --filter @react-uikit/docs exec next start --hostname 127.0.0.1 --port 3100",
      url: "http://127.0.0.1:3100",
      reuseExistingServer: false,
    },
    {
      command:
        "pnpm --filter @react-uikit/storybook exec vite preview --outDir dist --host 127.0.0.1 --port 6006",
      url: "http://127.0.0.1:6006",
      reuseExistingServer: false,
    },
  ],
  projects: [
    {
      name: "firefox",
      testIgnore: "**/stories.spec.ts",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      testIgnore: "**/stories.spec.ts",
      use: {
        ...devices["Desktop Safari"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_WEBKIT_EXECUTABLE_PATH,
        },
      },
    },
    {
      name: "gallery",
      testMatch: "**/stories.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
        },
      },
    },
    {
      name: "chromium",
      testIgnore: "**/stories.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
        },
      },
    },
    {
      name: "mobile",
      testIgnore: "**/stories.spec.ts",
      use: {
        ...devices["iPhone 13"],
        defaultBrowserType: "chromium",
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
        },
      },
    },
  ],
});
