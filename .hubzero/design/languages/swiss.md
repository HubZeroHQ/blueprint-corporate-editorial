# Swiss

Swiss design communicates through organization rather than through expression.

The grid is not a layout aid that disappears once the page is built — it is the visible logic of the page, and the thing a visitor perceives as rigour. Content is placed where the system says it belongs, not where it looks best.

Unlike Minimal, which achieves calm by removing, Swiss achieves clarity by organizing. A Swiss page can carry a great deal of information and still feel disciplined, because the structure is doing the work.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **The grid** — placement follows the system, not the eye.
2. **Typography** — objective, hierarchical, unstyled.
3. **Spacing** — mathematical, derived from the grid's units.
4. **Alignment** — flush-left, consistent, unapologetic.
5. **Colour** — functional only; one accent at most.
6. **Border and rule** — where the grid needs to be made visible.
7. **Corner, shadow, motion** — effectively absent.

Swiss resolves toward the system every time. Where a composition would look better broken free of the grid, Swiss keeps the grid — the visible consistency is worth more than any individual page looking marginally better.

**Against Minimal:** Minimal leads with reduction and asks how little can be present. Swiss leads with organization and asks how rigorously what is present is arranged. Density is a failure in Minimal and entirely acceptable in Swiss.

**Against Monochrome:** Monochrome's discipline is about colour. Swiss's is about placement. A Swiss page may use an accent; a Monochrome page may use a loose composition.

---

# Signature Traits

- The grid is visible in the result, not just in the process
- Asymmetric composition within a strict system
- Flush-left, ragged-right text as the default
- Objective typography — the type reports, it does not perform
- Mathematical spacing derived from a single unit
- Functional colour, used sparingly and never decoratively
- Confidence expressed through order rather than emphasis

---

# Typography Language

Typography is objective. A neutral, highly legible grotesque carries nearly the entire page, with hierarchy established through **size, weight, and position on the grid** rather than through changes of family or decorative treatment.

The type strategy is a single family used across a disciplined scale, with as few weights as the hierarchy genuinely requires — often two or three. Adding a second family, a display face, or a script is a departure from the language rather than a refinement of it.

Text is set flush-left, ragged-right. Justified text creates uneven word spacing that fights the mathematical consistency the rest of the system depends on, and centred text has no relationship to a grid at all.

Headings are frequently set at the same size as body text and distinguished by weight and placement alone. This is a deliberate Swiss move: hierarchy proven by position rather than announced by scale.

---

# Colour Language

Colour is functional and rare.

The page is black or near-black on white or off-white. A single accent — most traditionally red — marks what genuinely needs marking: an active state, a critical link, a single point of emphasis per view.

Colour never establishes hierarchy that position and weight can establish. Never tints a surface to group content the grid has already grouped. Never carries brand personality; in Swiss, the composition is the brand expression.

A second accent requires a genuine functional reason, stated explicitly. Two accents used for emphasis is one accent too many.

---

# Motion Language

Motion is nearly absent, and never decorative.

Where it exists, it confirms a state change and nothing more — brief, linear, unremarkable. Nothing eases in, nothing settles, nothing draws attention to a transition.

Swiss predates motion as a design medium, and the language's discipline translates directly: if a movement is not reporting a change in the system, it does not belong. A page that feels static is correct here, provided its interaction states are deliberately designed. See `.hubzero/design/principles.md` — Motion Should Reinforce Understanding.

---

# Photography Language

Imagery is placed on the grid with the same discipline as text, and cropped to grid units rather than to whatever the source image suggests.

Photography is documentary and objective — real subjects, even lighting, no atmospheric treatment. Where an image carries information, it is included. Where it exists to create mood, it is usually cut.

Diagrams, charts, and information graphics belong naturally here and are frequently stronger than photography. Swiss is one of the few languages where a well-constructed chart is the most expressive element on the page.

Full-bleed imagery breaks the grid and is avoided. An image occupies grid columns like everything else.

---

# Corner Language

Corners are square. Every button, input, card, and container uses a hard right angle.

A radius implies a softening the language does not perform, and — more practically — a rounded corner does not align with a grid the way a square one does. The edge of an element should meet the grid line exactly.

This is a categorical rule with no per-component exception.

---

# Border Language

Borders are hairlines that make the grid visible.

A rule between sections, a line under a heading, a thin division between columns: each exists because the structure at that point benefits from being stated rather than implied. Weight is uniform and light throughout.

Borders never decorate an element to give it presence. A box drawn around content the grid has already grouped is redundant, and redundancy reads as uncertainty about whether the system is working.

---

# Shadow Language

There is no shadow.

Swiss is a flat system by conviction, not by omission. Elevation implies a physical stacking metaphor entirely foreign to a language derived from print. Separation is achieved by space, rule, and position.

An element that needs to feel distinct gets more space around it or a rule beside it — never a shadow beneath it.

---

# Spacing Language

Spacing is mathematical. A single base unit generates every margin, gap, and offset in the system, and every value in the layout is a multiple of it.

This is the language's most rigorous requirement and its most identifying property. A gap chosen because it looked right, rather than because it is four units, breaks the system in a way a visitor will feel without being able to name.

Whitespace is used structurally rather than for atmosphere. Swiss spacing establishes relationships between elements; it does not create calm the way Minimal or Luxury spacing does.

Asymmetry is expected. A composition weighted to one side of the grid, with a large empty column beside it, is a characteristic Swiss move and not an unfinished layout.

---

# Interaction Language

States are direct and immediate. A hover changes weight, colour, or an underline — instantly, with no transition. Focus is a hard, high-contrast outline that respects the grid rather than a soft glow around an element.

Underlines on links are the default rather than something removed for tidiness. In a language with almost no colour, the underline is doing genuine work.

Nothing lifts, grows, or animates on interaction. The state either is or is not, and the change between them is instantaneous.

---

# Component Language

Components are plain to the point of appearing unstyled, and derive their presence entirely from placement and typography.

A button is a rectangle with a label, correct padding in grid units, and a high-contrast state. A card is a region of the grid with a rule and content in it, frequently with no container background at all. An input is a line or a rectangle with a hairline border.

The absence of component styling is the point. In Swiss, a component that looks designed usually indicates the grid is not carrying enough of the composition.

---

# Visual Rhythm

A Swiss page reads as a system that content was placed into, not as a page that was composed around content.

Rhythm comes from the repetition of grid units — the same column widths, the same gutters, the same vertical intervals recurring down the page. Variation comes from *which* columns are occupied, not from changing the grid between sections.

The strongest test: overlaying the grid on the finished page should explain every placement decision. Anything that cannot be explained by the grid was placed by eye, and by eye is how a Swiss page becomes an ordinary one.

---

# Responsive Behavior

Swiss handles handheld width better than most languages, because a grid that reduces to fewer columns is still a grid.

The column count reduces; the unit does not change. Margins, gutters, and vertical intervals remain multiples of the same base unit at every viewport. This is what keeps the system coherent across breakpoints, and abandoning it on mobile abandons the language.

Asymmetry should survive. A single-column mobile layout can still be asymmetric — indented, offset, or weighted — and a Swiss blueprint that becomes perfectly centred on mobile has lost its most identifying quality.

Type stays flush-left and ragged-right. Centring text on mobile because the column is narrow is the most common and most damaging deviation.

Because Swiss carries no decorative layer, mobile is largely a question of how many columns the content needs and in what order. Sequence deliberately rather than inheriting source order.

Images continue to occupy whole columns and continue to be cropped to grid units.

---

# Token Contract

Swiss must own the following rather than inherit them.

* **A base spacing unit** — the single value every other spacing token derives from. Most foundations offer an arbitrary scale rather than a generated one; Swiss needs the generating unit itself, and every step expressed as a multiple of it.
* **Grid tokens** — column count, gutter, and margin, defined explicitly per breakpoint. These are the language, and no general-purpose foundation supplies them.
* **Radius** — every radius token is `0`, categorically.
* **Shadow** — no elevation tokens at all.
* **Colour** — a near-black ink, a white or off-white ground, and exactly one accent.
* **Type family and scale** — one neutral grotesque, with a small number of weights and a disciplined size scale.
* **Border width** — one hairline value used everywhere.
* **Motion duration** — instant or near-instant, with linear easing.

Swiss and Brutalist both zero radius and shadow, which makes their other tokens the ones that distinguish them: Swiss's spacing is mathematically generated and its borders are hairlines, where Brutalist's spacing is tight and its borders are heavy.

---

# Suitable Architectures

- Documentation
- Government
- Corporate
- Media
- Education
- Portfolio
- Directory

Swiss suits architectures that present substantial structured information and benefit from appearing rigorous rather than persuasive. It is exceptionally good wherever a visitor needs to locate something within a large body of content.

It is a poor fit where warmth or aspiration drives the decision — Hospitality, Nonprofit fundraising, and consumer Ecommerce all need an emotional register this language does not have.

---

# Anti-Patterns

**Never:**

- Break the grid because a composition would look better. The grid winning is the language.
- Use a spacing value that is not a multiple of the base unit.
- Centre body text, or justify it.
- Introduce a second accent colour for emphasis.
- Add a corner radius to any component.
- Add a shadow to create separation — use space or a rule.
- Reach for a second type family to create hierarchy. Use weight and position.
- Use full-bleed imagery.
- Add motion that does not report a state change.
- Style a component to give it presence the grid should be providing.

**Specifically not Minimal:** do not achieve clarity by removing content. Swiss organizes information rather than reducing it, and a Swiss page emptied out is a Minimal page with square corners.

**Specifically not Monochrome:** the discipline here is placement, not colour. A loosely composed grayscale page is not Swiss.

**Specifically not Brutalist:** Swiss is objective and refined, not raw. Heavy borders, deliberately awkward proportion, and confrontational scale belong to Brutalist. Swiss's hairlines and mathematical spacing are the opposite instinct expressed through the same square corners.
