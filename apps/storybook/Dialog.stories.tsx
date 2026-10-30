import { expect, userEvent, within, waitFor } from "storybook/test";
import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Presentation/Dialog API",
  component: UI.Dialog,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.Dialog>>) => (
    <UI.Dialog {...args}>
      <UI.DialogTrigger>Open</UI.DialogTrigger>
      <UI.DialogContent>
        <UI.DialogTitle>Preferences</UI.DialogTitle>
        <UI.DialogDescription>
          Review workspace preferences.
        </UI.DialogDescription>
      </UI.DialogContent>
    </UI.Dialog>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.Dialog>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.Dialog {...args}>
        <UI.DialogTrigger>Open</UI.DialogTrigger>
        <UI.DialogContent>
          <UI.DialogTitle>Preferences</UI.DialogTitle>
          <UI.DialogDescription>
            Review workspace preferences.
          </UI.DialogDescription>
        </UI.DialogContent>
      </UI.Dialog>
    </div>
  ),
};

export const KeyboardInteraction = {
  ...Default,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Open" });
    await userEvent.click(trigger);
    const body = within(canvasElement.ownerDocument.body);
    await expect(body.getByRole("dialog")).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
  },
};

export const Open = { ...Default, args: { defaultOpen: true } };
