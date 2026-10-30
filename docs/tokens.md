# Tokens and Tailwind v4

Import `@react-uikit/tokens/theme.css` once. Appearance is controlled with `data-theme="light"`, `"dark"`, or `"system"`. Token declarations repeat at theme boundaries so nested themes resolve correctly.

Semantic colors cover background, foreground, surface, primary, secondary, tertiary, accent, destructive, success, warning, border and separator. Typography exposes large-title, title-1/2/3, headline, body, callout, subheadline, footnote and caption-1/2. Layout includes spacing, container width and top/bottom safe areas. Shape, elevation, overlay layering, duration and easing are CSS variables.

```css
@import "tailwindcss";
@import "@react-uikit/tokens/theme.css";
@import "@react-uikit/tokens/tailwind.css";
```

The playground compiles this integration using the Tailwind v4 Vite plugin. Semantic utility mappings include bg-background, text-foreground, bg-primary, border-border, rounded-uikit and the typography scale. Components also ship their own CSS classes and can be consumed without Tailwind.

Glass custom properties include `--uik-glass-blur`, `--uik-glass-opacity`, `--uik-glass-saturation`, `--uik-light-x`, and `--uik-light-y`. Prefer material presets over uncontrolled blur on large surfaces.
