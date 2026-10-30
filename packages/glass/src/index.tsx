import {
  forwardRef,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";
export interface GlassMaterialProps {
  material?: "subtle" | "regular" | "prominent";
  level?: "basic" | "enhanced";
  opaque?: boolean;
}
export interface GlassSurfaceProps
  extends HTMLAttributes<HTMLDivElement>, GlassMaterialProps {}
export const GlassSurface = forwardRef<HTMLDivElement, GlassSurfaceProps>(
  function GlassSurface(
    {
      material = "regular",
      level = "basic",
      opaque = false,
      className = "",
      ...props
    },
    ref,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        data-material={material}
        data-level={level}
        data-opaque={opaque || undefined}
        className={`uik-glass ${className}`}
      />
    );
  },
);
export interface GlassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, GlassMaterialProps {}
export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  function GlassButton(
    {
      material = "regular",
      level = "basic",
      opaque = false,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        data-material={material}
        data-level={level}
        data-opaque={opaque || undefined}
        className={`uik-glass uik-glass-button ${className}`}
      />
    );
  },
);
export interface GlassNavigationBarProps
  extends HTMLAttributes<HTMLElement>, GlassMaterialProps {
  label: string;
}
export const GlassNavigationBar = forwardRef<
  HTMLElement,
  GlassNavigationBarProps
>(function GlassNavigationBar(
  {
    label,
    material = "regular",
    level = "basic",
    opaque = false,
    className = "",
    ...props
  },
  ref,
) {
  return (
    <nav
      {...props}
      ref={ref}
      aria-label={label}
      data-material={material}
      data-level={level}
      data-opaque={opaque || undefined}
      className={`uik-glass uik-glass-navigation ${className}`}
    />
  );
});
export const GlassTabBar = forwardRef<HTMLElement, GlassNavigationBarProps>(
  function GlassTabBar(props, ref) {
    return (
      <GlassNavigationBar
        {...props}
        ref={ref}
        className={`uik-glass-tabbar ${props.className ?? ""}`}
      />
    );
  },
);
export const GlassSidebar = forwardRef<HTMLElement, GlassNavigationBarProps>(
  function GlassSidebar(
    {
      label,
      material = "subtle",
      level = "basic",
      opaque = false,
      className = "",
      ...props
    },
    ref,
  ) {
    return (
      <aside
        {...props}
        ref={ref}
        aria-label={label}
        data-material={material}
        data-level={level}
        data-opaque={opaque || undefined}
        className={`uik-glass ${className}`}
      />
    );
  },
);
