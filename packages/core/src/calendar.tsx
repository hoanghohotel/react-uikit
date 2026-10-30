"use client";
import { useState, useRef, type HTMLAttributes } from "react";
function key(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parse(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}
export interface CalendarProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "defaultValue" | "onChange"
> {
  label: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  locale?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  initialMonth?: string;
}
export function Calendar({
  label,
  value,
  defaultValue,
  onValueChange,
  locale = "en",
  min,
  max,
  disabled,
  previousLabel = "Previous month",
  nextLabel = "Next month",
  initialMonth,
  ...props
}: CalendarProps) {
  const [local, setLocal] = useState(defaultValue);
  const selected = value ?? local;
  const [month, setMonth] = useState(() => {
    const date = parse(initialMonth ?? selected ?? key(new Date()));
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });
  const ref = useRef<HTMLDivElement>(null);
  const count = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const offset = month.getDay();
  const cells = Array.from(
    { length: Math.ceil((offset + count) / 7) * 7 },
    (_, i) => i - offset + 1,
  );
  function moveMonth(delta: number) {
    setMonth(new Date(month.getFullYear(), month.getMonth() + delta, 1));
  }
  return (
    <div
      {...props}
      ref={ref}
      role="group"
      aria-label={label}
      className={`uik-calendar ${props.className ?? ""}`}
    >
      <div className="uik-calendar-header">
        <button
          type="button"
          aria-label={previousLabel}
          disabled={disabled}
          onClick={() => moveMonth(-1)}
        >
          ‹
        </button>
        <strong aria-live="polite">
          {month.toLocaleDateString(locale, { month: "long", year: "numeric" })}
        </strong>
        <button
          type="button"
          aria-label={nextLabel}
          disabled={disabled}
          onClick={() => moveMonth(1)}
        >
          ›
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {Array.from({ length: 7 }, (_, i) => (
              <th scope="col" key={i}>
                <abbr
                  title={new Date(2026, 10, 1 + i).toLocaleDateString(locale, {
                    weekday: "long",
                  })}
                >
                  {new Date(2026, 10, 1 + i).toLocaleDateString(locale, {
                    weekday: "short",
                  })}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: cells.length / 7 }, (_, row) => (
            <tr key={row}>
              {cells.slice(row * 7, row * 7 + 7).map((day, i) => {
                if (day < 1 || day > count) return <td key={i} />;
                const date = new Date(
                    month.getFullYear(),
                    month.getMonth(),
                    day,
                  ),
                  dateKey = key(date);
                return (
                  <td key={i}>
                    <button
                      type="button"
                      data-date={dateKey}
                      aria-label={date.toLocaleDateString(locale, {
                        dateStyle: "full",
                      })}
                      aria-pressed={selected === dateKey}
                      disabled={
                        disabled ||
                        (min !== undefined && dateKey < min) ||
                        (max !== undefined && dateKey > max)
                      }
                      onClick={() => {
                        if (value === undefined) setLocal(dateKey);
                        onValueChange?.(dateKey);
                      }}
                      onKeyDown={(e) => {
                        const delta = (
                          {
                            ArrowLeft: -1,
                            ArrowRight: 1,
                            ArrowUp: -7,
                            ArrowDown: 7,
                          } as Record<string, number>
                        )[e.key];
                        if (delta) {
                          e.preventDefault();
                          const next = new Date(date);
                          next.setDate(next.getDate() + delta);
                          const nextKey = key(next);
                          if ((min && nextKey < min) || (max && nextKey > max))
                            return;
                          if (
                            next.getMonth() !== month.getMonth() ||
                            next.getFullYear() !== month.getFullYear()
                          )
                            setMonth(
                              new Date(next.getFullYear(), next.getMonth(), 1),
                            );
                          setTimeout(
                            () =>
                              ref.current
                                ?.querySelector<HTMLButtonElement>(
                                  `[data-date="${nextKey}"]`,
                                )
                                ?.focus(),
                            0,
                          );
                        }
                      }}
                    >
                      {day}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
