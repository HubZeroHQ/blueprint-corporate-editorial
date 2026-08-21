# Review

Every completed implementation should be reviewed before it is considered finished.

Review is not about finding mistakes.

It is about ensuring the final result reflects HubZero's engineering standards, design philosophy, and long-term quality expectations.

Never assume that working software is finished software.

This document covers Engineering Review — is the implementation correct, maintainable, and complete? A separate pass, Design Review, asks whether the result is worth showing a client. See `.hubzero/agents/design-review.md`. Apply `.hubzero/principles.md` throughout this review.

---

# Review the Problem

Before reviewing the implementation, verify that the original problem has actually been solved.

Ask:

* Does this satisfy the user's request?
* Does it satisfy the business objective?
* Does it improve the product?

A technically correct solution may still solve the wrong problem.

---

# Review the User Experience

Evaluate the complete experience rather than isolated components.

Consider:

* Clarity
* Navigation
* Information hierarchy
* Discoverability
* Accessibility
* Feedback
* Responsiveness

The interface should feel effortless to use.

Accessibility review covers every route the framework generates, not only the routes explicitly built — loading, error, and not-found states need the same semantic structure, focus management, and keyboard reachability as any other page. See `.hubzero/principles.md` — Accessibility by Default.

---

# Review the Design

Confirm that the implementation remains consistent with:

* `.hubzero/design/principles.md`
* The selected architecture
* The selected SEO strategy
* The selected design language

Ask:

* Does this feel intentional?
* Does this improve trust?
* Does it preserve the blueprint's personality?
* Is anything visually unnecessary?

Elegance should emerge from thoughtful decisions rather than decoration.

---

# Review the Architecture

Verify that the implementation respects the chosen architecture.

The website should clearly communicate its intended purpose.

New features should strengthen the overall experience rather than disrupt it.

---

# Review the SEO

Confirm that the implementation remains consistent with the selected SEO strategy.

Evaluate:

* Information architecture
* Metadata
* Heading hierarchy
* Internal linking
* Structured data
* Crawlability
* Content organization

The implementation should improve discoverability without compromising user experience.

---

# Review the Engineering

Evaluate:

* Simplicity
* Maintainability
* Readability
* Reusability
* Scalability

Avoid unnecessary complexity.

Prefer solutions another engineer can quickly understand and confidently extend.

---

# Verify Infrastructure Is Wired

**A file existing is not the same as a file running.**

Infrastructure under `src/seo/`, `src/providers/`, or anywhere else is only real once something in the application actually imports or mounts it. A correct, complete, well-written metadata factory that no route calls produces exactly the same result as no metadata factory at all — except that a reviewer skimming the directory will assume it works.

Verify explicitly:

* Metadata generation is called by the routes that need it.
* Robots and sitemap endpoints are actually served, not merely defined.
* Providers are mounted, not just exported.
* Structured data components are rendered on the pages they describe.
* Shared utilities are used rather than shadowed by local reimplementations.

Unwired infrastructure is worse than absent infrastructure, because it reads as done.

---

# Verify Content Derivation

Any list that could have been derived from canonical content records, and was written out instead, is a finding — even where it is currently accurate.

Check that routes, metadata, sitemap entries, structured data, breadcrumbs, navigation, related content, search indexes, filter options, and counts all derive from the content model. See `.hubzero/content/principles.md` — Derivation, Never Restatement.

The test: add a content record and see what fails to notice. Anything requiring a second edit was a restatement, and it will drift.

Also verify referential integrity — slug references resolve, and unresolvable ones fail loudly or degrade deliberately rather than rendering as a broken page.

---

# Verify Rendering and Runtime

Review against `.hubzero/rendering.md`, not only against whether the page currently looks right.

* **Determinism** — walk the hazard register. Time, locale, timezone, randomness, viewport, media queries, storage, browser APIs, observers, and animation state each handled deliberately.
* **Runtime boundaries** — client islands are declared and bounded rather than accumulated. Data crossing into an island is summarized rather than passed whole.
* **Progressive enhancement** — essential content is present and readable before JavaScript runs. Nothing starts in a hidden state it can only escape via script. Above-the-fold content is stable in the server's output.
* **Reduced motion** — a complete alternative composition, not merely animation disabled.
* **Transient state** — drawers, panels, and overlays resolve correctly under browser history navigation.

These failures are silent. The build passes, the page looks correct to whoever built it, and the visitor who experiences the failure is not in the room.

---

# Review Consistency

The project should feel cohesive.

Check for consistency in:

* Layout
* Components
* Spacing
* Typography
* Motion
* Content structure
* Naming
* Interaction patterns

Consistency builds confidence.

---

# Review Production Readiness

Confirm that the implementation is suitable for real-world deployment.

Verify that:

* Placeholder content has been removed where appropriate.
* Error states have been considered.
* Empty states behave correctly, including anywhere filtering or search can legitimately return zero results.
* Responsive layouts function correctly.
* Accessibility has not been compromised.
* Existing functionality remains intact.
* Nothing simulates functionality the blueprint does not actually have — see `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

Blueprints should always move toward production readiness.

---

# Improve Before Approving

If something can be meaningfully improved without introducing unnecessary complexity, improve it.

Do not stop at "good enough."

Pursue thoughtful refinement.

---

# Review Outcome

A successful review does not automatically mean the implementation is complete.

Once engineering review findings have been addressed, the implementation must proceed to Design Review (`.hubzero/agents/design-review.md`) before the HubZero release process.

Execute the canonical release workflow defined in:

`.hubzero/release/RELEASE_CHECKLIST.md`

Every applicable verification item must pass before the implementation may be considered production-ready.

If any verification fails:

* Identify the root cause.
* Correct the implementation.
* Repeat verification.
* Continue until all applicable requirements have been satisfied.

The release checklist is the final quality gate for every HubZero Blueprint.

Do not approve an implementation that has not successfully completed the release process.


# Final Question

Before completing the review, ask one final question:

> If this implementation represented HubZero publicly, would we be proud to ship it?

If the answer is anything less than an unqualified **yes**, continue refining.

---

# Guiding Principle

A review is successful when the final result is not only correct, but thoughtful, elegant, maintainable, and worthy of becoming part of a HubZero blueprint.
