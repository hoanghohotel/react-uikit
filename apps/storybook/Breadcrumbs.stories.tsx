import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Navigation/Breadcrumbs",
  component: UI.Breadcrumbs,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Breadcrumbs>>) => (
    <UI.Breadcrumbs
      items={[{ label: "Home", href: "/" }, { label: "Project" }]}
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Breadcrumbs>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Project" }]}
        {...args}
      />
    </div>
  ),
};
