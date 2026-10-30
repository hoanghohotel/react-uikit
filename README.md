# React UIKit

Independent React + TypeScript design system inspired by platform interface principles. Not affiliated with Apple. MIT licensed; no proprietary fonts, icons or application assets are included.

This is a development preview. Packages and the documentation site have not been published.

## Develop

Use Node 24 and pnpm 11.25.0 in the existing checkout; no additional worktree is needed.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm typecheck
pnpm lint
pnpm test
pnpm check:packages
```

Build first so consumers can resolve workspace package declarations. `pnpm build` includes packages, Next.js documentation, Storybook, the Tailwind playground, and both consumer examples.

```sh
pnpm --filter @react-uikit/docs dev
pnpm --filter @react-uikit/storybook dev
pnpm --filter @react-uikit/playground dev
pnpm --filter @react-uikit/example-react dev
pnpm --filter @react-uikit/example-next dev
```

Processes must be restarted in new environments. Documentation includes English/Vietnamese sections, searchable navigation, copyable code, live previews, API tables, an interaction laboratory and three templates. Example data is local state and resets on reload.

## Packages

| Package                          | Purpose                                                         |
| -------------------------------- | --------------------------------------------------------------- |
| `@react-uikit/core`              | Native foundations, controls, navigation and data display       |
| `@react-uikit/core/interactive`  | Radix overlays, tabs, advanced controls and stateful APIs       |
| `@react-uikit/glass`             | Basic/enhanced CSS materials and semantic glass surfaces        |
| `@react-uikit/glass/interactive` | Accessible composite glass and bounded pointer effects          |
| `@react-uikit/tokens`            | Semantic CSS tokens and Tailwind v4 mappings                    |
| `@react-uikit/hooks`             | Controlled/uncontrolled state utility                           |
| `@react-uikit/icons`             | Original SVG icon primitives                                    |
| `@react-uikit/utils`             | Conditional class composition and Tailwind conflict merging     |
| `@react-uikit/cli`               | Independent source templates with safe incremental installation |

```tsx
import "@react-uikit/tokens/theme.css";
import { Button, TextField } from "@react-uikit/core";
```

Import client composites from the `/interactive` entry. Both package and source-owned workflows are documented; do not run an unscoped `npx react-uikit` command before publication and ownership verification.

## Validation

```sh
pnpm exec playwright install --with-deps chromium firefox webkit
pnpm test:browser
```

The browser suite launches production docs on port 3100 and a static Storybook server on port 6006, then stops both. In this cloud environment the Playwright CDN is blocked; the validated fallback is:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium pnpm test:browser
```

It checks desktop/mobile Chromium, Firefox and WebKit interactions, axe scans, localization and templates; the gallery sweep uses Chromium. Mobile emulation and Linux WebKit are not physical iOS Safari tests. No full accessibility certification is claimed.

See [validation evidence](docs/validation.md), [component contracts](docs/component-contracts.md), [source CLI](docs/cli.md), [tokens](docs/tokens.md), [implementation checklist](docs/checklist.md) and [release preparation](docs/release.md). Regenerate the API tables with `pnpm docs:api`.

For a Debian 13 cloud machine without root access, install Firefox/WebKit with Playwright, then run `python scripts/setup-browser-libs.py`. The helper downloads signature-verified Debian packages into `/workspace/browser-libs`, validates the libraries, and creates a WebKit launcher without altering browser artifacts. Run the suite with:

```sh
LD_LIBRARY_PATH=/workspace/browser-libs/root/usr/lib/x86_64-linux-gnu \
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium \
PLAYWRIGHT_WEBKIT_EXECUTABLE_PATH=/workspace/browser-libs/webkit.sh \
pnpm test:browser
```
