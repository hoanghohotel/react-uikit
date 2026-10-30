import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/SegmentedControl",
  component: UI.SegmentedControl,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.SegmentedControl>>) => (
    <UI.SegmentedControl
      label="View"
      options={[
        { value: "grid", label: "Grid" },
        { value: "list", label: "List" },
      ]}
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.SegmentedControl>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SegmentedControl
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
