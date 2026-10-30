import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Stack",
  component: UI.Stack,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Stack>>) => (
    <UI.Stack {...args}>
      <span>First</span>
      <span>Second</span>
    </UI.Stack>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Stack>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Stack {...args}>
        <span>First</span>
        <span>Second</span>
      </UI.Stack>
    </div>
  ),
};
