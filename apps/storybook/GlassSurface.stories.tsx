import React from "react";
import * as G from "../../packages/glass/src/index";
export default {
  title: "Liquid Glass/GlassSurface",
  component: G.GlassSurface,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassSurface>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassSurface material="regular" level="enhanced" {...args}>
        Floating material
      </G.GlassSurface>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };

export const Opaque = { ...Default, args: { opaque: true } };
export const Subtle = { ...Default, args: { material: "subtle" } };
export const Prominent = { ...Default, args: { material: "prominent" } };
