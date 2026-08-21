# Mobile Experience

Responsive implementation is not mobile experience.

Responsive layout ensures a site is usable on a small screen. Mobile Experience Design ensures a site feels like a premium product on the device most visitors actually use.

Desktop and mobile share one Design Language and are equally important expressions of it. Neither is the reduced version of the other.

---

# Responsive Layout vs. Mobile Experience Design

Responsive layout is an engineering property: content reflows, targets remain tappable, nothing breaks.

Mobile Experience Design is a design property: composition, imagery, and typography are deliberately recomposed for a handheld, single-column, thumb-driven context.

A blueprint can satisfy the first and completely fail the second. Passing responsive QA is not the same as passing Mobile Experience Design. This is why Mobile Experience Overhaul is its own pass in `.hubzero/agents/design-review.md`, not a checkbox inside general review.

---

# Composition May Change

Desktop composition should not simply collapse into a single column.

Architecture — the sections that exist and the order they appear in — stays identical between desktop and mobile. Composition — how each section is built — may change. A three-column feature grid on desktop might become a single deliberately-paced vertical sequence on mobile, not three stacked columns.

---

# Mobile Storytelling

Photography on mobile is a storytelling element, not a compressed desktop asset.

Prefer taller, more immersive image compositions over simply shrinking desktop crops. Consider narrative sequencing — the order images appear as a visitor scrolls should build a story, the way a desktop grid builds an overview.

---

# Mobile Typography

Scaling font size down is not sufficient.

Review line length, paragraph width, and vertical rhythm specifically at mobile widths. Text that reads comfortably at a desktop's line length can become fatiguing at a phone's. Reading comfort at arm's length, one-handed, is a different problem than reading comfort at a desk.

---

# Component Recomposition

Review every recurring component for handheld composition intentionally, rather than assuming a shared responsive breakpoint solved it:

* Cards
* Services
* Testimonials
* Forms
* Statistics
* Case studies
* Footers

Each of these was likely designed desktop-first. Confirm each still communicates its hierarchy clearly, and still feels considered, at mobile width.

---

# The Design Language Decides How

This document defines what mobile quality means. It does not define how any particular blueprint should express it.

Every design language carries a **Responsive Behavior** section stating how *that* language survives at handheld width — which of its devices are protected, which are edited away, and what would constitute abandoning it. Consult the active language before recomposing anything.

The failure this prevents: a mobile pass that produces a competent, generic, single-column layout. Competent is not the standard, and generic means the language was removed at exactly the viewport most visitors use.

---

# What Recomposition Actually Involves

Mobile recomposition is a set of explicit decisions, not a breakpoint. Each of the following is decided rather than inherited:

* **Section order.** Which moment a visitor meets first, second, third. Desktop source order is a starting point, not an answer.
* **CTA placement and hierarchy.** A conversion that sat beside content on desktop needs a deliberate position on a phone.
* **Image order, crop, and aspect ratio.** Authored as content, not derived by scaling — see below.
* **Navigation modality.** Not a smaller menu; a different interaction.
* **Action groups.** Stacked deliberately, with a clear primary.
* **Desktop offsets removed.** Negative margins, absolute positioning, and overlap that created composition on a wide viewport usually create damage on a narrow one.
* **Wide content contained.** Tables and code blocks scroll within their own region. The document body must never scroll horizontally.
* **Reading measure verified** at handheld width specifically.
* **Sticky behaviour reconsidered.** A sticky element consuming a fifth of a phone viewport is a different decision than one consuming a twentieth of a desktop viewport.

---

# Touch Is Its Own Interaction Model

**Hover does not exist.** Any content, affordance, or state revealed on hover needs an equivalent that works by touch — and it must be the same information, not a reduced version.

This is where mobile most often loses a design language's personality. Languages that express themselves substantially through hover feedback become inert on a phone unless press states are deliberately designed to carry that character.

Touch targets should be comfortably beyond the accessibility minimum, and spaced so an adjacent target is not hit by accident. Position matters as much as size: the top corners of a large phone are genuinely hard to reach one-handed.

Keyboard and assistive-technology parity must survive recomposition. A mobile navigation that traps focus, or that cannot be dismissed without a pointer, has failed regardless of how it looks.

---

# Mobile Imagery Is a Content Decision

A mobile crop is authored, not derived.

Where a wide composition cannot survive a portrait viewport, the mobile crop is its own composition — chosen for what it shows, recorded alongside the content record with its own aspect ratio and focal point. See `.hubzero/content/principles.md` — Media Belongs to the Record.

Scaling a wide desktop crop down is not a mobile imagery decision. It is the absence of one, and it reliably removes the subject the image was chosen for.

---

# Reduced Motion on Mobile

Reduced motion is more consequential here, because mobile devices are more likely to be lower-powered and because motion carries more of the interaction language once hover is gone.

The reduced-motion composition must be complete rather than merely static — see `.hubzero/rendering.md` — Reduced Motion Is a Composition.

Where motion is expensive — layered surfaces, blur, scroll-linked effects — reducing it on mobile is a composition decision, not a performance patch. Dropped frames read as broken, not as rich.

---

# Verification

Mobile Experience Design is verified as its own pass in `.hubzero/agents/design-review.md`, and again at Release Verification.

Verify on the production build rather than the development server, at real handheld widths, with touch rather than a narrowed desktop window. A narrowed browser window has a cursor, and the cursor hides every hover-dependent failure this document exists to catch.

---

# Guiding Principle

A visitor who only ever sees a HubZero blueprint on their phone should have no sense that the site was designed for a larger screen first — and should be able to tell which design language it is.
