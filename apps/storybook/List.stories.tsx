import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/List",
  component: UI.List,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.List>>) => (
    <UI.List {...args}>
      <UI.ListItem>First item</UI.ListItem>
      <UI.ListItem>Second item</UI.ListItem>
    </UI.List>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.List>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.List {...args}>
        <UI.ListItem>First item</UI.ListItem>
        <UI.ListItem>Second item</UI.ListItem>
      </UI.List>
    </div>
  ),
};
