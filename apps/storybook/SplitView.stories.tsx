import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/SplitView",
  component: UI.SplitView,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.SplitView>>) => (
    <UI.SplitView sidebar={<span>Sidebar</span>} {...args}>
      Main content
    </UI.SplitView>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.SplitView>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SplitView sidebar={<span>Sidebar</span>} {...args}>
        Main content
      </UI.SplitView>
    </div>
  ),
};
