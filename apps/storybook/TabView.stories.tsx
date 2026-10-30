import React from "react";
import * as UI from "../../packages/core/src/interactive";
export default {
  title: "Navigation/TabView",
  component: UI.TabView,
  tags: ["autodocs"],
};

export const Default = {
  render: (args: Partial<React.ComponentProps<typeof UI.TabView>>) => (
    <UI.TabView defaultValue="a" {...args}>
      <UI.TabList aria-label="Sections">
        <UI.Tab value="a">Overview</UI.Tab>
        <UI.Tab value="b">Details</UI.Tab>
      </UI.TabList>
      <UI.TabPanel value="a">Overview content</UI.TabPanel>
      <UI.TabPanel value="b">Details content</UI.TabPanel>
    </UI.TabView>
  ),
};
export const Dark = {
  globals: { theme: "dark" },
  render: (args: Partial<React.ComponentProps<typeof UI.TabView>>) => (
    <div
      data-theme="dark"
      style={{
        padding: 24,
        background: "var(--uik-background)",
        color: "var(--uik-foreground)",
      }}
    >
      <UI.TabView defaultValue="a" {...args}>
        <UI.TabList aria-label="Sections">
          <UI.Tab value="a">Overview</UI.Tab>
          <UI.Tab value="b">Details</UI.Tab>
        </UI.TabList>
        <UI.TabPanel value="a">Overview content</UI.TabPanel>
        <UI.TabPanel value="b">Details content</UI.TabPanel>
      </UI.TabView>
    </div>
  ),
};
