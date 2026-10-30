import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/ColorPicker",
  component: UI.ColorPicker,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.ColorPicker>>) => (
    <UI.ColorPicker label="Color" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.ColorPicker>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.ColorPicker label="Color" {...args} />
    </div>
  ),
};
