import React from "react";
import { afterEach, test, expect, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import {
  Heading,
  Text,
  Stack,
  Inline,
  Divider,
  Badge,
  Surface,
  Spacer,
  Avatar,
  EmptyState,
  Skeleton,
  NavigationBar,
  Breadcrumbs,
  Sidebar,
  SidebarGroup,
  SplitView,
  BackButton,
  List,
  ListItem,
  SectionHeader,
  Table,
  GridView,
  CollectionView,
  Alert,
} from "../packages/core/src/index";
import {
  Stepper,
  ToggleButton,
  RadioGroup,
  SegmentedControl,
  Pagination,
  DatePicker,
  TimePicker,
  ColorPicker,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../packages/core/src/interactive";
afterEach(cleanup);
test("foundation preserves heading levels, labels and native semantics", () => {
  render(
    <Surface>
      <Heading level={1}>Title</Heading>
      <Text tone="secondary">Body</Text>
      <Stack>
        <Inline>
          <Badge tone="success">Ready</Badge>
          <Avatar alt="Alex" src="/alex.png" />
        </Inline>
        <Divider />
        <Spacer />
        <Skeleton />
        <EmptyState title="No results" description="Try another search." />
      </Stack>
    </Surface>,
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title");
  expect(screen.getByRole("img")).toHaveAccessibleName("Alex");
  expect(screen.getByRole("separator")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "No results",
  );
});
test("navigation and data display expose landmarks and tabular structure", () => {
  const back = vi.fn();
  render(
    <SplitView
      sidebar={
        <Sidebar label="Workspace">
          <SidebarGroup label="Projects">
            <NavigationBar label="Projects">
              <a href="/one">One</a>
            </NavigationBar>
          </SidebarGroup>
        </Sidebar>
      }
    >
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Project" }]}
      />
      <BackButton onClick={back} />
      <SectionHeader>Records</SectionHeader>
      <List>
        <ListItem>Item</ListItem>
      </List>
      <Table label="Records">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex</td>
          </tr>
        </tbody>
      </Table>
      <GridView>
        <Alert title="Saved" />
      </GridView>
      <CollectionView
        items={["a", "b"]}
        getKey={(x) => x}
        renderItem={(x) => <span>{x}</span>}
      />
    </SplitView>,
  );
  expect(
    screen.getByRole("complementary", { name: "Workspace" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("table")).toHaveAccessibleName("Records");
  expect(screen.getByText("Project")).toHaveAttribute("aria-current", "page");
  fireEvent.click(screen.getByRole("button", { name: "Back" }));
  expect(back).toHaveBeenCalledOnce();
});
test("stepper clamps values and supports controlled updates", () => {
  const change = vi.fn();
  const { rerender } = render(
    <Stepper label="Guests" defaultValue={1} max={2} onValueChange={change} />,
  );
  fireEvent.click(screen.getByRole("button", { name: "Increase Guests" }));
  expect(change).toHaveBeenLastCalledWith(2);
  expect(
    screen.getByRole("button", { name: "Increase Guests" }),
  ).toBeDisabled();
  rerender(<Stepper label="Guests" value={1} onValueChange={change} />);
  fireEvent.click(screen.getByRole("button", { name: "Increase Guests" }));
  expect(screen.getByRole("status")).toHaveTextContent("1");
});
test("toggle reflects pressed state and cancellation", () => {
  const { rerender } = render(<ToggleButton>Favorite</ToggleButton>);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  rerender(
    <ToggleButton onClick={(e) => e.preventDefault()}>Favorite</ToggleButton>,
  );
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
});
test("radio and segmented controls expose selected states", () => {
  render(
    <>
      <RadioGroup
        label="Delivery"
        defaultValue="a"
        options={[
          { value: "a", label: "Standard" },
          { value: "b", label: "Express" },
        ]}
      />
      <SegmentedControl
        label="View"
        defaultValue="grid"
        options={[
          { value: "grid", label: "Grid" },
          { value: "list", label: "List" },
        ]}
      />
    </>,
  );
  fireEvent.click(screen.getByRole("radio", { name: "Express" }));
  expect(screen.getByRole("radio", { name: "Express" })).toBeChecked();
  fireEvent.click(screen.getByRole("radio", { name: "List" }));
  expect(screen.getByRole("radio", { name: "List" })).toHaveAttribute(
    "aria-checked",
    "true",
  );
});
test("pagination limits navigation; native pickers expose labels and values", () => {
  const change = vi.fn();
  render(
    <>
      <Pagination page={1} pageCount={3} onPageChange={change} />
      <DatePicker label="Date" defaultValue="2026-10-30" />
      <TimePicker label="Time" defaultValue="09:00" />
      <ColorPicker label="Color" defaultValue="#123456" />
    </>,
  );
  expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Next page" }));
  expect(change).toHaveBeenCalledWith(2);
  expect(screen.getByLabelText("Date")).toHaveValue("2026-10-30");
  expect(screen.getByLabelText("Color")).toHaveValue("#123456");
});
test("popover closes and restores focus", async () => {
  render(
    <Popover>
      <PopoverTrigger>Details</PopoverTrigger>
      <PopoverContent aria-label="Details">
        <PopoverClose>Done</PopoverClose>
      </PopoverContent>
    </Popover>,
  );
  const trigger = screen.getByRole("button", { name: "Details" });
  fireEvent.click(trigger);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Done" }));
  await waitFor(() => expect(trigger).toHaveFocus());
});
test("menu keyboard opens and selecting an item invokes action", async () => {
  const select = vi.fn();
  render(
    <DropdownMenu>
      <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={select}>Duplicate</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  );
  fireEvent.keyDown(screen.getByRole("button", { name: "Actions" }), {
    key: "Enter",
  });
  await waitFor(() =>
    expect(
      screen.getByRole("menuitem", { name: "Duplicate" }),
    ).toBeInTheDocument(),
  );
  fireEvent.click(screen.getByRole("menuitem"));
  expect(select).toHaveBeenCalledOnce();
});
