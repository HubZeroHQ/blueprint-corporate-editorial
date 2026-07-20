# Engineering Principles

This document is the canonical source of HubZero's engineering principles.

Every other document inside `.hubzero` assumes these principles rather than restating them. `architecture/`, `seo/`, and `design/` describe domain-specific knowledge. `agents/` describes process. This document describes the reasoning that should guide both.

If a decision is not covered by domain-specific guidance, fall back to these principles.

---

# Read Before Writing

Understand existing code, content, and structure before changing it.

Never modify what you do not understand.

A change made without reading the surrounding system is a guess, not an engineering decision.

---

# Inspect Before Creating

Before introducing a new file, folder, component, utility, or abstraction, determine whether an equivalent already exists.

Blueprint Base and the blueprint itself already solve many problems. Search before building.

---

# Infrastructure Before Implementation

Understand the infrastructure a blueprint already provides before adding to it.

Configuration, providers, utilities, layout primitives, and SEO infrastructure are already established by Blueprint Base. New work should sit on top of that foundation, not beside it.

---

# Extension Over Replacement

Prefer extending existing systems over replacing them.

Replacing working infrastructure to suit a single feature usually indicates the feature was not planned against the existing system carefully enough.

---

# Composition Over Duplication

If a pattern is used more than once, it should be composed from a shared source rather than copied.

Duplication is not a shortcut. It is a future inconsistency waiting to happen.

---

# Configuration Over Hardcoding

Branding, content, navigation, and business-specific values belong in configuration, not embedded directly inside components.

A blueprint should remain personalizable without editing implementation code.

---

# Maintainability Over Cleverness

Choose the solution another engineer can understand quickly, not the one that demonstrates the most skill.

Clever code that requires explanation has already failed as documentation.

---

# Simplicity Requires Justification for Complexity

Choose the simplest solution that fully satisfies the requirement.

Every abstraction, dependency, and architectural layer must earn its place. Do not build for hypothetical future requirements.

---

# Accessibility by Default

Accessibility is not a review-stage checklist item. It is a property of correct implementation.

Semantic HTML, keyboard navigation, focus management, and sufficient contrast should exist because the implementation was built correctly, not because they were added afterward.

This extends to every route a framework generates on a project's behalf, not only the routes explicitly built — loading states, error boundaries, and not-found pages. A loading state needs an accessible live region, not just a visual spinner. An error boundary needs a heading hierarchy and keyboard-reachable recovery action, not just a caught exception. These routes are reached by real visitors and deserve the same rigor as any page that was hand-built.

---

# SEO as Engineering

SEO is not a layer applied after implementation. It is a consequence of correct information architecture, semantic structure, and metadata.

Treat discoverability as a property of good engineering, not a separate task.

---

# Blueprint Core Defines Decisions, Not Implementations

`.hubzero` teaches what to decide and why. It does not teach how to write React, Next.js, TypeScript, or CSS.

If a document only repeats knowledge a modern coding model already possesses, it does not belong in `.hubzero`.

---

# Interface State Should Be Independently Derived

A recurring engineering failure across HubZero blueprints is coupling unrelated interface states together — for example, deriving a drawer's appearance from scroll position, or a navigation bar's color from hero visibility.

Each interface state (scroll position, drawer open/closed, navigation appearance, hero visibility) should be computed independently and composed, not chained through one another. Coupled state is difficult to reason about and breaks in combinations that were never explicitly tested.

Relatedly, be deliberate about stacking context. `transform`, `filter`, and `backdrop-filter` all create new stacking contexts. Before relying on `z-index` to order drawers, overlays, or floating navigation, verify which ancestor established the stacking context those elements are actually painted within.

---

# Predictable Client/Server Rendering

A recurring engineering failure across HubZero blueprints is content that differs between the server-rendered markup and the client's first render — a timestamp formatted differently, a value read from `localStorage` or `window` before the client has mounted, a random or generated ID that differs between the two renders, or content that depends on the visitor's timezone or locale-dependent formatting.

The first client render must produce markup that matches what the server produced. Anything that can only be known on the client — device APIs, stored preferences, locale, viewport size — belongs in a state update that runs after mount, not in the value used for the initial render. This is a property of correct implementation, not a runtime warning to patch afterward.

This principle is framework-agnostic. Every modern framework that renders on the server and hands off to the client is susceptible to the same failure mode, and the fix is the same regardless of which framework is in use.

---

# Honest Demonstration Over Simulated Functionality

Every HubZero blueprint is a reference implementation of a fictional company, not a live product with a real backend. A recurring failure is dressing up that gap instead of being honest about it — a contact form that silently discards what it collects, a login screen that accepts any input, a dashboard populated with numbers that reset on refresh.

When functionality would require a backend the blueprint does not have, say so rather than simulating it: a `mailto:` link instead of a form handler with nowhere to send its data, an honestly labeled limitation instead of fake persistence. A believable static experience is more trustworthy than a dynamic-looking one that breaks the moment a visitor tests it.

This governs implementation choices the same way it governs generated content and photography — see `.hubzero/experience/content.md`.

---

# Finish Completely

An implementation is not finished because it behaves correctly under ideal conditions.

Before considering work complete, verify edge cases, empty states, and error states, and confirm existing functionality still works. Empty states deserve particular attention anywhere filtering, searching, or any other user-driven narrowing of a result set can legitimately return zero matches — a filtered list that quietly renders nothing is not finished, whether or not the happy path was ever tested.

---

# Guiding Principle

These principles exist to remove repeated engineering effort, not to remove engineering judgment.

When a principle and a specific project requirement conflict, explain the trade-off rather than silently choosing one over the other.
