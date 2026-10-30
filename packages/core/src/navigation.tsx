import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from "react";
export interface NavigationBarProps extends HTMLAttributes<HTMLElement> {
  label: string;
}
export const NavigationBar = forwardRef<HTMLElement, NavigationBarProps>(
  function NavigationBar({ label, className = "", ...props }, ref) {
    return (
      <nav
        {...props}
        ref={ref}
        aria-label={label}
        className={`uik-navigation ${className}`}
      />
    );
  },
);
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export interface BreadcrumbsProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  items: BreadcrumbItem[];
  label?: string;
}
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function Breadcrumbs({ items, label = "Breadcrumb", ...props }, ref) {
    return (
      <nav {...props} ref={ref} aria-label={label}>
        <ol className="uik-breadcrumbs">
          {items.map((item, index) => (
            <li key={index}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
export const Sidebar = forwardRef<HTMLElement, NavigationBarProps>(
  function Sidebar({ label, className = "", ...props }, ref) {
    return (
      <aside
        {...props}
        ref={ref}
        aria-label={label}
        className={`uik-sidebar ${className}`}
      />
    );
  },
);
export interface SidebarGroupProps extends HTMLAttributes<HTMLElement> {
  label: string;
}
export const SidebarGroup = forwardRef<HTMLElement, SidebarGroupProps>(
  function SidebarGroup({ label, children, ...props }, ref) {
    return (
      <section {...props} ref={ref} aria-label={label}>
        <h3>{label}</h3>
        {children}
      </section>
    );
  },
);
export interface SplitViewProps extends HTMLAttributes<HTMLDivElement> {
  sidebar: ReactNode;
}
export const SplitView = forwardRef<HTMLDivElement, SplitViewProps>(
  function SplitView({ sidebar, children, className = "", ...props }, ref) {
    return (
      <div {...props} ref={ref} className={`uik-split ${className}`}>
        <div>{sidebar}</div>
        <div>{children}</div>
      </div>
    );
  },
);
export interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}
export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  function BackButton(
    { label = "Back", children, className = "", type = "button", ...props },
    ref,
  ) {
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={`uik-button ${className}`}
      >
        <span aria-hidden="true">← </span>
        {children ?? label}
      </button>
    );
  },
);
export interface TabBarProps extends Omit<NavigationBarProps, "children"> {
  items: { label: string; href: string }[];
  currentHref: string;
}
export const TabBar = forwardRef<HTMLElement, TabBarProps>(function TabBar(
  { items, currentHref, ...props },
  ref,
) {
  return (
    <NavigationBar {...props} ref={ref}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.href === currentHref ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </NavigationBar>
  );
});
