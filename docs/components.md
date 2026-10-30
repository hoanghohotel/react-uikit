# Initial component API

Import components from `@react-uikit/core` and load `@react-uikit/tokens/theme.css` once. These packages currently require workspace installation; npm publication is pending.

| Component   | Required props | Native element                   | Behavior                                                                   |
| ----------- | -------------- | -------------------------------- | -------------------------------------------------------------------------- |
| Button      | none           | button                           | `variant`, `loading`; defaults to type button; loading disables activation |
| TextField   | label          | input                            | Native value/defaultValue, validation, form submission                     |
| TextArea    | label          | textarea                         | Native multiline editing                                                   |
| SearchField | label          | input type search                | Native search input                                                        |
| Checkbox    | label          | input type checkbox              | checked/defaultChecked, native form value                                  |
| Switch      | label          | input type checkbox, role switch | checked/defaultChecked                                                     |
| Select      | label          | select                           | Children are native option/optgroup elements                               |
| Slider      | label          | input type range                 | min/max/step and value/defaultValue                                        |
| ProgressBar | label          | progress                         | Omit value for indeterminate state                                         |
| Card        | none           | div                              | Noninteractive content container                                           |

Each forwards its element ref and accepts standard element attributes, className and style. Label text wraps each form control; keep labels meaningful. Use native `onChange` events for controlled state. ProgressBar's label becomes its accessible name.

```tsx
<Select label="Language" defaultValue="en">
  <option value="en">English</option>
  <option value="vi">Tiếng Việt</option>
</Select>
```

GlassSurface (`@react-uikit/glass`) accepts `material="subtle" | "regular" | "prominent"`, standard div props, and a forwarded ref. It is decorative, not a dialog. Its CSS includes opaque fallbacks; browser-level verification remains pending.

The documentation demo saves preferences only in component memory and does not imply backend persistence.

## Dialog and Tabs

Import interactive primitives from `@react-uikit/core/interactive` within a client component. This entry preserves `use client` in its distribution and delegates focus behavior to Radix.

```tsx
import {
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription,
  TabView, TabList, Tab, TabPanel,
} from '@react-uikit/core/interactive';

<Dialog>
  <DialogTrigger>Settings</DialogTrigger>
  <DialogContent closeLabel="Close settings">
    <DialogTitle>Settings</DialogTitle>
    <DialogDescription>Update your workspace preferences.</DialogDescription>
  </DialogContent>
</Dialog>

<TabView defaultValue="general">
  <TabList aria-label="Settings sections">
    <Tab value="general">General</Tab>
    <Tab value="advanced">Advanced</Tab>
  </TabList>
  <TabPanel value="general">General preferences</TabPanel>
  <TabPanel value="advanced">Advanced preferences</TabPanel>
</TabView>
```

Dialog supports `open`, `defaultOpen`, `onOpenChange`, and Radix Root props. DialogTrigger and DialogClose support `asChild`. Include a DialogTitle and DialogDescription; deliberately omit the description only by setting `aria-describedby={undefined}` on DialogContent. DialogContent forwards content props/ref and adds a localized `closeLabel` (default English). The default modal traps focus, closes on Escape, and restores focus to its trigger. Portals inherit the document theme; put the application theme on html/body if the whole app must share it.

TabView accepts `value`, `defaultValue`, `onValueChange`, `orientation`, `dir` and Radix Root props. Give TabList an accessible name. Each Tab and TabPanel needs a matching value. Tabs support disabled state and Radix automatic/manual activation. Arrow keys move focus; panels expose the corresponding labels.

Unit tests verify basic focus placement/restoration, Escape dismissal, controlled close intent, and arrow-key tab activation. Chromium desktop/mobile checks verify focus containment and restoration, keyboard tabs, and axe scans of the docs demos. Other browser engines and screen-reader review remain pending.
