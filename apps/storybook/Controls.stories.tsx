import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  TextField,
  Checkbox,
  Switch,
  Select,
  Slider,
  ProgressBar,
  TextArea,
  SearchField,
  Card,
} from "../../packages/core/src/index";
import { GlassSurface } from "../../packages/glass/src/index";
const meta = {
  title: "Controls/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Continue" },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Form: Story = {
  render: () => (
    <Card>
      <TextField label="Name" />
      <SearchField label="Search" />
      <TextArea label="Notes" />
      <Checkbox label="Agree" />
      <Switch label="Notifications" />
      <Select label="Region">
        <option>Europe</option>
        <option>Asia</option>
      </Select>
      <Slider label="Volume" />
      <ProgressBar label="Upload" value={30} max={100} />
    </Card>
  ),
};
export const Glass: Story = {
  render: () => (
    <div
      style={{
        background: "linear-gradient(120deg,#aacbff,#eebac2)",
        padding: 40,
      }}
    >
      <GlassSurface>Floating controls</GlassSurface>
    </div>
  ),
};
export const Dark: Story = {
  render: () => (
    <div
      data-theme="dark"
      style={{ padding: 24, background: "var(--uik-background)" }}
    >
      <Button>Continue</Button>
    </div>
  ),
};
