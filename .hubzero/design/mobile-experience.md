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

# Guiding Principle

A visitor who only ever sees a HubZero blueprint on their phone should have no sense that the site was designed for a larger screen first.
