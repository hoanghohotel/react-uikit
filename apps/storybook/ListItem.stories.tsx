import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/ListItem",
  component: UI.ListItem,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.ListItem>>) => (
    <UI.List>
      <UI.ListItem {...args}>List row</UI.ListItem>
    </UI.List>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.ListItem>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.List>
        <UI.ListItem {...args}>List row</UI.ListItem>
      </UI.List>
    </div>
  ),
};
