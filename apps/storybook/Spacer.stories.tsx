import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Foundations/Spacer",
  component: UI.Spacer,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Spacer>>) => (
    <div>
      Before
      <UI.Spacer size="2rem" {...args} />
      After
    </div>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Spacer>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <div>
        Before
        <UI.Spacer size="2rem" {...args} />
        After
      </div>
    </div>
  ),
};
