"use client";
import { useState } from "react";
export function CodeBlock({
  code,
  locale = "en",
}: {
  code: string;
  locale?: "en" | "vi";
}) {
  const [status, setStatus] = useState("");
  return (
    <div>
      <pre
        tabIndex={0}
        aria-label={locale === "vi" ? "Mã ví dụ" : "Example code"}
      >
        <code>{code}</code>
      </pre>
      <button
        className="uik-button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);
            setStatus(locale === "vi" ? "Đã sao chép" : "Copied");
          } catch {
            setStatus(
              locale === "vi"
                ? "Không thể sao chép. Hãy chọn mã thủ công."
                : "Could not copy. Select the code manually.",
            );
          }
        }}
      >
        {locale === "vi" ? "Sao chép mã" : "Copy code"}
      </button>
      <p role="status">{status}</p>
    </div>
  );
}
