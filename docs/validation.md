# Validation record

Local checks completed:

- `pnpm typecheck`: package and test TypeScript passed.
- `pnpm lint`: passed.
- `pnpm test`: 12 React interaction tests and 12 CLI tests passed.
- `pnpm build`: builds library declarations, CLI syntax check, Next.js production site and Storybook gallery.
- `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium pnpm test:browser`: 18 tests passed against the production Next.js site, across desktop and emulated mobile viewports.

Browser checks cover hydrated form submission, modal focus containment and restoration, Escape dismissal, keyboard tab selection, light/dark WCAG A/AA axe scans, the open dialog axe scan, system theme switching, code-block focus and horizontal overflow. They found and verified fixes for nested dark-theme contrast and keyboard access to scrollable code.

The Playwright browser CDN is blocked by this environment's network policy. Local validation used the installed system Chromium. CI installs Playwright's pinned Chromium and runs the same suite. Remote GitHub Actions results have not been verified. Mobile viewport emulation is not an iOS Safari or WebKit test. Automated axe checks are not a complete accessibility audit; screen-reader review, remaining components and additional engines are pending.

CLI checks cover incremental installation, idempotence, dry runs, independent source output, modified file protection and symlink rejection. The installer does not merge edited CSS automatically.

Storybook still emits a gallery chunk-size warning. Dependency installation reports deprecation notices for ESLint 9 and jest-dom 6.10; modernization remains outstanding.

Chromatic is configured but has not run locally. Set `CHROMATIC_PROJECT_TOKEN` in GitHub Actions secrets before using visual review. No packages or website have been published.
