import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/Calendar",
  component: UI.Calendar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Calendar>>) => (
    <UI.Calendar
      label="Choose a date"
      initialMonth="2026-10-01"
      defaultValue="2026-10-30"
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Calendar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Calendar
        label="Choose a date"
        initialMonth="2026-10-01"
        defaultValue="2026-10-30"
        {...args}
      />
    </div>
  ),
};
