import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Patterns/PullToRefresh",
  component: UI.PullToRefresh,
  tags: ["autodocs"],
};
function RefreshExample() {
  const [count, setCount] = React.useState(0);
  return (
    <UI.PullToRefresh onRefresh={async () => setCount(count + 1)}>
      Refresh count: {count}
    </UI.PullToRefresh>
  );
}
export const Default = { render: () => <RefreshExample /> };
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
      <RefreshExample />
    </div>
  ),
};
