import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/NavigationBar",
  component: UI.NavigationBar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.NavigationBar>>) => (
    <UI.NavigationBar label="Main" {...args}>
      <a href="#overview">Overview</a>
      <a href="#details">Details</a>
    </UI.NavigationBar>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.NavigationBar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.NavigationBar label="Main" {...args}>
        <a href="#overview">Overview</a>
        <a href="#details">Details</a>
      </UI.NavigationBar>
    </div>
  ),
};
