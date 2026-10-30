import { forwardRef, type InputHTMLAttributes } from "react";
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
