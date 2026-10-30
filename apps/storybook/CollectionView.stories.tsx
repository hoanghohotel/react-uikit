import React from "react";
import * as UI from "../../packages/core/src/index";
export default {
  title: "Data Display/CollectionView",
  component: UI.CollectionView,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <UI.CollectionView
      items={["One", "Two"]}
      getKey={(x) => x}
      renderItem={(x) => <span>{x}</span>}
    />
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: () => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.CollectionView
        items={["One", "Two"]}
        getKey={(x) => x}
        renderItem={(x) => <span>{x}</span>}
      />
    </div>
  ),
};
