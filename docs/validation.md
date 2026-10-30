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
- The original Chromium suite contains 39 cases: 38 desktop/mobile documentation cases and one full-gallery sweep. The established 36 documentation cases passed; the two new localized-live-demo cases passed after scoping an ambiguous status locator. The expanded 166-story gallery passed after adding prop controls and Glass variants (44.5 seconds for the sweep).
- Chromium checks cover desktop/mobile layouts, hydration, keyboard navigation, modal focus, menus/popovers/sheets, theme contrast, forced-colors glass fallback, clipboard copy, localization, templates and axe scans.

## Environment and external checks

The newly published environment permits browser downloads. Playwright Firefox and WebKit were downloaded successfully. Local setup lacked root access and several libraries; the reproducible `scripts/setup-browser-libs.py` helper downloads signed Debian 13 packages into the workspace, validates loading, and creates a WebKit launcher with an explicit library path. Vendor browser artifacts are unchanged. Firefox and WebKit each passed all 19 documentation cases with no skips. The full suite passed all 77 cases locally in 42.7 seconds across Chromium desktop/mobile, Firefox, WebKit and the Chromium gallery sweep. Manual screen-reader review remains outstanding.

GitHub Visual review run [41067824854](https://github.com/hoanghohotel/react-uikit/actions/runs/41067824854) succeeded after the job was bound to the user's GitHub Environment named CHROMATIC_PROJECT_TOKEN. The earlier missing-secret error was a scope mismatch; the environment-scoped secret is now available to the job. Secret values are not stored in repository files.

Chromatic build 2 passed in GitHub Actions: 74 components, 166 stories, 498 snapshots. Build 1 was the service-created initial baseline; no automatic-change-approval flag was supplied, and manual visual review has not been performed. [Published Storybook](https://6ae474d201c5880f377c33a4-lvbzsdcqhe.chromatic.com/).

GitHub [Checks run 41068783366](https://github.com/hoanghohotel/react-uikit/actions/runs/41068783366) passed for implementation commit cab43d5, including the complete three-engine browser suite. [Visual review run 41068783511](https://github.com/hoanghohotel/react-uikit/actions/runs/41068783511) also passed for that commit.

Public npm lookups did not find the seven package names. This does not establish ownership of the npm scope or permission to publish. See npm-name-check.json and release.md.

Storybook emits a gallery chunk-size warning and Vite notes ignored client directives in its browser-only bundle. Published library interactive entries preserve client directives. No npm publication or manual site deployment was performed by this task. The remote vercel.json commit was preserved and merged; any external Vercel automation has not been inspected.
