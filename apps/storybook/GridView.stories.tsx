import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/GridView",
  component: UI.GridView,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.GridView>>) => (
    <UI.GridView {...args}>
      <UI.Card>One</UI.Card>
      <UI.Card>Two</UI.Card>
    </UI.GridView>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.GridView>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.GridView {...args}>
        <UI.Card>One</UI.Card>
        <UI.Card>Two</UI.Card>
      </UI.GridView>
    </div>
  ),
};
