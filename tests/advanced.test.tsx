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
  DataTable,
  VirtualList,
  PullToRefresh,
  SearchSuggestions,
  CommandPalette,
  Calendar,
} from "../packages/core/src/interactive";
import {
  GlassButton,
  GlassSurface,
  GlassNavigationBar,
  GlassTabBar,
  GlassSidebar,
} from "../packages/glass/src/index";
afterEach(cleanup);
test("data table sorts numbers and toggles direction", () => {
  render(
    <DataTable
      label="Projects"
      rows={[
        { id: "a", n: 10 },
        { id: "b", n: 2 },
      ]}
      columns={[
        {
          key: "n",
          header: "Count",
          sortValue: (r) => r.n,
          render: (r) => r.n,
        },
      ]}
      getRowKey={(r) => r.id}
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: "Count" }));
  expect(screen.getAllByRole("cell")[0]).toHaveTextContent("2");
  fireEvent.click(screen.getByRole("button", { name: "Count" }));
  expect(screen.getAllByRole("cell")[0]).toHaveTextContent("10");
  expect(screen.getByRole("columnheader")).toHaveAttribute(
    "aria-sort",
    "descending",
  );
});
test("virtual list renders a bounded range and updates on scroll", () => {
  render(
    <VirtualList
      label="Items"
      items={Array.from({ length: 1000 }, (_, i) => i)}
      height={100}
      itemHeight={20}
      overscan={1}
      getKey={String}
      renderItem={(i) => <span>Item {i}</span>}
    />,
  );
  expect(screen.getAllByRole("listitem")).toHaveLength(6);
  fireEvent.scroll(screen.getByRole("region"), { target: { scrollTop: 400 } });
  expect(screen.queryByText("Item 0")).not.toBeInTheDocument();
  expect(screen.getByText("Item 20")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")[0]).toHaveAttribute(
    "aria-setsize",
    "1000",
  );
});
test("refresh reports errors and permits retry", async () => {
  const refresh = vi
    .fn()
    .mockRejectedValueOnce(new Error("offline"))
    .mockResolvedValueOnce(undefined);
  render(<PullToRefresh onRefresh={refresh}>Items</PullToRefresh>);
  fireEvent.click(screen.getByRole("button", { name: "Refresh" }));
  await waitFor(() =>
    expect(screen.getByRole("alert")).toHaveTextContent("Could not refresh"),
  );
  fireEvent.click(screen.getByRole("button", { name: "Refresh" }));
  await waitFor(() =>
    expect(screen.queryByRole("alert")).not.toBeInTheDocument(),
  );
  expect(refresh).toHaveBeenCalledTimes(2);
});
test("suggestions connect a native datalist to search", () => {
  render(<SearchSuggestions label="City" suggestions={["Hanoi", "Saigon"]} />);
  const input = screen.getByRole("combobox", { name: "City" });
  expect(
    document.getElementById(input.getAttribute("list")!)?.children,
  ).toHaveLength(2);
});
test("command palette filters and invokes commands", async () => {
  const action = vi.fn();
  render(
    <CommandPalette
      commands={[
        { id: "new", label: "New project", onSelect: action },
        { id: "open", label: "Open project", onSelect: vi.fn() },
      ]}
    />,
  );
  fireEvent.click(screen.getByRole("button", { name: "Open commands" }));
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "New" } });
  expect(
    screen.queryByRole("button", { name: "Open project" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "New project" }));
  expect(action).toHaveBeenCalledOnce();
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
});
test("calendar handles leap days, limits and month navigation", () => {
  const change = vi.fn();
  render(
    <Calendar
      label="Date"
      initialMonth="2024-02-01"
      min="2024-02-10"
      max="2024-03-10"
      onValueChange={change}
    />,
  );
  expect(
    screen.getByRole("button", { name: "Thursday, February 1, 2024" }),
  ).toBeDisabled();
  fireEvent.click(
    screen.getByRole("button", { name: "Thursday, February 29, 2024" }),
  );
  expect(change).toHaveBeenCalledWith("2024-02-29");
  fireEvent.click(screen.getByRole("button", { name: "Next month" }));
  expect(screen.getByText("March 2024")).toBeInTheDocument();
});
test("glass uses actual semantic elements and explicit fallback flags", () => {
  const action = vi.fn();
  render(
    <>
      <GlassSurface
        material="prominent"
        level="enhanced"
        opaque
        data-testid="glass"
      >
        Surface
      </GlassSurface>
      <GlassButton onClick={action}>Continue</GlassButton>
      <GlassNavigationBar label="Main">Nav</GlassNavigationBar>
      <GlassTabBar label="Sections">Sections</GlassTabBar>
      <GlassSidebar label="Workspace">Sidebar</GlassSidebar>
    </>,
  );
  expect(screen.getByTestId("glass")).toHaveAttribute("data-opaque", "true");
  fireEvent.click(screen.getByRole("button"));
  expect(action).toHaveBeenCalledOnce();
  expect(screen.getAllByRole("navigation")).toHaveLength(2);
  expect(screen.getByRole("complementary")).toHaveAccessibleName("Workspace");
});
