import React, { createRef } from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import {
  Checkbox,
  TextArea,
  Select,
  Slider,
  ProgressBar,
  SearchField,
} from "../packages/core/src/index";
afterEach(cleanup);
test("checkbox submits its value and exposes checked state", () => {
  render(
    <form data-testid="form">
      <Checkbox label="Agree" name="consent" value="yes" />
    </form>,
  );
  fireEvent.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("checkbox")).toBeChecked();
  expect(
    new FormData(screen.getByTestId("form") as HTMLFormElement).get("consent"),
  ).toBe("yes");
});
test("select supports controlled selection and changes", () => {
  const onChange = vi.fn();
  const { rerender } = render(
    <Select label="Region" value="eu" onChange={onChange}>
      <option value="eu">Europe</option>
      <option value="as">Asia</option>
    </Select>,
  );
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "as" } });
  expect(onChange).toHaveBeenCalledOnce();
  rerender(
    <Select label="Region" value="as" onChange={onChange}>
      <option value="as">Asia</option>
    </Select>,
  );
  expect(screen.getByRole("combobox")).toHaveValue("as");
});
test("textarea forwards a usable ref and supports disabled state", () => {
  const ref = createRef<HTMLTextAreaElement>();
  render(<TextArea ref={ref} label="Notes" defaultValue="Draft" disabled />);
  expect(ref.current).toBe(screen.getByRole("textbox"));
  expect(ref.current).toHaveValue("Draft");
  expect(ref.current).toBeDisabled();
});
test("slider preserves native limits and change events", () => {
  const onChange = vi.fn();
  render(
    <Slider
      label="Volume"
      min={0}
      max={100}
      step={5}
      defaultValue={20}
      onChange={onChange}
    />,
  );
  fireEvent.change(screen.getByRole("slider"), { target: { value: "40" } });
  expect(screen.getByRole("slider")).toHaveValue("40");
  expect(onChange).toHaveBeenCalledOnce();
});
test("progress supports both determinate and indeterminate states", () => {
  const { rerender } = render(
    <ProgressBar label="Upload" value={25} max={100} />,
  );
  expect(screen.getByRole("progressbar", { name: "Upload" })).toHaveAttribute(
    "value",
    "25",
  );
  rerender(<ProgressBar label="Upload" />);
  expect(screen.getByRole("progressbar")).not.toHaveAttribute("value");
});
test("search exposes a named native search control", () => {
  render(<SearchField label="Search components" />);
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "Button" },
  });
  expect(screen.getByRole("searchbox")).toHaveValue("Button");
});
