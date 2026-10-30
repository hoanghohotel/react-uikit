import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/Avatar",
  component: UI.Avatar,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Avatar>>) => (
    <UI.Avatar
      alt="Original geometric avatar"
      src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2744%27 height=%2744%27%3E%3Crect width=%2744%27 height=%2744%27 fill=%27%230066cc%27/%3E%3C/svg%3E"
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Avatar>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Avatar
        alt="Original geometric avatar"
        src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2744%27 height=%2744%27%3E%3Crect width=%2744%27 height=%2744%27 fill=%27%230066cc%27/%3E%3C/svg%3E"
        {...args}
      />
    </div>
  ),
};
