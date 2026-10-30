import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Presentation/Alert",
  component: UI.Alert,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Alert>>) => (
    <UI.Alert title="Changes saved" {...args}>
      Your preferences are up to date.
    </UI.Alert>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Alert>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Alert title="Changes saved" {...args}>
        Your preferences are up to date.
      </UI.Alert>
    </div>
  ),
};
