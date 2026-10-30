import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Controls/SearchField",
  component: UI.SearchField,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.SearchField>>) => (
    <UI.SearchField label="Search" {...args} />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.SearchField>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SearchField label="Search" {...args} />
    </div>
  ),
};

export const Disabled = {
  render: (args: Partial<React.ComponentProps<typeof UI.SearchField>>) => (
    <UI.SearchField label="Search" disabled {...args} />
  ),
};
