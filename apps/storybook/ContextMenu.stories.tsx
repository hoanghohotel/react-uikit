import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/ContextMenu",
  component: UI.ContextMenu,
  tags: ["autodocs"],
};
function ContextExample() {
  const [status, setStatus] = React.useState("");
  return (
    <>
      <UI.ContextMenu>
        <UI.ContextMenuTrigger>Right-click this area</UI.ContextMenuTrigger>
        <UI.ContextMenuContent>
          <UI.ContextMenuItem onSelect={() => setStatus("Copied")}>
            Copy
          </UI.ContextMenuItem>
        </UI.ContextMenuContent>
      </UI.ContextMenu>
      <p role="status">{status}</p>
    </>
  );
}
export const Default = { render: () => <ContextExample /> };
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
      <ContextExample />
    </div>
  ),
};
