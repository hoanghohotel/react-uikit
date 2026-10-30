import type { ReactNode } from "react";
import "@react-uikit/tokens/theme.css";
import "./site.css";
export const metadata = {
  title: "React UIKit",
  description: "Independent, accessible React interface components",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
