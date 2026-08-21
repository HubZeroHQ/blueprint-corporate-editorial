# Maximalist

Maximalist design communicates through abundance.

Where nearly every other language in this library achieves quality by removing, Maximalist achieves it by layering — pattern over surface, type over image, colour against colour — and by composing that density so it reads as rich rather than chaotic.

This language exists partly as a structural safeguard. A library where every option is a variety of restraint will converge on the same neutral result, and the corpus shows that convergence happening. Maximalist is the answer that cannot be reached by leaving tokens at their defaults.

Its difficulty is real. Maximalism executed badly is noise, and the line between the two is composition, not quantity. This is the hardest language in the library to execute well and the easiest to execute badly.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Density and layering** — the richer composition wins.
2. **Colour** — saturated, plural, committed.
3. **Visual rhythm** — density must be composed, or it is noise.
4. **Pattern and surface** — surfaces are decorated, not blank.
5. **Typography** — plural and expressive, but legible.
6. **Component** — ornamented, distinct, characterful.
7. **Spacing** — tight, but never at the cost of readability.

Maximalist resolves toward more — until legibility or usability is threatened, at which point they win without argument. This is the boundary that separates the language from failure: **abundance is the goal, illegibility is never the price.**

The discipline is different from restraint but no less rigorous. Every element must earn its place through contribution to the composition, not through a claim that more is inherently better.

**Against Expressive:** Expressive commits to one authored shape vocabulary and applies it consistently. Maximalist layers *many* vocabularies — pattern, ornament, plural type, plural colour — simultaneously. Expressive is a signature; Maximalist is an accumulation.

**Against Bold:** Bold achieves impact with few elements at large scale in a simple system. Maximalist achieves it with many elements layered. Bold is loud and simple; Maximalist is loud and complex.

---

# Signature Traits

- Layered surfaces, pattern, and ornament as defaults rather than accents
- A genuinely plural palette — many colours, all committed
- Multiple type families working together deliberately
- Dense composition with tight, deliberate spacing
- Decorated surfaces; blank ground is the exception
- Every component has character rather than neutrality
- Richness that rewards a second look

---

# Typography Language

Typography is plural. Three or more families working together is normal here, where it would be a failure in most other languages.

The type strategy is **deliberate collision**: a display face with real personality, a text face for readability, and often a third — a script, a slab, a condensed, a decorative — used for specific roles. The pairing should feel authored rather than accumulated, which requires each family to have a defined job.

Scale contrast is wide and used freely. Type may be set at dramatically different sizes within a single composition, overlapped with imagery, rotated, or set against pattern.

The constraint that keeps this from becoming noise: **body text is never sacrificed.** Extended reading passages get a legible face, a sensible measure, and adequate line height, regardless of what the display typography is doing around them. Maximalism lives in the display and ornamental layers, not in the paragraph.

Verify type over pattern explicitly. Text on a patterned ground is this language's most common legibility failure, and it always looks acceptable to the person who designed it.

---

# Colour Language

The palette is plural and saturated. Six, eight, or more committed colours, used together.

This is not a neutral system with accents — it is a system where colour is a primary material. Colours are placed against each other deliberately, including combinations most languages would avoid.

Discipline comes from **defined roles, not from fewer colours**. Each colour has a job: this one carries sections of one kind, that one marks a category, this pair always appears together. Without roles, a plural palette becomes random, and random is what Maximalism is accused of.

Every colour needs a verified on-colour foreground. This is the practical cost of a plural palette and it is not optional — a palette of eight colours is eight contrast verifications, each against every text tone it carries. Semantic colour roles are substantially safer than raw values scattered through components.

Grounds are frequently coloured or patterned rather than white. A Maximalist page on a plain white background is usually a Bold page with more elements.

---

# Motion Language

Motion is characterful and abundant, and it is where the language most needs its own discipline.

Elements may enter, layer, shift, and respond with genuine personality. Easing carries character. Hover states do more than acknowledge.

Three constraints keep it from becoming exhausting:

**Motion must not compete with itself.** Multiple simultaneous animations in one viewport cancel each other out and produce visual noise rather than richness. Sequence, or choose.

**Motion must never gate content.** Dense pages have a great deal to reveal, which makes reveal-driven layouts especially tempting and especially dangerous here — see `.hubzero/rendering.md` — Progressive Enhancement.

**Reduced motion needs a complete alternative.** Maximalism leans on motion more than most languages, and the reduced-motion composition must still feel abundant — through pattern, colour, layering, and ornament rather than movement. A Maximalist page with motion disabled should look dense, not empty.

---

# Photography Language

Imagery is one layer among many rather than the environment.

Photographs are treated — cropped irregularly, masked into shapes, tinted toward the palette, overlapped with type and pattern. An untreated photograph sitting in a rectangle reads as foreign to a page where every other surface has been composed.

Illustration, pattern, and graphic ornament sit alongside photography as equal materials. This is one of the few languages where an illustrated element and a photograph can occupy the same composition without either looking out of place.

Multiple images may appear in one composition, layered and overlapping. Each still needs a declared focal point, because aggressive irregular crops cut subjects — record it with the content, per `.hubzero/content/principles.md` — Media Belongs to the Record.

The cohesion requirement is unavoidable: with this many elements, a shared treatment across all imagery is what separates a rich composition from a collage of unrelated sources.

---

# Corner Language

Corner treatment is plural and deliberate. Different component families may carry different treatments — sharp panels, heavily rounded pills, irregular shapes — provided the vocabulary is defined and repeats recognizably.

The distinction from inconsistency: a Maximalist system has a *set* of shape treatments, each assigned to a role. It does not have arbitrary per-component radii. Document the set alongside the tokens, or a later contributor cannot tell a decision from an error.

Where a shape carries meaning — a category, a content type — it should carry it consistently everywhere that thing appears.

---

# Border Language

Borders are present, visible, and often decorative.

Frames, rules, multiple concentric borders, patterned edges, and heavy outlines all belong. Borders here do more than divide — they ornament, and they help layered elements read as distinct within a dense field.

Weight and style vary by role rather than staying uniform. A frame around a feature panel and a hairline in a data table are both correct in the same system.

This is one of the few languages where a border exists purely because the composition is better with it.

---

# Shadow Language

Shadow is used freely and expressively — hard offset shadows, coloured shadows, layered elevation, or none at all where a flat overlap reads better.

Because the language layers heavily, shadow does real work in establishing which surface sits above which. In a dense composition, ambiguous layering reads as a mistake.

Shadows may be coloured and drawn from the palette rather than neutral. A hard offset shadow in a palette colour is a characteristic Maximalist device and would be wrong in almost every other language here.

---

# Spacing Language

Spacing is tight relative to every other language, and density is the intended effect.

Elements sit close together, overlap, and fill the field. Generous whitespace reads as an unfinished Maximalist page rather than a calm one.

Two disciplines prevent this from becoming unreadable:

**Reading passages keep their space.** Body text needs its measure and line height regardless of how dense the surrounding composition is.

**Density needs structure.** Tightly packed elements without an underlying organization become noise. There is usually a grid beneath a good Maximalist page, even where the composition breaks it deliberately — the breaks read as intentional precisely because a structure exists to break.

---

# Interaction Language

Interactions are expressive and immediate. Elements may shift, invert, reveal ornament, change colour, or gain a shadow on hover.

Every interactive element should feel like it has personality. In a language where everything is characterful, a neutral hover state reads as an element that was forgotten.

The requirement that costs the most: **focus states must be unmistakable in a visually busy field.** A focus ring that would be obvious on a plain background can disappear entirely against pattern and layered colour. Design it against the busiest surface on the site, not the calmest.

Touch and keyboard parity matters more here than usual, because Maximalist interfaces tend to accumulate hover-revealed content. Anything revealed on hover needs a path that works without one.

---

# Component Language

Components are ornamented and distinct. Each has character rather than neutrality.

A button is a shape with a border, a shadow, a colour, and a considered hover — not a rectangle with a label. A card is a composed object with a frame, a treated image, and layered type. Navigation is a designed element rather than a bar.

Variation between component families is expected, provided each family is internally consistent. A feature panel and a data row can look like they came from different parts of the same rich system.

The failure mode is a component that has accumulated decoration without composition — three borders, two shadows, a pattern, and a gradient, none of which relate to each other. Ornament must be composed, and the test is whether each element could be removed without the composition getting better.

---

# Visual Rhythm

A Maximalist page rewards a second look, and it is composed to do so.

Rhythm comes from variation in density rather than from variation in emptiness. A dense feature passage, a slightly calmer reading passage, an ornamental break, another dense passage. Sustained uniform density is as monotonous as sustained uniform sparseness — the page needs dynamics.

Layering creates depth down the page: pattern behind surfaces, surfaces behind type, ornament crossing boundaries between sections. Sections that stack as discrete rectangles produce a page that is merely busy rather than rich.

The governing test: **could any element be removed without the composition getting better?** If yes, that element is noise. Maximalism is not the absence of editing — it is editing toward richness rather than toward emptiness, and the editing is what most people skip.

---

# Responsive Behavior

Maximalist is the most difficult language to bring to a phone, because density that reads as rich on a wide viewport reads as cramped on a narrow one.

**Reduce layer count rather than element size.** Three layered surfaces on desktop become one or two on mobile. Shrinking everything proportionally produces an illegible field, where removing layers preserves the character.

Prioritize the ornamental vocabulary. Decide which patterns, frames, and decorative elements carry the language at handheld width and remove the rest. A Maximalist mobile page should still be unmistakably Maximalist — the failure is a mobile pass that strips everything and produces a plain stacked layout.

Reading passages get *more* space on mobile, not less. This is the one place the language's density loosens, and it should loosen deliberately.

Type plurality survives but simplifies. Three families may become two; the display treatment stays expressive.

Pattern scale must be re-tuned. A background pattern sized for a wide viewport becomes either invisible or overwhelming on a phone, and simply scaling it is rarely correct.

Verify contrast against the actual mobile composition. Layers that separated text from a busy ground on desktop may have been the layers removed for mobile.

Reduce motion substantially. Dense pages with abundant motion are expensive on lower-powered devices, and dropped frames read as broken rather than rich.

---

# Token Contract

Maximalist must own the following rather than inherit them. It requires more explicit tokens than any other language in the library.

* **Colour** — a plural, saturated palette with defined semantic roles and a verified on-colour foreground for every one. An inherited neutral scale with one accent is the exact opposite of this language.
* **Pattern and ornament tokens** — the decorative surfaces the language depends on. No foundation supplies these, and without shared definitions every section invents its own and they diverge.
* **Radius** — a defined *set* of treatments assigned to component roles, not one value. Document which role uses which.
* **Shadow** — an expressive scale including hard offset and coloured variants. A conventional soft elevation ramp does not serve this language.
* **Border** — multiple weights and styles by role.
* **Type families and scale** — three or more families with defined jobs, across a wide scale.
* **Spacing scale** — tighter than a neutral default, with a separate, more generous set of values reserved for reading passages.
* **Motion easing** — characterful curves.

Because this language permits per-role variation across several subsystems, the *documentation of the vocabulary* is part of the token contract. A radius or border that varies by component without a recorded reason is indistinguishable from carelessness, and carelessness is the accusation this language must always defend against.

---

# Suitable Architectures

- Media
- Community
- Events
- Marketing
- Ecommerce
- Blog
- Portfolio
- Marketplace

Maximalist suits architectures built around culture, participation, or personality — where a distinctive voice is itself the value, and where a visitor is browsing rather than executing a task.

It is a poor fit wherever a visitor must complete something consequential under pressure or absorb dense factual information: Government, Healthcare, Finance, Legal, Logistics, and Documentation all need clarity this language deliberately trades away.

It also requires genuine design capacity. A blueprint that cannot commit to composing its density should choose Expressive or Bold instead — both deliver personality at substantially lower risk.

---

# Anti-Patterns

**Never:**

- Mistake quantity for maximalism. Unedited accumulation is noise; every element must contribute to the composition.
- Sacrifice body text legibility. Density lives in the display and ornamental layers, never in the paragraph.
- Set text over pattern without verifying contrast against the actual pattern.
- Use a plural palette without defined roles and verified on-colour foregrounds.
- Run multiple competing animations in one viewport.
- Let content depend on a reveal animation.
- Design a focus state against a calm background. Test it against the busiest surface on the site.
- Reveal content on hover with no touch or keyboard equivalent.
- Vary radius, border, or shadow per component without a documented vocabulary.
- Scale everything down for mobile instead of reducing layer count.
- Strip the ornament on mobile and ship a plain stacked page.
- Ship untreated stock photography dropped into a rectangle.

**Specifically not Expressive:** Expressive commits to one shape vocabulary applied consistently. Maximalist layers many vocabularies at once. A page with one distinctive shape system and generous spacing is Expressive.

**Specifically not Bold:** Bold uses few elements at large scale in a simple system. If the page would still work with three quarters of its elements removed, it is Bold with decoration.

**Specifically not Retro:** Retro references a specific period. Maximalist has no period commitment — it may borrow from several eras at once, and its abundance is contemporary rather than nostalgic.
