import React from "react";
import * as G from "../../packages/glass/src/index";
export default {
  title: "Liquid Glass/GlassNavigationBar",
  component: G.GlassNavigationBar,
  tags: ["autodocs"],
};

export const Default = {
  render: (
    args: Partial<React.ComponentProps<typeof G.GlassNavigationBar>>,
  ) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassNavigationBar label="Main" {...args}>
        <a href="#home">Home</a>
        <a href="#library">Library</a>
      </G.GlassNavigationBar>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
