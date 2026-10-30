import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Navigation/Toolbar",
  component: UI.Toolbar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Toolbar>>) => (
    <UI.Toolbar aria-label="Editor" {...args}>
      <UI.ToolbarButton>Bold</UI.ToolbarButton>
      <UI.ToolbarButton>Italic</UI.ToolbarButton>
    </UI.Toolbar>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Toolbar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Toolbar aria-label="Editor" {...args}>
        <UI.ToolbarButton>Bold</UI.ToolbarButton>
        <UI.ToolbarButton>Italic</UI.ToolbarButton>
      </UI.Toolbar>
    </div>
  ),
};
