import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Divider",
  component: UI.Divider,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Divider>>) => (
    <UI.Divider {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Divider>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Divider {...args} />
    </div>
  ),
};
