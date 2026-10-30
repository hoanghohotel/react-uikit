# Architecture decisions

- Independent ESM packages with declaration files; React is a peer dependency. No Next.js runtime in core.
- Native semantics for initial controls. Glass is progressive CSS enhancement with an opaque fallback.
- System fonts only; independent project with no Apple affiliation.
- Official Tailwind and Radix documentation requests returned HTTP 403 in this environment. Do not claim documentation compatibility review complete.

- Form controls use actual input, select, textarea and progress elements, preserving browser keyboard and submission behavior. Composite interactions will require separate focus-management implementations.
- Next.js docs import built workspace packages. Storybook imports source modules to prevent duplicated implementations.
- The hooks package preserves its client directive in published output; presentation and native-control modules do not use React hooks.
- Documentation is currently a single English page. Localization, search, detailed routes, and browser accessibility coverage remain unfinished.

- Complex Dialog and Tabs behavior uses Radix primitives. The `@react-uikit/core/interactive` entry is separately built with a client directive, avoiding a client boundary on native-only exports.
- CLI templates are independent source files rather than wrappers around the package API. The initial installer refuses existing target directories and requires no dependencies beyond React. Incremental merging is explicitly unsupported in this version.

- Theme token declarations are repeated at `[data-theme]` boundaries so inherited custom properties containing `light-dark()` are resolved against the local color scheme. Browser axe checks found and now guard the nested-dark contrast regression.
- Browser checks run against the production Next.js build on port 3100. The local environment uses its installed Chromium via `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`; CI installs Playwright's pinned Chromium. Mobile checks emulate an iPhone viewport in Chromium, not Safari/WebKit.
- CLI preflights all requested destination files before writing. Matching files are reused, modifications and symlinks are rejected, and new components can be added incrementally. Files created during a failed write are rolled back.

- Phase 2–5 expansion adds native semantic foundations, explicit data primitives, Radix composites and advanced controls with documented limits rather than one generic card wrapper.
- Core and Glass distribute separate server-safe/native and client-interactive entry points. Optional Motion behavior is confined to the Glass interactive entry; basic materials remain CSS-only.
- The CLI now installs Radix directly for source-owned dialogs using the consumer's package manager. A real temporary npm consumer verified this path.
- Documentation includes static English/Vietnamese content routes, translated live component previews, API interfaces generated from TypeScript source, and separately rendered responsive preview widths.
- Shared TypeScript and ESLint configurations live in tooling. React/Vite and Next.js consumers build from workspace package exports; the Tailwind v4 playground verifies theme integration.
- Storybook includes individual component and Glass stories, templates, accessibility examples, theme toolbar, deterministic animation capture and responsive Chromatic viewports. A browser sweep loads every story to detect runtime failures.
