import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * Programme collection. Each night is one JSON file in
 * src/content/programme/, named with its ISO date (YYYY-MM-DD.json).
 * Filenames serve as IDs and give natural chronological sort, so
 * pages can `.sort((a, b) => a.id.localeCompare(b.id))` without
 * adding a separate sort field.
 */
const programme = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/programme",
  }),
  schema: z.object({
    /** Display date, e.g. "Sat 16 May". Voice library casing. */
    date: z.string(),
    /**
     * Lineup as an array of acts. If `slug` is present and matches a
     * `djs` collection id, the name renders as a link to the DJ
     * detail page. Acts without slugs (guest headliners, one-offs)
     * render as static text.
     */
    lineup: z.array(
      z.object({
        name: z.string(),
        slug: z.string().optional(),
      }),
    ),
    /** Mono info row content, e.g. "Doors 8pm · Bonfire from 9". */
    info: z.string(),
    /** Saturday flagship treatment: Bonfire-fill info row. */
    flagship: z.boolean().default(false),
  }),
});

/*
 * In-residence creatives at Downtown: fashion, woodwork, photography,
 * tattoo, and whatever else moves in. One JSON file per resident in
 * src/content/residents/. Filenames are kebab-case slugs of the name
 * so they sort alphabetically by id, which is fine for a small,
 * mostly-stable list.
 */
const residents = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/residents",
  }),
  schema: z.object({
    /** Display name, e.g. "Sir Jay Surtorial". */
    name: z.string(),
    /** Discipline label, e.g. "Photography · Videography". */
    discipline: z.string(),
    /** One-line punchy summary, used on the detail page below the name. */
    tagline: z.string().optional(),
    /** Year the resident moved in. */
    since: z.string().optional(),
    /** Longer paragraph describing the practice. */
    bio: z.string().optional(),
    /** Photographer's brief for the image placeholder fallback. */
    captionHint: z.string(),
    /** Optional hero image URL. Unsplash hot-link during dev; replace with local before launch. */
    image: z.string().url().optional(),
    /** Numbered offerings list rendered on the detail page. */
    offerings: z.array(z.string()).default([]),
    /** Contact handles. Instagram can be a handle ("@name") or a full URL. */
    contact: z
      .object({
        instagram: z.string().optional(),
        email: z.string().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

/*
 * Past nights: the visual archive of recent Saturdays.
 *
 * Right now each entry is a JSON file with a manually-set image URL.
 * The shape (date, caption, src, optional igUrl) maps cleanly onto
 * what the Instagram Graph API returns per media item, so the
 * eventual upgrade path is: replace this `glob` loader with a
 * custom loader (see Astro 5 content layer docs) that fetches the
 * latest N posts from @downtown.nanyuki, transforms them to this
 * schema, and writes/caches them. The page consuming this
 * collection (src/pages/index.astro) does not need to change.
 */
const pastNights = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/past-nights",
  }),
  schema: z.object({
    /** Display date, e.g. "Saturday, 9 May". */
    date: z.string(),
    /** Image alt / caption brief, e.g. "Bonfire, May 2". */
    caption: z.string(),
    /** Image URL. Unsplash hot-link for dev; IG CDN URL or local for prod. */
    src: z.string().url(),
    /** Optional link back to the originating Instagram post. */
    igUrl: z.string().url().optional(),
  }),
});

/*
 * Resident DJs. Same shape as creative residents (so a generic
 * profile template could merge them one day), specific values
 * tuned to DJ-life: "discipline" reads as genres, "offerings"
 * reads as what they play and when.
 */
const djs = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/djs",
  }),
  schema: z.object({
    name: z.string(),
    discipline: z.string(),
    tagline: z.string().optional(),
    since: z.string().optional(),
    bio: z.string().optional(),
    captionHint: z.string(),
    image: z.string().url().optional(),
    offerings: z.array(z.string()).default([]),
    contact: z
      .object({
        instagram: z.string().optional(),
        email: z.string().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

/*
 * Pillars: the seven creative lanes Downtown operates in (Music,
 * Art, Dance, Youth, Painting, Expression, Stage). Each pillar is
 * a grant-prospectus-shaped document so the page renders as a
 * standalone funding/investor-readable case for that lane. JSON
 * files in src/content/pillars/, filename = slug. Amounts use
 * bracketed placeholders like "[KES 1,200,000]" until real figures
 * are signed off; the page treats them as opaque strings.
 */
const pillars = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/pillars",
  }),
  schema: z.object({
    /** Display order on the /vision grid (1-7). */
    order: z.number().int().positive(),
    /** Display name, voice-library casing, e.g. "Music". */
    name: z.string(),
    /** One-line punchy summary shown below the name. */
    tagline: z.string(),
    /** Short blurb used on the /vision pillar tile (the card body). */
    cardBody: z.string(),
    /** The gap this pillar addresses, framed in Nanyuki/Kenya context. */
    problem: z.string(),
    /** Theory of change: how Downtown moves the needle on the problem. */
    approach: z.string(),
    /** Named programmes / activities that make up the pillar. */
    programmes: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        cadence: z.string().optional(),
      }),
    ),
    /** Year-by-year measurable targets, 2026-2030. */
    outcomes: z.array(
      z.object({
        year: z.string(),
        target: z.string(),
      }),
    ),
    /** Funding asks. `amount` is a string so it can carry the
        "[KES n]" placeholder pattern until figures are firm. */
    fundingNeeds: z.array(
      z.object({
        kind: z.enum([
          "Capex",
          "Opex",
          "Programme grant",
          "Scholarship fund",
          "Equipment",
        ]),
        label: z.string(),
        amount: z.string(),
        timing: z.string().optional(),
      }),
    ),
    /** Partner organisations / institutions (current or sought). */
    partners: z.array(z.string()).default([]),
    /** Resident / DJ names most associated with this lane.
        Plain strings; could later be slugs cross-linked to the
        residents and djs collections. */
    residents: z.array(z.string()).default([]),
  }),
});

/*
 * Products: the merchandise that funds Downtown. Each product is
 * tagged to one of the seven pillars so the page can show, per
 * item, exactly which lane the purchase supports; the pillar
 * detail pages reverse the lookup to list the merch that funds
 * them. Prices are strings so "[KES 4,500]" placeholders work
 * before pricing is signed off. Variants are open-ended objects
 * because what counts as a variant (size, colour, finish)
 * depends on the category.
 */
const products = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/products",
  }),
  schema: z.object({
    /** Display name, voice-library casing. */
    name: z.string(),
    /** Category groups products on the /shop page. */
    category: z.enum([
      "Hoodie",
      "T-shirt",
      "Wristband",
      "Mug",
      "Water bottle",
      "Keyholder",
      "Tote",
      "Print",
    ]),
    /** One-line punchy summary, shown under the name on the card. */
    tagline: z.string(),
    /** Longer description for the card hover / detail. */
    description: z.string(),
    /** Display price string, supports "[KES n]" placeholders. */
    price: z.string(),
    /** Pillar slug this product funds; must match a pillars entry id. */
    pillar: z.enum([
      "music",
      "art",
      "dance",
      "youth",
      "painting",
      "expression",
      "stage",
    ]),
    /** Optional variant list. Mainly sizes for apparel; colours or
        finishes for other categories. Free-form so each product
        picks the dimensions it needs. */
    variants: z
      .array(
        z.object({
          label: z.string(),
          options: z.array(z.string()),
        }),
      )
      .default([]),
    /** Optional image URL. Unsplash for dev; replace before launch. */
    image: z.string().url().optional(),
    /** Caption / alt text used by ImagePlaceholder when image is absent. */
    imageCaption: z.string(),
    /** Surfaced on the page as a "Sold out" pill when false. */
    inStock: z.boolean().default(true),
    /** Featured items appear in the shop hero strip. */
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  programme,
  residents,
  pastNights,
  djs,
  pillars,
  products,
};
