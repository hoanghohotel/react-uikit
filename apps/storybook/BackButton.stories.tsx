import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/BackButton",
  component: UI.BackButton,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.BackButton>>) => (
    <UI.BackButton onClick={() => history.back()} {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.BackButton>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.BackButton onClick={() => history.back()} {...args} />
    </div>
  ),
};
