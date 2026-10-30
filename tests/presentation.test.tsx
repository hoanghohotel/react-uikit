import React from "react";
import { test, expect, vi, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
  ActionSheet,
  ActionSheetTrigger,
  ActionSheetContent,
  ActionSheetTitle,
  ActionSheetDescription,
  ActionSheetCancel,
  ActionSheetAction,
  Toolbar,
  ToolbarButton,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from "../packages/core/src/interactive";
import {
  GlassSheet,
  GlassSheetTrigger,
  GlassSheetContent,
  GlassSheetTitle,
  GlassSheetDescription,
  GlassSheetClose,
  GlassSegmentedControl,
  InteractiveGlassSurface,
} from "../packages/glass/src/interactive";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
test("sheet opens from logical side and restores focus", async () => {
  render(
    <Sheet>
      <SheetTrigger>Open sheet</SheetTrigger>
      <SheetContent side="start">
        <SheetTitle>Details</SheetTitle>
        <SheetDescription>Project details</SheetDescription>
        <SheetClose>Close</SheetClose>
      </SheetContent>
    </Sheet>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Open sheet" }));
  expect(screen.getByRole("dialog")).toHaveAttribute("data-side", "start");
  fireEvent.click(screen.getByRole("button", { name: "Close" }));
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Open sheet" })).toHaveFocus(),
  );
});
test("action sheet prioritizes cancel and does not confirm on escape", async () => {
  const action = vi.fn();
  render(
    <ActionSheet>
      <ActionSheetTrigger>Review</ActionSheetTrigger>
      <ActionSheetContent>
        <ActionSheetTitle>Confirm</ActionSheetTitle>
        <ActionSheetDescription>Review details</ActionSheetDescription>
        <ActionSheetCancel>Cancel</ActionSheetCancel>
        <ActionSheetAction onClick={action}>Proceed</ActionSheetAction>
      </ActionSheetContent>
    </ActionSheet>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Review" }));
  expect(screen.getByRole("alertdialog")).toHaveAccessibleName("Confirm");
  expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus();
  fireEvent.keyDown(document.activeElement!, { key: "Escape" });
  await waitFor(() =>
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument(),
  );
  expect(action).not.toHaveBeenCalled();
});
test("toolbar moves focus using arrows", async () => {
  render(
    <Toolbar aria-label="Editor">
      <ToolbarButton>Bold</ToolbarButton>
      <ToolbarButton>Italic</ToolbarButton>
    </Toolbar>,
  );
  screen.getByRole("button", { name: "Bold" }).focus();
  fireEvent.keyDown(document.activeElement!, { key: "ArrowRight" });
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Italic" })).toHaveFocus(),
  );
});
test("context menu runs selected command", () => {
  const select = vi.fn();
  render(
    <ContextMenu>
      <ContextMenuTrigger>Target</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={select}>Copy</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  );
  fireEvent.contextMenu(screen.getByText("Target"));
  fireEvent.click(screen.getByRole("menuitem", { name: "Copy" }));
  expect(select).toHaveBeenCalledOnce();
});
test("toast can be dismissed", async () => {
  render(
    <ToastProvider>
      <Toast defaultOpen duration={Infinity}>
        <ToastTitle>Saved</ToastTitle>
        <ToastDescription>Changes saved</ToastDescription>
        <ToastClose>Dismiss</ToastClose>
      </Toast>
      <ToastViewport />
    </ToastProvider>,
  );
  fireEvent.click(await screen.findByRole("button", { name: "Dismiss" }));
  await waitFor(() =>
    expect(
      screen.queryByRole("button", { name: "Dismiss" }),
    ).not.toBeInTheDocument(),
  );
});
test("glass sheet retains accessible dialog semantics", async () => {
  render(
    <GlassSheet>
      <GlassSheetTrigger>Open</GlassSheetTrigger>
      <GlassSheetContent>
        <GlassSheetTitle>Details</GlassSheetTitle>
        <GlassSheetDescription>Glass sheet details</GlassSheetDescription>
        <GlassSheetClose>Close</GlassSheetClose>
      </GlassSheetContent>
    </GlassSheet>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Open" }));
  expect(screen.getByRole("dialog")).toHaveAccessibleDescription(
    "Glass sheet details",
  );
  fireEvent.click(screen.getByRole("button", { name: "Close" }));
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Open" })).toHaveFocus(),
  );
});
test("glass segmented control exposes selected option", () => {
  render(
    <GlassSegmentedControl
      label="View"
      options={[
        { value: "a", label: "Grid" },
        { value: "b", label: "List" },
      ]}
    />,
  );
  fireEvent.click(screen.getByRole("radio", { name: "List" }));
  expect(screen.getByRole("radio", { name: "List" })).toBeChecked();
});
test("reduced motion prevents pointer highlights", () => {
  vi.stubGlobal("matchMedia", () => ({ matches: true }));
  render(
    <InteractiveGlassSurface interaction="interactive" data-testid="glass" />,
  );
  fireEvent.pointerMove(screen.getByTestId("glass"), {
    pointerType: "mouse",
    clientX: 20,
    clientY: 20,
  });
  expect(
    screen.getByTestId("glass").style.getPropertyValue("--uik-light-x"),
  ).toBe("");
});
