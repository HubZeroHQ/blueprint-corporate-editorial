# Monochrome

Monochrome design communicates confidence through restraint.

Rather than relying on color, it emphasizes typography, spacing, contrast, and composition to establish hierarchy and identity.

Visual interest should emerge from structure rather than decoration.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Colour discipline** — the absence of colour is the language; nothing overrides it.
2. **Typography** — carries hierarchy that colour would carry elsewhere.
3. **Spacing** — the primary separator, standing in for colour.
4. **Contrast** — tonal relationships do the work of a palette.
5. **Border and corner** — quiet and uniform.
6. **Motion** — subtle, never colour-driven.

The defining test: when something needs emphasis, Monochrome reaches for weight, scale, tone, or space — never for a colour it has agreed not to have. Reintroducing an accent to solve a hierarchy problem is not a compromise; it is abandoning the language.

---

# Signature Traits

- Restraint over decoration
- Contrast over color
- Typography as the primary visual tool
- Simplicity with purpose
- Timeless presentation

---

# Typography Language

With color removed from the palette, typography has to do work that color would normally do elsewhere — distinguishing sections, signaling priority, creating focal points. Hierarchy leans harder on weight and size contrast than in most restrained languages: pair a genuinely heavy weight against a genuinely light one, and a confident size jump against a subtle one, so the difference reads instantly in grayscale.

Rhythm and spacing still matter, but weight and size contrast are Monochrome's primary hierarchy tools. Well-designed typography replaces decorative elements entirely.

---

# Colour Language

Color should be largely absent.

Black, white, and grayscale establish hierarchy.

Accent colors, when introduced, should serve a specific functional purpose.

---

# Motion Language

Motion stays subtle and understated, and never depends on color to communicate — no color-shift transitions, no tinted hover glows. Interactions are reinforced through opacity, position, and scale instead.

Motion should reinforce the structure the page has already established through contrast, not introduce a new visual language of its own.

---

# Photography Language

Photography should hold together as part of the same grayscale system as the rest of the page — strong black-and-white or heavily desaturated treatment, chosen for composition, contrast, and texture rather than color. Favor images with a clear tonal range and confident contrast over flat, evenly lit compositions that lose definition once color is stripped away.

If a Monochrome blueprint ever introduces a color photograph, it should be a single deliberate exception used to draw attention, not a habit.

---

# Corner Language

Geometry stays simple and consistent: one corner treatment, applied uniformly, with minimal ornamentation.

Because there is no color to soften or announce a component, corner treatment should stay quiet rather than compensate. Monochrome should never reach for a decorative radius to add warmth back into a system that has deliberately removed it.

---

# Border Language

Without color to separate one region from another, borders carry more of the structural weight in Monochrome than they do in most restrained languages. A thin, high-contrast rule can do the job a colored background would do elsewhere — defining a boundary cleanly and with confidence.

Use borders deliberately as a hierarchy tool, not decoratively. A border in Monochrome should always be there to separate or organize, never simply to frame.

---

# Shadow Language

Shadow is used sparingly and only where it earns its place, because a soft gray shadow without color behind it can easily read as murky rather than elevated. Prefer flat layering — a lighter block set against a darker one — over drop shadows to communicate depth.

Where a shadow is unavoidable, keep it crisp and deliberate rather than soft and ambiguous, so it reads as intentional structure rather than smudge.

---

# Spacing Language

Whitespace becomes a primary design element, standing in for the visual separation that color would otherwise provide. Layouts should feel spacious and deliberate, with spacing doing as much work as contrast to establish hierarchy and focus.

Generous, consistent spacing keeps a grayscale page from feeling dense or flat.

---

# Interaction Language

Hover and focus states rely on contrast, not color — an inversion, a weight increase, an underline appearing — because there is no accent hue available to signal interactivity. States should be unmistakable in grayscale alone; if a hover effect only reads clearly in color, it does not belong in a Monochrome interface.

Feedback should stay calm and immediate, reinforcing the same structural confidence as the rest of the system.

---

# Component Language

Components should communicate hierarchy through structure — proportion, weight, contrast, alignment — instead of visual embellishment. A card, a button, or a nav item should look distinct from its neighbors because of how it is built, not because of a color applied to it.

Interfaces should remain calm and highly readable.

---

# Visual Rhythm

A Monochrome page composes its visual interest the way a black-and-white photograph does: through contrast, structure, and composition rather than through color. Sections should alternate light and dark blocks, tight and loose spacing, heavy and light type, so that rhythm emerges from these structural contrasts.

The page should feel deliberately composed, not simply colorless.

---

# Responsive Behavior

Monochrome depends on generous spacing to replace the separation colour would otherwise provide, which makes it the language most damaged by a compressed mobile layout.

Protect the spacing scale. Reducing vertical rhythm proportionally at handheld width removes the exact mechanism the language uses for hierarchy, and produces a flat grey page. Compress margins before compressing the space between sections.

Because status and meaning cannot be carried by colour here, they must be carried by label, position, or weight — and those must survive the narrower viewport. A state indicator that relied on adjacency to its label on desktop needs an explicit label on mobile.

Tonal contrast must be re-verified at handheld width against ambient conditions. A grey separation that reads clearly on a calibrated desktop display can disappear on a phone in daylight. Verify the tonal steps that carry structural meaning, not only the ones carrying text.

Navigation is a tonal shift rather than a coloured surface — the same discipline that governs the rest of the language.

---

# Token Contract

Monochrome must own the following rather than inherit them.

* **Colour** — an explicit tonal scale with deliberate, verified steps. This is the whole language, and it is the token set most likely to be inherited by accident. An inherited palette with hue in it is not a monochrome system.
* **Spacing scale** — more generous than a neutral default, because spacing carries the separation work.
* **Radius** — one value, applied uniformly. Monochrome must not reach for a decorative radius to add back warmth it deliberately removed.
* **Border** — defined tonally, since borders are a primary structural device here.
* **Shadow** — either absent or expressed as pure tonal separation; a tinted shadow reintroduces colour through the back door.

Verify every tonal step against the Contrast Contract in `.hubzero/design/principles.md`. A grayscale system has no colour cues to fall back on, so a step that fails contrast fails completely rather than partially.

---

# Suitable Architectures

- Portfolio
- Editorial
- Corporate
- Documentation
- Premium Products

---

# Anti-Patterns

Avoid decorative gradients, excessive color, playful visual effects, or unnecessary ornamentation.
