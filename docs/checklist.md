# Implementation checklist

## Phase 1 — Workspace and foundations

- [x] pnpm/Turborepo workspace, strict TypeScript, shared ESLint/TypeScript tooling
- [x] Seven reusable packages, ESM exports, declaration files and MIT licensing
- [x] Semantic colors, typography, layout, shape, motion and glass tokens
- [x] Light/dark/system appearance, nested theme boundaries and Tailwind v4 integration
- [x] Changesets, CI and package artifact validation

## Phase 2 — Core controls

- [x] Foundation, form controls, stepper, segmented control, native pickers
- [x] Native refs and attributes; controlled/uncontrolled APIs where applicable
- [x] Unit/interaction coverage and component API documentation

## Phase 3 — Glass

- [x] Surface, button, toolbar, navigation, tab bar, sidebar, sheet, popover, segmented control
- [x] Basic/enhanced materials, bounded pointer highlight and Motion return transition
- [x] Explicit opaque, reduced-motion, reduced-transparency and high-contrast CSS behavior
- [x] Playground, Storybook examples and Chromium fallback checks
- [ ] Cross-engine unsupported-blur and reduced-transparency verification

## Phase 4 — Navigation, presentation and data

- [x] Navigation, tabs, sidebar groups, toolbars, breadcrumbs, split view and pagination
- [x] Dialog, alert/action sheet, bottom sheet, popover, tooltip, toast, context/menu primitives
- [x] Lists, tables, sortable data table, collections, avatars, skeleton and empty state
- [x] Calendar, command palette, fixed-row virtual list, refresh and native suggestions
- [x] Keyboard/focus tests for representative composite workflows

## Phase 5 — Documentation, source CLI and examples

- [x] Next.js documentation with 24 English/Vietnamese content routes
- [x] Searchable navigation, copy code, theme preview and generated API tables
- [x] Settings, productivity and administration templates with local interactions
- [x] React/Vite and Next.js consumer examples; Tailwind playground
- [x] Incremental source installation, dry-run and edited-file/symlink protection
- [x] Dialog dependency installation; real temporary React consumer installation
- [x] Storybook categories, individual examples, responsive Chromatic configuration
- [x] English/Vietnamese content and live documentation component demos
- [x] English/Vietnamese application templates, accessible labels and interaction feedback
- [ ] Exhaustive state coverage for every composable subcomponent

## Phase 6 — Validation and release preparation

- [x] Local typecheck, lint, unit/CLI tests and monorepo production builds
- [x] Chromium desktop/mobile interaction and axe checks
- [x] Package export/declaration/client-boundary checks and release instructions
- [x] Final 166-story browser sweep completed after latest gallery additions
- [x] Firefox and WebKit: 20 documentation checks each pass
- [ ] Manual screen-reader review
- [x] GitHub Checks workflow verified successful
- [x] Automated Visual review succeeds using the configured GitHub Environment secret
- [x] Chromatic build 1 captured 498 snapshots across 166 stories
- [ ] Manual visual review of the service-created initial baseline
- [ ] npm scope ownership and release publication approved

The project remains a development preview. A populated checklist is not a release certification; see validation.md for executed commands, counts and limitations.
