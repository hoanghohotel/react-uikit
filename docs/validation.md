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

The previous environment blocked the Playwright CDN. Local browser validation used `/usr/bin/chromium`, not Playwright's pinned browser. Browser downloads have not been retried in the newly published environment; Firefox, WebKit and manual screen-reader review remain outstanding.

After environment publication, Chromatic and GitHub API connections succeeded. GitHub Checks run [41065070964](https://github.com/hoanghohotel/react-uikit/actions/runs/41065070964) completed successfully.

Chromatic CLI 18.13.6 authenticated and completed build 1 for commit 0e27fd1: 74 components, 166 stories, 498 snapshots; exit code 0. The service automatically accepted the initial baseline. No automatic-change-approval flag was supplied, and manual visual review has not been performed. [Published Storybook](https://6ae474d201c5880f377c33a4-lvbzsdcqhe.chromatic.com/).

The earlier GitHub Visual review run [41065071080](https://github.com/hoanghohotel/react-uikit/actions/runs/41065071080) failed because CHROMATIC_PROJECT_TOKEN was missing from repository Actions secrets. Attempting to configure the encrypted repository secret was rejected by GitHub: HTTP 403 Resource not accessible by integration on the repository public-key endpoint. A repository administrator must add that secret through GitHub settings. The token has not been stored in repository files.

Public npm lookups did not find the seven package names. This does not establish ownership of the npm scope or permission to publish. See npm-name-check.json and release.md.

Storybook emits a gallery chunk-size warning and Vite notes ignored client directives in its browser-only bundle. Published library interactive entries preserve client directives. No npm publication or manual site deployment was performed by this task. The remote vercel.json commit was preserved and merged; any external Vercel automation has not been inspected.
