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
| Proyectos seleccionados | `1127:6636` | — | Built (`/proyectos`) |
| ↳ its light-mode state | `1127:14284` | — | Built |

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

**The build goes further than the frame, at Victor's request (2026-08-07).**
Figma flips one surface. The build flips three, and they all change together:

| Band | Element | Was |
|---|---|---|
| 1 | `.approach` — statement + KPIs | permanently dark |
| 2 | `.logo-band` — the tool wall | already flipped, alone |
| 3 | `.light` — testimonials + footer | permanently light |

**The toggle belongs at the brand logos and nowhere else.** `.logo-band` carries
`[data-band-trigger]`; when its top crosses the switch line all three bands fade
in the same 400ms, so the whole screen changes at once. It reverses on the way
back up. The hero above band 1 stays dark always, and the case-study pages are
untouched.

Giving each band its own trigger is the obvious implementation and it is wrong —
it was built that way first and Victor rejected it. Measuring each band against
the line staggers one toggle into three separate events spread down the page.
Band 1 would change ~900px before the logos and band 3 ~230px after, so the
reader meets the change twice more in places nothing marks as a boundary.

Two mechanisms share one switch line at y=217 (`Nav.astro`):

- **`[data-band]` + `[data-band-trigger]`** — the three Home bands and the one
  element that decides for all of them. Position-only (top ≤ line), so the bands
  stay light once the wall has scrolled up and off; a straddle test would flip
  them back to dark while the wall is still on screen, which flashes black. A
  20px dead zone below the line stops a trackpad resting on the boundary from
  re-triggering the fade every frame.

  **y=217 is not always reachable**, and the script clamps for it. The line
  assumes the page can scroll far enough to bring the trigger up to it, which
  fails when the viewport is tall relative to the content BELOW the trigger: on
  Home at 1080×1900, scrolled to the very bottom, the trigger's top is still
  419, so the flip never fired and the light state — the entire point of the
  band — never appeared. When the line is out of reach the script uses the
  highest position the page can actually deliver, plus a lead-in. Where the real
  line is reachable this computes to exactly y=217 and nothing changes.
- **`[data-theme-light]`** — the case-study footers, permanently light. They
  only tell the nav to invert, so they keep the original `IntersectionObserver`
  whose `rootMargin` collapses the viewport to a zero-height line.

The nav is light when either says the surface under the line is light.

`/proyectos` (frame `1127:6636`) uses the same machinery for the flip its light
frame `1127:14284` shows: the project list is one `[data-band]` and
`[data-band-trigger]` sits on the **last card**, so the list turns light as you
reach the end. Its testimonials/footer band is permanently light, like the
case-study footers — it is already light in the dark-state frame.

One thing does NOT follow the tokens there: the tag pills stay `#2a3231` with
`#dbe976` text in both surfaces. Letting them use `var(--surface-2)` puts lime
on `#edefef` once the band flips, which is unreadable — and the light frame
keeps them dark anyway.

Two things are load-bearing and easy to undo:

- **The fade rides on a `::before` layer, never on the section.** Every band
  also carries `[data-intro-hide]`, which owns the element's own `transition`
  for the intro reveal — a second `transition` on the section is silently
  clobbered and the colour snaps.
- **A band's border box must equal its light surface**, because the trigger
  reads `getBoundingClientRect().top`. Space bands with padding, not margin.
  This is why `.approach` carries `margin-top: 46px; padding-top: 70px` rather
  than the original `margin-top: 116px`, and why `.logo-band` lost its
  `margin-top: 40px` to `.approach`'s `padding-bottom`.

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
- **Autoplay is belt-and-braces on purpose.** The `autoplay` attribute alone is
  not reliable — Chrome blocks it under battery saver, data saver, or a low
  media-engagement score on a fresh profile, and it fails silently to the
  poster. `Showreel.astro` also retries on `canplay`, on entering the viewport,
  and on the visitor's first interaction anywhere. Don't "simplify" that away.

  **`CaseStudy.astro` no longer has any media element** (2026-08-08). It briefly
  carried this same hardening, then the one clip on those pages became an
  animated WebP and the `<video>` branch and its script were removed outright —
  see the `shots` prop comment in `CaseStudy.astro` for why. Nothing on a case
  study needs autoplay any more; only `Showreel.astro` does.

  ⚠️ **The mechanism is not confirmed.** The failure does not reproduce in
  Playwright's Chromium, which launches with
  `--autoplay-policy=no-user-gesture-required`, so autoplay there can never be
  blocked and both paths always work. Patching `HTMLMediaElement.prototype.play`
  to reject every call showed the clip still playing, i.e. the browser's own
  autoplay started it — so "ClientRouter adopts the element and the autoplay
  attribute does not re-run" is NOT the explanation, despite looking like it in
  a swap log. Reproducing this needs a real browser profile with autoplay
  restrictions in force. The hardening is worth having regardless; do not treat
  the cause as settled.
- **The showreel is stand-in footage**, not Victor's real reel — he supplied it
  on 2026-08-08 as "we'll change it in the future but for now that works".
  `public/video/showreel-2026.mp4`, centre-cropped from a 1920x1080 source to
  the 946x1044 portrait the slot expects, 10s at 25fps, 943KB, poster is its
  own frame 0. He offered it as a 4.6MB animated WebP; the mp4 re-encode of the
  original is 5x smaller, since WebP handles real footage badly (4.4MB for the
  same framing at 640px/12fps). Replaced the earlier generated placeholder
  (`public/video/showreel-placeholder.mp4`
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

**Render the node, do not crop a screenshot.** Both asset sets that Victor
called out as looking bad on 2026-08-07 had the same cause — they were cropped
out of a downscaled paste of a frame rather than exported from it:

- `public/img/case/leancore-web/shot-*.webp` — re-rendered from nodes
  `1017:3299`, `1017:7203`, `1017:7201` and `1017:9177` at 3x, resampled to 2x
  of their display size, stored as WebP. The old PNGs were soft enough to turn
  the client logo row in `shot-2` into grey blobs. WebP holds 2x detail at the
  same weight the soft PNGs cost.
- `public/img/avatar-1..6.webp` — re-cropped from the original uploads behind
  the `personas` frame (`I996:5577;996:5191`), which range from 200px to 800px
  square. The old 96px files were cut out of the dark card, so each disc
  carried a dark crescent. **The Figma order is not the shipping order**: the
  file holds seven avatars and the site ships six, because `figma-4` is
  Santiago Gallo — the only testimonial that exists in Figma, and one Victor
  replaced. The mapping is 1←`figma-3`, 2←`figma-2`, 3←`figma-5`, 4←`figma-6`,
  5←`figma-1`, 6←`figma-7`. These are real, identifiable people with attributed
  quotes; verify a face against `src/data/testimonials.ts` before re-cutting.

### The LeanCore roadmap clip

It is now `roadmap-v3.webp`, an animated WebP rendered by a plain `<img>` —
there is no `<video>` on the case-study pages at all. `CaseStudy.astro`'s
`shots` prop comment records why at length; the short version is that the clip
played in every environment that could be tested and never for Victor, and an
`<img>` has none of the surfaces that could have been responsible.

Getting there took four passes, and each one fixed something real:

1. The source opened on 1.2s of blank grey and closed on 0.8s more, and carried
   ~66px black bars down both sides, which the light tile cannot hide.
2. Its poster showed the FINISHED card, so the page painted a complete card and
   then cut to an empty one the instant playback started.
3. It had almost no visible motion at the tile's real 322px — measured with a
   canvas diff, 0.06-2.4% of pixels changed per 0.7s, which is a still image to
   a human. Hence the 2.4x retime.
4. Every recut shipped under the SAME filename, so browsers that had cached the
   original kept serving it and none of the fixes reached him. The re-exported
   stills escaped only because `.png` -> `.webp` changed their URLs by accident.

**Rename the file whenever you replace it**, and judge "does it read as
playing" by pixels changed at display size — `currentTime` advancing proves
nothing. See the memory note `verify-video-plays-by-frames-not-currenttime`.

