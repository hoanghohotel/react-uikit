import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/TimePicker",
  component: UI.TimePicker,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.TimePicker>>) => (
    <UI.TimePicker label="Time" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.TimePicker>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.TimePicker label="Time" {...args} />
    </div>
  ),
};
