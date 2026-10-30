import { forwardRef, type ButtonHTMLAttributes } from "react";
export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ className = "", type = "button", ...props }, ref) {
  return (
    <button
      {...props}
      type={type}
      ref={ref}
      className={`uik-button ${className}`}
    />
  );
});
