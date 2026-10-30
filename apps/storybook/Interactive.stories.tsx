import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  TabView,
  TabList,
  Tab,
  TabPanel,
} from "../../packages/core/src/interactive";
const meta = {
  title: "Presentation/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open settings</DialogTrigger>
      <DialogContent>
        <DialogTitle>Workspace settings</DialogTitle>
        <DialogDescription>Choose how you work.</DialogDescription>
        <button>Save</button>
      </DialogContent>
    </Dialog>
  ),
};
export const Tabs: Story = {
  render: () => (
    <TabView defaultValue="general">
      <TabList aria-label="Settings">
        <Tab value="general">General</Tab>
        <Tab value="advanced">Advanced</Tab>
      </TabList>
      <TabPanel value="general">General preferences</TabPanel>
      <TabPanel value="advanced">Advanced preferences</TabPanel>
    </TabView>
  ),
};
