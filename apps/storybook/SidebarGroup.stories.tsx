import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/SidebarGroup",
  component: UI.SidebarGroup,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.SidebarGroup>>) => (
    <UI.SidebarGroup label="Projects" {...args}>
      <a href="#project">Studio</a>
    </UI.SidebarGroup>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.SidebarGroup>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SidebarGroup label="Projects" {...args}>
        <a href="#project">Studio</a>
      </UI.SidebarGroup>
    </div>
  ),
};
