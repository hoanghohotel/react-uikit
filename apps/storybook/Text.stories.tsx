import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Text",
  component: UI.Text,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Text>>) => (
    <UI.Text tone="secondary" {...args}>
      Supporting information
    </UI.Text>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Text>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Text tone="secondary" {...args}>
        Supporting information
      </UI.Text>
    </div>
  ),
};
