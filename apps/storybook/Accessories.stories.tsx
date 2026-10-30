import React from "react";
import {
  IconButton,
  Icon,
  ProgressIndicator,
  Typography,
  TabBar,
} from "../../packages/core/src/index";
export default { title: "Foundations/Accessories", tags: ["autodocs"] };
export const NamedIcon = {
  render: () => (
    <Icon label="Next">
      <path d="m9 5 7 7-7 7" />
    </Icon>
  ),
};
export const IconAction = {
  render: () => (
    <IconButton label="Next">
      <Icon>
        <path d="m9 5 7 7-7 7" />
      </Icon>
    </IconButton>
  ),
};
export const Loading = {
  render: () => <ProgressIndicator label="Loading records" />,
};
export const TypographyScale = {
  render: () => (
    <>
      <Typography size="body">Body</Typography>
      <Typography size="caption">Caption</Typography>
    </>
  ),
};
export const Navigation = {
  render: () => (
    <TabBar
      label="Main"
      currentHref="#home"
      items={[
        { label: "Home", href: "#home" },
        { label: "Library", href: "#library" },
      ]}
    />
  ),
};
