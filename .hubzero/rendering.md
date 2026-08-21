# Rendering and Runtime

This document defines HubZero's expectations for how a blueprint behaves across the boundary between the server and the browser.

It is framework-agnostic by design. Every modern framework that renders on a server and hands off to a client is susceptible to the same failure modes, and the reasoning below applies regardless of which one is in use. This is not a troubleshooting guide for any particular framework, and it does not restate what a modern coding model already knows about hydration APIs.

What it does provide is the set of decisions HubZero expects to have been made **before** the code is written, because every one of these failures is cheap to design around and expensive to debug afterward.

---

# Two Contracts

Two related but distinct guarantees govern this boundary.

**Deterministic rendering** — the first client render produces exactly what the server produced. This is about *agreement*.

**Progressive enhancement** — essential content and functionality are meaningful before, and without, client-side JavaScript. This is about *sufficiency*.

A blueprint can satisfy one and fail the other. Content that renders identically on server and client but is invisible until an observer fires is deterministic and not progressively enhanced. Content that is always visible but formatted from the visitor's clock is progressively enhanced and not deterministic.

Both are required.

---

# Deterministic Rendering

> The value used for the initial render must be knowable on the server.

Anything that can only be known in the browser belongs in a state update that runs **after** mount — never in the value the first render depends on.

This is a property of correct implementation, not a warning to silence. A hydration mismatch that is patched after it appears has usually been patched at the symptom; the same class of bug returns in the next component written the same way.

## The Hazard Register

Each of the following differs between the server and the browser, or between one render and the next. Each must be handled deliberately.

**Current time.** The server and the browser evaluate `now` at different moments. Any content derived from the current clock will eventually differ across the boundary. Prefer authored temporal state — see `.hubzero/content/principles.md` — Temporal State Is Authored. Where relative time is genuinely required, compute it after mount.

**Locale.** Locale-dependent formatting resolves differently on a server than in a visitor's browser. Pin the locale explicitly wherever formatted output is rendered. A blueprint has one editorial locale — see `.hubzero/experience/content.md` — Editorial Consistency — and its formatting should reflect that rather than the visitor's environment.

**Timezone.** A date rendered in the server's zone and re-rendered in the visitor's zone can differ by a day. Pin the timezone for display formatting. Note that a fixed UTC offset is not a timezone: it does not survive daylight-saving transitions.

**Randomness.** Any generated value — identifiers, shuffled orders, decorative variation — must be stable across renders. Where variety is wanted, derive it deterministically from stable content (a slug, an index) rather than from a random source.

**Viewport state.** Dimensions are unknown on the server. Layout that depends on measurement must have a server-renderable default and refine after mount. Prefer expressing responsive behaviour in CSS, which needs no measurement at all.

**Media queries.** Preference and breakpoint queries — including reduced-motion and colour-scheme — cannot be evaluated on the server. Subscribe to them with an explicit, deterministic server-side value, and let the real value arrive after mount.

**Persistent storage.** Stored preferences are unavailable on the server. Initialize from the same empty or default state the server rendered, then reconcile after mount. Expose whether reconciliation has happened, so the interface can distinguish "empty" from "not yet known" — rendering those two states identically is how a visitor sees their saved data flash away and return.

**Browser APIs.** Anything reading from the document, the window, the network, or device capabilities is client-only. Access belongs after mount, behind a guard, with a defined server-side behaviour.

**Observers.** Intersection, resize, and mutation observers have not fired at first render. Their initial state must be the same on the server and the first client render — and, critically, must not be the state that hides content. See Progressive Enhancement below.

**Animation state.** Where an element ends up is authoritative; how it got there is presentation. The server renders the final, meaningful state. Motion is layered on top, and if it never runs, the content is still correct and complete.

## Deriving Interface State

Each piece of interface state should be computed independently and composed, rather than chained through another.

Deriving a navigation bar's appearance from whether a hero has scrolled past, or a drawer's visibility from a page's identity, produces state that breaks in combinations nobody tested. Independent values composed at the point of use are easier to reason about and fail predictably.

Transient interface state should resolve correctly under browser history navigation. State that records the route it belongs to, and is compared against the current route, handles back-navigation without an effect coordinating it.

Be deliberate about stacking context. `transform`, `filter`, and `backdrop-filter` each establish a new one. Before relying on layering order for drawers, overlays, or floating navigation, verify which ancestor established the context those elements actually paint within.

---

# Runtime Boundaries

> Server-first is the default. Client interactivity is an explicit, bounded exception.

Most content does not require browser state. Rendering it on the server produces markup that is complete on arrival — better for first paint, for search engines, for visitors on poor connections, and for anyone whose JavaScript fails to execute.

**Client islands are declared, not accumulated.** A component needs browser state, so it becomes interactive; then its parent does, then the page. Marking a whole route interactive to satisfy one control is the most common way a server-first architecture erodes.

Two disciplines prevent it:

* **Push the boundary down.** A component can own interaction state while receiving already-rendered content as children. The interactive shell stays small; the content inside it stays on the server.
* **Summarize what crosses.** Data passed into a client island is serialized and shipped to the browser. Pass what the island needs, not the full record it was derived from. A small client payload requires deliberate narrowing, not just fewer interactive components.

Framework-generated lifecycle routes — loading, error, and not-found states — are part of the runtime boundary and part of the product. They are reached by real visitors and deserve the same rendering discipline, semantics, and design-language expression as any hand-built route. A convenience that degrades server rendering across the whole application is a regression regardless of how conventional it looks.

---

# Progressive Enhancement

> Essential content and functionality remain meaningful without client-only enhancement.

Browser APIs may enhance the experience. They must never silently replace essential content, and they must never leave the interface in a misleading state when they do not run.

## The Two Silent Failures

Enhancement fails in two ways that visual review will not catch, because in both cases the page looks correct to the person reviewing it.

**Reduced motion.** A visitor who prefers reduced motion gets the interface without the animation. If content's visibility depended on that animation, the content never appears.

**No scripting.** A visitor whose JavaScript did not execute — disabled, blocked, failed to load, still loading — gets the server's markup and nothing more. If content was hidden awaiting a script, it stays hidden permanently.

Reveal-on-scroll is the canonical example and is an accessibility trap by default. Content that begins invisible and is revealed by an observer has two independent ways to remain invisible forever. Both require explicit handling; neither is caught by a component test.

The rule: **content must never start in a hidden state it can only escape via JavaScript.** Where the platform can express the fallback declaratively — making content visible when scripting is unavailable — use it.

## Above the Fold

Content visible without scrolling has no opportunity to be revealed by a scroll observer, and is the content a visitor judges the site by. It must be present and stable in the server's output.

An entrance animation applied to a hero produces a blank or unstable first paint if its trigger has not run. Critical introductory content needs a server-visible state regardless of what happens below the fold.

## Reduced Motion Is a Composition

Respecting reduced motion means offering a **complete alternative composition**, not the same layout with animations disabled.

A sequence that communicates through movement must still communicate when the movement is removed — through order, emphasis, contrast, or state. If disabling motion leaves an interface that is merely static, that is acceptable. If it leaves one that is incomplete or confusing, the motion was carrying meaning that nothing else expressed.

Reduced motion may need to change interaction logic, not only timing values. A sequence gated on an animation completing needs a different path when there is no animation.

## Prefer the Platform

Native elements arrive working. They handle keyboard interaction, focus, assistive technology, and platform conventions without any script executing — which makes them progressively enhanced by construction.

Across HubZero's blueprints, native solutions have repeatedly proven both more accessible and smaller than custom equivalents for disclosure, tabular data, dates, addresses, navigation, and dialogs. Reach for a custom implementation only when the native element genuinely cannot express the requirement.

See `.hubzero/principles.md` — Native Before Custom.

---

# Honest Enhancement

Enhancement must not create the impression of capability the blueprint does not have.

An interaction that appears to succeed while doing nothing is a trust failure, not a rendering one — but it is frequently introduced as an enhancement. A control that persists nothing, a submission that goes nowhere, a status that resets on refresh: each looks like functionality and is not.

Where a browser-only demonstration is the honest answer, it should be honest at the point of interaction about what it does and does not do. See `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

---

# Verification

These properties are verified at Engineering Review and again at Release Verification, at both entry paths:

* On a direct load or hard refresh.
* After client-side navigation from another page.

A route that behaves correctly on refresh and not when navigated to has not been verified, and the reverse is equally true. The full expected evidence is defined in `.hubzero/release/RELEASE_CHECKLIST.md` — Runtime Verification.

---

# Guiding Principle

Every failure described here is inexpensive to prevent at design time and expensive to find afterward, because none of them announces itself. The build passes, the page looks right to the person who built it, and the visitor who experiences the failure is not in the room.

Decide what is true before JavaScript runs. Everything else is enhancement.
