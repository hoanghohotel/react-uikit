import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/Select",
  component: UI.Select,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Select>>) => (
    <UI.Select label="Region" {...args}>
      <option>Asia</option>
      <option>Europe</option>
    </UI.Select>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Select>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Select label="Region" {...args}>
        <option>Asia</option>
        <option>Europe</option>
      </UI.Select>
    </div>
  ),
};
