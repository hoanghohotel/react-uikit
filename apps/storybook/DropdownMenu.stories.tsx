import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/DropdownMenu",
  component: UI.DropdownMenu,
  tags: ["autodocs"],
};
function MenuExample() {
  const [status, setStatus] = React.useState("");
  return (
    <>
      <UI.DropdownMenu>
        <UI.DropdownMenuTrigger>Actions</UI.DropdownMenuTrigger>
        <UI.DropdownMenuContent>
          <UI.DropdownMenuItem onSelect={() => setStatus("Duplicated")}>
            Duplicate
          </UI.DropdownMenuItem>
        </UI.DropdownMenuContent>
      </UI.DropdownMenu>
      <p role="status">{status}</p>
    </>
  );
}
export const Default = { render: () => <MenuExample /> };
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
      <MenuExample />
    </div>
  ),
};
