import type { ReactNode } from "react";
import "@react-uikit/tokens/theme.css";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
