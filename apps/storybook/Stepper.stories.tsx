import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/Stepper",
  component: UI.Stepper,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Stepper>>) => (
    <UI.Stepper label="Guests" defaultValue={2} min={1} max={6} {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Stepper>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Stepper label="Guests" defaultValue={2} min={1} max={6} {...args} />
    </div>
  ),
};
