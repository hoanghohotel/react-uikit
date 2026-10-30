import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Card",
  component: UI.Card,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Card>>) => (
    <UI.Card {...args}>Content card</UI.Card>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Card>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Card {...args}>Content card</UI.Card>
    </div>
  ),
};
