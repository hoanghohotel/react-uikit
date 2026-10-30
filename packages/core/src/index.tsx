import {
  forwardRef,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type HTMLAttributes,
} from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive";
  loading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      loading = false,
      disabled,
      children,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        {...props}
        type={type}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        data-variant={variant}
        className={"uik-button " + className}
      >
        {loading ? <span role="status">Loading…</span> : children}
      </button>
    );
  },
);
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, className = "", ...props }, ref) {
    return (
      <label className="uik-field">
        <span>{label}</span>
        <input {...props} className={"uik-input " + className} ref={ref} />
      </label>
    );
  },
);
export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "role"
> {
  label: string;
}
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, ...props },
  ref,
) {
  return (
    <label className="uik-switch">
      <input {...props} ref={ref} type="checkbox" role="switch" />
      <span>{label}</span>
    </label>
  );
});
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className = "", ...props }, ref) {
    return <div {...props} ref={ref} className={"uik-card " + className} />;
  },
);
export * from "./inputs";
