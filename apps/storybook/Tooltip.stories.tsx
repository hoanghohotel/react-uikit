import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/Tooltip",
  component: UI.Tooltip,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Tooltip>>) => (
    <UI.TooltipProvider>
      <UI.Tooltip {...args}>
        <UI.TooltipTrigger>Help</UI.TooltipTrigger>
        <UI.TooltipContent>More details</UI.TooltipContent>
      </UI.Tooltip>
    </UI.TooltipProvider>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Tooltip>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.TooltipProvider>
        <UI.Tooltip {...args}>
          <UI.TooltipTrigger>Help</UI.TooltipTrigger>
          <UI.TooltipContent>More details</UI.TooltipContent>
        </UI.Tooltip>
      </UI.TooltipProvider>
    </div>
  ),
};
