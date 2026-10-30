import React from "react";
import { test, expect } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { Button, Switch, TextField } from "../packages/core/src/index";
afterEach(cleanup);
test("loading button blocks activation", () => {
  let count = 0;
  render(
    <Button loading onClick={() => count++}>
      Save
    </Button>,
  );
  fireEvent.click(screen.getByRole("button"));
  expect(count).toBe(0);
  expect(screen.getByRole("button")).toBeDisabled();
});
test("switch supports native uncontrolled changes", () => {
  render(<Switch label="Notifications" />);
  const control = screen.getByRole("switch", { name: "Notifications" });
  fireEvent.click(control);
  expect(control).toBeChecked();
});
test("field has an accessible label and accepts input", () => {
  render(<TextField label="Name" />);
  const input = screen.getByRole("textbox", { name: "Name" });
  fireEvent.change(input, { target: { value: "Alex" } });
  expect(input).toHaveValue("Alex");
});
