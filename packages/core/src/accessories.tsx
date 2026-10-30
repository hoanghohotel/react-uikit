import { forwardRef, type SVGProps, type HTMLAttributes } from "react";
import { Button, type ButtonProps } from "./index";
export interface IconProps extends SVGProps<SVGSVGElement> {
  label?: string;
}
export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { label, children, ...props },
  ref,
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
      ref={ref}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  );
});
export interface IconButtonProps extends ButtonProps {
  label: string;
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ label, ...props }, ref) {
    return <Button {...props} ref={ref} aria-label={label} />;
  },
);
export interface ProgressIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
}
export const ProgressIndicator = forwardRef<
  HTMLSpanElement,
  ProgressIndicatorProps
>(function ProgressIndicator({ label, className = "", ...props }, ref) {
  return (
    <span
      {...props}
      ref={ref}
      role="status"
      className={`uik-progress-indicator ${className}`}
    >
      <span className="uik-spinner" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
});
