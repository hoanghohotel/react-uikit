import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/SectionHeader",
  component: UI.SectionHeader,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.SectionHeader>>) => (
    <UI.SectionHeader {...args}>Recent activity</UI.SectionHeader>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.SectionHeader>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SectionHeader {...args}>Recent activity</UI.SectionHeader>
    </div>
  ),
};
