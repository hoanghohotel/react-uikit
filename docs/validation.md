# Validation evidence

The implementation remains a development preview. These are observed checks, not a release certification.

## Completed locally

- Frozen pnpm installation succeeds across 13 workspace projects.
- TypeScript checks packages, tests, Storybook, Vite consumers and Playwright configuration. Both Next.js applications use strict TypeScript and build successfully.
- ESLint passes using the supported ESLint 10 / typescript-eslint combination.
- 38 React/unit tests and 15 CLI tests pass. Covered contracts include native controls, controlled state, sorting, virtualization, calendar selection, overlays, focus, notifications, source installation and consumer-file protection.
- All 11 build tasks succeed: packages, documentation, Storybook, playground and React/Next.js examples. The Tailwind v4 playground emits semantic utilities.
- Seven package exports and declaration/client boundaries are verified. All seven tarballs were packed, inspected and installed in a separate npm consumer. React server rendering, ESM imports and TypeScript consumer compilation passed.
- CLI dependency installation was exercised in a separate React project with a real npm install of Radix Dialog.
- The browser suite contains 39 cases: 38 desktop/mobile documentation cases and one full-gallery sweep. The established 36 documentation cases passed; the two new localized-live-demo cases passed after scoping an ambiguous status locator. The expanded 166-story gallery passed after adding prop controls and Glass variants (44.5 seconds for the sweep).
- Chromium checks cover desktop/mobile layouts, hydration, keyboard navigation, modal focus, menus/popovers/sheets, theme contrast, forced-colors glass fallback, clipboard copy, localization, templates and axe scans.

## Environment and external checks

Playwright browser downloads from cdn.playwright.dev are currently blocked. Local browser validation uses `/usr/bin/chromium`; this is not Playwright's pinned browser. Firefox, WebKit and manual screen-reader review remain outstanding. A network draft adds the denied browser CDN and GitHub API domains; it is saved but not published or applied.

GitHub API access returns Forbidden, so remote Actions results have not been verified. Native Git push works. Chromatic CLI 18.13.6 was executed with the supplied token via process environment. Authentication could not reach https://index.chromatic.com/graphql (403); an independent token-free request failed at CONNECT with 403, establishing a proxy/network block before token validity could be determined. No upload or visual baseline was completed. The network draft now also includes index.chromatic.com. Project tokens are never stored in repository files.

Public npm lookups did not find the seven package names. This does not establish ownership of the npm scope or permission to publish. See npm-name-check.json and release.md.

Storybook emits a gallery chunk-size warning and Vite notes ignored client directives in its browser-only bundle. Published library interactive entries preserve client directives. No npm publication or manual site deployment was performed by this task. The remote vercel.json commit was preserved and merged; any external Vercel automation has not been inspected.
