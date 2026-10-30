import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/BottomSheet",
  component: UI.BottomSheet,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.BottomSheet>>) => (
    <UI.BottomSheet {...args}>
      <UI.SheetTrigger>Open bottom sheet</UI.SheetTrigger>
      <UI.BottomSheetContent>
        <UI.SheetTitle>Details</UI.SheetTitle>
        <UI.SheetDescription>Workspace details</UI.SheetDescription>
        <UI.SheetClose>Close</UI.SheetClose>
      </UI.BottomSheetContent>
    </UI.BottomSheet>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.BottomSheet>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.BottomSheet {...args}>
        <UI.SheetTrigger>Open bottom sheet</UI.SheetTrigger>
        <UI.BottomSheetContent>
          <UI.SheetTitle>Details</UI.SheetTitle>
          <UI.SheetDescription>Workspace details</UI.SheetDescription>
          <UI.SheetClose>Close</UI.SheetClose>
        </UI.BottomSheetContent>
      </UI.BottomSheet>
    </div>
  ),
};
