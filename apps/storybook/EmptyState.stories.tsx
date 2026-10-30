import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/EmptyState",
  component: UI.EmptyState,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.EmptyState>>) => (
    <UI.EmptyState
      title="No projects yet"
      description="Create a project to get started."
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.EmptyState>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.EmptyState
        title="No projects yet"
        description="Create a project to get started."
        {...args}
      />
    </div>
  ),
};
