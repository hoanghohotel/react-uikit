import React, { createRef } from "react";
import { test, expect, afterEach, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { useControllableState } from "../packages/hooks/src/index";
import { cn } from "../packages/utils/src/index";
import { ChevronRight } from "../packages/icons/src/index";
import {
  Icon,
  IconButton,
  ProgressIndicator,
  TabBar,
  Typography,
} from "../packages/core/src/index";
afterEach(cleanup);
function HookExample({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (v: number) => void;
}) {
  const [count, setCount] = useControllableState(value, 0, onChange);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
test("controllable state handles local and controlled state", () => {
  const change = vi.fn();
  const { rerender } = render(<HookExample onChange={change} />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent("1");
  rerender(<HookExample value={4} onChange={change} />);
  fireEvent.click(screen.getByRole("button"));
  expect(change).toHaveBeenLastCalledWith(5);
  expect(screen.getByRole("button")).toHaveTextContent("4");
});
test("class utility merges conflicting utilities and conditional values", () => {
  expect(cn("p-2", false && "hidden", { "text-sm": true }, "p-4")).toBe(
    "text-sm p-4",
  );
});
test("icons and icon buttons expose accessible labels and refs", () => {
  const ref = createRef<SVGSVGElement>();
  const action = vi.fn();
  render(
    <>
      <Icon label="Forward">
        <path d="m9 5 7 7-7 7" />
      </Icon>
      <IconButton label="Next" onClick={action}>
        <ChevronRight ref={ref} />
      </IconButton>
      <ProgressIndicator label="Loading records" />
      <Typography>Body copy</Typography>
      <TabBar
        label="Sections"
        currentHref="/a"
        items={[
          { label: "A", href: "/a" },
          { label: "B", href: "/b" },
        ]}
      />
    </>,
  );
  expect(screen.getByRole("img", { name: "Forward" })).toBeInTheDocument();
  expect(ref.current).toHaveAttribute("aria-hidden", "true");
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  expect(action).toHaveBeenCalledOnce();
  expect(screen.getByRole("status")).toHaveTextContent("Loading records");
  expect(screen.getByRole("link", { name: "A" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});
