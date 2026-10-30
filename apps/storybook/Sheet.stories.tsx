import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/Sheet",
  component: UI.Sheet,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Sheet>>) => (
    <UI.Sheet {...args}>
      <UI.SheetTrigger>Open sheet</UI.SheetTrigger>
      <UI.SheetContent>
        <UI.SheetTitle>Details</UI.SheetTitle>
        <UI.SheetDescription>Workspace details</UI.SheetDescription>
        <UI.SheetClose>Close</UI.SheetClose>
      </UI.SheetContent>
    </UI.Sheet>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Sheet>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Sheet {...args}>
        <UI.SheetTrigger>Open sheet</UI.SheetTrigger>
        <UI.SheetContent>
          <UI.SheetTitle>Details</UI.SheetTitle>
          <UI.SheetDescription>Workspace details</UI.SheetDescription>
          <UI.SheetClose>Close</UI.SheetClose>
        </UI.SheetContent>
      </UI.Sheet>
    </div>
  ),
};
