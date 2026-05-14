# downtown-website

A digital home for Downtown, the Nanyuki venue hosting the town's creative community across music, art, and events

**Client:** Vin
**Started:** 2026-05-14
**Stack:** TBD (to be decided in first session)

This file conditions Claude Code's behaviour on this project. The
global `~/.claude/CLAUDE.md` rules also apply.

## Discovery mode

This project has not yet committed to a tech stack. Before generating
any code, read `docs/STACK.md` and walk the user through the stack
decision. Do not assume defaults. Do not pick what is fashionable.
Pick what fits the constraints.

## First-session script

When the user starts the first Claude Code session, your job is:

1. **Read `docs/STACK.md` in full.**
2. **Ask any questions where answers are missing or ambiguous.** Do
   not guess at audience, scale, hosting constraints, or budget.
3. **Propose 2 or 3 stack options** with honest trade-offs. For each,
   say what makes it the right call and what makes it the wrong call.
4. **Recommend one**, with a one-line reason. Make the recommendation
   defensible, not hedged.
5. **Wait for the user to confirm or push back.** Do not start coding.
6. **Once the stack is locked,** update `docs/STACK.md` with the
   decision and the reasoning. Also update this CLAUDE.md file to
   replace the discovery section with the chosen stack's conventions.

## Stack consideration principles

When recommending a stack, weigh these in order:

1. **Fit for purpose.** What does this project actually do? A
   content-driven marketing site is not a real-time collaborative
   app. The tools should match the work.
2. **Operational reality.** Who maintains this in six months? What
   hosting is available? What is the team's existing comfort?
3. **Time to first value.** How quickly can a useful version ship?
   Faster is usually better unless the project demands otherwise.
4. **Honest assessment of hype.** Just because something trends on
   Twitter does not mean it belongs in production. Justify novel
   choices on their merits.

## Defaults to consider, not constraints to obey

Kelvin's working preferences as of 2026:

- **Backend:** Go is the default for new backends.
- **Marketing or portfolio sites:** Astro is the default.
- **App-style frontends with auth and state:** Next.js 15.
- **Mobile:** discuss case by case, no default.
- **Database:** Postgres unless there's a reason otherwise.

These are starting points. If the project's requirements point
elsewhere (Phoenix LiveView for a niche realtime app, SvelteKit for
a particularly motion-heavy site, Flutter for cross-platform mobile,
Rails for a CRUD-heavy SaaS where speed of build matters more than
runtime speed), recommend that instead and explain why.

## What to never do during discovery

- Pick the stack silently and start coding.
- Pick a stack the user has not heard of without explaining it.
- Pick based on what's popular this quarter rather than what fits.
- Skip the operational question (who hosts this, who maintains it).
- Use em dashes. (Yes, still applies even in stack discussions.)

## Once a stack is chosen

When the user confirms a stack, do all of these in one update:

1. Replace this CLAUDE.md content with conventions appropriate to
   the chosen stack. Reference `~/.inplace-kit/templates/` for the
   shape of a good stack-specific CLAUDE.md.
2. Update `docs/STACK.md` with the locked decision, the date, and
   the reasoning. This is the historical record.
3. If the stack is Astro or Next.js, copy `~/.inplace-kit/templates/
   shared/DESIGN.md` into `docs/DESIGN.md` so the user can fill in
   the brand brief.
4. If the stack is Go, add a `docs/ARCHITECTURE.md` with the
   layering pattern.
5. If the stack matches a project type in the scaffold (Astro, Next,
   Go), add the relevant project-scoped skills as symlinks. Example
   for Astro:

   ```bash
   ln -s ~/.inplace-kit/skills/motion-intent-check \
         .claude/skills/motion-intent-check
   ```
