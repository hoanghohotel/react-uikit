import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/ActionSheet",
  component: UI.ActionSheet,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.ActionSheet>>) => (
    <UI.ActionSheet {...args}>
      <UI.ActionSheetTrigger>Review action</UI.ActionSheetTrigger>
      <UI.ActionSheetContent>
        <UI.ActionSheetTitle>Confirm action</UI.ActionSheetTitle>
        <UI.ActionSheetDescription>
          Review before continuing.
        </UI.ActionSheetDescription>
        <UI.ActionSheetCancel>Cancel</UI.ActionSheetCancel>
        <UI.ActionSheetAction>Continue</UI.ActionSheetAction>
      </UI.ActionSheetContent>
    </UI.ActionSheet>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.ActionSheet>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.ActionSheet {...args}>
        <UI.ActionSheetTrigger>Review action</UI.ActionSheetTrigger>
        <UI.ActionSheetContent>
          <UI.ActionSheetTitle>Confirm action</UI.ActionSheetTitle>
          <UI.ActionSheetDescription>
            Review before continuing.
          </UI.ActionSheetDescription>
          <UI.ActionSheetCancel>Cancel</UI.ActionSheetCancel>
          <UI.ActionSheetAction>Continue</UI.ActionSheetAction>
        </UI.ActionSheetContent>
      </UI.ActionSheet>
    </div>
  ),
};
