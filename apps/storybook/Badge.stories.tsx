import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Badge",
  component: UI.Badge,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Badge>>) => (
    <UI.Badge tone="success" {...args}>
      Ready
    </UI.Badge>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Badge>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Badge tone="success" {...args}>
        Ready
      </UI.Badge>
    </div>
  ),
};
