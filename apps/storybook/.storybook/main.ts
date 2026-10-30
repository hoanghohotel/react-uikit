import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../*.stories.tsx"],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: /^@react-uikit\/core\/interactive$/,
            replacement: fileURLToPath(
              new URL(
                "../../../packages/core/src/interactive.tsx",
                import.meta.url,
              ),
            ),
          },
          {
            find: /^@react-uikit\/core$/,
            replacement: fileURLToPath(
              new URL("../../../packages/core/src/index.tsx", import.meta.url),
            ),
          },
          {
            find: /^@react-uikit\/glass\/interactive$/,
            replacement: fileURLToPath(
              new URL(
                "../../../packages/glass/src/interactive.tsx",
                import.meta.url,
              ),
            ),
          },
          {
            find: /^@react-uikit\/glass$/,
            replacement: fileURLToPath(
              new URL("../../../packages/glass/src/index.tsx", import.meta.url),
            ),
          },
        ],
      },
    });
  },
  addons: ["@storybook/addon-a11y"],
};
export default config;
