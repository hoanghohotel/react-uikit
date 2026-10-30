"use client";
import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react";
import * as Radio from "@radix-ui/react-radio-group";
import * as Toggle from "@radix-ui/react-toggle-group";
export interface StepperProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "defaultValue" | "onChange"
> {
  label: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onValueChange?: (value: number) => void;
}
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  function Stepper(
    {
      label,
      value,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      disabled,
      onValueChange,
      ...props
    },
    ref,
  ) {
    const [local, setLocal] = useState(defaultValue);
    const current = value ?? local;
    function update(next: number) {
      const result = Math.min(max, Math.max(min, next));
      if (value === undefined) setLocal(result);
      onValueChange?.(result);
    }
    return (
      <div
        {...props}
        ref={ref}
        role="group"
        aria-label={label}
        className={`uik-stepper ${props.className ?? ""}`}
      >
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={disabled || current <= min}
          onClick={() => update(current - step)}
        >
          −
        </button>
        <output aria-live="polite">{current}</output>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={disabled || current >= max}
          onClick={() => update(current + step)}
        >
          +
        </button>
      </div>
    );
  },
);
export interface ToggleButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}
export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function ToggleButton(
    {
      pressed,
      defaultPressed = false,
      onPressedChange,
      onClick,
      type = "button",
      className = "",
      ...props
    },
    ref,
  ) {
    const [local, setLocal] = useState(defaultPressed);
    const active = pressed ?? local;
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={`uik-button ${className}`}
        aria-pressed={active}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            if (pressed === undefined) setLocal(!active);
            onPressedChange?.(!active);
          }
        }}
      />
    );
  },
);
export interface Choice {
  value: string;
  label: string;
  disabled?: boolean;
}
export interface RadioGroupProps extends Omit<
  Radio.RadioGroupProps,
  "children"
> {
  label: string;
  options: Choice[];
}
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup({ label, options, ...props }, ref) {
    return (
      <Radio.Root {...props} ref={ref} aria-label={label}>
        {options.map((option) => (
          <label key={option.value} className="uik-radio-label">
            <Radio.Item
              value={option.value}
              disabled={option.disabled}
              className="uik-radio"
            >
              <Radio.Indicator className="uik-radio-indicator" />
            </Radio.Item>
            <span>{option.label}</span>
          </label>
        ))}
      </Radio.Root>
    );
  },
);
export interface SegmentedControlProps extends Omit<
  Toggle.ToggleGroupSingleProps,
  "type" | "children"
> {
  label: string;
  options: Choice[];
}
export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(function SegmentedControl({ label, options, className = "", ...props }, ref) {
  return (
    <Toggle.Root
      {...props}
      type="single"
      ref={ref}
      aria-label={label}
      className={`uik-tablist ${className}`}
    >
      {options.map((option) => (
        <Toggle.Item
          className="uik-segment"
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </Toggle.Item>
      ))}
    </Toggle.Root>
  );
});
export interface PaginationProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "onChange"
> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
}
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    {
      page,
      pageCount,
      onPageChange,
      label = "Pagination",
      previousLabel = "Previous page",
      nextLabel = "Next page",
      ...props
    },
    ref,
  ) {
    return (
      <nav
        {...props}
        ref={ref}
        aria-label={label}
        className={`uik-pagination ${props.className ?? ""}`}
      >
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(Math.max(1, page - 1))}
        >
          {previousLabel}
        </button>
        <span aria-live="polite">
          {" "}
          {page} / {pageCount}{" "}
        </span>
        <button
          type="button"
          disabled={page >= pageCount}
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        >
          {nextLabel}
        </button>
      </nav>
    );
  },
);
export interface DatePickerProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  function DatePicker({ label, ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <input
          {...props}
          ref={ref}
          type="date"
          className={`uik-input ${props.className ?? ""}`}
        />
      </label>
    );
  },
);
export const TimePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  function TimePicker({ label, ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <input
          {...props}
          ref={ref}
          type="time"
          className={`uik-input ${props.className ?? ""}`}
        />
      </label>
    );
  },
);
export const ColorPicker = forwardRef<HTMLInputElement, DatePickerProps>(
  function ColorPicker({ label, ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <input {...props} ref={ref} type="color" />
      </label>
    );
  },
);
