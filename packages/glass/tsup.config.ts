import { defineConfig } from "tsup";
export default defineConfig([
  { entry: ["src/index.tsx"], format: ["esm"], dts: true, external: ["react"] },
  {
    entry: ["src/interactive.tsx"],
    format: ["esm"],
    dts: true,
    external: [
      "react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-popover",
      "@radix-ui/react-toggle-group",
    ],
    banner: { js: '"use client";' },
  },
]);
