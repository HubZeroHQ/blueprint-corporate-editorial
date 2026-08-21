# HubZero Design Principles

Every HubZero Blueprint is expected to feel different.

Different industries require different visual languages. Different businesses deserve their own identity. Different brands should never feel like variations of the same website.

The purpose of these principles is not to define how every blueprint looks.

Their purpose is to define how every HubZero experience feels.

These principles should influence every design decision regardless of architecture category or design language.

---

# Elegance Above All

Elegance is the defining characteristic of every HubZero project.

Elegance is not minimalism.

It is not luxury.

It is not typography.

It is not animation.

Elegance is the outcome of thoughtful engineering, excellent user experience, deliberate visual decisions, and careful attention to detail working together.

If a design decision improves elegance, it is usually the correct decision.

---

# Every Design Must Earn Trust

Users decide whether to trust a product within moments.

Every page should immediately communicate professionalism, competence, and clarity.

Trust is created through consistency, visual hierarchy, readability, thoughtful interactions, and predictable behavior.

It is never created through unnecessary decoration.

---

# Design With Purpose

Every element should exist for a reason.

Every section should communicate something valuable.

Every animation should reinforce understanding.

Every interaction should make the experience easier.

If something exists only because it looks interesting, question whether it belongs.

---

# Originality Matters

Blueprints are foundations, not templates.

Every completed client project should develop its own visual identity.

Two HubZero projects should never feel interchangeable.

Shared engineering should never produce shared aesthetics.

---

# Build Experiences, Not Pages

A website should feel cohesive.

Every page should naturally lead into the next.

Navigation, content, interactions, and layout should work together to guide users through a clear journey.

Think about the complete experience rather than isolated screens. See `.hubzero/architecture/principles.md` — Complete User Journeys for concrete per-architecture journey examples.

---

# Visual Hierarchy Is Communication

Users should never wonder where to look first.

Hierarchy should naturally guide attention through layout, spacing, typography, contrast, imagery, and composition.

Important information should feel important without demanding attention.

---

# Simplicity Requires Discipline

Simple interfaces are often the hardest to design.

Removing unnecessary complexity creates confidence.

Removing necessary information creates confusion.

Aim for clarity rather than emptiness.

---

# Motion Should Reinforce Understanding

Animation should communicate.

Motion exists to express hierarchy, feedback, state, progression, and focus — what changed, what is happening, or what deserves attention right now. It should explain relationships, reduce cognitive load, and create continuity between interactions.

Motion should never exist purely for decoration, and it should never distract from content.

A Motion Language is a philosophy, not a duration setting. Choosing "150ms ease-out" is not choosing a Motion Language any more than choosing a font size is choosing a Typography Language — the decision that matters is what motion is *for* in this interface, and how much of the interaction language it carries.

Zero motion is a completely valid answer to that decision, not an unfinished one. A Design Language can deliberately choose no animation and still express a rich Interaction Language through color, contrast, borders, or state change instead of movement — see `.hubzero/design/languages/brutalist.md` for a language built on exactly this choice. What distinguishes an intentional zero-motion language from an unfinished one is whether hover, focus, and active states were designed at all: a zero-motion language with no considered interaction feedback has not made a motion decision, it has skipped one.

---

# Consistency Builds Confidence

Interfaces should behave predictably.

Components performing similar functions should feel related.

Consistency allows users to focus on their goals rather than learning new patterns throughout the interface.

---

# Content Comes Before Decoration

Content is the product.

Design exists to present information clearly and meaningfully.

Visual elements should support content rather than compete with it.

---

# Respect Attention

Every element asks for the user's attention.

Spend that attention carefully.

Avoid unnecessary visual noise, competing focal points, repetitive animations, or decorative complexity that does not improve understanding.

---

# Design for Longevity

Avoid trends that quickly become dated.

Prefer timeless design decisions that remain effective years after deployment.

A HubZero project should age gracefully.

---

# Every Pixel Is Intentional

Nothing should feel accidental.

Spacing, alignment, proportions, rhythm, imagery, interaction, and motion should all contribute toward a cohesive experience.

Deliberate decisions create confidence.

Confidence creates trust.

---

# Every Design Language Is a Complete System

A design language is not a mood board. It is a system of decisions that removes ambiguity from implementation.

The canonical list of design languages lives in `design/languages/REGISTRY.md`. This document defines what a design language must contain; the registry defines which ones exist. Never enumerate design languages anywhere else.

## The Design Language Contract

Every document under `design/languages/` defines **eleven subsystems** wrapped by **six contract sections**.

**Contract sections** — how the language is decided and bounded:

* **Decision Hierarchy** — which subsystem wins when two of them conflict.
* **Signature Traits** — what this language is, in its own terms.
* **Anti-Patterns** — what it explicitly forbids.
* **Responsive Behavior** — how the language expresses itself at handheld width.
* **Token Contract** — which shared tokens the language must own, and to what character.
* **Suitable Architectures** — where it belongs, and where it does not.

**Subsystems** — the decisions themselves:

* **Typography Language** — scale, rhythm, voice, and type strategy.
* **Colour Language** — palette philosophy, semantic roles, and restraint.
* **Motion Language** — how the interface moves and why.
* **Photography Language** — subject, lighting, and treatment of imagery.
* **Corner Language** — how corners are treated across components.
* **Border Language** — presence, weight, and role of borders.
* **Shadow Language** — presence, depth, and role of elevation.
* **Spacing Language** — the rhythm of whitespace.
* **Interaction Language** — how hover, focus, and active states behave.
* **Component Language** — how recurring components express the language.
* **Visual Rhythm** — how all of the above compose into a cohesive sequence across a page.

When applying a design language, apply all of it. A blueprint that gets typography right but leaves motion, corners, or spacing undecided has not adopted a design language — it has adopted its typography and improvised the rest. Improvisation is where two blueprints built on different design languages accidentally converge on the same generic result.

*Composition* is deliberately not a separate subsystem. Within a page it is Visual Rhythm; across viewports it is Responsive Behavior. Naming it a third time would duplicate rather than add.

---

# A Design Language Is a Set of Prohibitions

The most reliable predictor of whether a blueprint holds its design language is not how well its inspiration is described. It is how clearly it states what it refuses to do.

"One radius, one border weight, no shadows, three semantic colours each reserved for one meaning" produces consistency across dozens of routes. An evocative paragraph about the mood a language should evoke does not, because two engineers reading it will make different decisions and both will believe they complied.

This is why **Anti-Patterns is a required section, not an optional flourish**. A language that only describes what it likes has given an implementer no way to be wrong, which means it has given them no constraint at all.

Prohibitions should be specific enough to be checked. "Avoid clutter" cannot be verified. "No more than one accent colour per view, and never on a surface that already carries emphasis" can.

---

# The Convergence Failure

Design languages exist to make blueprints different from each other. Left unenforced, they reliably fail at exactly that.

The mechanism is always the same: a language's most visible subsystem gets implemented, the rest are inherited from whatever the shared foundation happened to default to, and every blueprint converges on the same neutral result regardless of which language it claims. The claimed language survives in the documentation and not in the product.

Three defences, each of which must actually be applied:

**Own your tokens.** A design language that leaves shared radius, motion, or spacing tokens at their inherited defaults has not made those decisions — it has accepted someone else's. The Token Contract section exists to state which tokens the language must own. A blueprint whose token values are indistinguishable from the foundation it started with has not adopted its language.

**Name a type strategy, not just a tone.** Typography is where convergence is most visible and most easily measured. A language's Typography section must describe the *strategy* — what kind of type system, chosen for what reason, doing what work — and its Anti-Patterns must name what that strategy excludes. A language whose typography is compatible with a neutral geometric grotesque has not made a typographic decision, because that is what every unfinished language reaches for.

**Let identity emerge from relationships.** No single subsystem carries a language. Identity comes from how typography, spacing, rhythm, surfaces, borders, corners, motion, and imagery *agree with each other*. Two languages that differ only in palette are one language with two colour schemes. If a language could be converted into another by swapping its colours, it is not yet distinct.

---

# The Contrast Contract

Every foreground value must be verified against **every surface it actually appears on**, not against white alone.

Muted, warm, and desaturated palettes sit closest to the accessibility threshold precisely because they read as obviously legible in isolation. A secondary text colour that passes comfortably on white can fail on a cream, parchment, or tinted surface in the same system — and reviewing it visually will not reveal that, because it still looks fine.

Contrast is a measured property, not a judgement. Where a value is tuned to satisfy it, record the before and after so a later edit does not silently undo the fix.

This applies equally to focus indicators, borders that carry meaning, and any state expressed through colour alone.

---

# Dark Mode Is an Authored Palette

Where a design language supports a dark appearance, that appearance is designed — not derived by inverting the light one.

Mechanical inversion produces surfaces that are too heavy, accents that lose their meaning, borders that disappear, and shadows that stop doing anything at all. Ink, surfaces, accents, borders, elevation, and focus each need values chosen for the dark context and verified against the Contrast Contract independently.

A design language that supports both appearances owns two complete palettes, and both express the same language.

---

# Surfaces Carry Context

Where a design language uses multiple surface treatments — a dark section within a light page, an inverted band, a tinted panel — the surface should carry its own context, and descendants should adapt to it.

Setting the context once on a container is more reliable than threading an appearance flag through every component inside it. Threaded flags are missed: a nested button, a focus ring, a border, or a link colour gets left behind, and the failure only appears on the one component nobody re-checked.

Each design language decides which surfaces it has and what they mean. The principle is that a component should be able to render correctly by inheriting where it is, rather than by being told.

---

# Empty, Loading, and Error States Express the Language

The states nobody designs are the states that reveal whether a design system is real.

A loading state, an error boundary, and an empty result set are reached by real visitors, and they are where an unfinished design language becomes obvious — because they are usually built from whatever the framework provided rather than from the system. If these states cannot be expressed using the same primitives, tokens, and voice as the rest of the site, the system is incomplete.

Their copy is authored content in the product's voice, not markup — see `.hubzero/content/principles.md` — Empty States Are Authored Content.

---

# Navigation Is a Signature, Not a Recipe

Floating navigation has proven to be a strong HubZero signature. Blueprint Core defines the philosophy behind it, never the implementation.

Every blueprint should design its own floating navigation, expressed through its own Design Language. Shared philosophy, unique execution — the same principle that governs everything else in this document.

Navigation should define its own reusable appearance states rather than accumulating page-specific hacks over time. Typical states include transparent, light, dark, frosted, scrolled, and mobile. Each blueprint decides which states it needs and how its Design Language expresses them, but the states themselves should be deliberate and named, not ad hoc conditionals scattered through the component.

---

# Signature Experience

Every blueprint should include one deliberate, memorable interaction appropriate to its architecture and Design Language — an elegant floating navigation, a cinematic transition, a piece of live system motion, an immersive scroll sequence. What it is depends entirely on the blueprint.

Restraint is what makes it work. One well-executed signature moment is memorable. Five competing ones cancel each other out and read as noise. Encourage memorable restraint, not maximal animation.

---

# The HubZero Signature

The signature of HubZero is not a particular layout, component library, color palette, animation style, or typography.

The signature is elegance.

Every project should express that elegance differently.

If two HubZero projects look alike, something has gone wrong.

If two HubZero projects feel equally thoughtful, equally refined, and equally effortless to use, the principles have been successfully applied.
