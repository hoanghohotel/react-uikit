import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/Button API",
  component: UI.Button,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Button>>) => (
    <UI.Button {...args}>Continue</UI.Button>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Button>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Button {...args}>Continue</UI.Button>
    </div>
  ),
};

export const Sizes = {
  render: (args: Partial<React.ComponentProps<typeof UI.Button>>) => (
    <div style={{ display: "flex", gap: 12 }}>
      <UI.Button size="small" {...args}>
        Small
      </UI.Button>
      <UI.Button>Medium</UI.Button>
      <UI.Button size="large">Large</UI.Button>
    </div>
  ),
};
