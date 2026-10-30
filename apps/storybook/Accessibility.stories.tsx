import React from "react";
import { Button, TextField, Switch } from "../../packages/core/src/index";
import { GlassSurface } from "../../packages/glass/src/index";
export default { title: "Accessibility/Preferences", tags: ["autodocs"] };
export const KeyboardOrder = {
  render: () => (
    <div>
      <TextField label="Name" />
      <Switch label="Notifications" />
      <Button>Continue</Button>
    </div>
  ),
};
export const OpaqueFallback = {
  render: () => (
    <GlassSurface opaque>Solid material for reduced transparency</GlassSurface>
  ),
};
export const RightToLeft = {
  render: () => (
    <div dir="rtl">
      <TextField label="الاسم" />
      <Switch label="الإشعارات" />
    </div>
  ),
};
