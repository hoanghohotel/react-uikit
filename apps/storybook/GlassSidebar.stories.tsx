import React from "react";
import * as G from "../../packages/glass/src/index";
export default {
  title: "Liquid Glass/GlassSidebar",
  component: G.GlassSidebar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof G.GlassSidebar>>) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassSidebar label="Workspace" {...args}>
        <a href="#projects">Projects</a>
      </G.GlassSidebar>
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
