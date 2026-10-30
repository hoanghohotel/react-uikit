import React from "react";
import { afterEach, expect, test, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  TabView,
  TabList,
  Tab,
  TabPanel,
} from "../packages/core/src/interactive";
afterEach(cleanup);
test("dialog opens, focuses content, closes on Escape and restores trigger focus", async () => {
  render(
    <Dialog>
      <DialogTrigger>Open settings</DialogTrigger>
      <DialogContent>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>Update your preferences.</DialogDescription>
        <button>Save</button>
      </DialogContent>
    </Dialog>,
  );
  const trigger = screen.getByRole("button", { name: "Open settings" });
  fireEvent.click(trigger);
  const dialog = screen.getByRole("dialog", { name: "Settings" });
  expect(dialog).toHaveAccessibleDescription("Update your preferences.");
  await waitFor(() =>
    expect(dialog.contains(document.activeElement)).toBe(true),
  );
  fireEvent.keyDown(document.activeElement!, { key: "Escape" });
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
  await waitFor(() => expect(trigger).toHaveFocus());
});
test("controlled dialog emits close intent", () => {
  const change = vi.fn();
  render(
    <Dialog open onOpenChange={change}>
      <DialogContent>
        <DialogTitle>Confirm</DialogTitle>
        <DialogDescription>Review details.</DialogDescription>
      </DialogContent>
    </Dialog>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
  expect(change).toHaveBeenCalledWith(false);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});
test("tabs associate panels and support arrow-key navigation", async () => {
  render(
    <TabView defaultValue="one">
      <TabList aria-label="Sections">
        <Tab value="one">First</Tab>
        <Tab value="two">Second</Tab>
      </TabList>
      <TabPanel value="one">First content</TabPanel>
      <TabPanel value="two">Second content</TabPanel>
    </TabView>,
  );
  const first = screen.getByRole("tab", { name: "First" });
  first.focus();
  fireEvent.keyDown(first, { key: "ArrowRight" });
  await waitFor(() =>
    expect(screen.getByRole("tab", { name: "Second" })).toHaveFocus(),
  );
  expect(screen.getByRole("tab", { name: "Second" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  expect(screen.getByRole("tabpanel")).toHaveTextContent("Second content");
});
