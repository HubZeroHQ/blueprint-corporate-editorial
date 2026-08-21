# Design Review

Engineering Review asks: *is this correct?*

Design Review asks: *would someone hire HubZero after seeing this?*

These are independent responsibilities. A blueprint can pass every engineering check and still read as a starter template. Design Review exists to catch that gap.

Design Review happens after Engineering Review has passed, and before Release Verification.

---

# Three Passes

Design Review consists of three sequential passes. Each has a different question. Do not skip a pass because an earlier one passed.

1. **Design Review** — Is the experience premium, coherent, and consistent with the chosen Design Language?
2. **Mobile Experience Overhaul** — Does mobile feel like its own crafted product rather than a collapsed desktop layout? See `.hubzero/design/mobile-experience.md`.
3. **Experience Generation Verification** — Does the blueprint feel like a believable commercial product rather than a technically complete template? See `.hubzero/experience/EXPERIENCE_STANDARD.md`.

---

# Pass 1: Design Review

Evaluate the subjective quality of the experience, not just its correctness.

* Hover and interaction quality
* Motion quality — does it communicate, or just move? For an intentionally zero-motion Design Language, is the interaction language still fully expressed through non-motion means (color, contrast, borders, state changes)? See `.hubzero/design/principles.md` — Motion Should Reinforce Understanding.
* Loading and transition states
* Spacing rhythm and visual hierarchy
* Empty states
* Overall perceived polish

## Design Language Contract Verification

Confirm the implementation satisfies the **complete contract** defined by the active Design Language — the eleven subsystems (Typography, Colour, Motion, Photography, Corner, Border, Shadow, Spacing, Interaction, Component, Visual Rhythm) and the six contract sections (Decision Hierarchy, Signature Traits, Anti-Patterns, Responsive Behavior, Token Contract, Suitable Architectures). See `.hubzero/design/principles.md`.

A blueprint that nails typography but ignores its Motion Language does not pass.

**Verify the Token Contract explicitly.** Each language states which shared values it must own rather than inherit. This is a checkable property, not a matter of taste:

* Compare the blueprint's token values against the foundation it started from. **A token file that is byte-identical to Blueprint Base's means the design language was not adopted** — its values were inherited, and inherited values belong to no language.
* Confirm every token the language's Token Contract names is defined by the blueprint.
* Confirm there is one source of truth per token. Where a value is defined in two places, the cascade decides which wins, and that is not a design decision.

**Verify the Anti-Patterns.** Each language states what it forbids. Walk that list against the implementation — a language's prohibitions are more diagnostic than its preferences, because they are what stop it converging on a neutral result.

**Verify the separation from adjacent languages.** The registry records each language's nearest neighbours. Confirm the implementation would not be mistaken for one of them.

## Contrast Contract

Verify every foreground value against **every surface it actually appears on**, not against white alone.

Muted, warm, and desaturated palettes sit closest to the threshold precisely because they read as obviously legible in isolation. Visual review will not catch this; it is a measured property.

Include focus indicators, borders that carry meaning, and any state expressed through colour alone. Where a language supports a dark appearance, verify it as an independent palette rather than assuming the light verification transfers.

Confirm the blueprint has one deliberate signature interaction appropriate to its architecture and Design Language, not several competing ones. See `.hubzero/design/principles.md` — Signature Experience. Restraint is the goal. A blueprint trying to be memorable everywhere is memorable nowhere.

---

# Pass 2: Mobile Experience Overhaul

Confirm mobile has been treated as its own experience, not a byproduct of the desktop layout.

Full guidance: `.hubzero/design/mobile-experience.md`.

Do not consider this pass complete because the layout is responsive. Responsive means usable. This pass verifies mobile is premium.

---

# Pass 3: Experience Generation Verification

Confirm the blueprint would survive being shown to a prospective client without an explanation that "the real content isn't in yet."

* No gray placeholder blocks anywhere.
* Brand assets (logo, favicon, brand mark, Open Graph image, apple touch icons, light/dark variants) exist and are wired into metadata, navigation, and footer — not just generated and left unused. Formats follow the Asset Contract — the Open Graph image is raster (PNG/JPEG); SVG is acceptable for the logo, brand mark, and favicon. See `.hubzero/experience/assets.md`.
* Photography is cohesive across the site and consistent with the active Design Language's Photography Language.
* The fictional company and its content are internally consistent (name, industry, tone, imagery all agree with each other) and generated rather than adapted from any real organization. See `.hubzero/experience/content.md` — Fictional Content Policy.
* Written content — pricing, FAQs, legal pages, company history, support content — reads as production-ready rather than filler. See `.hubzero/experience/content.md`.
* Content is editorially consistent — one locale, spelling convention, date format, currency, measurement system, and terminology throughout, with consistent address and phone formatting. See `.hubzero/experience/content.md` — Editorial Consistency.
* Nothing simulates functionality the blueprint does not actually have — no fake form submissions, no fake persistence, no dishonest dynamic behavior. See `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.
* HubZero attribution is present in the footer, About page, and README, and reads as unobtrusive rather than promotional. See `.hubzero/experience/branding.md` — HubZero Attribution.
* No temporary generation scripts, one-off tooling, or scratch files remain in the repository.

Full standard: `.hubzero/experience/EXPERIENCE_STANDARD.md`.

---

# Non-Goals

Design Review evaluates and refines the experience. It does not change what the blueprint is.

Do not use Design Review to:

* Change routing or information architecture.
* Modify data schemas or infrastructure.
* Alter the chosen Architecture or Design Language.
* Introduce new engineering abstractions.

If a design problem can only be solved by an infrastructure change, stop and raise it explicitly rather than making the change under the banner of Design Review. That decision belongs to Planning or Implementation, not here.

---

# Final Question

> If a prospective client saw this blueprint with no further explanation, would they conclude HubZero cares about details, or that this is an unfinished starter template?

If the answer is anything short of the first, continue refining before proceeding to Release Verification.
