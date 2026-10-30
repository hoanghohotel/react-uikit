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
