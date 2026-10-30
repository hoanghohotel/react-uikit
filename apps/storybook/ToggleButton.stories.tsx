import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/ToggleButton",
  component: UI.ToggleButton,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.ToggleButton>>) => (
    <UI.ToggleButton {...args}>Favorite</UI.ToggleButton>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.ToggleButton>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.ToggleButton {...args}>Favorite</UI.ToggleButton>
    </div>
  ),
};
