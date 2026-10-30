import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/TextField",
  component: UI.TextField,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.TextField>>) => (
    <UI.TextField label="Name" placeholder="Alex" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.TextField>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.TextField label="Name" placeholder="Alex" {...args} />
    </div>
  ),
};

export const Disabled = {
  render: (args: Partial<React.ComponentProps<typeof UI.TextField>>) => (
    <UI.TextField label="Name" disabled {...args} />
  ),
};

export const ReadOnly = {
  ...Default,
  args: { readOnly: true, defaultValue: "Alex Chen" },
};

export const Invalid = {
  ...Default,
  args: { "aria-invalid": true, required: true, defaultValue: "" },
};
