import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/Sidebar",
  component: UI.Sidebar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Sidebar>>) => (
    <UI.Sidebar label="Workspace" {...args}>
      Workspace navigation
    </UI.Sidebar>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Sidebar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Sidebar label="Workspace" {...args}>
        Workspace navigation
      </UI.Sidebar>
    </div>
  ),
};
