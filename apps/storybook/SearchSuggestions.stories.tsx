import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Controls/SearchSuggestions",
  component: UI.SearchSuggestions,
  tags: ["autodocs"],
};

export const Default = {
  render: (
    args: Partial<React.ComponentProps<typeof UI.SearchSuggestions>>,
  ) => (
    <UI.SearchSuggestions
      label="City"
      suggestions={["Hanoi", "Saigon", "Da Nang"]}
      {...args}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (
    args: Partial<React.ComponentProps<typeof UI.SearchSuggestions>>,
  ) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.SearchSuggestions
        label="City"
        suggestions={["Hanoi", "Saigon", "Da Nang"]}
        {...args}
      />
    </div>
  ),
};
