# Source-owned installation (initial CLI)

The CLI is implemented locally but not published to npm. Do not use `npx react-uikit` yet. From an existing React or Next.js project with a package.json:

```sh
node /workspace/react-uikit/packages/cli/src/index.mjs add button --dry-run
node /workspace/react-uikit/packages/cli/src/index.mjs add button
```

Supported components: `button`, `switch`, `glass-button`. Import the generated component from `./uikit/button`, and import `./uikit/theme.css` once in your application entry (Next.js root layout for App Router). These files require only the consumer's existing React dependency; they do not import the published UIKit packages.

The installer detects the declared package manager or common lockfiles, validates React presence, and refuses existing `uikit` paths including symlinks. The first version intentionally supports one installation into a fresh `uikit` folder. To combine components, generate in separate temporary consumer projects and merge deliberately. Automated merging and overwrite confirmation are pending.

The source-owned components are a smaller API than the package-based components: Button and GlassButton support native button attributes, and Switch adds a required label. React refs are forwarded. No claim of package/source API parity is made.

No dependency installation is needed for these three templates. Dependency installation for future Radix-based templates remains unimplemented.
