# Leveraged Design System

Brand identity and UI foundation for Leveraged, an independent investment
advisory for pensions, endowments, and insurers. Direction: **1a — Deepened
navy & brass** (Source Serif 4 + Work Sans).

## Contents

- `tokens/tokens.json` — design tokens as data (color, type, space, radius).
- `tokens/tokens.css` — the same tokens as CSS custom properties.
- `tokens/components.css` — reference component styles built on the tokens
  (buttons, cards, nav, tags, fields). Treat these as implementation
  references to port into your framework, not a drop-in stylesheet.
- `docs/style-guide.html` — the full visual style guide: palette, type
  scale, logo usage, spacing, components, and applied layout examples.
  Open it directly in a browser.

## Principles

1. **Considered, not flashy.** Sharp corners, hairline borders instead of
   shadows, restrained motion. The system reads as institutional counsel,
   not a consumer fintech app.
2. **Serif carries the thesis, sans carries the work.** Source Serif 4 is
   reserved for headlines and editorial moments. Work Sans runs everything
   operational — tables, labels, navigation, buttons, financial figures.
3. **Brass is a single accent, spent once per view.** It marks the primary
   action or the one number that matters. It never becomes a second body
   color.
4. **Tabular numerals everywhere money lines up.** Apply
   `font-variant-numeric: tabular-nums` (see `.ls-figure` in
   `components.css`) to any column of financial data.
5. **The wordmark sits between two rules, not one.** `LEVERAGED` is
   centered between an equal hairline rule above and below it, in a
   filled navy field — see `.ls-mark` / `.ls-icon-mark` in
   `components.css` and Chapter 03 of the style guide.

## Using the tokens

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/tokens/components.css">
```

Or consume `tokens.json` directly if your build pipeline generates
platform-specific tokens (iOS/Android/Tailwind config) from a single
source.

## Color quick reference

| Token | Hex | Use |
|---|---|---|
| `--color-navy-900` | `#1E2E4F` | Primary brand color, logo, dark surfaces |
| `--color-navy-600` | `#3E5480` | Secondary navy, supporting UI |
| `--color-brass-600` | `#B8874B` | Accent — primary CTA, emphasis |
| `--color-bone-500` | `#EDE8DE` | Primary background |
| `--color-ink-900` | `#15151A` | Primary text |

Full palette, tints, and semantic colors are documented in
`docs/style-guide.html`.
