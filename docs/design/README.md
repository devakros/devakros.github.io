# Design source & pixel-accuracy workflow

The site is built from Figma file `Portafolio 2024`
(`E8WlEJRIernyQ6J487Fimj`), **page `3.0` only**. Pages `Desktop` and `2.0` are
abandoned earlier iterations; `my b pointer` and `ui kit coca cola` are
unrelated client work. Do not source anything from them.

| Frame | Node | Size | Status |
|---|---|---|---|
| Home | `831:184` | 1280×3198 | Built |
| Coca cola | `898:2` | 1280×3523 | Reference exported, not built |
| Polestar | `964:996` | 1280×3977 | Not started |
| LeanCore Studio | `971:1009` | 1280×3709 | Not started |
| LeanCore sitio web | `1017:3244` | 1280×3709 | Not started |

## Tokens

Extracted from the frame, not eyeballed. See `src/styles/tokens.css`.

```
#181C1C #1D2222 #2A3231   dark surfaces      #FBFBFB  light band
#4A5856                   muted teal-grey    #F6F6F6  light surface
#B3D6D3                   pale mint (primary text on dark)
#DBE976                   lime accent
radii 5 / 10 / 100        type 12 16 18 20 25 35 55 60
container 962px inside a 1280px frame (159px gutters)
```

Type is **Outfit** (Google Fonts, SIL OFL) at weights 300/400/500/600,
self-hosted via `@fontsource-variable/outfit`. The family registers as
`"Outfit Variable"` — a bare `"Outfit"` silently falls back to system-ui and
every text block re-wraps, throwing off the entire vertical rhythm.

Two text nodes in the file are at 21.365px and 27.192px — type resized by
dragging rather than set on the scale. Normalized here to the ring the rest of
the file uses.

## The scroll theme flip

The Home frame is dark from y=0 to y=2036, then `Rectangle 3994` (`#FBFBFB`)
covers y=2036→3198. `menu light version` exists because the sticky nav crosses
that boundary — it is **not** a user-facing theme toggle, and all four case
study frames are dark.

Implementation: every colour is a CSS custom property; `.theme-light` on the
lower section redefines them. The nav inverts via an `IntersectionObserver`
whose `rootMargin` collapses the viewport to a zero-height line at y=67 (the
nav's vertical centre), so "the light section intersects that line" is exactly
"the nav is now over light".

## Verifying pixel accuracy

Reference exports live in `reference/` at 2x, pulled straight from the Figma
images endpoint. To re-verify after a change:

1. `npx astro build && npx astro preview --port 4321`
2. Screenshot at exactly 1280px wide, `deviceScaleFactor: 2`, full page.
3. Compare landmark `getBoundingClientRect()` values against the Figma
   coordinates in the table below.

Current state — every landmark matches on **both axes**:

| Landmark | x | y |
|---|---|---|
| nav | 159 | 34 |
| hero heading | 159 | 129 |
| video | 648 | 286 |
| project card | 159 | 393 |
| statement | 182 | 943 |
| KPI row | 159 | 1345 |
| light band | 0 | 2036 |
| testimonial card | 159 | 2246 |
| avatars | 297 | 2618 |
| footer contact | 159 | 3032 |

Total page height is 3200 vs Figma's 3198. The 2px is a single accumulated
offset from the KPI body copy: Figma reports the node as 120px tall while its
own `20.2px` line-height × 6 lines is 121.2. That is rounding in the design
file, not a layout error — do not "fix" it by shrinking line-height.

## Known deviations

- **Mobile is invented.** The Figma file contains no mobile frames; every
  breakpoint below 1000px is a judgement call and needs Victor's review.
- **Live clock.** The frame shows a static `9:45 PM`; the build renders real
  `America/Bogota` time and swaps a moon/sun glyph at 18:00/06:00.
- **Carousel, video and avatar switching are presentational only** — the
  markup and states exist, the behaviour does not.

## Assets

Raster assets in `public/img/` and vectors in `src/icons/` are exported from
the file, never redrawn. Two were wrong when reconstructed by eye and are
worth flagging: `progress-ring.svg` is two offset ~330° arcs, not concentric
circles; the quote marks are Icomoon glyph blobs, not typographic quotes.
