# React UIKit

Independent React design system under development; not affiliated with Apple. Not release-ready.

Use Node 24 and pnpm 11. Run `pnpm install`, `pnpm build`, `pnpm typecheck`, `pnpm test`, and `pnpm lint`. Import styles from `@react-uikit/tokens/theme.css`.

Initial exports: Button, TextField, Switch, Card, GlassSurface, ChevronRight, useControllableState, cn. See docs/checklist.md for remaining scope. No packages have been published.

## Local applications

After `pnpm install --frozen-lockfile` and `pnpm build`, run `pnpm --filter @react-uikit/docs dev` for the Next.js documentation, or `pnpm --filter @react-uikit/storybook dev` for the component gallery. Production docs run with `pnpm --filter @react-uikit/docs start`. Processes must be restarted in new environments. Use the existing checkout; no additional Git worktree is needed.

See [component contracts](docs/components.md) and [implementation status](docs/checklist.md). Current demos use local React state only.
