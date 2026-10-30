import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Inline",
  component: UI.Inline,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Inline>>) => (
    <UI.Inline {...args}>
      <span>First</span>
      <span>Second</span>
    </UI.Inline>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Inline>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Inline {...args}>
        <span>First</span>
        <span>Second</span>
      </UI.Inline>
    </div>
  ),
};
