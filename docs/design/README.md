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
- **Slider copy and thumbnails for slides 2-3 are placeholders.** The Polestar
  and LeanCore case-study frames exist, but neither has card copy or a card
  thumbnail in Figma. Descriptions read `PENDIENTE:` and the images are
  content-scored crops of each frame. Both need Victor.
- **The showreel is a generated placeholder** (`public/video/showreel-placeholder.mp4`
  — a slow push on the Figma poster frame). Real footage needed.
- **Testimonial copy for 6 of 7 people is a placeholder.** Only Santiago Gallo's
  quote exists in Figma; the frame shows seven avatars. The other six read
  `PENDIENTE` in `src/data/testimonials.ts`.
- **Case-study bodies are the Figma frame renders**, not built markup. Each
  frame's own nav is cropped off (130px) so it doesn't duplicate the sticky
  one, but the frame's inert "Volver" still shows alongside the real one. That
  goes away when each case study is built as HTML.
- **Nav link hover** is a per-character roll, taken from marrow.au rather than
  from the Figma file, which has no hover states.

## Motion references supplied by Victor

| Reference | For | Stack it uses |
|---|---|---|
| grainandmortar.com | dark/light transition | GSAP + Lenis + Lottie |
| marrow.au | top-menu hover | Framer Motion — **built**, per-character roll |
| harrygeorge.design | loading screen, page transitions | GSAP |
| ampli.net | loading screen, page transitions | GSAP + Lottie |
| juanmora.co/work.html | loading screen, page transitions | GSAP + Lenis |
| andreigorskikh.digital | local time | Framer Motion — **built**, no library needed |

All six are now built. Only one library was needed — **Lenis** for smooth
scroll. Page transitions use Astro's own `<ClientRouter />` (view transitions)
rather than GSAP/barba, and the preloader, theme flip, logo roll, nav hover,
slider and clock are CSS plus the Web Animations API.

### ClientRouter and component scripts

`<ClientRouter />` swaps the DOM without re-running module scripts, so every
interactive component binds on `astro:page-load` (which also fires on first
load) and guards against double-binding with a `data-ready` flag. If you add a
component with a `<script>`, follow that pattern or it will silently stop
working after the first client-side navigation.

## Assets

Raster assets in `public/img/` and vectors in `src/icons/` are exported from
the file, never redrawn. Two were wrong when reconstructed by eye and are
worth flagging: `progress-ring.svg` is two offset ~330° arcs, not concentric
circles; the quote marks are Icomoon glyph blobs, not typographic quotes.
