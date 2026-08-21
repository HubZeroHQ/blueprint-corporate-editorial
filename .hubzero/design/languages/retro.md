# Retro

Retro design draws inspiration from past visual eras while remaining modern in usability.

It should celebrate nostalgia without compromising accessibility, clarity, or performance.

Historical influence should feel intentional rather than theatrical.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Contemporary usability** — the era reference never costs the visitor anything.
2. **Period vocabulary** — colour, type, and shape carry the reference.
3. **Typography** — the most legible carrier of a period.
4. **Colour** — a palette the era would recognize.
5. **Corner and border** — consistent with the chosen era's shapes.
6. **Spacing** — modern and readable regardless of era.
7. **Motion** — restrained, a hint rather than a costume.

Retro is defined by a constraint no other language carries: **it references a period without inheriting that period's failures.** Every conflict resolves toward the modern standard. If a decision would frustrate a contemporary visitor, the reference has gone too far — which is what separates a period-informed system from a costume.

---

# Signature Traits

- Nostalgia with purpose
- Personality over perfection
- Authentic references
- Modern usability
- Memorable visual identity

---

# Typography Language

Typography may reference a specific historical era — a particular decade's display lettering, a period-appropriate serif or slab — while remaining highly readable by modern standards. The reference should live primarily in a display or heading treatment, paired with a clean, contemporary, highly legible face for body text.

Sacrificing readability for authenticity is never acceptable. A single well-chosen period-referencing type choice communicates the era more effectively than applying vintage styling everywhere.

---

# Colour Language

Colors should evoke a specific historical mood rather than imitate it literally.

Palettes should remain cohesive and restrained.

---

# Motion Language

Motion should feel playful but restrained, with just enough character to hint at the chosen era without becoming a costume. A period reference in motion is best expressed subtly — a slightly bouncier easing curve, a transition that echoes an era's mechanical rhythms — rather than through literal effects like film-grain flicker or exaggerated retro wipes.

Avoid exaggerated nostalgic effects entirely; motion should still feel like a modern, well-built interface underneath the reference.

---

# Photography Language

Illustrations, photography, textures, and graphics should reinforce the chosen era through consistent color grading, composition, or graphic style rather than through literal artificial aging effects like scratches, grain overlays, or sepia filters.

A cohesive period reference — a specific color grade, a particular illustration style associated with the era — reads as more authentic and more modern than pastiche. Every image should support the same era and mood; mixing visual references from different decades undermines the specificity that makes Retro convincing.

---

# Corner Language

Corner treatment should reference the chosen era's design vocabulary without being a literal copy of it — a mid-century blueprint might favor gently rounded, friendly corners, while a late-90s digital reference might favor sharper, more geometric ones.

Whatever the era, the corner treatment should be applied consistently across every component so it reads as a deliberate system rather than a decorative flourish. The goal is a corner language a period-informed designer would recognize, executed with the consistency modern interfaces require.

---

# Border Language

Borders can carry period character more effectively than almost any other structural element — a thicker, more graphic border might reference a specific decade's poster or print design, while a hairline border might reference a cleaner, later era.

Whichever direction is chosen, borders should stay structurally purposeful rather than becoming decorative trim; a border should still separate or contain content, not simply decorate it. Consistency matters more than intensity: a single restrained border treatment repeated throughout reads as authentic, while varied decorative borders read as theatrical.

---

# Shadow Language

Shadow should be used the way the chosen era's material culture would suggest, kept within modern restraint — a flatter, more graphic era might use almost no shadow at all, favoring flat color and line for separation, while a more tactile mid-century reference might use a soft, warm shadow to suggest a physical printed object.

In every case, shadow should stay subtle enough to function within a modern, accessible interface rather than becoming a literal skeuomorphic effect. Avoid heavy drop shadows meant to imitate old print or plastic textures directly; the reference should be felt, not reenacted.

---

# Spacing Language

Spacing should remain modern and generously readable even when the visual inspiration is historical — a period reference should never translate into cramped, hard-to-scan layouts just because a historical source material was dense.

Rhythm can echo the chosen era's grid conventions loosely, but usability standards stay entirely contemporary. If a spacing decision would frustrate a modern user, the era reference has gone too far.

---

# Interaction Language

Interactions should feel unmistakably modern regardless of how strongly the visual language leans into a period reference — hover, focus, and active states should behave the way users expect from any well-built contemporary interface.

A retro flourish is acceptable in a hover state's easing or color shift, but never at the expense of a clear, immediate, accessible response. Usability always outranks nostalgia when the two are in tension.

---

# Component Language

Components should maintain fully modern interaction patterns despite their visual inspiration — a period-referencing button should still behave exactly like a button a contemporary user expects. The era's personality should live in surface details: color, type, texture, iconography, proportion, not in unfamiliar or unpredictable component behavior.

A recurring component should be immediately recognizable as its era's aesthetic and immediately usable as a modern interface element.

---

# Visual Rhythm

A page should carry its chosen era consistently from section to section — the same color grade, type pairing, and corner and border treatment recurring throughout — so the reference reads as a considered system rather than a decorative theme applied unevenly.

Sections should still compose with fully modern clarity: clear hierarchy, predictable flow, accessible contrast. The era should feel like the lens the page is viewed through, not a costume worn by only some of its parts.

---

# Responsive Behavior

Retro faces a problem no other language has: the era it references had no handheld viewport, so there is no period precedent to draw on.

Resolve this by keeping the **vocabulary** and abandoning the **layout**. Colour, type, shape, and ornament carry the reference at handheld width; the composition itself is contemporary. A mid-century grid reproduced literally on a phone reads as a broken layout, not as a reference.

Period ornament must be edited rather than scaled. Decorative rules, borders, and marks that framed a wide composition become clutter in a narrow one. Choose which elements carry the reference on mobile and remove the rest, rather than shrinking all of them into illegibility.

Type is the most reliable carrier. A period typeface at a comfortable mobile size communicates the era more effectively than any amount of preserved ornament, and costs nothing in usability.

Navigation is entirely contemporary. There is no era-appropriate mobile navigation pattern to reference, and inventing one produces a novelty interaction rather than a period one.

Spacing stays modern and generous, per the Spacing Language — historical source material was often dense, and reproducing that density is the most common way Retro becomes unusable.

---

# Token Contract

Retro must own the following rather than inherit them.

* **Colour** — a period-specific palette. This is the language's primary carrier and has no meaningful shared default; an inherited neutral scale removes the reference entirely.
* **Type scale and family** — chosen for the era. Typography does more work here than in almost any other language.
* **Radius** — set by the referenced era's shape vocabulary, which varies substantially between periods. A general-purpose default belongs to no era and signals none.
* **Border** — weight and style consistent with the period's graphic conventions.
* **Motion easing** — a slightly characterful curve. A neutral standard curve is acceptable in many languages and specifically contradicts this one's Motion Language.

Record which era the blueprint references alongside these tokens. Without it, a later contributor cannot tell whether a value is a period decision or a mistake, and the system erodes into generic decoration.

---

# Suitable Architectures

- Portfolio
- Hospitality
- Restaurants
- Creative Agencies
- Community

---

# Anti-Patterns

Avoid excessive decorative effects, artificial aging, or sacrificing usability for stylistic authenticity.
