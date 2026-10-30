import {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ProgressHTMLAttributes,
} from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, ...props }, ref) {
    return (
      <label className="uik-switch">
        <input {...props} type="checkbox" ref={ref} />
        <span>{label}</span>
      </label>
    );
  },
);
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, className = "", ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <textarea {...props} ref={ref} className={`uik-input ${className}`} />
      </label>
    );
  },
);
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ label, className = "", children, ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <select {...props} ref={ref} className={`uik-input ${className}`}>
          {children}
        </select>
      </label>
    );
  },
);
export interface SliderProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}
export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { label, ...props },
  ref,
) {
  return (
    <label className="uik-field">
      <span>{label}</span>
      <input {...props} ref={ref} type="range" />
    </label>
  );
});
export interface ProgressBarProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  label: string;
}
export const ProgressBar = forwardRef<HTMLProgressElement, ProgressBarProps>(
  function ProgressBar({ label, ...props }, ref) {
    return <progress {...props} aria-label={label} ref={ref} />;
  },
);
export interface SearchFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField({ label, className = "", ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <input
          {...props}
          type="search"
          ref={ref}
          className={`uik-input ${className}`}
        />
      </label>
    );
  },
);
