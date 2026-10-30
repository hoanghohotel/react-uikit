import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/Popover",
  component: UI.Popover,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Popover>>) => (
    <UI.Popover {...args}>
      <UI.PopoverTrigger>Details</UI.PopoverTrigger>
      <UI.PopoverContent aria-label="Details">
        More information<UI.PopoverClose>Close</UI.PopoverClose>
      </UI.PopoverContent>
    </UI.Popover>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Popover>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Popover {...args}>
        <UI.PopoverTrigger>Details</UI.PopoverTrigger>
        <UI.PopoverContent aria-label="Details">
          More information<UI.PopoverClose>Close</UI.PopoverClose>
        </UI.PopoverContent>
      </UI.Popover>
    </div>
  ),
};
