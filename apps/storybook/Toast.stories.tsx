import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/Toast",
  component: UI.Toast,
  tags: ["autodocs"],
};
function ToastExample() {
  const [open, setOpen] = React.useState(false);
  return (
    <UI.ToastProvider>
      <button onClick={() => setOpen(true)}>Notify</button>
      <UI.Toast open={open} onOpenChange={setOpen}>
        <UI.ToastTitle>Saved</UI.ToastTitle>
        <UI.ToastDescription>Your changes are saved.</UI.ToastDescription>
        <UI.ToastClose>Dismiss</UI.ToastClose>
      </UI.Toast>
      <UI.ToastViewport />
    </UI.ToastProvider>
  );
}
export const Default = { render: () => <ToastExample /> };
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
      <ToastExample />
    </div>
  ),
};
