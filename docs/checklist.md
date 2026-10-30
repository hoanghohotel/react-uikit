# Implementation status

- [x] Initial workspace and package exports
- [x] Initial semantic themes and glass fallback
- [x] Button, TextField, Switch and Card
- [ ] Complete token taxonomy and Tailwind mappings
- [ ] Remaining component families and comprehensive tests
- [ ] Next.js documentation, localization and templates
- [ ] Storybook and Chromatic
- [ ] Source installation CLI
- [ ] Browser accessibility and release validation

## Continued implementation

- [x] Checkbox, TextArea, Select, Slider, ProgressBar and SearchField
- [x] Nine native-control interaction tests
- [x] Next.js documentation starter with shared component demos and theme preview
- [x] Production Next.js build and HTTP content smoke check
- [ ] Complete standalone stories for every public component and interaction state
- [ ] Full docs localization, search and API routes
- [x] Storybook 10.6.5 Vite gallery builds from shared source
- [x] Chromatic workflow configured (not executed; project token required in GitHub)
- [ ] Chromatic baseline captured and reviewed

## Source installation CLI

- [x] Real local CLI binary with three independent source templates
- [x] Dry run, React/Next detection and package manager detection
- [x] Existing path/symlink protection and installation tests
- [x] Incremental installation into existing generated directories
- [ ] Dependency installation for components needing additional packages
- [ ] CLI npm publication and name availability check

## Interactive primitives

- [x] Composable Radix Dialog with modal overlay, title, description and close control
- [x] Composable Radix Tabs with keyboard navigation and panel associations
- [x] Separate client entry, docs and Storybook examples
- [x] Chromium focus trapping and axe checks for the docs demos (desktop/mobile viewports)

## Browser validation

- [x] 18 Playwright checks against production docs
- [x] Nested dark-theme contrast and scrollable code keyboard access fixed
- [x] CI browser installation, test command and failure trace upload configured
- [ ] Firefox, WebKit and manual screen-reader validation
