# Implementation

Implementation is the process of translating a well-planned solution into production-ready software.

Write code with intention.

Every line should improve the project.

Apply `.hubzero/principles.md` throughout — particularly Inspect Before Creating, Extension Over Replacement, and Maintainability Over Cleverness. This document covers what is specific to the implementation stage.

---

# Follow the Plan

Do not redesign the project while implementing it.

Respect the established:

* Architecture
* Design language
* User goals
* Project requirements

Major changes should be discussed before implementation continues.

---

# Build Production-Ready Software

Blueprints are not prototypes.

Every implementation should be suitable for deployment unless explicitly stated otherwise.

Avoid temporary solutions that will require immediate replacement.

---

# Preserve the Design Language

Implementation should reinforce the chosen design language.

Avoid introducing components, layouts, interactions, or visual decisions that conflict with the blueprint's intended personality.

When uncertain, prioritize consistency over experimentation.

---

# Preserve the SEO Strategy

Implementation should reinforce the selected SEO strategy.

Information architecture, navigation, metadata, headings, structured data, internal linking, and content organization should support discoverability.

Avoid implementation decisions that unintentionally weaken SEO.

---

# Think Beyond Code

Good implementation includes:

* User experience
* Accessibility
* Performance
* SEO
* Responsiveness
* Maintainability
* Developer experience

These are part of engineering, not afterthoughts.

---

# Preserve Consistency

New work should feel like it belongs.

Components, layouts, interactions, spacing, and content structure should remain consistent with the rest of the blueprint.

Consistency builds confidence.

---

# Challenge Poor Decisions

If a requested implementation significantly reduces engineering quality or user experience:

* Explain the trade-offs.
* Recommend a better approach.
* Respect the user's final decision once confirmed.

Do not silently introduce poor solutions.

---

# Build on the Content Model

Implementation reads from canonical content records rather than restating them.

Routes, metadata, sitemap entries, structured data, breadcrumbs, navigation, related content, and search indexes are all derived. If implementing a feature requires writing out a list that could have been computed from the content, the content model is being bypassed — see `.hubzero/content/principles.md`.

The practical test during implementation: after adding a content record, nothing else should need editing.

---

# Decide What Is True Before JavaScript Runs

Rendering determinism and progressive enhancement are design-time decisions, not defects to fix once a warning appears.

Before writing a component that reads from the browser, consult `.hubzero/rendering.md`. Anything knowable only on the client belongs in a state update after mount, never in the value the first render depends on. Essential content must be meaningful before any script executes.

Retrofitting this after building the obvious version means hunting the same class of bug through every component written the same way.

---

# Comment the Tradeoff, Not the Code

A comment that restates what the code does adds nothing. A comment that records **why a decision was made** is what survives a handover.

Where a decision is non-obvious — a constraint that must not be broken, a workaround for a genuine limitation, a value tuned for a measured reason — record the reasoning and name the principle it serves. Citing the specific `.hubzero` document makes the constraint traceable rather than mysterious.

Six months later, that is the difference between a maintainable blueprint and a pile of choices nobody can safely change.

---

# Finish Completely

See `.hubzero/principles.md` — Finish Completely. Edge cases, empty states, and existing functionality should all be verified before implementation is considered done, not just the requested happy path.

Empty states are authored content in the product's voice, designed before the dataset can be empty — see `.hubzero/content/principles.md` — Empty States Are Authored Content, and the *Common States* section of the active architecture document.


# Guiding Principle

Implementation is not about writing the most code.

It is about producing the simplest, most maintainable, and most thoughtful solution to the problem being solved.
