# Source-owned installation (initial CLI)

The CLI is implemented locally but not published to npm. Do not use `npx react-uikit` yet. From an existing React or Next.js project with a package.json:

```sh
node /workspace/react-uikit/packages/cli/src/index.mjs add button --dry-run
node /workspace/react-uikit/packages/cli/src/index.mjs add button
```

Supported components: `button`, `switch`, `glass-button`. Import the generated component from `./uikit/button`, and import `./uikit/theme.css` once in your application entry (Next.js root layout for App Router). These files require only the consumer's existing React dependency; they do not import the published UIKit packages.

The installer detects the declared package manager or common lockfiles and validates React presence. It adds new components to an existing regular `uikit` directory and reuses matching files. Repeating a completed installation is a no-op. Before writing, it checks all destination files and refuses modified source, modified shared CSS, directories at file paths, and symlinks. It never overwrites consumer edits.

```sh
node /workspace/react-uikit/packages/cli/src/index.mjs add button
node /workspace/react-uikit/packages/cli/src/index.mjs add switch --dry-run
node /workspace/react-uikit/packages/cli/src/index.mjs add switch
```

If shared CSS has changed, the installer stops before creating the new component. Merge source manually in that case; automatic merging and forced overwrite are intentionally not supported.

The source-owned components are a smaller API than the package-based components: Button and GlassButton support native button attributes, and Switch adds a required label. React refs are forwarded. No claim of package/source API parity is made.

No dependency installation is needed for these three templates. Dependency installation for future Radix-based templates remains unimplemented.

## Components with dependencies

`add dialog` installs `@radix-ui/react-dialog` using the detected npm, pnpm, Yarn or Bun command before writing source. A dry-run prints the command without running it. If that dependency is already declared, its version is preserved. Installation failure leaves component source unwritten; the package manager may still have modified its own metadata, so inspect its output before retrying.

The Dialog template exports Root, Trigger, Content, Title, Description and Close. It uses Radix directly, not `@react-uikit/core`. Always supply a title, description and explicit close control. Dependency installation was exercised in a temporary React consumer using npm.

Supported names now include `dialog` in addition to the three dependency-free templates. Existing modified CSS still blocks an incremental add before any package-manager command runs. For an existing dependency declaration, compatibility is the consumer's responsibility; the installer does not silently upgrade it.
