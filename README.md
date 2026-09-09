# Leveraged — Design System

Brand identity and UI foundation for Leveraged, an independent investment
advisory for pensions, endowments and insurers. Direction: deepened navy
& brass (Source Serif 4 + Work Sans), built from `Brand direction.png`
and `logo.png`.

## Contents

- `design-canvas/` — source `.dc.html` artboards + `canvas.json` for the
  [Claude Design canvas](https://claude.ai/code/artifact/289751d0-f63b-4473-a3ba-87fde1b78adc):
  cover, color system, type scale, logo usage, components (buttons,
  inputs, badges, nav, card, table, tabs), a marketing hero, and a
  portfolio dashboard screen. Open the link to view, export PNG/PDF, or
  edit visually — these files are the editable source, not meant to be
  opened directly as HTML.
- `tokens/tokens.json` — design tokens in W3C Design Tokens format
  (color, typography, spacing) — import into Figma via Tokens Studio,
  or feed into Style Dictionary.
- `tokens/tokens.css` — the same tokens as CSS custom properties, ready
  to drop into any web project.
- `tokens/tailwind.tokens.js` — the tokens as a Tailwind theme
  extension.

## Palette

| Token | Hex | Use |
|---|---|---|
| `navy-700` | `#1E2E4F` | Primary — text on light, surfaces on dark, nav |
| `navy-500` (slate) | `#3E5480` | Secondary — charts, links, supporting fills |
| `brass-500` | `#B38A53` | Accent — primary actions, one per view |
| `neutral-100` (bone) | `#EFEBE2` | Ground — default background |
| `neutral-900` (ink) | `#171310` | Text — near-black, never pure #000 |

Full ramps and semantic (success/warning/error) colors are in
`tokens/tokens.css` and on the Colors artboard of the canvas.

## Principles

1. **Considered, not flashy.** Sharp corners, hairline borders instead
   of shadows, restrained motion — institutional counsel, not consumer
   fintech.
2. **Serif carries the thesis, sans carries the work.** Source Serif 4
   is reserved for headlines and editorial moments. Work Sans runs
   everything operational — tables, labels, navigation, buttons,
   financial figures.
3. **Brass is a single accent, spent once per view.** It never becomes
   a second body color.
4. **Tabular numerals everywhere money lines up** —
   `font-variant-numeric: tabular-nums`.
