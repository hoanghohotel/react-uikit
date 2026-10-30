import React from "react";
import * as G from "../../packages/glass/src/interactive";
export default {
  title: "Liquid Glass/GlassPopover",
  component: G.GlassPopover,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassPopover>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassPopover {...args}>
        <G.GlassPopoverTrigger>Details</G.GlassPopoverTrigger>
        <G.GlassPopoverContent aria-label="Details">
          Project details<G.GlassPopoverClose>Close</G.GlassPopoverClose>
        </G.GlassPopoverContent>
      </G.GlassPopover>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };

export const Open = { ...Default, args: { defaultOpen: true } };
export const OpenDark = { ...Open, globals: { theme: "dark" } };
