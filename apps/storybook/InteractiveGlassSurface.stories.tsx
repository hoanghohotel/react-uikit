import React from "react";
import * as G from "../../packages/glass/src/interactive";
export default {
  title: "Liquid Glass/InteractiveGlassSurface",
  component: G.InteractiveGlassSurface,
  tags: ["autodocs"],
};

export const Default = {
  render: (
    args: Partial<React.ComponentProps<typeof G.InteractiveGlassSurface>>,
  ) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.InteractiveGlassSurface
        interaction="interactive"
        level="enhanced"
        {...args}
      >
        Move the pointer
      </G.InteractiveGlassSurface>
    </div>
  ),
};
