# Glass

Glass design communicates depth, lightness, and sophistication through layered interfaces.

Transparency should improve visual hierarchy rather than become a decorative effect.

Depth should always serve usability.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Surface and depth** — layering is the language; if a decision flattens the composition, it is wrong.
2. **Motion** — depth is proven by how surfaces respond when they move.
3. **Spacing** — layers need room or they blend into each other.
4. **Colour** — must stay legible through translucency.
5. **Corner and border** — consistent across every layer.
6. **Typography** — clear and unfussy; type is read *through* a surface, not competing with it.

Legibility overrides the effect. Where translucency and contrast conflict, Glass reduces the blur or increases the surface opacity — it never reduces the contrast. A beautiful panel that cannot be read has failed at the one thing the language exists to do.

---

# Signature Traits

- Layered interfaces
- Visual depth
- Subtle transparency
- Modern refinement
- Clarity through separation

---

# Typography Language

Typography must remain highly legible against layered, semi-transparent backgrounds — legibility takes precedence over any aesthetic preference. Weight and contrast should be increased slightly beyond what a solid-background interface would need, since text sits on top of imagery, gradients, or content bleeding through from behind.

Hierarchy should be built through weight and size rather than color, since color can shift depending on what shows through the glass beneath it.

---

# Colour Language

Transparency should complement color rather than replace it.

Color should remain restrained and purposeful.

---

# Motion Language

Motion should reinforce the illusion of physical, layered surfaces moving against one another. Transitions should feel smooth and physically consistent — panels slide and settle, blur intensifies or relaxes, opacity shifts gradually rather than snapping.

When a surface moves, its blur and transparency should respond as though light were genuinely passing through it, not as though a flat layer were simply changing position. Motion is one of the primary ways Glass communicates depth, so it should never be rushed or skipped in favor of an instant state change.

---

# Photography Language

Photography and imagery in a Glass interface function as what shows through the surface, not as isolated content — clean photography, abstract gradients, and subtle environmental visuals work best because they read clearly even when blurred or partially obscured behind a translucent panel.

Avoid busy, high-detail, or high-contrast imagery directly behind translucent surfaces; it competes with the content sitting on top and undermines the legibility Glass depends on. Where imagery must carry the page — a hero background, for instance — treat it as the deepest layer in the stack, with translucent surfaces layered above it to establish hierarchy.

---

# Corner Language

Corners should be rounded with soft, consistent geometry that reinforces the sense of a smooth, tactile surface — hard, sharp corners read as flat and contradict the physical, glass-like quality the language depends on.

The radius should be generous enough to feel deliberate but never so large that panels lose their structural edges. Every layered surface in a composition should share the same corner treatment so the layers read as one coherent material system.

---

# Border Language

Borders are extremely thin, low-opacity, and used primarily to catch light along the edge of a translucent surface — a hairline of slightly higher opacity or brightness where the glass panel meets the background, not a solid line that separates it.

This edge highlight is often more important than the fill itself: it is what convinces the eye that a panel has physical thickness. Avoid solid, high-contrast borders entirely; they flatten the surface and destroy the illusion of translucency.

---

# Shadow Language

Shadow is essential to Glass and does most of the work of establishing depth, since transparency alone cannot separate layers from one another. Shadows should be soft, diffuse, and slightly larger than a typical UI shadow, cast beneath each translucent panel to suggest it is genuinely floating above the layer beneath it.

Stack shadows deliberately — a panel closer to the viewer should cast a more pronounced shadow than one further back — so that the shadow system itself communicates the z-order of the interface.

---

# Spacing Language

Generous spacing prevents layered, translucent interfaces from feeling crowded or muddy — when panels sit close together, their blurred edges blend into each other and hierarchy collapses.

The negative space between panels enhances the perceived depth of the composition by giving each layer room to be read as a distinct surface. Padding within a glass panel should be generous enough that content never crowds the panel's translucent edge.

---

# Interaction Language

Hover and focus states should intensify the glass effect rather than change color abruptly — a panel might become slightly more opaque, its blur might sharpen, or its edge highlight might brighten, reinforcing that the surface is responding physically to attention.

Active and pressed states should read as the surface compressing or settling rather than flashing to a new color. Every interactive state should feel like a continuation of the same material logic, not a departure from it.

---

# Component Language

Components should communicate depth without ever compromising readability or accessibility — transparency is a hierarchy tool, not a decorative effect, and it must never be applied so heavily that text or controls become difficult to parse against a busy background.

Cards, navigation bars, and modals are the components where Glass expresses itself most clearly; each should establish its position in the z-order through a consistent combination of blur, opacity, edge highlight, and shadow. Where contrast is at risk, add a subtle background scrim behind the panel before increasing transparency further.

---

# Visual Rhythm

A Glass composition should read as a small number of clearly ordered layers — background, mid-ground panels, foreground content — never an ambiguous stack where it is unclear what sits above what. Consistent blur, corner radius, edge highlight, and shadow treatment across every panel is what allows the eye to parse depth instantly rather than working to figure out the hierarchy.

As a user moves down a page, the layering logic should stay predictable: the same visual grammar that establishes a card's depth at the top of the page should still apply at the bottom.

---

# Responsive Behavior

Glass is the language most at risk of degrading on mobile, and the degradation is both visual and functional.

Layered compositions that read as depth on a wide viewport read as clutter on a phone, because the layers overlap in a space too small to separate them. At handheld width, reduce the number of simultaneous layers rather than shrinking them — one translucent surface over content, not three over each other.

Blur is expensive. On lower-powered devices a heavily blurred surface that animates will drop frames, which destroys the physical illusion more thoroughly than removing the blur would. Reduce blur radius and layer count at mobile width as a deliberate composition decision, not as a performance patch.

Translucent surfaces over scrolling content need a contrast floor that holds regardless of what scrolls beneath them. Verify legibility against the darkest and lightest content the surface can ever overlay — not against a representative screenshot.

Where reduced motion is preferred, layers settle into their final positions without the transitional blur and opacity shifts. The composition must still read as layered when nothing moves.

---

# Token Contract

Glass must own the following rather than inherit them.

* **Radius** — generous and identical across every layered surface. A shared default radius is usually too tight to read as a soft physical material.
* **Surface tokens** — background translucency, blur radius, and layer tint are the language's defining values and have no shared default at all. Define them explicitly, per appearance.
* **Border** — a light, low-opacity edge that catches the surface boundary. Glass panels need their edges defined; an inherited solid hairline reads as a flat card.
* **Shadow** — soft and diffuse, expressing separation between layers rather than elevation above a page.
* **Motion duration and easing** — slower than a neutral default, with easing that settles rather than snaps.

Because Glass depends on stacked surfaces, own the layering scale too, and verify which ancestor establishes the stacking context — blur and translucency both create new ones. See `.hubzero/rendering.md` — Deriving Interface State.

---

# Suitable Architectures

- SaaS
- Premium Products
- Marketing
- AI Platforms
- Technology Companies

---

# Anti-Patterns

Avoid excessive blur, unnecessary transparency, poor contrast, or decorative layering that reduces usability.
