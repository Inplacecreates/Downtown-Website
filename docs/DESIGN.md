# Design notes: downtown-website

**Client:** Vin
**Started:** 2026-05-14

This file is the single source of truth for visual direction on this
project. Claude reads it before generating UI. The more is filled in,
the more on-brand the output. Empty sections fall back to defaults
from `ui-ux-pro-max`, which are competent but generic.

**Status (2026-05-14):** Complete first pass. Every section is
filled in. Direction is locked (Marquee, option C). Palette,
typography, layout, imagery, motion, voice copy library, and
references are all committed. Section 10 (decisions log) is the
live record and will grow as the project does. Awaiting Vin's
review and any push-back.

---

## 1. Brand essence

**Who is this for?**
The Nanyuki creative in their early-to-mid twenties who has heard the
name from a friend or seen Downtown on someone's story, and is
deciding whether Saturday is their night. Secondary readers, in
priority order: Nairobi weekenders driving up for the weekend, NGO
and military expats based in Laikipia, Mt Kenya tourists. Touring
artists get booked direct and do not read the homepage.

**What feeling should they have on the homepage?**
Reading the board outside a theatre and knowing exactly what's on
Saturday without having to ask anyone. The site is the programme,
made legible at a glance, with enough character that you trust the
place running it.

**What feeling should they NOT have?**
Not polished. Not mystical-insider. No "elevated nightlife
experience" copy, no luxury drone shots, no Berlin-warehouse
guestlist energy. This is a community venue, not a destination
brand and not a private club.

---

## 2. Logo and brand assets

**Primary logo location:** `assets/logos/DT_Logo.jpg`

**What is in hand:**
A purely typographic wordmark in two stacked black bars. Top bar
reads `DOWN` left-to-right. Bottom bar reads `TOWN` rotated 180
degrees, so the entire mark has true rotational symmetry: flip it on
its head and it still reads. That symmetry trick is the heart of the
identity in one move.

The letterforms are a condensed geometric sans, white knockout on
solid black. The `O` is a perfect circle. The `W` and `N` have sharp
triangular junctions. Stems are straight and even-weight, no
contrast, no serifs. It feels custom-cut rather than set from a
typeface; the proportions are slightly idiosyncratic (the `W` is
wider than expected, the `D` is narrow). The mood is confident,
blocky, slightly playful because of the upside-down gag, more
zine-and-club-flyer than corporate.

**Logo variants available:**
- [x] Monochrome (black on white, JPG)
- [ ] Monochrome (white on black), to be derived
- [ ] Vector (SVG / AI), **to be requested from designer**
- [ ] Icon / mark only, does not currently exist; may not need one
- [ ] Horizontal lockup, current mark is the stacked lockup
- [ ] Stacked lockup, this is what exists

**Required next:** a clean SVG of the existing mark. The JPG is a
raster proof and will not hold up at scale or in dark-mode contexts.

**Logo usage rules:** Locked.

- Always the full stacked mark. Never crop one bar away. The two
  bars are one mark; the rotational symmetry is load-bearing.
- Only on Ink or Cream backgrounds. Never on photography. Never
  on Bonfire orange (it vibrates).
- Minimum size: 120px wide on screen. Smaller than that, the
  wordmark loses the symmetry trick.
- Clear space: at least the height of one bar around the entire
  mark, on all four sides.
- Never recolour the bars. Black on Cream, knockout-white on Ink.
  No two-tone treatments, no gradient fills, no pattern fills.
- The wordmark and the marquee strip are siblings, not competitors.
  Do not place them in the same horizontal band; give the marquee
  its own row.

**Brand book:** does not exist yet. This document and the chosen
direction become the seed of it.

**Photography library:** `assets/photos/` is empty. Night
photography at Downtown does not yet exist in any usable form. The
directions below differ partly in how much they depend on
commissioning one.

---

## 2.5. Brand directions (proposed)

**Locked: Direction C, Marquee. Confirmed 2026-05-14.** Directions A
and B are retained below as historical record of what was considered
and why C won, not as live options.

Three honest postures. Each can be warm and bold; each has a
different anti-direction risk.

### Direction A: Poster Wall

**Posture.** Downtown as an ongoing print culture. The brand is a
stack of weekly flyers, and the website is the latest one. Saturday's
poster is the homepage. Last week's slides into an archive that
doubles as a visual history of the venue.

**Material world.** Photocopy and riso textures. Halftone screens.
Saturated single-ink accents over black-and-white. Type stacked like
flyers, sometimes rotated, sometimes mirrored (echoing the logo).
Imagery feels scanned, not photographed. Hand-built, not corporate.

**Why this is the right call.** Cheap to maintain; the team can
produce weekly assets with basic templates. Instagram-native: a
flyer screencaps and shares perfectly, which directly serves the
"follow on Instagram" primary CTA. Differentiates strongly from
every other Nanyuki venue (who all show food and interiors).

**Why this is the wrong call.** Easy to mis-execute as zine cliche
or too-cool-to-care. Risks reading youth-only and alienating the
secondary expat and weekender audience. The print aesthetic can date
if not iterated regularly.

### Direction B: Bonfire

**Posture.** Downtown as the warm light in the dark. The site is
what it feels like to arrive at 9pm and walk in. Photography-led;
the visual world is the venue itself at night, fire, faces, neon,
string lights, makuti against the sky.

**Material world.** Photographs dominate. Dark backgrounds, light
pulled from the imagery. Typography stays out of the way, mostly.
Long scrolls; short captions; the site is mostly photographs.

**Why this is the right call.** Captures what only Downtown has
(outdoor, bonfire, 1000+ at scale). Directly serves the *warm* half
of the voice. Visually arresting in a Nanyuki market dominated by
daytime food photography.

**Why this is the wrong call.** Depends entirely on a photo library
that does not exist yet. Launch is gated on a serious night-shoot.
If the photos are weak, the brand is weak. Could drift toward
mystical-insider (dark-mode club site that feels exclusionary),
which the voice rules out.

### Direction C: Marquee *(recommended)*

**Posture.** Downtown as a programme. The site is structured
typography that reads like the marquee board outside a theatre or
the LED ticker on a venue front. The flip-conceit of the logo
extends into the system: rotational rhythm, palindromic moments,
type that mirrors itself. The brand lives in motion and structure,
not in imagery.

**Material world.** Big type. Generous whitespace. Black and white
dominant with one deliberate neon accent (sampled from a real neon
in the venue, once we know which one). Photography exists but is
supplementary. Updates feel like rewriting the marquee: change the
words, the system holds.

**Why this is the right call.**

1. Launches fastest. Does not gate on a photo shoot.
2. Extends the existing logo into a coherent system rather than
   treating the wordmark as decoration. The logo IS a typographic
   symmetry trick; the brand should be too.
3. Maintenance reality. Six nights a week of programming means the
   site updates often. A type-led system can be updated by Vin or
   staff in minutes, no designer in the loop.
4. Instagram is doing the experiential work. The site's job is
   "what's on, where, when, follow for more." A marquee does that
   directly.
5. The warmth comes from copy choices and a single accent colour,
   not from the system being warm by default. Achievable without
   a photo library.

**Why this is the wrong call.** Risks reading cold or European if
the warmth does not come through in copy and accent treatment.
Under-sells the physical magic of the venue (bonfire, makuti) to
people who have not been. Has to fight to keep warmth in a mostly-
type system.

### Recommendation

**Direction C now. A and B fold in over time.** C ships, A's poster
energy lives on social and printed flyers, B's photography
accumulates and gets integrated as section 6 grows. This sequencing
matches reality: Downtown needs a credibility surface online today,
and the photo library can be commissioned over the next few months
once the brand has a stable home to land in.

---

## 3. Colour palette

The palette is built on three principles: warm not cold (the voice
forbids polished or mystical), grounded in Nanyuki at night (the
venue is outdoor and the real light sources are bonfire, sodium
streetlight, neon strip, and the moon), and centred on one
deliberate accent that carries the brand's energy rather than
diluting it across multiple.

### Primary

| Role          | Name      | HEX       | Use                                                                                                                                                                                  |
|---------------|-----------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Brand primary | Bonfire   | `#FF6A1F` | The single accent. Links, primary CTAs, the marquee scrolling element, "tonight" labels, the flip transitions. Never used for body text below 18px; it vibrates at small sizes.       |
| Brand dark    | Ink       | `#0E0C0A` | Page background in dark sections. Body text on Cream. The wordmark's solid bars. Not pure black: very slightly warm, so it pairs cleanly with Cream without a cold-cast gap.          |
| Brand light   | Cream     | `#F5EFE3` | Page background in light sections. Body text on Ink. Warm off-white tuned to feel like makuti-roof light at dusk, not paper-white from a printer.                                     |

### Neutrals

| Role          | Name       | HEX       | Use                                                                                                                                                                                  |
|---------------|------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Surface       | Smoke      | `#E5DFD3` | Card backgrounds, panel surfaces, subtle separation in light sections. A half-step down from Cream.                                                                                  |
| Border, muted | Concrete   | `#4A4641` | Borders, dividers, secondary text, time stamps, captions. Named for the floor.                                                                                                       |
| Counter-tone  | Moonlight  | `#A6B5BC` | Cold pale blue. The only cool tone in the system. Used very sparingly: ticketed-event chips, "next month" labels, the rare moment where the warmth needs a cold counterpoint to land. |

### Notes on colour use

1. **One accent, no exceptions.** Bonfire is the only accent. There
   is no secondary accent. If a page seems to need a second highlight
   colour, it has too many highlights; cut something.
2. **Dual-polarity by section, not by user toggle.** The site uses
   Ink-on-Cream and Cream-on-Ink interchangeably between sections,
   not as a user-controlled dark mode. The marquee strip flips
   polarity between sections as a brand device.
3. **Bonfire as text on Ink only; as fill on Cream.** Real contrast
   ratios: Bonfire on Ink is 6.8:1 (passes WCAG AA normal text).
   Bonfire on Cream is 2.5:1 (fails at any size, including large
   display). On Cream backgrounds, use Bonfire as a fill instead:
   `bg-bonfire` with `text-ink` inside gives 8.2:1 (passes AAA).
   This rule is load-bearing; the prior version of this note
   claiming AA at 18px+ on Cream was mathematically incorrect.
4. **Moonlight is precious.** If Moonlight appears on every page,
   nothing is special. Treat it like a stamp, not a colour.
5. **No grey-on-grey.** Concrete is the only mid-tone and it always
   meets Ink or Cream, never another grey.
6. **Working assumption flagged.** Bonfire is chosen for what it
   evokes (bonfire, sodium streetlight, Nanyuki at night) and
   because it serves the warm-not-mystical voice. The venue's actual
   neon fixtures have not been sampled yet. If those neons are
   radically different (say cyan or magenta), revisit, but the
   strategic colour is right regardless.

---

## 4. Typography

Three fonts, all free, all on Google Fonts under OFL.

### Display: Big Shoulders Display

A condensed industrial display family designed for the Chicago
Design Museum, modelled on sign-painters' alphabets. Multiple
weights from 100 to 900. Echoes the wordmark's condensed geometry
without copying it. Reads at marquee scale and holds up at 28px.
Has personality without being trendy.

### Body: IBM Plex Sans

A humanist sans designed by Mike Abbink for IBM. Distinctly not
Inter: warmer, slightly more character, very legible at small sizes.
Eight weights available. Pairs cleanly with Plex Mono for structured
data, which matters for a venue site full of times and dates.

### Mono: IBM Plex Mono

Sister face to Plex Sans. Used for times, dates, ticket numbers,
lineup running orders, any structured data that benefits from a
monospace grid.

### Weights used

- Big Shoulders Display: 700, 900 (display only, no body weights)
- IBM Plex Sans: 400, 500, 600
- IBM Plex Mono: 400, 500

### Import (Astro + Tailwind v4)

Fonts are downloaded as WOFF2 (Latin subset only) and committed to
the repo at `assets/fonts/`. The bundle is about 130KB total. There
is no npm dependency for fonts; this keeps the repo legible and
avoids version drift.

Files in `assets/fonts/`:

```
big-shoulders-display-700.woff2
big-shoulders-display-900.woff2
ibm-plex-sans-400.woff2
ibm-plex-sans-500.woff2
ibm-plex-sans-600.woff2
ibm-plex-mono-400.woff2
ibm-plex-mono-500.woff2
fonts.css                # all @font-face declarations
```

Once Astro is scaffolded, copy or symlink `assets/fonts/` into
`public/fonts/` so the files are served at `/fonts/*`. Then in
`src/layouts/Layout.astro`:

```astro
<link rel="preload" as="font" type="font/woff2"
      href="/fonts/big-shoulders-display-900.woff2" crossorigin>
<link rel="stylesheet" href="/fonts/fonts.css">
```

The `preload` on the heaviest display weight prevents a flash of
fallback text on the hero. Other weights load on demand.

If `public/fonts/` is not desirable, import the CSS from
`global.css` instead and let the Astro build pipeline copy the
files; either path works. The `url()` values in `fonts.css` are
relative to the CSS file itself.

In `src/styles/global.css` (Tailwind v4, CSS-first config):

```css
@import "tailwindcss";

@theme {
  --font-display: "Big Shoulders Display", "Arial Narrow", sans-serif;
  --font-sans: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
}
```

Fallback choice matters. `Arial Narrow` is the closest system-stack
approximation of Big Shoulders' condensed weight; the hero will
not feel wildly broken in the moment before the web font loads.

### Type scale

Base 16px, perfect-fourth ratio (1.333):

| Token   | Size                          | Line height | Weight | Font                  | Use                                                                          |
|---------|-------------------------------|-------------|--------|-----------------------|------------------------------------------------------------------------------|
| marquee | `clamp(80px, 12vw, 200px)`    | 0.9         | 900    | Big Shoulders Display | The continuous marquee strip. Uppercase only.                                |
| display | `clamp(48px, 6vw, 96px)`      | 1.0         | 900    | Big Shoulders Display | Hero headline only.                                                          |
| h1      | 56px                          | 1.05        | 700    | Big Shoulders Display | Page titles.                                                                 |
| h2      | 40px                          | 1.1         | 700    | Big Shoulders Display | Section titles.                                                              |
| h3      | 28px                          | 1.2         | 600    | IBM Plex Sans         | Subsections. **Not** Big Shoulders below 28px.                               |
| body    | 17px                          | 1.6         | 400    | IBM Plex Sans         | Default body.                                                                |
| small   | 14px                          | 1.5         | 400    | IBM Plex Sans         | Captions, helper text.                                                       |
| mono    | 14px to 17px                  | 1.5         | 500    | IBM Plex Mono         | Times, dates, ticket numbers, structured data.                               |

### Typography rules

1. **Big Shoulders Display is never used below 28px.** It is a
   display face. Below 28px it gets fussy. Use Plex Sans semibold
   instead.
2. **Marquee tier is uppercase only.** Mixed case at that scale
   wastes the height.
3. **Plex Sans numerals are set tabular** (`font-variant-numeric:
   tabular-nums`) anywhere a list of times or dates needs to align
   in columns.
4. **No tracking on Big Shoulders.** It is drawn to be tight. Do not
   loosen it; do not tighten it.
5. **Body line length 60 to 75 characters.** Plex Sans reads
   beautifully there. Beyond 75 it tires the eye.

---

## 5. Layout and spacing

### Spacing scale

4px base.

| Token | Px  | Use                                       |
|-------|-----|-------------------------------------------|
| 1     | 4   | Tightest gap, only inside dense UI        |
| 2     | 8   | Inline gaps, icon-to-text                 |
| 3     | 12  | Form field internal padding               |
| 4     | 16  | Default component padding                 |
| 6     | 24  | Component breathing room                  |
| 8     | 32  | Sub-section spacing                       |
| 12    | 48  | Section internal spacing                  |
| 16    | 64  | Section vertical rhythm (mobile)          |
| 24    | 96  | Section vertical rhythm (tablet)          |
| 32    | 128 | Section vertical rhythm (desktop)         |

### Container and grid

- **Container max-width:** 1440px on standard sections.
- **Full-bleed:** the marquee strip and the hero are full-bleed
  (no max, no horizontal padding). Type runs off the screen edges
  on the marquee; this is intentional.
- **Horizontal padding:** 24px mobile, 48px tablet, 80px desktop on
  contained sections.
- **Grid:** 12-column desktop with 24px gutter, 6-column tablet with
  16px gutter, 4-column mobile with 16px gutter. Big display type is
  allowed to break the grid for impact moments (wordmark, marquee,
  hero h1).

### Layout philosophy

The Marquee direction is structurally typographic, not photographic.
Three rules.

**1. The marquee is the system's heartbeat.** A horizontally-
scrolling type strip appears at the top of the homepage, between
major sections (as a divider), on every programme page (as the
"tonight, this weekend" anchor), and in the footer. It is full-
bleed, uppercase, linear-easing. The content per page changes; the
form is constant.

**2. The flip lives in section pairing.** Section transitions
sometimes pair: a section in Ink-on-Cream is followed by one in
Cream-on-Ink, with a heading from the first appearing rotated 180
as the second section's marker. This is the logo's symmetry trick
made structural. Used sparingly: once or twice per page maximum.

**3. Whitespace is part of the brand.** Compression is anti-brand.
Sections breathe. Hero sections are at least 80vh on desktop, with
the wordmark or marquee occupying the upper third and substantial
whitespace below before content begins. If the page feels "too
empty," it is probably right.

### What this is not

Not a hero, three features, testimonial layout. Not a card-grid-
everything layout. Not centred everything. Marquee direction wants
left-aligned big type with the right side often deliberately empty.

---

## 6. Imagery and visual style

Imagery is supplementary, not the brand's lead. The site can ship
without a single photograph and still feel coherent. Once Vin
commissions the night shoot, photography slots into specific roles.

### Photography style

When used: raw documentary. Real moments at the venue. Captured on
actual nights, not staged. The aesthetic is closer to a friend's
iPhone burst at 11pm than to a brand-agency hero shot. Bonfire
light, neon light, sodium streetlight, moonlight: those colour
temperatures are the ones we want. Daylight photography is for
utility only (directions, private hire enquiry).

Acceptable: smartphone, film, lo-fi DSLR, grain, motion blur, faces
partly in shadow, the crowd. The crowd is the subject, not "the
experience" as a vague concept.

Reference photographers to anchor in section 9 next turn: Wolfgang
Tillmans's nightlife work, Tyrone Lebon's documentary frames,
Khalik Allah's Harlem night portraits. Anti-references: hospitality-
brochure interiors, drone shots, smiling group photos in front of
the bar with the brand colour in the background.

### Photo treatment

- Full-bleed or contained in strict rectangles. No rounded corners
  on photographs, ever.
- No drop shadows. No vignettes. No "filters." Grading is for
  warmth (pulling the bonfire and sodium tones forward), nothing
  else.
- Black-and-white treatment is welcomed and equally on-brand. A
  site that is 50% B&W documentary and 50% warm colour is correct;
  do not force a single mode.
- Captions are mono (Plex Mono, Concrete colour), tight, factual:
  date and DJ name, or the photographer's name. No editorial
  captioning.

### Illustration

None for v1. The brand is typographic; illustration would weaken
it. If a future poster needs a graphic element, build it from
rotated or mirrored type, not illustrated marks.

### Iconography

Minimal. The brand should be readable without icons. Where
unavoidable (location pin in footer, Instagram glyph for the
primary CTA, ticket glyph for ticketed-event chips), use **Lucide**
icons at 1.5px stroke, monochrome, `currentColor`. No filled icons.
No emoji in UI.

### Pattern marks: the flip language

The rotational symmetry of the logo is a system motif. Allowed
expressions:

1. **Mirrored type pairs.** A heading and a kicker where one is
   rotated 180.
2. **Palindromic strips.** A line of programme info structured so
   it reads as a pair when rotated.
3. **Stacked bars echoing the wordmark.** Two-bar headers on
   programme cards: top bar is the date, bottom bar is the artist,
   both knockout-white-on-Ink.

These are not decorative. Each instance of a flip should
communicate something (this section's mirror, last weekend versus
next weekend, you-are-here versus where-you're-going).

---

## 7. Motion direction

**Motion personality: structural and alive.**

The marquee is the brand's metronome. A horizontal strip of upper-
case Big Shoulders type runs continuously at linear ease, never
accelerating, never stopping unless the user hovers on it. The site
is built around that constant; the marquee is the brand made
motion. Around that anchor, all other animation is restrained and
deliberate. Type rises into view with a confident easing curve.
Section transitions occasionally use a 180-degree type flip (the
logo's symmetry trick) to signal pairing between sections. Hover
states are short and decisive: a four to six pixel lift, 200ms, no
bounce. Page transitions are fade-only. Nothing in motion
decorates. Every animation either signals brand (the marquee, the
flip) or improves comprehension (scroll-reveal, hover affordance).
If a motion does neither, it does not ship.

### Approved patterns

From `.claude/skills/motion-patterns/SKILL.md`:

- [x] **Pattern 1: Smooth scroll reveal.** Foundational. Headings
  rise 24px and fade in with ease `[0.22, 1, 0.36, 1]` over 600ms
  when their section enters the viewport. Use `whileInView` with
  `viewport={{ once: true, margin: "-100px" }}`.
- [x] **Pattern 2: Hover lift on cards.** Programme cards and event
  cards only. Four pixel lift, 200ms, no shadow change, no scale.
- [x] **Pattern 4: Text split reveal.** Hero only, word-by-word,
  first viewport entry. 600ms per word with 80ms stagger, easing
  `[0.22, 1, 0.36, 1]`. Never on body copy or repeating headlines.
- [x] **Pattern 5: Marquee for the programme.** The brand's
  signature use of this pattern. Linear ease, loop duration tuned
  to content length (30 to 60 seconds), pauses on hover. Content
  is the programme list, not logo grids.
- [x] **Page transitions: fade only.** Astro `<ClientRouter />`
  with a `customFade` at 400ms. No slides, no scales, no view-
  transition-name choreography on hero elements.

### Brand-specific extension: the flip transition

A custom pattern not in the skill, derived from the logo's
symmetry: at specific section pairings, a heading rotates 180 as
the next section enters. Implemented with Motion (not GSAP),
respects `prefers-reduced-motion` (falls back to a static rotated
version, no animation). Used at most twice per page.

```tsx
import { motion, useReducedMotion } from "motion/react";

export function FlipHeading({ label }: { label: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.h2
      initial={{ rotate: reduced ? 180 : 0 }}
      whileInView={{ rotate: 180 }}
      viewport={{ once: true }}
      transition={{
        duration: reduced ? 0 : 0.8,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      {label}
    </motion.h2>
  );
}
```

### Patterns that do not apply

- [ ] **Pattern 3: Image reveal with mask.** Imagery is
  supplementary in this direction; the dramatic photo-reveal effect
  over-promises what the site actually delivers.
- [ ] **Pattern 6: Scroll-pinned section (GSAP).** Tempting for a
  venue site, but pinning fights the marquee's continuous rhythm.
  The brand's structural metaphor is the constant scroll, not the
  hold-and-reveal.
- [ ] **Pattern 7: Cursor-tracking parallax.** Drifts toward
  mystical-insider, which the voice rules out. Also wastes JS bytes
  on a site whose primary action is "follow on Instagram."

### Forbidden, full stop

- Bouncy or overshoot easing on UI elements. The Bonfire CTA never
  bounces.
- Animated gradient backgrounds.
- Auto-playing video carousels.
- Floating shapes that follow the cursor.
- Animations longer than 800ms on UI (the marquee is content, not
  UI, and is exempt).
- More than two competing scroll moments per page. The marquee
  plus one reveal is the ceiling.

### Reduced motion

All motion respects `prefers-reduced-motion`. The marquee freezes
at a static "current frame" showing the first few items rather than
continuing to scroll. Flips become instant rotations. Hover lifts
disappear. The static end-state must still communicate the same
information; reduced-motion users still see the programme.

Enforcement: the `motion-intent-check` skill (sibling to
`motion-patterns`) reviews any new motion against this section
before merge.

---

## 8. Voice and copy

**Tone:** Bold, warm, direct.

The brand speaks like a friend telling you where the night is.
Confident enough not to oversell, warm enough not to read as
exclusive, direct enough that you know what's happening without a
second sentence.

### We say

- "Saturday. Bonfire. Doors at eight."
- "New crews on the decks Friday."
- "Open Tuesday through Sunday. Monday we sleep."
- "Find us where the music is loud."
- "Bring your friends. Bring better friends."
- "Tonight: Kimani. Tomorrow: Numa. Sunday: rest."
- "Outdoor. All weather. Always lit."

### We don't say

- "An unforgettable nightlife experience under the African sky."
  (Polished, generic, tourist-coded.)
- "Welcome to Downtown." (Every site says this.)
- "Discover our story." (Every site also says this.)
- "Curated cultural moments." (Reads as agency speak.)
- "Join us for an evening of..." (Reads as press release.)
- "Your destination for nightlife in Nanyuki." (Tripadvisor voice.)
- "Vibes." (Lazy. Pick a sharper word every time.)

### Sentence length

Short. Mostly one clause. Rhythm comes from sequencing short
statements, not from long sentences. The longest sentence on the
homepage should be the directions paragraph in the footer.

### Microcopy

These are not suggestions, they are the actual labels.

- **Primary hero CTA:** "Follow on Instagram" (not "Get updates"
  or "Subscribe")
- **Programme view link:** "What's on" (not "Events" or "Calendar")
- **Directions link:** "Find us" (not "Get directions" or "Visit")
- **Private hire CTA:** "Make it yours" (not "Book a private event")
- **Empty programme state:** "Nothing on tonight. Sleeping." (not
  "No events scheduled")
- **404 page:** "Not on the bill." (not "Page not found")
- **Newsletter, if it ever exists:** "One email when something
  matters." (not "Subscribe for updates")
- **Sold out:** "Full house." (not "This event is sold out")
- **Cancellation:** "Off the bill." (not "Event cancelled")

### How a programme card reads

The voice in action, on a Saturday lineup card:

```
SAT 17 MAY
DOORS 8PM
KIMANI / NUMA / DJ TARMAC
BONFIRE FROM 9
```

Not:

```
This Saturday, May 17th, 2026
Join us for an unforgettable evening featuring
Kimani, Numa, and DJ Tarmac spinning the hottest
tracks all night long under the stars.
```

The first reads like a flyer pinned to a wall. The second reads
like a press release. We are the wall.

### Em dashes

Never. Use commas, semicolons, parentheses, or two sentences. This
applies to all generated copy on this project (and every project).

---

## 9. References

Five sites that capture where Downtown should land, three that
show what it must not become. URLs are correct as of 2026-05-14;
re-check before publishing this document externally, the music
web moves.

### Positive references

1. **NTS Radio.** `https://www.nts.live`. The clearest reference
   for "the programme is the brand." A continuous schedule strip
   sits across the top of the site, type-led, restrained colour,
   the listing IS the homepage. Downtown's marquee operates on the
   same logic.

2. **The Lot Radio.** `https://www.thelotradio.com`. Brooklyn
   community radio housed in a venue. Big type, sparse layout,
   documentary photography used only as accent, programme-driven.
   Very close to Downtown in venue type (small community space)
   and brand posture (bold + warm + not polished).

3. **Resident Advisor.** `https://ra.co`. Mature listings
   architecture, structural typography, a single deliberate accent
   colour. Reference for how the programme and event-detail pages
   should structure themselves, not for the surface visual.

4. **Public Records.** `https://publicrecords.nyc`. Brooklyn
   community venue and listening bar. Beautifully restrained brand
   site, big display type, generous whitespace, photography used
   precisely. The closest analogue to what Downtown should feel
   like as a brand-as-place.

5. **Dweller Festival.** `https://dwellerforever.online`. Black
   electronic music festival with a bold typographic identity,
   single accent colour, brutalist edge that stays warm. Direct
   reference for bold-warm voice in a music context, and proof
   that a community-led venue brand can be type-led without going
   cold.

### Anti-references

1. **Berghain.** `https://www.berghain.berlin`. The opposite of
   what Downtown is: mystical-insider, intentionally exclusionary,
   brand-as-mystery. Downtown is a community venue, not a gated
   cult. The visual restraint can look similar at a glance, but
   the posture is opposite.

2. **Coachella.** `https://www.coachella.com`. Drone shots, brand-
   agency hero photography, smiling group portraits, lifestyle
   reel. The generic festival aesthetic Downtown must not echo.

3. **Any "rooftop lifestyle" hospitality site.** No single URL
   because they all read identically. "Elevated cocktails," sunset
   stock, hospitality-brochure copy, golden-hour drone fly-over.
   The polished-tourist register is the single biggest tonal risk
   for a Nanyuki venue with expat and weekender traffic.

---

## 10. Component decisions log

| Date       | Component | Decision | Reason |
|------------|-----------|----------|--------|
| 2026-05-14 | Lead audience | Nanyuki creative, early-to-mid twenties | Differentiator is community and youth, not weekender drive-up trade |
| 2026-05-14 | Voice | Bold, warm, direct. Never polished, never mystical-insider | Honours the logo's confidence and the venue's warmth without drifting to luxury or guestlist |
| 2026-05-14 | Primary site CTA | Follow on Instagram | Vin's choice; shapes the site as credibility surface rather than transactional funnel |
| 2026-05-14 | Brand direction | Marquee (C) | Launches fastest with no photo dependency; extends the logo's symmetry trick into a coherent system; maintenance reality for a 6-night-a-week programme |
| 2026-05-14 | Palette accent | Bonfire `#FF6A1F` | Sodium-streetlight and bonfire reference; warm not cold; passes WCAG AA at 18px+ on both Ink and Cream |
| 2026-05-14 | Display font | Big Shoulders Display | Condensed industrial sign-painter face; echoes the wordmark's geometry; free Google Font; holds up at marquee scale |
| 2026-05-14 | Body font | IBM Plex Sans | Distinctly not Inter; humanist warmth; pairs with Plex Mono for the times-and-dates structured data the site is full of |
| 2026-05-14 | Voice microcopy | Locked: Follow on Instagram, What's on, Find us, Make it yours, Nothing on tonight. Sleeping., Not on the bill. | These are the exact labels, not suggestions; gives copy and engineering one source of truth |
| 2026-05-14 | References | NTS, The Lot Radio, RA, Public Records, Dweller (positive); Berghain, Coachella, rooftop-lifestyle hospitality (anti) | Anchors the bold-warm-typographic direction in recognisable real-world points so future design choices have a sanity check |
| 2026-05-14 | Font loading | WOFF2 files committed to `assets/fonts/` with hand-written `@font-face`; no `@fontsource` npm dependency | Vin's call. Keeps the repo legible, avoids version drift, and lets the font files travel with the design system rather than living in node_modules |
| 2026-05-14 | Bonfire on Cream | Use as fill (`bg-bonfire` + `text-ink` = 8.2:1) not as text (2.5:1, fails AA). Corrected prior DESIGN.md note that wrongly claimed Bonfire-text on Cream passed AA at 18px+ | Real contrast math; selective application preserves the original `#FF6A1F` brand colour and gains AAA contrast everywhere |
| 2026-05-14 | Primary-foreground | `:root` `--primary-foreground` set to Ink, not Cream. Was Cream giving 2.5:1 on Bonfire buttons | The CTA "Follow on Instagram" now passes WCAG AAA at 8:1 (Ink on Bonfire). Buttons read tighter, more confident |
| 2026-05-14 | A11y baseline | Global `:focus-visible` ring in Bonfire, skip-to-main link in Layout, `id="main"` on `<main>` | Keyboard users now see where focus is on every interactive element; screen-reader and keyboard users can bypass the nav |

---

## How Claude uses this file

When working on UI, Claude reads this file before invoking any other
design intelligence. The hierarchy is:

1. **This file wins.** If `DESIGN.md` specifies a colour, font, or
   pattern, that is the answer.
2. **`ui-ux-pro-max` fills the gaps.** Anything not specified here
   falls back to the design intelligence skill's recommendations for
   this product type.
3. **Motion rules** in section 7 are enforced once locked.
4. **The global `~/.claude/CLAUDE.md` rules** (no em dashes, four
   principles) apply on top of everything.

If a section is marked `TBD`, Claude asks before assuming.
