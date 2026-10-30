import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/CommandPalette",
  component: UI.CommandPalette,
  tags: ["autodocs"],
};
function CommandExample() {
  const [status, setStatus] = React.useState("");
  return (
    <>
      <UI.CommandPalette
        commands={[
          {
            id: "new",
            label: "New project",
            onSelect: () => setStatus("Project created"),
          },
        ]}
      />
      <p role="status">{status}</p>
    </>
  );
}
export const Default = { render: () => <CommandExample /> };
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
      <CommandExample />
    </div>
  ),
};
