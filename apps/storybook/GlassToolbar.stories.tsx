import React from "react";
import * as G from "../../packages/glass/src/interactive";
export default {
  title: "Liquid Glass/GlassToolbar",
  component: G.GlassToolbar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassToolbar>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassToolbar aria-label="Editor" {...args}>
        <G.GlassToolbarButton>Bold</G.GlassToolbarButton>
        <G.GlassToolbarButton>Italic</G.GlassToolbarButton>
      </G.GlassToolbar>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
