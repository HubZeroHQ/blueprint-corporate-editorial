# Technical

Technical design communicates precision, engineering competence, and intellectual confidence.

The interface should feel intentional, systematic, and built by engineers rather than marketers.

Users should feel they are interacting with sophisticated technology.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Information density and legibility** — the interface exists to convey system state accurately.
2. **Systematic consistency** — a rule applied by the system beats a judgement applied by hand.
3. **Typography** — a disciplined scale and weight system carries hierarchy.
4. **Border and grid** — structure made visible through thin lines.
5. **Colour** — functional, used to guide attention, never to express emotion.
6. **Motion** — state legibility only.
7. **Shadow and corner** — minimal, calculated.

Technical resolves toward what the system can state accurately. Where a treatment would make the interface feel more welcoming at the cost of making its state less precise, precision wins.

**Against Industrial:** Industrial communicates *operational capability* through material and machined consistency. Technical communicates *system state* through information structure and typographic discipline. Industrial evokes a factory floor; Technical evokes a control plane.

---

# Signature Traits

- Precision over decoration
- Function over ornament
- Systems over pages
- Information over marketing
- Confidence through engineering

---

# Colour Language

Colors should communicate clarity rather than emotion.

Accent colors should be used intentionally to guide attention.

Avoid excessive gradients or decorative color palettes.

---

# Typography Language

Typography should read as system output as much as content — clean, highly legible sans-serifs for interface and body text, with monospace reserved for values that are literally technical: code, data points, identifiers, status labels. Hierarchy comes from a disciplined scale and weight system rather than size alone, so the page feels governed by rules rather than styled by hand. Avoid any typographic flourish that doesn't map to a functional distinction in the underlying system.

---

# Motion Language

Motion exists to make state legible, not to add delight. An element should animate because something in the system changed — a value updated, a process completed, a relationship between two elements became active — and the animation should make that change easier to track, not more decorative. Keep durations short and easing linear or close to it; motion here should feel like a system reporting on itself, not an interface expressing emotion.

---

# Photography Language

Imagery favors diagrams, architecture illustrations, and real product UI over photography of people or environments. When a screenshot or interface capture is used, it should be authentic and unretouched — a real view into how the system works — rather than a stylized mockup. Lifestyle photography, staged offices, and generic hero imagery of people at laptops have no place here; if an image doesn't explain how something works, it doesn't belong. See `.hubzero/experience/photography.md` for how this translates into image generation.

---

# Corner Language

Corners use a small, tight radius — barely perceptible, just enough to soften the harshness of a pure right angle without reading as friendly or organic. The same radius token should apply to every button, input, card, and panel without variation, since inconsistency here reads as a bug rather than a design choice. Precision matters more than warmth: the radius should look calculated, not stylistic.

---

# Border Language

Borders are thin, precise, and used to define the grid rather than to decorate individual elements — hairline dividers between panels, single-pixel outlines on inputs and cards. Weight should stay consistent and light throughout; a heavy border reads as an emphasis this language reserves for something else. The grid itself, made visible through these thin lines, is what should communicate structure, not border thickness.

---

# Shadow Language

Shadow is nearly absent, used only in the smallest possible dose to lift an active or focused element a single, subtle step above its surroundings — a dropdown, a modal, a floating toolbar. Depth is primarily communicated through the grid, border, and the z-axis layering conveyed by opacity and border color rather than blur and offset. A Technical interface should look flat and precise, like a schematic, not soft and dimensional.

---

# Spacing Language

Spacing follows a strict, grid-based system — consistent gutters, consistent gaps, everything aligned to the same underlying unit. Predictability is the goal: a user should be able to anticipate where the next element will sit based on the rhythm already established. Whitespace exists to make relationships between elements legible, not to create drama or luxury.

---

# Interaction Language

Hover, focus, and active states should communicate exact system status — a border color change, a subtle background shift, a precise focus ring — with no ambiguity about which state is active. Feedback should be immediate and consistent across every component, the way a well-built application behaves rather than a marketing site. Avoid any interaction effect that doesn't map directly to a state the underlying system actually has.

---

# Component Language

Components should look like they came from the same design system a real engineering team maintains: consistent tokens, predictable states, no bespoke one-off treatments. Cards, tables, and panels favor density and clarity over generous framing — this is a language built for people who want information quickly, not an experience to linger in. Every component should behave identically wherever it appears, reinforcing the sense of a coherent underlying system.

---

# Visual Rhythm

A Technical page should read like a well-structured application screen rather than a marketing narrative: consistent grid, consistent density, and a rhythm driven by information hierarchy rather than alternating visual drama. Sections should feel like modules in the same system, connected by shared grid lines and spacing units rather than dramatic shifts in tone from section to section. The page should feel governed by the same rules end to end, the way a well-designed piece of software does.

---

# Responsive Behavior

Technical carries the densest information of any language in the library, and mobile is where that density has to be re-decided rather than re-flowed.

Code and data blocks must scroll within their own containment rather than forcing the document sideways, and must preserve their formatting — reflowing code destroys the alignment that made it readable. Verify at the document level that no descendant creates horizontal overflow.

Tables preserve their semantic structure. A specification or comparison table collapsed into unlabeled stacked values has lost the relationships it existed to express; each value needs its label to travel with it.

Reference navigation is the defining mobile problem for this language. Deep documentation hierarchies that live in a persistent sidebar on desktop need a mobile equivalent that keeps the visitor's position legible — an unlabeled hamburger over a twelve-level tree is a worse answer than a visible breadcrumb plus a searchable index.

Monospace type needs its own mobile scale. Monospace runs optically larger and wider than the accompanying sans at the same nominal size, and a shared reduction leaves it either oversized or unreadable.

Density stays high. Loosening a Technical layout for mobile comfort produces a generic product page; the language's audience expects and reads density.

---

# Token Contract

Technical must own the following rather than inherit them.

* **Radius** — small and tight, applied identically to every element. Inconsistency here reads as a bug rather than a style, so the value must be explicit.
* **Type families** — a paired system with monospace reserved for genuinely technical values. This pairing is the language's most identifying decision and cannot be inherited.
* **Border** — hairline weight, since borders define the grid rather than decorate elements.
* **Motion duration and easing** — short, linear or near-linear. An eased curve implies expression this language reserves for state change.
* **Colour roles** — status and semantic colours defined as roles with fixed meanings, plus a verified foreground scale for dense text.
* **Spacing scale** — tighter than a neutral default, with consistent steps.

Dense interfaces make subtle foreground values common, and those are the values most likely to fail measurement. Verify every text tone against every surface per the Contrast Contract, and record the ratios so a later palette adjustment does not silently undo the fix.

---

# Suitable Architectures

- SaaS
- Documentation
- Corporate
- Manufacturing
- Developer Tools

---

# Anti-Patterns

Avoid excessive visual effects, decorative motion, playful interactions, or ornamental design that distracts from information.
