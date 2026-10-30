import React from "react";
import * as G from "../../packages/glass/src/interactive";
export default {
  title: "Liquid Glass/GlassSheet",
  component: G.GlassSheet,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassSheet>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassSheet {...args}>
        <G.GlassSheetTrigger>Open sheet</G.GlassSheetTrigger>
        <G.GlassSheetContent>
          <G.GlassSheetTitle>Workspace</G.GlassSheetTitle>
          <G.GlassSheetDescription>
            Workspace preferences
          </G.GlassSheetDescription>
          <G.GlassSheetClose>Close</G.GlassSheetClose>
        </G.GlassSheetContent>
      </G.GlassSheet>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };

export const Open = { ...Default, args: { defaultOpen: true } };
export const OpenDark = { ...Open, globals: { theme: "dark" } };
