import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Data Display/DataTable",
  component: UI.DataTable,
  tags: ["autodocs"],
};

export const Default = {
  render: () => (
    <UI.DataTable
      label="Projects"
      rows={[
        { name: "Studio", count: 4 },
        { name: "Atlas", count: 2 },
      ]}
      getRowKey={(r) => r.name}
      columns={[
        {
          key: "name",
          header: "Name",
          render: (r) => r.name,
          sortValue: (r) => r.name,
        },
        {
          key: "count",
          header: "Tasks",
          render: (r) => r.count,
          sortValue: (r) => r.count,
        },
      ]}
    />
  ),
};
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
      <UI.DataTable
        label="Projects"
        rows={[
          { name: "Studio", count: 4 },
          { name: "Atlas", count: 2 },
        ]}
        getRowKey={(r) => r.name}
        columns={[
          {
            key: "name",
            header: "Name",
            render: (r) => r.name,
            sortValue: (r) => r.name,
          },
          {
            key: "count",
            header: "Tasks",
            render: (r) => r.count,
            sortValue: (r) => r.count,
          },
        ]}
      />
    </div>
  ),
};
