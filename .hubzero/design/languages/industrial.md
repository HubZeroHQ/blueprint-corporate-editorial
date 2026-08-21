# Industrial

Industrial design communicates strength, reliability, and engineering capability.

Interfaces should feel practical, durable, and purpose-built.

Visual decisions should reinforce competence rather than sophistication.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Function** — the interface exists to convey operational capability.
2. **Information density** — group tightly; structure does the work whitespace does elsewhere.
3. **Border and corner** — machined consistency, uniformly applied.
4. **Typography** — legible under density, hierarchy from weight rather than size.
5. **Colour** — restrained, functional, safety-adjacent accents used sparingly.
6. **Motion** — mechanical confirmation only.

Where efficiency and comfort conflict, Industrial chooses efficiency. This is what separates it from Premium, which resolves the same conflict toward the visitor's comfort every time.

---

# Signature Traits

- Function first
- Structural clarity
- Reliability
- Engineering confidence
- Practical communication

---

# Colour Language

Colors should reinforce reliability and professionalism.

Accent colors should communicate actions rather than decoration.

---

# Typography Language

Typography should feel like it was chosen for a control panel, not a magazine — bold, highly legible, and built for quick scanning under real-world conditions. Favor sturdy, slightly condensed sans-serifs with clear weight contrast between headlines and body copy, and keep the type scale predictable rather than expressive. Readability always outranks personality: if a typographic choice makes information slower to parse, it doesn't belong in an Industrial interface.

---

# Motion Language

Motion should feel mechanical and purposeful — the visual equivalent of a well-oiled machine engaging, not a spark of digital delight. Transitions are brief, linear or slightly eased, and exist to confirm that an action registered: a panel slides into place, a status indicator shifts state. Avoid bounce, overshoot, or anything that feels light or playful; motion here should communicate operational reliability, not enthusiasm.

---

# Photography Language

Photography is the clearest signal of Industrial's identity: real factories, real equipment, real infrastructure, and people performing real work, shot with clarity rather than artistic flourish. Lighting should be practical and even — the kind found on a shop floor or job site — not moody or cinematic. Engineering diagrams and technical cutaways are welcome alongside photography when they help demonstrate capability. See `.hubzero/experience/photography.md` for how this translates into image generation.

---

# Corner Language

Corners carry a small, consistent radius — enough to suggest machined, purpose-built hardware rather than raw sheet metal, but never enough to feel soft or consumer-friendly. The same radius should be applied uniformly across buttons, cards, and containers, reinforcing the sense of manufactured consistency. This is a deliberate middle ground: sharper than a lifestyle brand, less severe than Brutalist's hard right angles.

---

# Border Language

Borders are present and give components a defined, fabricated edge — closer to the seam on a piece of equipment than a decorative line. Use moderate-weight borders consistently on cards, panels, and dividers so that structure reads as built rather than drawn. Borders should feel like part of the object's construction, not an afterthought added for visual separation.

---

# Shadow Language

Shadow is used sparingly and only to suggest physical stacking — a panel sitting slightly above a surface, a raised control — never to create a soft, glowing sense of depth. Where shadow appears, keep it hard-edged and low-blur, closer to the shadow cast by a physical object under direct light than a diffused digital glow. This reinforces the tactile, material quality the language is built around without drifting into decoration.

---

# Spacing Language

Spacing should feel organized and efficient, like a well-labeled equipment panel: enough room for each element to be scanned quickly, without the generous, airy margins associated with lifestyle or luxury design. Group related information tightly and separate unrelated groups clearly, so structure does the work that whitespace does in quieter languages.

---

# Interaction Language

Interactive states should feel dependable and mechanical — a button depresses or shifts weight rather than glowing or scaling elastically. Hover states can use a modest color or elevation shift to confirm interactivity, and focus states should be clearly visible and boxy rather than soft. Every interaction should feel like operating a well-built control, not a decorative surface.

---

# Component Language

Components should look and behave like they were engineered to survive repeated use: clear affordances, durable-feeling surfaces, and no ambiguity about what is clickable. Cards read as equipment specs or job cards — structured, labeled, and efficient — rather than lifestyle tiles. Every recurring component should reinforce the same sense of competence and reliability, whether it's a form, a data table, or a call-to-action block.

---

# Visual Rhythm

A page should read like a well-organized facility floor plan — clearly zoned sections, consistent structural language, and a steady, moderate visual weight from top to bottom rather than dramatic peaks and valleys. Photography-heavy sections should alternate with dense information sections at a predictable interval, giving the page the rhythm of a technical binder rather than a marketing brochure. Consistency in border, radius, and spacing across every section is what makes the page feel like a single, well-built system.

---

# Responsive Behavior

Industrial blueprints carry dense technical information, and that density is the first casualty of a careless mobile pass.

Specification tables are the defining case. Preserve the semantic relationship between label and value rather than collapsing a table into a list of disconnected strings — a specification that loses its row context has lost the information it existed to carry. Contain wide tables within their own scrolling region rather than letting them force the document sideways.

Grouping tightens further at handheld width; the visible separation between related and unrelated groups is what replaces the whitespace this language deliberately does not spend.

Technical drawings and plates need mobile-specific crops. A facility diagram legible at desktop width becomes an unreadable grey field on a phone, and scaling it down is not a crop decision — it is the absence of one.

Navigation becomes a full-height panel with a flat, scannable structure. Nesting operational sections behind a second tap works against a language built for quick scanning.

---

# Token Contract

Industrial must own the following rather than inherit them.

* **Radius** — small, uniform, and explicitly chosen. This is the language's deliberate middle ground between Brutalist's hard right angle and a consumer-soft default, and inheriting a general-purpose radius lands it in the wrong place.
* **Border width** — defined and consistent; borders define the grid and the equipment-panel structure.
* **Motion duration and easing** — brief, linear or barely eased. An inherited curve with any overshoot contradicts the Motion Language directly.
* **Spacing scale** — tighter than a neutral default. An inherited generous scale produces a lifestyle layout wearing industrial colours.
* **Colour roles** — functional and status colours reserved for specific meanings, defined as roles rather than raw values.

---

# Suitable Architectures

- Manufacturing
- Logistics
- Corporate
- Automotive
- Government

---

# Anti-Patterns

Avoid decorative effects, playful interactions, luxury aesthetics, or excessive visual experimentation.
