import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Data Display/VirtualList",
  component: UI.VirtualList,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <UI.VirtualList
      label="Records"
      items={Array.from({ length: 1000 }, (_, i) => i)}
      height={240}
      itemHeight={40}
      getKey={(x) => String(x)}
      renderItem={(x) => <span>Record {x + 1}</span>}
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
      <UI.VirtualList
        label="Records"
        items={Array.from({ length: 1000 }, (_, i) => i)}
        height={240}
        itemHeight={40}
        getKey={(x) => String(x)}
        renderItem={(x) => <span>Record {x + 1}</span>}
      />
    </div>
  ),
};
