import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/RadioGroup",
  component: UI.RadioGroup,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.RadioGroup>>) => (
    <UI.RadioGroup
      label="Delivery"
      options={[
        { value: "standard", label: "Standard" },
        { value: "express", label: "Express" },
      ]}
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.RadioGroup>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.RadioGroup
        label="Delivery"
        options={[
          { value: "standard", label: "Standard" },
          { value: "express", label: "Express" },
        ]}
        {...args}
      />
    </div>
  ),
};

export const Selected = { ...Default, args: { defaultValue: "express" } };

export const Disabled = {
  ...Default,
  args: { disabled: true, defaultValue: "standard" },
};

export const DisabledOption = {
  ...Default,
  args: {
    options: [
      { value: "standard", label: "Standard" },
      { value: "express", label: "Express", disabled: true },
    ],
  },
};
