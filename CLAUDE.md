# downtown-website

A digital home for Downtown, the Nanyuki venue hosting the town's
creative community across music, art, and events.

**Client:** Vin
**Started:** 2026-05-14
**Stack locked:** 2026-05-14

This file conditions Claude Code's behaviour on this project. The
global `~/.claude/CLAUDE.md` rules also apply on top of everything
here.

## Stack

- **Framework:** Astro 5 (TypeScript strict).
- **Styling:** Tailwind v4 via `@tailwindcss/vite`, CSS-first config
  in `src/styles/global.css`. Brand tokens live in `:root`, `.dark`,
  and the `@theme inline` block.
- **UI primitives:** shadcn New York. Config is in `components.json`;
  no components installed yet. Add via `npx shadcn@latest add <name>`
  or the shadcn MCP. Tokens map to brand colours, so any component
  added will pick up Bonfire as primary automatically.
- **Motion:** Motion (formerly Framer Motion). `MotionProvider` is
  set up at `src/components/motion/MotionProvider.tsx` but is unused
  so far. Reveals are CSS keyframes plus IntersectionObserver in
  Layout.astro; reach for Motion only when JS state genuinely earns
  its bundle (interactive hover state, layout animation, ticketing
  forms). For continuous decorations like the marquee, use CSS.
- **Fonts:** Big Shoulders Display 700+900, IBM Plex Sans 400+500+600,
  IBM Plex Mono 400+500. WOFF2 in `assets/fonts/` (Latin subset,
  OFL-licensed, committed deliberately). Served at `/fonts/` via
  symlink from `public/fonts/`.
- **Content:** the programme is an Astro content collection at
  `src/content/programme/`, one JSON file per night. Schema in
  `src/content.config.ts`. Filenames are ISO dates so they sort
  chronologically.

## File map

```
docs/
  DESIGN.md          Brand system, single source of truth
  STACK.md           Stack decision record
assets/
  logos/             JPG of original wordmark
  fonts/             WOFF2 + fonts.css (the canonical font location)
  references/        MOODBOARD, PHOTOGRAPHY_SOURCES, CUSTOM_ASSETS
src/
  components/        Header, Footer, Wordmark
  components/motion/ MotionProvider (LazyMotion wrapper)
  content/programme/ One JSON file per night
  content.config.ts  Content collection schema
  layouts/Layout.astro   HTML shell, meta, fonts, JSON-LD, scroll-reveal scripts
  pages/             index.astro, 404.astro, sitemap.xml.ts
  styles/global.css  Tailwind import, brand theme, scroll-reveal CSS, marquee CSS
  lib/utils.ts       shadcn cn() helper
public/
  fonts/             Symlink into ../assets/fonts/ (single source of truth)
  favicon.svg        Reduced wordmark
  robots.txt
```

## Common tasks

**Add a programme night.** Drop a JSON file in
`src/content/programme/` named `YYYY-MM-DD.json` with `date`,
`lineup`, `info`, and optionally `flagship`. Dev server hot-reloads.

**Change copy.** The voice library is locked in `docs/DESIGN.md`
section 8. Microcopy labels (Follow on Instagram, What's on, Find
us, Make it yours, Not on the bill) are also locked. Do not invent
new labels for existing buttons or states without updating
DESIGN.md first.

**Update a brand token.** Tokens are in `src/styles/global.css`,
under `:root`, `.dark`, and `@theme inline`. Brand colours: Ink,
Cream, Bonfire, Concrete, Smoke, Moonlight. Adding a second accent
is a brand violation (DESIGN.md section 3 rule 1).

**Add a shadcn component.** `npx shadcn@latest add button` (or any
component) drops the file into `src/components/ui/`. It will pick
up the brand tokens via the CSS variables. New York style is
already configured.

## Troubleshooting

**Content collection silently drops entries.** If a Zod schema in
`src/content.config.ts` is changed and the matching JSON files are
migrated one at a time, the dev server will throw schema-validation
errors during the windows where schema and JSON disagree. Even
after every JSON is fixed, the content cache at
`.astro/data-store.json` can hang onto the failed entries, so
`getCollection` returns a partial list with no error in the log on
subsequent requests. Symptom: a page renders only some of the
items it should, with no console error and a clean 200 response.
Fix: stop the dev server, `rm -rf .astro/`, restart with
`npm run dev`. Hit during the programme `lineup` schema migration
on 2026-05-14; worth doing schema changes and JSON migrations as
one atomic edit when possible.

## Engineering rules with brand implications

- **Bonfire as text on Ink only.** On Cream backgrounds, Bonfire
  is always a fill (`bg-bonfire` with `text-ink` inside), never a
  text colour. Bonfire text on Cream is 2.5:1 (fails WCAG AA at
  any size); Bonfire fill with Ink text is 8.2:1 (passes AAA).
  DESIGN.md section 3 rule 3.
- **No em dashes.** Anywhere. In code comments, in copy, in commit
  messages, in this file. Use commas, semicolons, parentheses, or
  two sentences. The `no-em-dashes` skill is loaded automatically.
- **The marquee is the brand's heartbeat.** A horizontal type
  strip scrolls continuously, pauses on hover, freezes for
  reduced motion. Pure CSS at `.animate-marquee` in `global.css`.
  Do not rebuild this in JS.
- **The wordmark is two stacked bars with rotational symmetry.**
  Never crop one bar; never substitute with text where the SVG
  fits. Current SVG at `src/components/Wordmark.astro` is a
  working approximation; the designer SVG is still an outstanding
  ask in `assets/references/CUSTOM_ASSETS.md`.
- **Polarity inversion is section-level, not user-toggled.** Apply
  the `.dark` class to any section that should flip from
  Cream-on-Ink (light) to Ink-on-Cream (dark). There is no light or
  dark user toggle.
- **The programme card is locked to Ink + Cream regardless of
  section polarity.** The card echoes the wordmark's two-bar
  structure and is a brand artifact, not a styled component. Do
  not let it follow section polarity.

## Local dev

```bash
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Pre-launch placeholders

These all use placeholder values; find-and-replace before going
live:

- `SITE_ORIGIN = "https://downtown.example"` appears in
  `src/layouts/Layout.astro` and `src/pages/sitemap.xml.ts`.
- The `Sitemap:` line in `public/robots.txt`.
- `https://instagram.com/` href in `src/pages/index.astro` (hero
  CTA) and `src/components/Footer.astro` (Find us).
- `hello@downtown.example` email in `src/components/Footer.astro`.
- Google Maps URL in `src/components/Footer.astro` (currently a
  search for "Downtown Nanyuki"; replace with the venue's place
  link once it is on Maps).
- The Bonfire colour `#FF6A1F`, if the venue's actual neon
  fixtures are radically different (DESIGN.md section 3 working
  assumption).
- The Sat 16 May programme date and lineup, every Saturday, by
  editing `src/content/programme/`.

## What still needs a designer

See `assets/references/CUSTOM_ASSETS.md` for the full list. The
three must-haves before public sharing are: the production SVG of
the existing wordmark, a real favicon set (the current SVG is
working but a designer should refine it), and a designed 1200x630
OG share image. The weekly flyer template and the motion-wordmark
follow once those land.
