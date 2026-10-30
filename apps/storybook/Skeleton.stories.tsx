import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/Skeleton",
  component: UI.Skeleton,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Skeleton>>) => (
    <UI.Skeleton style={{ width: 180, height: 24 }} {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Skeleton>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Skeleton style={{ width: 180, height: 24 }} {...args} />
    </div>
  ),
};
