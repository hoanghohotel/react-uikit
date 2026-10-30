import React from "react";
import * as G from "../../packages/glass/src/interactive";
export default {
  title: "Liquid Glass/GlassSegmentedControl",
  component: G.GlassSegmentedControl,
  tags: ["autodocs"],
};

export const Default = {
  render: (
    args: Partial<React.ComponentProps<typeof G.GlassSegmentedControl>>,
  ) => (
    <div
      style={{
        padding: 40,
        background: "linear-gradient(120deg,#b9d4f5,#e5b7c9)",
      }}
    >
      <G.GlassSegmentedControl
        label="View"
        options={[
          { value: "grid", label: "Grid" },
          { value: "list", label: "List" },
        ]}
        {...args}
      />
    </div>
  ),
};

export const Dark = { ...Default, globals: { theme: "dark" } };
