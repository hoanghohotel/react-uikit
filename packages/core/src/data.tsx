import {
  forwardRef,
  type HTMLAttributes,
  type TableHTMLAttributes,
  type LiHTMLAttributes,
  type ReactNode,
  type CSSProperties,
} from "react";
export const List = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(function List({ className = "", ...props }, ref) {
  return <ul {...props} ref={ref} className={`uik-list ${className}`} />;
});
export const ListItem = forwardRef<
  HTMLLIElement,
  LiHTMLAttributes<HTMLLIElement>
>(function ListItem(props, ref) {
  return <li {...props} ref={ref} />;
});
export const SectionHeader = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(function SectionHeader({ className = "", ...props }, ref) {
  return (
    <h3 {...props} ref={ref} className={`uik-section-header ${className}`} />
  );
});
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  label: string;
}
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { label, className = "", children, ...props },
  ref,
) {
  return (
    <div
      className="uik-table-scroll"
      tabIndex={0}
      role="region"
      aria-label={label}
    >
      <table {...props} ref={ref} className={`uik-table ${className}`}>
        <caption>{label}</caption>
        {children}
      </table>
    </div>
  );
});
export interface GridViewProps extends HTMLAttributes<HTMLDivElement> {
  minWidth?: CSSProperties["minWidth"];
  gap?: CSSProperties["gap"];
}
export const GridView = forwardRef<HTMLDivElement, GridViewProps>(
  function GridView(
    { minWidth = "16rem", gap = "1rem", style, ...props },
    ref,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${typeof minWidth === "number" ? minWidth + "px" : minWidth}),1fr))`,
          gap,
          ...style,
        }}
      />
    );
  },
);
export interface CollectionViewProps<T> extends Omit<
  HTMLAttributes<HTMLUListElement>,
  "children"
> {
  items: readonly T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
}
export function CollectionView<T>({
  items,
  getKey,
  renderItem,
  ...props
}: CollectionViewProps<T>) {
  return (
    <ul {...props} className={`uik-collection ${props.className ?? ""}`}>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  tone?: "info" | "success" | "warning" | "destructive";
}
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { title, tone = "info", children, className = "", ...props },
  ref,
) {
  return (
    <div
      role={tone === "destructive" ? "alert" : "status"}
      {...props}
      ref={ref}
      data-tone={tone}
      className={`uik-alert ${className}`}
    >
      <strong>{title}</strong>
      {children}
    </div>
  );
});
