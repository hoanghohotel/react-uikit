import { forwardRef, type ButtonHTMLAttributes } from "react";
export const GlassButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function GlassButton({ className = "", type = "button", ...props }, ref) {
  return (
    <button
      {...props}
      type={type}
      ref={ref}
      className={`uik-button uik-glass ${className}`}
    />
  );
});
