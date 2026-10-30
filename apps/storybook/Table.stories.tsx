import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/Table",
  component: UI.Table,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Table>>) => (
    <UI.Table label="Members" {...args}>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alex</td>
        </tr>
      </tbody>
    </UI.Table>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Table>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Table label="Members" {...args}>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex</td>
          </tr>
        </tbody>
      </UI.Table>
    </div>
  ),
};
