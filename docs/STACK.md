# Stack discovery: downtown-website

**Client:** Vin
**Started:** 2026-05-14
**Status:** Stack locked 2026-05-14: Astro 5 + Tailwind v4 + shadcn New York. See the Stack decision section at the bottom for the full record.

This file captured the context for the stack decision walk-through.
The discovery form below was largely answered verbally rather than
filled in; the binding record is the Stack decision section at the
bottom and `docs/DESIGN.md` section 1 (audience and brand essence).

---

## 1. What is this project, in plain language

[One paragraph. What does it do? Who uses it? What problem does it
solve? Skip the buzzwords.]

---

## 2. Audience and scale

**Primary users:**
[Who actually uses this thing? Be specific. "Real-estate agents in
Nairobi" not "users." "Patients on 2G connections in Samburu" not
"low-bandwidth users."]

**Expected scale (12 months out):**
- Users: [10? 100? 10,000?]
- Concurrent peak: [reasonable guess]
- Data volume: [small? large? streaming?]

**Geographic distribution:**
[Kenya only? East Africa? Global? Mostly mobile or mostly desktop?]

---

## 3. Constraints

**Budget for hosting:**
[Free tier acceptable? $20/month ceiling? $200/month? No object?]

**Timeline:**
[MVP in 2 weeks? 2 months? Open-ended exploration?]

**Who maintains this after launch:**
[You alone? You plus a junior dev? Eventually a client team?]

**Existing systems this must integrate with:**
[Anything? Existing databases, existing auth, existing APIs?]

---

## 4. Functional requirements

Mark each one that applies.

**Frontend:**
- [ ] Marketing or portfolio site (mostly static, motion-rich)
- [ ] Web app with auth and user state
- [ ] Dashboard or admin panel
- [ ] Real-time collaborative (multiple users editing the same thing)
- [ ] Heavy interactivity (drag and drop, drawing, complex forms)
- [ ] Mobile app

**Backend:**
- [ ] API for the frontend
- [ ] Background jobs or scheduled tasks
- [ ] Webhooks in or out
- [ ] File uploads or media processing
- [ ] Payments
- [ ] Email or SMS

**Data:**
- [ ] Relational (users, orders, the usual)
- [ ] Document-heavy (rich content, blog posts, articles)
- [ ] Time-series (analytics, sensor data)
- [ ] Geospatial (maps, locations)
- [ ] Search across content

**Infrastructure:**
- [ ] CMS for non-technical users to edit content
- [ ] Multi-tenant (separate data per customer)
- [ ] Multilingual (Kiswahili, Maa, other)
- [ ] Offline support

---

## 5. Non-functional requirements

**Performance:**
[Lighthouse 95+ on mobile? Sub-second API response? Hundreds of concurrent
users? Be honest about what actually matters.]

**Accessibility:**
[WCAG AA mandatory? AAA? Just basic keyboard navigation?]

**Security and compliance:**
[Kenya Data Protection Act applies? PCI for payments? HIPAA-equivalent
for health data? Just standard auth and don't leak passwords?]

**SEO:**
[Critical (this site needs to rank)? Helpful (nice if it ranks)? Not
relevant (this is behind auth)?]

---

## 6. Hosting and deployment preference

**Where can this run:**
[Railway? Vercel? Hetzner? Cloudflare Pages? Self-hosted VPS? Client's
existing AWS account?]

**Deployment style:**
[Git push to deploy is fine? Want explicit deploy step? Want preview
URLs per PR?]

---

## 7. References

Sites or apps you want this to feel like, operationally:

1.
2.
3.

Sites or apps you want this to NOT feel like:

1.
2.

---

## Stack decision

**Date locked:** 2026-05-14

**Chosen stack:** Astro 5 (TypeScript strict) with Tailwind v4 via
`@tailwindcss/vite` (Vite plugin path, not the legacy `@astrojs/tailwind`
integration), shadcn New York style (config only at this stage,
components added on demand), Motion (formerly Framer Motion) with
`LazyMotion` available but used sparingly, fonts self-hosted as
WOFF2 in `assets/fonts/` (Big Shoulders Display + IBM Plex Sans +
IBM Plex Mono, all OFL-licensed), programme stored in an Astro
content collection at `src/content/programme/`.

**Reasoning:** Downtown is a marketing-and-listings site with one
primary action (follow on Instagram) and a small but growing weekly
programme. Astro's static-first model with React islands matches
the audience profile (Nanyuki locals, Nairobi weekenders, NGO and
military expats, tourists on 3G) and ships minimal JS where it does
not earn its weight. The content collection gives a clean workflow
for updating nights without code changes. Tailwind v4 + shadcn give
brand-token integration with deferred component cost.

**Alternatives considered:**

1. Next.js 15 with shadcn. Same React-ecosystem benefits but
   server-rendered by default, which is overkill for content that
   is essentially static plus one external CTA. Would have shipped
   more JS for the same visible result.
2. SvelteKit. Smaller ecosystem, no first-party shadcn equivalent,
   harder to find local developers comfortable with it. Strong
   technically but operationally weaker for handover.
3. Eleventy or Hugo (pure static generators). Lighter still than
   Astro, but lacking the React-island escape hatch we will want
   for the few interactive moments to come (modals, ticketing
   forms, possibly signup).

**Why those were not chosen:** Astro's island architecture is the
right midpoint between "framework-heavy" and "no framework at all":
static by default, JS only where it pays back. The audience cannot
afford a heavy framework, the venue's team cannot afford a niche
one. Astro is the operationally honest pick.
