# Component contracts and current limits

All public prop interfaces are generated into the documentation API table by `pnpm docs:api`. Storybook imports workspace source and groups examples by purpose. Native-only exports are available from `@react-uikit/core`; stateful Radix/React exports use `@react-uikit/core/interactive`.

## Foundations, controls and navigation

Heading renders a real heading at the requested level; Text/Typography render paragraphs. Stack and Inline use flex layout, and GridView/CollectionView use responsive CSS grids. Divider is a native separator. Avatar requires alt text and does not fetch proprietary imagery. Skeleton is decorative; announce loading using ProgressIndicator instead.

Native inputs preserve standard form attributes, refs, disabled state and value/defaultValue semantics. RadioGroup and SegmentedControl delegate roving focus and controlled state to Radix. Stepper clamps to min/max, uses a positive step, and reports value changes. ToggleButton respects canceled click events. Pagination is controlled and expects a page between 1 and pageCount.

TabBar is navigation with links and aria-current. TabView is an interactive in-page tab interface. Toolbar delegates arrow-key focus movement to Radix; provide an accessible label and meaningful button actions. Breadcrumbs marks only the last item as the current page.

## Overlays

Dialog, Sheet, BottomSheet, ActionSheet, Popover, Tooltip, Menu/DropdownMenu, ContextMenu and Toast use Radix primitives. Providers, titles, descriptions, triggers, actions and close controls are composable exports. Use the matching title/description with each dialog family. ActionSheet is an alert dialog and focuses Cancel first. Sheets need an explicit SheetClose child; they do not invent a close label. TooltipProvider wraps tooltip instances. ToastProvider and ToastViewport wrap notification instances; ToastAction requires Radix's altText.

Portals inherit the document theme, not a nested preview theme. Set the global theme on html/body when overlays must follow it. Overlay and menu content classes use token-driven surfaces and bounded overflow.

## Advanced components

- DataTable supports client-side sorting of supplied rows. Each sortable column defines a string/number sortValue. It does not claim server pagination, row selection or a full spreadsheet grid.
- Calendar renders a localized month table with date buttons, arrow-key day movement, min/max selection limits and controlled/uncontrolled selection. Values are ISO dates without time zones. Native DatePicker/TimePicker use browser controls.
- SearchSuggestions uses native datalist. Browser popup rendering and announcement vary by browser; it is not a custom ARIA combobox.
- CommandPalette is a searchable modal with native command buttons; Tab navigates filtered actions. It does not install global shortcuts or claim listbox arrow-key behavior.
- VirtualList requires fixed positive height and itemHeight. It renders a bounded visible range with positional list metadata; variable-height rows and preserving focus in unmounted rows are not supported. Prefer a nonvirtual CollectionView for small collections or complex editable rows.
- PullToRefresh has an always-available button and an 80px downward touch gesture when its own scroll container is at the top. Async failures are announced and can be retried. No global touch handlers or scroll blocking are installed.

## Glass

Basic Glass uses CSS backdrop-filter only when supported. Enhanced material adds a bounded highlight; InteractiveGlassSurface updates CSS pointer coordinates without React state per frame and disables pointer motion under reduced-motion preference. Touch input does not activate the pointer effect. Explicit opaque mode and reduced-transparency/high-contrast preferences remove blur.

GlassToolbar, GlassSheet, GlassPopover and GlassSegmentedControl preserve accessible Radix behavior. GlassTabBar is link navigation. Avoid large, scrolling blurred content regions. Browser tests verify an explicit opaque fallback; unsupported-browser and all preference combinations still need cross-engine review.

## Release status

This is a development preview. Automated Chromium checks cover representative workflows; they do not constitute full screen-reader or WCAG certification. Full state coverage for every exported subcomponent, cross-engine validation and reviewed Chromatic baselines remain release work.
