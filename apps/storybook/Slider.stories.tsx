import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/Slider",
  component: UI.Slider,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Slider>>) => (
    <UI.Slider label="Volume" defaultValue={40} {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Slider>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Slider label="Volume" defaultValue={40} {...args} />
    </div>
  ),
};

export const Disabled = {
  render: (args: Partial<React.ComponentProps<typeof UI.Slider>>) => (
    <UI.Slider label="Volume" disabled {...args} />
  ),
};
