import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/Checkbox",
  component: UI.Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Checkbox>>) => (
    <UI.Checkbox label="Accept terms" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Checkbox>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Checkbox label="Accept terms" {...args} />
    </div>
  ),
};

export const Disabled = {
  render: (args: Partial<React.ComponentProps<typeof UI.Checkbox>>) => (
    <UI.Checkbox label="Accept terms" disabled {...args} />
  ),
};

export const Checked = { ...Default, args: { defaultChecked: true } };

export const CheckedDisabled = {
  ...Default,
  args: { defaultChecked: true, disabled: true },
};
