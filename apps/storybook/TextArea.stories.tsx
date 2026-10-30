import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/TextArea",
  component: UI.TextArea,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.TextArea>>) => (
    <UI.TextArea label="Notes" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.TextArea>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.TextArea label="Notes" {...args} />
    </div>
  ),
};

export const Disabled = {
  render: (args: Partial<React.ComponentProps<typeof UI.TextArea>>) => (
    <UI.TextArea label="Notes" disabled {...args} />
  ),
};
