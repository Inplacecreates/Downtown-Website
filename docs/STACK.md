# Stack discovery: downtown-website

**Client:** Vin
**Started:** 2026-05-14
**Status:** Stack not yet chosen

This file captures the context Claude needs to recommend a tech stack.
Fill in what you know, leave the rest blank, then start a Claude Code
session. Claude will walk you through the decision.

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

## Stack decision (filled in after first Claude session)

**Date locked:**
**Chosen stack:**
**Reasoning:**
**Alternatives considered:**
**Why those were not chosen:**
