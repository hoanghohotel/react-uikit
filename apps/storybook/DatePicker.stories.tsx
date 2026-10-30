import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/DatePicker",
  component: UI.DatePicker,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.DatePicker>>) => (
    <UI.DatePicker label="Date" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.DatePicker>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.DatePicker label="Date" {...args} />
    </div>
  ),
};
