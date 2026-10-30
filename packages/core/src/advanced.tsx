"use client";
import {
  useId,
  useState,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type CSSProperties,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./interactive";
import { Table } from "./data";
export interface DataColumn<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  sortValue?: (row: T) => string | number;
}
export interface DataTableProps<T> {
  label: string;
  rows: readonly T[];
  columns: readonly DataColumn<T>[];
  getRowKey: (row: T) => string;
  emptyMessage?: string;
  className?: string;
  style?: CSSProperties;
}
export function DataTable<T>({
  label,
  rows,
  columns,
  getRowKey,
  emptyMessage = "No records",
  ...props
}: DataTableProps<T>) {
  const [sort, setSort] = useState<{ key: string; direction: 1 | -1 } | null>(
    null,
  );
  const col = columns.find((c) => c.key === sort?.key);
  const sorted = col?.sortValue
    ? [...rows].sort((a, b) => {
        const left = col.sortValue!(a),
          right = col.sortValue!(b);
        return (
          (typeof left === "number" && typeof right === "number"
            ? left - right
            : String(left).localeCompare(String(right))) *
          (sort?.direction ?? 1)
        );
      })
    : rows;
  return (
    <Table label={label} {...props}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              scope="col"
              aria-sort={
                sort?.key === column.key
                  ? sort.direction === 1
                    ? "ascending"
                    : "descending"
                  : undefined
              }
            >
              {column.sortValue ? (
                <button
                  type="button"
                  onClick={() =>
                    setSort({
                      key: column.key,
                      direction:
                        sort?.key === column.key && sort.direction === 1
                          ? -1
                          : 1,
                    })
                  }
                >
                  {column.header}
                </button>
              ) : (
                column.header
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.length ? (
          sorted.map((row) => (
            <tr key={getRowKey(row)}>
              {columns.map((column) => (
                <td key={column.key}>{column.render(row)}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
export interface VirtualListProps<T> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  items: readonly T[];
  height: number;
  itemHeight: number;
  overscan?: number;
  label: string;
  getKey: (item: T) => string;
  renderItem: (item: T, index: number) => ReactNode;
}
export function VirtualList<T>({
  items,
  height,
  itemHeight,
  overscan = 3,
  label,
  getKey,
  renderItem,
  style,
  onScroll,
  ...props
}: VirtualListProps<T>) {
  const [top, setTop] = useState(0);
  if (height <= 0 || itemHeight <= 0)
    throw new Error("VirtualList requires positive height and itemHeight.");
  const start = Math.max(0, Math.floor(top / itemHeight) - overscan);
  const end = Math.min(
    items.length,
    Math.ceil((top + height) / itemHeight) + overscan,
  );
  return (
    <div
      {...props}
      tabIndex={props.tabIndex ?? 0}
      role="region"
      aria-label={label}
      style={{ height, overflow: "auto", ...style }}
      onScroll={(e) => {
        setTop(e.currentTarget.scrollTop);
        onScroll?.(e);
      }}
    >
      <ul
        style={{
          height: items.length * itemHeight,
          position: "relative",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {items.slice(start, end).map((item, i) => (
          <li
            key={getKey(item)}
            aria-posinset={start + i + 1}
            aria-setsize={items.length}
            style={{
              position: "absolute",
              top: (start + i) * itemHeight,
              height: itemHeight,
              insetInline: 0,
            }}
          >
            {renderItem(item, start + i)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export interface PullToRefreshProps extends HTMLAttributes<HTMLDivElement> {
  onRefresh: () => Promise<void>;
  label?: string;
  refreshingLabel?: string;
  errorLabel?: string;
}
export function PullToRefresh({
  onRefresh,
  label = "Refresh",
  refreshingLabel = "Refreshing…",
  errorLabel = "Could not refresh. Try again.",
  children,
  ...props
}: PullToRefreshProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const start = useRef<number | null>(null);
  const running = useRef(false);
  async function refresh() {
    if (running.current) return;
    running.current = true;
    setBusy(true);
    setError(false);
    try {
      await onRefresh();
    } catch {
      setError(true);
    } finally {
      running.current = false;
      setBusy(false);
    }
  }
  return (
    <div
      {...props}
      onTouchStart={(e) => {
        props.onTouchStart?.(e);
        start.current =
          e.currentTarget.scrollTop === 0
            ? (e.touches[0]?.clientY ?? null)
            : null;
      }}
      onTouchEnd={(e) => {
        props.onTouchEnd?.(e);
        if (
          start.current !== null &&
          (e.changedTouches[0]?.clientY ?? 0) - start.current > 80
        )
          void refresh();
        start.current = null;
      }}
    >
      <button type="button" disabled={busy} onClick={() => void refresh()}>
        {busy ? refreshingLabel : label}
      </button>
      <div aria-busy={busy}>{children}</div>
      {error && <p role="alert">{errorLabel}</p>}
    </div>
  );
}
export interface SearchSuggestionsProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "list"
> {
  label: string;
  suggestions: readonly string[];
}
export function SearchSuggestions({
  label,
  suggestions,
  ...props
}: SearchSuggestionsProps) {
  const id = useId();
  return (
    <label className="uik-field">
      <span>{label}</span>
      <input
        {...props}
        className={`uik-input ${props.className ?? ""}`}
        type="search"
        list={id}
      />
      <datalist id={id}>
        {suggestions.map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
    </label>
  );
}
export interface Command {
  id: string;
  label: string;
  onSelect: () => void;
  disabled?: boolean;
}
export interface CommandPaletteProps {
  commands: readonly Command[];
  label?: string;
  triggerLabel?: string;
  searchLabel?: string;
  emptyMessage?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export function CommandPalette({
  commands,
  label = "Commands",
  triggerLabel = "Open commands",
  searchLabel = "Search commands",
  emptyMessage = "No commands found",
  open,
  onOpenChange,
}: CommandPaletteProps) {
  const [local, setLocal] = useState(false);
  const [query, setQuery] = useState("");
  function change(next: boolean) {
    setLocal(next);
    onOpenChange?.(next);
    if (!next) setQuery("");
  }
  const filtered = commands.filter((c) =>
    c.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  return (
    <Dialog open={open ?? local} onOpenChange={change}>
      <DialogTrigger>{triggerLabel}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{label}</DialogTitle>
        <DialogDescription>{searchLabel}</DialogDescription>
        <label className="uik-field">
          <span>{searchLabel}</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
        </label>
        <ul className="uik-list">
          {filtered.map((command) => (
            <li key={command.id}>
              <button
                type="button"
                disabled={command.disabled}
                onClick={() => {
                  command.onSelect();
                  change(false);
                }}
              >
                {command.label}
              </button>
            </li>
          ))}
        </ul>
        {!filtered.length && <p role="status">{emptyMessage}</p>}
      </DialogContent>
    </Dialog>
  );
}
