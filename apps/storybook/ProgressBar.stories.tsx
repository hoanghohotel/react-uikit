import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/ProgressBar",
  component: UI.ProgressBar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.ProgressBar>>) => (
    <UI.ProgressBar label="Upload" value={40} max={100} {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.ProgressBar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.ProgressBar label="Upload" value={40} max={100} {...args} />
    </div>
  ),
};
