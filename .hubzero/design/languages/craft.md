# Craft

Craft design communicates that something was made by hand.

Its subject is the maker and the making — the impression of a letterpress plate, the slight misregistration of two printed colours, the texture of uncoated paper, the mark of a tool. Where other languages remove evidence of production to appear precise, Craft preserves it, because that evidence is the proof of authorship.

Unlike Organic, which references *nature* — natural forms, growth, calm — Craft references *human making*. Unlike Retro, which references a specific historical period, Craft references a process that is still practised. Unlike Industrial, which admires the machine, Craft admires the person operating it.

The discipline this language requires is precision about imprecision. Genuine craft is not sloppy — a letterpress printer's misregistration is a fraction of a millimetre, deliberate and controlled. Randomness applied as a texture is not craft; it is a filter.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Evidence of making** — the option that shows how it was produced.
2. **Material honesty** — surfaces behave like the materials they reference.
3. **Typography** — set as a printer would set it.
4. **Colour** — limited, as a physical process would limit it.
5. **Texture and border** — the marks of production.
6. **Spacing** — composed, print-derived.
7. **Motion** — minimal; physical processes do not animate.

Craft resolves toward the option that reveals authorship. Where a treatment would be more polished but less evidently made, Craft chooses the evidence.

The counterweight: **evidence of making is not evidence of carelessness.** Every deliberate imperfection must be controlled and consistent. If a visitor could plausibly read something as a bug, it is not craft.

**Against Organic:** Organic is nature — generous rounding, earthy palettes, unhurried calm, soft forms. Craft is human production — print texture, limited inks, set type, tool marks. Organic's corners are pillowy; Craft's are usually square, because paper and plates have square edges.

**Against Retro:** Retro references a period's *visual style*. Craft references a *process* that predates and outlives any period. A Craft blueprint is not nostalgic — it is contemporary work that shows its production.

**Against Industrial:** both reference physical production, but Industrial admires machined consistency and Craft admires the human hand. Industrial's imperfection is a flaw; Craft's is a signature.

---

# Signature Traits

- Visible evidence of production — impression, texture, tool marks
- A limited palette, as a physical printing process would impose
- Type set with a printer's attention rather than a designer's default
- Uncoated, tactile grounds rather than flat white
- Controlled, deliberate imperfection at small scale
- Rules and ornament drawn from print tradition
- Warmth that comes from material rather than from colour temperature alone

---

# Typography Language

Type is *set*, in the compositor's sense, rather than styled.

The strategy pairs a text face with genuine historical grounding — an oldstyle serif, a slab with letterpress heritage, a grotesque with visible drawing rather than construction — with a display treatment that reads as a printed mark: a wood-type-derived face, a condensed slab, or a carefully drawn wordmark.

This explicitly excludes the neutral geometric sans. A face constructed to have no material history contradicts a language whose entire subject is production.

Typographic detail is where this language proves itself, and it matters more here than anywhere except Typographic. Proper quotation marks and dashes, correct ligatures, oldstyle figures in running text and tabular figures in data, small caps where the family supports them, and deliberate letterspacing on capitals. A printer would have done all of this, and their absence is the fastest way a Craft page reads as a filter applied to a generic layout.

Letterpress impression may be suggested through a subtle inset treatment on display type — used sparingly, on a small number of elements, and never on body text, where it damages legibility.

---

# Colour Language

The palette is limited, as a physical process limits it.

Two or three inks on a ground. This is not restraint for elegance — it is the constraint a printer works within, and honouring it is what makes the result read as printed rather than designed.

Grounds are uncoated and warm: paper white, cream, oatmeal, kraft. Never pure white, which reads as a screen rather than a sheet.

Inks are slightly impure — a black with a trace of warmth or blue, a red that sits where a real ink would sit rather than at a display primary. Colours mixed rather than picked.

Where two inks overlap, the overlap may darken as physical inks do. This is a characteristic Craft device and would look like an error in almost any other language.

The limitation is the discipline. A Craft blueprint that accumulates a fourth and fifth colour has abandoned the process it references, and the material honesty goes with it.

---

# Motion Language

Motion is minimal. Printed things do not move.

Where transitions exist, they are brief and physical rather than digital — a state changing decisively, closer to a page turning or a stamp landing than to an element easing across a screen.

Nothing floats, drifts, parallaxes, or eases elaborately. A page that feels still is correct.

Because motion is minimal, the Interaction Language must be fully designed. A near-zero-motion language with undesigned hover and focus states has skipped a decision rather than made one — see `.hubzero/design/principles.md` — Motion Should Reinforce Understanding.

---

# Photography Language

Photography shows materials, process, and made things.

Subjects are hands working, tools in use, materials at close range, and finished objects that show how they were produced. Texture is the point: grain, weave, tooth, patina.

Lighting is natural and directional, revealing surface. Flat, even studio lighting removes the texture the images exist to show.

Photograph process as readily as product. A half-finished piece, a workbench, a proof sheet — these carry the language better than a polished catalogue shot, which is what a language admiring making rather than owning would choose.

Scanned artefacts belong alongside photography: proofs, swatches, sketches, printed samples. These are among the most effective images available to this language and cost less to produce convincingly than staged photography.

Images may sit on the ground without a frame, or carry a printed edge. Never a soft drop shadow, which is a screen convention foreign to the material.

---

# Corner Language

Corners are square or very slightly softened.

Paper, plates, blocks, and presses all produce square edges. A generous radius reads as a screen convention and contradicts the material reference — this is the clearest single distinction from Organic, which rounds generously.

Where softening appears, it should read as the slight rounding of a cut or worn edge rather than as a designed radius: minimal, and ideally not perfectly uniform.

---

# Border Language

Borders are print rules, and they carry the language's ornamental vocabulary.

Hairlines, double rules, thick-and-thin pairs, and printers' ornaments at section breaks. These are drawn from typographic tradition rather than from interface convention, and they do most of the decorative work.

Weight may vary by role, as a printer's rules do. A heavy rule above a section and a hairline between list items belong to the same system.

Edges may show slight variation in weight, as an inked rule does. Controlled and subtle — the effect should be felt rather than noticed.

---

# Shadow Language

There is essentially no shadow.

Ink on paper does not cast one. Depth comes from impression — the sense of type pressed into a surface — rather than from elevation above it.

Where separation is needed, use a rule, a change of ground tone, or space.

The one legitimate exception is a suggestion of physical layering where the composition genuinely references stacked paper, and even then it should read as a sheet resting on another sheet rather than as an interface card floating.

---

# Spacing Language

Spacing is composed as a printed page is composed.

Generous margins, particularly at the outer edges, so the content sits *on* a sheet rather than filling a screen. This margin is a substantial part of what makes the material reference work.

Vertical rhythm follows the type, with the relationships between heading, text, rule, and ornament establishing structure.

Asymmetry drawn from book and broadside layout is welcome — an outer margin wider than the inner, a heading set into the margin, a note beside the text block.

Density is moderate. Printed matter is neither sparse nor crowded; it is set to fit the sheet.

---

# Interaction Language

States are decisive and immediate, expressed through ink rather than through movement.

Hover shifts an ink, thickens a rule, or reveals an underline — instantly. Active states press: a slight inset, a tonal shift, the impression of something stamped.

Underlines on links are the default. In a limited palette, the underline carries the affordance.

Focus indicators must be strong. With almost no colour, no shadow, and no motion available, a subtle focus state is invisible — a hard, high-contrast rule or outline is correct even though it is more assertive than the surrounding page.

---

# Component Language

Components read as printed elements rather than interface controls.

A button is a bordered block with set type and a pressed active state. A card is a bounded region on the ground with rules and composed type — often with no background surface at all. A form field is a printed line, as a paper form would have.

Ornament from the printing tradition — rules, fleurons, section marks — does the work that iconography and surface treatment do elsewhere. Use it sparingly and consistently, assigned to specific roles.

Components should look like they could be printed. If a treatment could not exist on paper, it usually does not belong.

---

# Visual Rhythm

A Craft page reads as a well-composed printed artefact.

Rhythm comes from the alternation of set type, rule, ornament, and material image — with the ground's texture continuous beneath all of it, holding the page together as a single sheet.

Texture must be consistent. A ground that reads as one paper stock in one section and another elsewhere destroys the material illusion faster than any other error, and it is easy to introduce when sections are built separately.

Variation comes from composition — changes of measure, indent, and rule weight — rather than from changes of surface. The sheet stays the same sheet.

---

# Responsive Behavior

Craft's material qualities are texture-dependent, and texture is exactly what a small viewport threatens.

**Texture scale must be re-tuned, never proportionally scaled.** A paper grain sized for a wide viewport becomes either invisible or a coarse pattern on a phone. Define the texture at a physical scale that holds across viewports — the grain of paper does not change size when the sheet does.

Margins must survive. The sense of content sitting on a sheet depends on visible edges, and reclaiming that space on mobile is the most common way the material reference is lost. Reduce type scale before reducing margin.

Display type carrying an impression treatment needs verification at handheld width — an inset effect tuned for large type can render as a blur at smaller sizes.

Rules and ornament should be edited rather than shrunk. Choose which carry the language on mobile and drop the rest; a hairline double rule at phone scale is usually a single fuzzy line.

Photography needs mobile crops that preserve visible texture. A wide workshop scene scaled down loses the grain and patina it was chosen for; prefer tighter material detail crops on mobile.

The palette limitation stays. There is no reason a mobile layout needs a fourth ink.

---

# Token Contract

Craft must own the following rather than inherit them.

* **Ground and texture tokens** — the paper colour and its surface treatment. These are the language's defining values and no foundation supplies them; without shared definitions, sections diverge and the material illusion breaks.
* **Colour** — two or three impure inks on a warm uncoated ground. An inherited neutral scale with a display-primary accent contradicts the process reference entirely.
* **Type families** — a text face with historical grounding and a display face reading as a printed mark. Explicitly not a geometric sans.
* **Typographic feature settings** — ligatures, oldstyle and tabular figures, and small caps declared as tokens rather than applied ad hoc.
* **Rule weights** — a defined set including hairline, thick-and-thin, and double, assigned to roles.
* **Radius** — zero or very near zero, categorically.
* **Shadow** — none; impression tokens instead where used.
* **Spacing scale** — generous outer margins, print-derived vertical rhythm.
* **Motion duration** — near-instant.

Because deliberate imperfection is part of the language, its parameters must be defined centrally rather than improvised per component — and any variation must be deterministic, derived from stable content rather than from a random source, or it will differ between the server and the browser. See `.hubzero/rendering.md`.

---

# Suitable Architectures

- Ecommerce
- Portfolio
- Blog
- Hospitality
- Corporate
- Nonprofit
- Directory

Craft suits businesses whose value genuinely comes from how something is made — small-batch producers, studios, makers, independent retailers, restaurants with a provenance story.

It requires a real production story. Applied to a business that does not make anything, the language reads as costume, and the dishonesty is more visible than an unremarkable design would be.

It is a poor fit wherever a visitor needs speed, density, or authority at scale — SaaS, Documentation, Government, Finance, and Logistics all work against a language built on material warmth and deliberate imperfection.

---

# Anti-Patterns

**Never:**

- Apply texture as a filter over a generic layout. Craft is a system, not an overlay.
- Use random or uncontrolled imperfection. Genuine craft is precise about its variation; anything a visitor could read as a bug is not craft.
- Use a neutral geometric sans.
- Use pure white as a ground or a display primary as an ink.
- Exceed three inks. The limitation is the process reference.
- Add drop shadows. Ink on paper does not float.
- Add generous corner radii. That is Organic, not Craft.
- Apply impression treatments to body text.
- Let texture scale change between viewports.
- Scale rules and ornament down instead of editing them.
- Generate imperfection non-deterministically — it will differ between server and client renders.
- Apply this language to a business with no production story. It reads as costume.

**Specifically not Organic:** Organic is nature — generous rounding, earthy palettes, soft calm forms. Craft is human production — square edges, limited inks, print texture. If the corners are pillowy, it is Organic.

**Specifically not Retro:** Craft references a living process, not a historical style. A blueprint reproducing a specific decade's graphics is Retro. Craft's references are contemporary work using traditional methods.

**Specifically not Industrial:** Industrial admires machined consistency and reads imperfection as a defect. Craft admires the hand and reads it as a signature.
