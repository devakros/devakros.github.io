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
- **⚠️ Six of the seven testimonials are invented.** Only Santiago Gallo's
  quote exists in Figma. The other six are filler written to make the carousel
  readable during review — and they are attached to photographs of real,
  identifiable people that came out of the Figma file. Shipping them as-is
  would be putting words in those people's mouths. Before launch each must be
  replaced with a quote that person actually gave, or deleted. Filter on
  `placeholder: true` in `src/data/testimonials.ts`.
- **Coca-Cola is built as real markup** (`/proyectos/coca-cola`). Polestar and
  LeanCore are still frame renders: each frame's own nav is cropped off (130px)
  so it doesn't duplicate the sticky one, but the frame's inert "Volver" still
  shows alongside the real one.
- **Text wraps ~3% narrower than Figma.** Same font (Outfit-Light), same 16px,
  zero letter-spacing — but the browser fits slightly more per line than
  Figma's text engine, so long copy columns run a little short (the Coca-Cola
  body column is 1735px vs 1789px). Do not "fix" this with letter-spacing;
  it would distort the type to chase an artifact of Figma's renderer.
- **Nav link hover** is a per-character roll, taken from marrow.au rather than
  from the Figma file, which has no hover states.

## Entry choreography

Per Victor: noise background only → the h1 types itself in → a ~1.2s beat →
everything else resolves out of a heavy blur. Once per session; client-side
navigations use the page transition instead.

**To see it again: `http://localhost:4321/?intro=1`.** It runs once per session,
and a hard refresh does *not* clear sessionStorage — only a new tab does. The
query flag forces it regardless of that or of prefers-reduced-motion.

Two things that are load-bearing and easy to break:

- **`is-intro` is set by an inline script in `<head>`, before first paint.** If
  it is added later (from a module script), the page paints sharp for a frame
  and then animates *into* the blur — backwards.
- **Spaces in the typed heading must stay plain text nodes.** Wrapping them in
  spans, or using a non-breaking space, stops the heading breaking at word
  boundaries and it blows out of its 405px column.
- The reveal listener is `astro:after-swap`, **not** `astro:page-load` — the
  latter also fires on the first load and would strip `is-intro` immediately.

The film grain (`.noise-overlay`) is ported from the Luxora landing
(`src/app/globals.css` there), at lower opacity and below the nav.

## prefers-reduced-motion

Worth knowing when reviewing: if the reviewer's OS has reduced motion on, it
changes a lot. Earlier builds paused the showreel and disabled slider autoplay
under that setting, which read as "the video doesn't play and the slider never
progresses". Now:

- the showreel autoplays regardless (muted, decorative; the button is the control)
- the slider still advances, with instant cuts instead of sliding
- the intro keeps its beats but drops typing, blur and movement — a plain
  opacity fade. Skipping it outright just made the page look inert.
- the grain holds still

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
