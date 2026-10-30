import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Navigation/Pagination",
  component: UI.Pagination,
  tags: ["autodocs"],
};
function PaginationExample() {
  const [page, setPage] = React.useState(1);
  return <UI.Pagination page={page} pageCount={5} onPageChange={setPage} />;
}
export const Default = { render: () => <PaginationExample /> };
export const Dark = {
  globals: { theme: "dark" },
  render: () => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <PaginationExample />
    </div>
  ),
};
