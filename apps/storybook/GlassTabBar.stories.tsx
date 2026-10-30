import React from "react";
import * as G from "../../packages/glass/src/index";
export default {
  title: "Liquid Glass/GlassTabBar",
  component: G.GlassTabBar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassTabBar>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassTabBar label="Sections" {...args}>
        <a href="#overview" aria-current="page">
          Overview
        </a>
        <a href="#details">Details</a>
      </G.GlassTabBar>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
