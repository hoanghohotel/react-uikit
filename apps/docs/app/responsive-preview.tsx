"use client";
import { useState, type ReactNode } from "react";
export function ResponsivePreview({
  locale,
  children,
}: {
  locale: "en" | "vi";
  children: ReactNode;
}) {
  const [width, setWidth] = useState("100%");
  return (
    <section
      aria-label={locale === "vi" ? "Xem trước đáp ứng" : "Responsive preview"}
    >
      <label className="uik-field">
        <span>
          {locale === "vi" ? "Kích thước xem trước" : "Preview width"}
        </span>
        <select
          className="uik-input"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        >
          <option value="390px">
            {locale === "vi" ? "Điện thoại" : "Phone"} · 390px
          </option>
          <option value="768px">
            {locale === "vi" ? "Máy tính bảng" : "Tablet"} · 768px
          </option>
          <option value="100%">
            {locale === "vi" ? "Máy tính" : "Desktop"}
          </option>
        </select>
      </label>
      <div
        style={{ width, maxWidth: "100%", marginInline: "auto", marginTop: 24 }}
      >
        {children}
      </div>
    </section>
  );
}
