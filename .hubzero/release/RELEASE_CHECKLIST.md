# HubZero Blueprint Release Checklist

> [!IMPORTANT]
> **This document is part of the HubZero Blueprint Core and is considered a canonical engineering standard.**
>
> **It must never be modified, rewritten, reformatted, or extended by AI agents, automation tools, or end users.**
>
> This checklist defines the minimum release requirements for every HubZero Focused Blueprint.
>
> If a blueprint requires additional release requirements, they must be documented separately within that blueprint's own documentation. They must **never** be added to, removed from, or alter this document.
>
> AI agents may **read**, **reference**, and **execute** this checklist, but they must **never edit it** under any circumstances.
>
> Any changes to this document may only be made by the maintainers of the HubZero Blueprint Core through an intentional versioned update.

---

# HubZero Blueprint Release Checklist

This checklist defines the minimum quality standard required before any HubZero Focused Blueprint may be released.

A blueprint is considered **production-ready** only when every applicable item has been completed successfully.

Where a reusable skill assists this process, it does not replace manual verification of any item. The Skills contract is defined once, in `.hubzero/agents/AGENTS.md`.

---

# 1. Repository

## Repository Identity

- [ ] Repository name matches the blueprint name.
- [ ] Package name matches the blueprint.
- [ ] Version updated appropriately.
- [ ] Repository URLs are correct.
- [ ] License is present.
- [ ] Author information is correct.
- [ ] Keywords and description are complete.

---

# 2. Blueprint Compliance

## Blueprint Base

- [ ] Blueprint Base infrastructure has not been recreated.
- [ ] Existing providers have been reused.
- [ ] Existing utilities have been reused.
- [ ] Existing configuration has been extended rather than replaced.
- [ ] Existing SEO infrastructure remains intact.

## Blueprint Core

- [ ] `.hubzero` remains unchanged.
- [ ] Architecture guidance has been followed.
- [ ] Design language has been followed.
- [ ] Content contract has been followed (`.hubzero/content/principles.md`).
- [ ] Rendering and runtime contract has been followed (`.hubzero/rendering.md`).
- [ ] SEO guidance has been followed.
- [ ] Engineering guidance has been followed.

## Canonical Identity

- [ ] Architecture `id` matches a row in `.hubzero/architecture/REGISTRY.md`.
- [ ] Design language `id` matches a row in `.hubzero/design/languages/REGISTRY.md`.
- [ ] No alias is used in place of a canonical `id` (for example `agency` where `services` is canonical).
- [ ] Where the architecture is a profile, its parent's document was applied.
- [ ] Composed architectures and carried modules are named explicitly.

## Infrastructure Wiring

- [ ] Metadata generation is called by the routes that need it.
- [ ] Robots and sitemap endpoints are actually served, not merely defined.
- [ ] Providers are mounted, not just exported.
- [ ] Structured data is rendered on the pages it describes.
- [ ] No shared utility is shadowed by a local reimplementation.

---

# 3. Engineering

## Code Quality

- [ ] No unused code.
- [ ] No dead files.
- [ ] No duplicated logic.
- [ ] No unnecessary abstractions.
- [ ] No unnecessary dependencies.
- [ ] TypeScript used consistently.
- [ ] No `any` unless absolutely necessary.

---

# 4. Design System

Verify consistency across the entire blueprint.

- [ ] Typography
- [ ] Color tokens
- [ ] Spacing scale
- [ ] Containers
- [ ] Buttons
- [ ] Cards
- [ ] Forms
- [ ] Navigation
- [ ] Active navigation state
- [ ] Footer
- [ ] Responsive behavior
- [ ] Motion consistency

## Design Language Contract

See `.hubzero/design/principles.md` and the active language document.

- [ ] All eleven subsystems implemented.
- [ ] Decision Hierarchy applied where subsystems conflicted.
- [ ] Anti-Patterns checked against the implementation.
- [ ] Responsive Behavior applied per the active language.
- [ ] **Token Contract satisfied** — every token the language names is owned by the blueprint.
- [ ] **The token file is not byte-identical to Blueprint Base's.** Inherited values belong to no design language.
- [ ] One source of truth per token; no value defined in two competing places.
- [ ] The implementation would not be mistaken for the language's nearest neighbours in the registry.

## Contrast

- [ ] Every foreground value verified against every surface it appears on, not against white alone.
- [ ] Focus indicators verified against the darkest and busiest surfaces on the site.
- [ ] Where a dark appearance exists, verified as an independently authored palette.

---

# 5. Content Architecture

Verify content remains reusable.

- [ ] Branding isolated.
- [ ] Navigation configurable.
- [ ] Services configurable.
- [ ] Work configurable.
- [ ] Team configurable.
- [ ] Blog configurable.
- [ ] Footer configurable.
- [ ] Metadata configurable.
- [ ] Images configurable.

Avoid embedding large amounts of content directly inside components whenever practical.

## Content Derivation

See `.hubzero/content/principles.md`.

- [ ] Routes and static parameters derive from content records.
- [ ] Page metadata derives from the same records.
- [ ] Sitemap derives from content rather than being hand-maintained.
- [ ] Structured data derives from the records rendered on the page.
- [ ] Breadcrumbs and page hierarchy derive from one structure.
- [ ] Navigation derives from content and from declared module names.
- [ ] Related content derives from relationships, not hand-maintained lists.
- [ ] Search index and filter facets derive from content.
- [ ] Counts and summaries are computed rather than written out.
- [ ] Referential integrity verified — slug references resolve, or fail deliberately.
- [ ] **Adding a content record requires no second edit anywhere.**
- [ ] Temporal state is authored rather than derived from the current clock.

## Editorial Consistency

- [ ] One locale used throughout (no mixed English variants).
- [ ] Spelling consistent with the chosen locale.
- [ ] Punctuation style consistent (quotation, dash, list style).
- [ ] Capitalization consistent (headings, titles, buttons).
- [ ] Date format consistent across every page.
- [ ] Currency and its formatting consistent.
- [ ] Measurement system consistent (metric or imperial).
- [ ] Terminology consistent (a product or role is not renamed between pages).
- [ ] Address formatting consistent.
- [ ] Phone number formatting consistent.

See `.hubzero/experience/content.md` — Editorial Consistency.

---

# 6. Placeholder Content

Verify all placeholder content.

- [ ] Fictional company.
- [ ] Fictional people.
- [ ] Fictional clients.
- [ ] Fictional case studies.
- [ ] Fictional testimonials.
- [ ] Fictional blog articles.
- [ ] Fictional contact information.
- [ ] Fictional pricing.
- [ ] Fictional FAQs.
- [ ] Fictional legal pages (privacy, terms).
- [ ] Fictional company history.
- [ ] Fictional support content.
- [ ] Placeholder content clearly documented.
- [ ] No content is scraped, copied, or adapted from a real organization, person, or place.

No placeholder should be easily mistaken for a real organization. See `.hubzero/experience/content.md` for content generation standards, including the Fictional Content Policy.

---

# 7. Images

Verify placeholder imagery.

- [ ] Images generated or licensed appropriately.
- [ ] Images optimized.
- [ ] Responsive.
- [ ] Consistent visual language.
- [ ] Correct aspect ratios.
- [ ] No broken links.
- [ ] Alt text present.
- [ ] Easy to replace.

---

# 8. Accessibility

Verify accessibility.

- [ ] Semantic HTML.
- [ ] Proper heading hierarchy.
- [ ] Keyboard navigation.
- [ ] Focus states.
- [ ] Accessible forms.
- [ ] Sufficient color contrast.
- [ ] Reduced motion respected.
- [ ] Meaningful alt text.
- [ ] Framework lifecycle routes (loading, error, not-found) are accessible.
- [ ] Repeatable components accept their semantic heading level from the caller.
- [ ] Native elements used in preference to custom reimplementations.

Target WCAG AA compliance.

---

# 9. SEO

Verify SEO.

- [ ] Metadata.
- [ ] Open Graph.
- [ ] Open Graph image is a raster format (PNG/JPEG) and renders correctly across major social platforms.
- [ ] Twitter metadata.
- [ ] Canonical URLs.
- [ ] Robots.
- [ ] Sitemap.
- [ ] Structured data where appropriate.

Reuse Blueprint Base infrastructure.

---

# 10. Pages

The required pages are **the Essential Pages of the selected architecture, plus the pages of every module the blueprint carries.**

There is no universal page list. Read the requirement from:

- The architecture's *Essential Pages* section — `.hubzero/architecture/<id>.md`
- Each carried module — `.hubzero/architecture/modules.md`
- Any composed architecture's *Essential Pages* — see the blueprint's registry entry

Then verify:

- [ ] Every page in the architecture's Essential Pages exists and is complete.
- [ ] Every page required by each carried module exists and is complete.
- [ ] Where architectures are composed, the composed architecture's pages exist.
- [ ] Index-and-detail pairings are genuinely paired — every listed record has its own complete page, with its own content.
- [ ] The architecture's complete user journey connects these pages, not merely that each exists (see `.hubzero/architecture/principles.md` — Complete User Journeys).
- [ ] Framework lifecycle routes exist and are complete: loading, error, not-found.

The most common failure is an index listing several distinct records where the detail route renders one shared body. Verify each detail page individually rather than confirming the route resolves. See `.hubzero/content/principles.md` — Content Depth Is Authored.

---

# 11. Runtime Verification

Verify every route. A route that only passes when hard-refreshed, and never when reached through client-side navigation, is not verified — check both explicitly.

## First Load

- [ ] Every route loads successfully on a direct/hard-refresh visit.
- [ ] No console errors on first load.
- [ ] No hydration warnings on first load.
- [ ] No runtime exceptions on first load.
- [ ] Dynamic routes function correctly.

## Client-Side Navigation

- [ ] Every route is also reachable by navigating from another page within the app, not only by direct URL.
- [ ] Navigation works in both directions (forward and back).
- [ ] Active navigation state reflects the current route after a client-side transition.
- [ ] No unintended horizontal overflow at any viewport width, before or after navigating.

## Hydration After Navigation

- [ ] No hydration warnings after navigating to a route client-side, not only on its first load.
- [ ] Components that depend on client-only state (locale, viewport, storage) render correctly after a client-side transition, not only after a hard refresh.

## Browser Console

- [ ] Console inspected at first load, after client-side navigation to every route, and after returning — not only once at the start of the check.
- [ ] No console errors or warnings at any of those points.

## Back and Forward Navigation

- [ ] Browser back and forward reach the expected route.
- [ ] Transient UI — drawers, panels, disclosures, overlays — resolves correctly after history navigation.
- [ ] Filter, search, and view state held in the URL survives back, forward, and refresh.

## Progressive Enhancement

See `.hubzero/rendering.md`.

- [ ] With JavaScript disabled, every piece of essential content is visible on every route.
- [ ] No content starts in a hidden state it can only escape via script.
- [ ] Above-the-fold content is present and stable in the server's output.
- [ ] Maps, galleries, and observer-driven surfaces have a working non-scripted fallback.

## Reduced Motion

- [ ] Verified with reduced motion preferred.
- [ ] The result is a complete alternative composition, not merely animation disabled.
- [ ] No content becomes unreachable or invisible when motion is removed.

## Interaction Surfaces

- [ ] Forms behave as documented, including their honest limitations.
- [ ] Filters and search verified, including their empty results.
- [ ] Galleries, carousels, drawers, and overlays verified by keyboard and by touch.
- [ ] Overlays and floating navigation verified against their actual stacking context.
- [ ] Every interactive surface is reachable and operable by keyboard, with focus restored after dismissal.

## Responsive States

- [ ] Verified at real handheld widths on a touch device, not only in a narrowed desktop window.
- [ ] Every hover-revealed affordance has a working touch equivalent.
- [ ] No horizontal document overflow at any width.

## User Journeys

Verify the architecture's complete journey end to end, not only that its routes exist. See `.hubzero/architecture/principles.md` — Complete User Journeys.

- [ ] Landing → navigation → content → interaction → conversion completes.
- [ ] The journey survives a refresh at each step.
- [ ] The journey survives back-navigation at each step.
- [ ] The conversion terminus states its honest limitations at the point of action.

## General

- [ ] Verified in multiple browsers, named in the release record.
- [ ] Images load correctly.

---

# 12. Build Verification

Run every verification command.

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Confirm:

- [ ] Installation successful.
- [ ] Lint passes.
- [ ] TypeScript passes.
- [ ] Production build passes.

Runtime verification is performed against the **production build**, not only the development server. Hot reload introduces transient states absent from an optimized build, and conceals others.

- [ ] Runtime verification performed against the production build.

---

# 13. Documentation

Verify documentation.

- [ ] README complete.
- [ ] Installation instructions.
- [ ] Development instructions.
- [ ] Build instructions.
- [ ] Customization guide.
- [ ] Folder structure explained.
- [ ] Placeholder content documented.
- [ ] Screenshots included.
- [ ] README communicates HubZero attribution — the repository is a HubZero Blueprint and the business it depicts is fictional.

---

# 14. Release Assets

Prepare release assets.

- [ ] Homepage screenshot.
- [ ] Additional page screenshots.
- [ ] Release notes.
- [ ] Changelog updated.
- [ ] Version bumped.
- [ ] Git tag prepared.

---

# 15. Experience Standard

Verify the blueprint satisfies `.hubzero/experience/EXPERIENCE_STANDARD.md` in full.

- [ ] Engineering Review complete.
- [ ] Design Review complete, including the Mobile Experience Overhaul pass.
- [ ] Experience Generation Verification pass complete.
- [ ] Brand assets generated and integrated (`.hubzero/experience/branding.md`).
- [ ] HubZero attribution present in footer, About page, and README (`.hubzero/experience/branding.md` — HubZero Attribution).
- [ ] Photography generated and integrated (`.hubzero/experience/photography.md`).
- [ ] **Asset Audit complete** (`.hubzero/experience/assets.md`) — every visual slot has an intentional asset, every asset is referenced by configuration, and the set is visually coherent.
- [ ] Open Graph image is raster, correctly proportioned, and legible at preview size.
- [ ] Mobile crops authored wherever a desktop composition does not survive a portrait viewport.
- [ ] Lifecycle and empty states authored in the product's voice and expressed in the Design Language.
- [ ] No temporary generation tooling, prompt files, or intermediate exports remain in the repository.

This section verifies the experience standard, not just technical completeness. Do not duplicate its criteria here — consult the referenced documents directly.

---

# 16. Retrospective

The Project Knowledge Package is completed **before release approval**. See `.hubzero/release/PROJECT_KNOWLEDGE_PACKAGE.md`.

- [ ] Project Knowledge Package authored against the required schema.
- [ ] Architecture and design language recorded by canonical `id`.
- [ ] Blueprint Core version recorded.
- [ ] Limitations recorded specifically and completely.
- [ ] Lessons Learned recorded as findings, including failures and near-misses.
- [ ] Package committed to the blueprint repository.

## Maintainer Exception

This section is a release gate, not an advisory step. A blueprint is not approved for release with an unwritten retrospective.

Where an external blocker genuinely prevents completion, a HubZero Blueprint Core maintainer — and only a maintainer — may approve an exception by recording, in the Release Information block below:

- [ ] The specific external blocker preventing completion.
- [ ] The maintainer approving the exception, by name.
- [ ] The date by which the retrospective will be completed.

An exception is a deferral with an owner and a date. It is not a waiver. "There was no time" is not an external blocker, and an exception recorded without all three fields is not an exception.

---

# 17. Final Review

Review the blueprint holistically.

Ask:

- Does this feel like a reusable blueprint rather than a finished client website?
- Is the branding easy to replace?
- Is the architecture maintainable?
- Does the design language remain consistent?
- Could another engineer confidently build upon this foundation?

If any answer is "No", address it before releasing.

---

# Release Approval

## Verification

- [ ] All checklist items complete.
- [ ] Repository reviewed.
- [ ] Final manual walkthrough completed.
- [ ] Retrospective complete, or a maintainer exception recorded in full (see section 16).

## Release Decision

- [ ] Ready for Release
- [ ] Requires Additional Work

---

## Release Information

Blueprint:

Version:

Release Date:

Reviewed By:

Approved By:

Retrospective Exception (if any) — blocker:

Retrospective Exception (if any) — approved by:

Retrospective Exception (if any) — completion date:

Git Commit:

Git Tag: