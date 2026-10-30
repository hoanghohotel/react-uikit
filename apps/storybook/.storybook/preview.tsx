import React, { useEffect, type ReactNode } from "react";
import type { Preview } from "@storybook/react-vite";
import "../../../packages/tokens/theme.css";
function Appearance({
  theme,
  children,
}: {
  theme: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => {
      delete document.documentElement.dataset.theme;
    };
  }, [theme]);
  return <>{children}</>;
}
const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Appearance",
      toolbar: { icon: "circlehollow", items: ["light", "dark", "system"] },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => (
      <Appearance theme={String(context.globals.theme ?? "light")}>
        <Story />
      </Appearance>
    ),
  ],
  parameters: {
    chromatic: { viewports: [390, 768, 1280] },
    a11y: { test: "error" },
  },
};
export default preview;
