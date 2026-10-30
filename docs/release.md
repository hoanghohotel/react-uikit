# Release preparation

No automatic npm publication is configured. Publishing packages requires explicit release approval.

1. Run `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, and the Playwright suite. Review supported-browser and accessibility limitations in validation.md.
2. Regenerate public prop documentation with `node scripts/generate-api.mjs`; review the result.
3. Run `pnpm changeset`, choose affected packages and describe consumer-facing changes. The initial version is a development preview, not a stable release.
4. Verify npm scope ownership and availability for all `@react-uikit/*` names. Package names live in package.json files and workspace imports; rename consistently if the scope is unavailable. The CLI binary is `react-uikit`, while the package is `@react-uikit/cli`; after approved publication invoke `pnpm dlx @react-uikit/cli add button`, not an unrelated unscoped package.
5. Run `pnpm exec changeset version` only on a release branch after review. Check every packed tarball for ESM exports, declaration files, client boundaries and CSS assets. Core must not import Next.js runtime modules.
6. Capture and review Chromatic baselines with the configured project token. Never auto-accept visual changes. Review GitHub checks and release notes.
7. Obtain explicit approval before publishing to npm or deploying the documentation site.

Changesets currently uses the repository's initial `feat/react-uikit` branch as the comparison base because the remote has no main branch. Switch baseBranch to main when a reviewed main branch is established.
