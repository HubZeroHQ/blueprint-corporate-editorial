# Typographic

Typographic design makes type the entire interface.

There is no photography. There are almost no components. What a visitor sees is text — set with enough care that the setting itself carries the identity, the hierarchy, the atmosphere, and the brand.

This is the library's most constrained language, and the constraint is the point. Removing imagery forces every expressive decision into the type system, which produces a discipline no other language requires.

Unlike Editorial, which is a publication of type *and* imagery with captions and credits, Typographic forbids photography outright. Unlike Minimal, which reduces everything, Typographic may be typographically rich — large, varied, and confident — while remaining visually spare.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Typography** — it is not the first subsystem, it is effectively the only one.
2. **Reading experience** — measure, rhythm, and comfort at length.
3. **Spacing** — the sole compositional tool besides type itself.
4. **Colour** — ink and ground, one accent at most.
5. **Border and rule** — where structure needs stating.
6. **Corner, shadow, motion** — absent.

Every conflict resolves into the type system. When a page needs emphasis, structure, atmosphere, or hierarchy, the answer is a typographic one — a change of size, weight, style, measure, or spacing. Reaching outside the type system for any of these is a departure from the language.

**Against Editorial:** Editorial has a substantial Photography Language, captions, credits, and image-led rhythm. Typographic has none. The difference is not degree — it is a categorical prohibition, and it changes every other decision because type must carry work that imagery would otherwise share.

**Against Swiss:** Swiss leads with the grid and uses objective, neutral type. Typographic leads with type and permits genuine typographic expression — varied faces, sizes, and styles — within a looser composition.

---

# Signature Traits

- No photography, anywhere
- Type carries hierarchy, atmosphere, and identity alone
- Rich typographic variation within a spare visual field
- Measure treated as a primary design decision
- Rules and space as the only non-type devices
- Ink on ground — a palette of essentially two values
- Confidence expressed by having nothing to hide behind

---

# Typography Language

The type system is the design system, and it carries a correspondingly higher standard than in any other language.

The strategy is **expressive setting within a small family count**. One or two families, used across a genuinely wide scale, with real variation in weight, style, and optical size. Where most languages establish three or four type roles, this one may have ten — display, subhead, lead, body, aside, caption, quote, marginal note, label, and numeral treatments each deliberately set.

Because there is no imagery, the type must supply atmosphere. A face chosen purely for neutrality produces a blank page rather than a spare one. The family selection is the single most consequential decision in a Typographic blueprint, and it should be made for character as much as legibility.

**Measure is a primary decision.** Line length governs how the page reads more than any other value, and it varies by role: a lead paragraph, a body column, and a pull quote each want a different measure. Define them explicitly rather than letting a single container width determine all of them.

Vertical rhythm should be genuinely tuned rather than inherited. With no imagery to break the page, the relationship between line height, paragraph spacing, and heading space is what creates rhythm.

Typographic detail matters here in a way it does not elsewhere: proper quotation marks, correct dashes, hanging punctuation where achievable, tabular numerals in data, and small caps where the family supports them. These are not flourishes in this language — they are most of what a visitor perceives as quality.

---

# Colour Language

Ink on ground.

Establish two values — a text colour and a page colour — and let them carry almost everything. Both are usually slightly off from pure black and white: a warm or cool near-black, on a ground with a trace of tone. Pure black on pure white reads as unset default rather than as a decision.

One accent is permitted, used for links and rare emphasis. It should be the only colour a reader consciously registers on the page.

Colour never creates hierarchy that the type system can create. In a language built entirely on typographic distinction, reaching for a coloured heading is a straightforward admission that the type scale is not doing its job.

Secondary text is established by tonal step from the ink, not by a different hue. Verify every step against the ground per the Contrast Contract — a language with no other visual cues cannot afford a foreground tone that fails, because there is nothing else carrying the information.

---

# Motion Language

Motion is absent by default.

Where a transition exists, it is brief and functional — a state confirming itself. Nothing eases, settles, reveals, or paces.

This is a deliberate zero-motion language, which places the full burden of interaction feedback on the Interaction Language below. A zero-motion language with undesigned hover and focus states has skipped a decision rather than made one — see `.hubzero/design/principles.md` — Motion Should Reinforce Understanding.

Scroll-triggered reveals are specifically wrong here. A page of text that appears progressively is a page of text that is unreadable when the mechanism fails.

---

# Photography Language

**There is no photography.** This is the language's defining prohibition and the reason it exists as a separate system.

No photographs, no illustration, no decorative imagery, no icon sets used as visual relief. An image introduced into a Typographic page immediately becomes the most prominent thing on it, and the type system stops being the interface.

Two narrow exceptions:

* **The brand mark**, at small scale, in navigation and metadata.
* **Information graphics** where the content is genuinely data — a chart, a table, a diagram — set typographically, in the ink colour, using the same rules and spacing as the rest of the page.

Where a blueprint genuinely needs photography, it needs Editorial rather than a relaxed Typographic. The prohibition does not bend; it is what makes the language distinct.

Social preview assets are an unavoidable exception, since platforms require a raster image. Compose it typographically — the wordmark and a line of type on the ground colour — so it is consistent with the site rather than foreign to it. See `.hubzero/experience/branding.md`.

---

# Corner Language

Corners are square.

There are very few enclosed surfaces to round. Where a control or field requires an edge, it is a right angle, applied uniformly.

A radius in this language reads as an interface convention intruding on a page that is deliberately not presenting itself as an interface.

---

# Border Language

Rules are the only non-type device the language has, which makes them important.

A hairline rule separates sections, underlines a heading, marks a marginal note, or divides a list. Weight is uniform and light. Rules do real structural work here, standing in for the containers and surfaces the language does not have.

Never draw a box around content. A rule states a boundary; a box creates a component, and this language has almost none.

---

# Shadow Language

There is no shadow.

Nothing is elevated because nothing is a surface. The page is ink on ground, and depth is not a concept the language uses.

---

# Spacing Language

Spacing and type are the entire compositional vocabulary, so spacing carries far more weight here than its brevity suggests.

Space establishes every relationship the page has: what belongs with what, where a section begins, what deserves attention. Generous and deliberate, with clearly differentiated steps — an interval that is *almost* the same as another creates ambiguity a visitor feels as sloppiness.

Margins are substantial. A Typographic page needs its text column to sit within visible space rather than running toward the viewport edge; the emptiness around the column is what makes the setting read as considered.

Asymmetry is welcome. An indented column, an offset heading, a marginal note in the outer space — these are characteristic moves that create composition without adding elements.

---

# Interaction Language

Because the language has no motion, interaction states must be **completely designed** and instantaneous.

Links carry underlines by default. In a page with essentially one colour, the underline is doing the work colour does elsewhere, and removing it for tidiness removes the affordance.

Hover changes weight, tone, or underline treatment — immediately, with no transition. Active states invert or shift tone decisively.

Focus indicators must be strong and unambiguous. With no shadows, colours, or motion available, a weak focus state is genuinely invisible. A hard, high-contrast outline is correct here even though it is more visually assertive than the rest of the page — accessibility is not the place this language exercises restraint.

---

# Component Language

There are almost no components, and that is a design decision rather than an omission.

Navigation is a line of type. A button is a word with a rule under it or a bordered rectangle with correct padding. A form field is a line. A "card" is a heading, a paragraph, and a rule.

Every component is a typographic arrangement. Where a conventional interface would introduce a surface, a container, or an icon, this language introduces a change of type role or a rule.

The test: describing a component should be possible entirely in typographic terms. If the description requires a background, a border radius, or an icon, it does not belong here.

---

# Visual Rhythm

A Typographic page reads as a considered document — one where the setting is the design and nothing has been added to compensate.

Rhythm comes from the alternation of type roles down the page: display into lead, lead into body, body into a rule, a rule into an aside. With no imagery to break the field, these transitions are the entire structure, and they must be varied deliberately or the page becomes monotonous.

Scale contrast does the work imagery does elsewhere. A genuinely large display treatment against small body text creates the visual event that a photograph would create in another language. Timidity in the type scale is the most common way a Typographic page becomes a plain one.

Length is the language's real test. A short page of well-set type is easy; twenty screens of it requires deliberate pacing, marginal variation, and changes of measure to remain engaging.

---

# Responsive Behavior

Typographic is nearly viewport-independent in structure and entirely dependent on it for measure.

**Measure is the mobile decision.** Verify line length at handheld width explicitly for every type role — a body measure tuned for desktop becomes either cramped or awkwardly short depending on how the scale was adjusted. This is the single verification this language most requires.

Margins must stay visible. The instinct to reclaim horizontal space on a phone removes the surrounding emptiness that makes the setting read as deliberate. Reduce the type scale before reducing the margin.

Display type stays dramatic. The scale contrast between display and body is what creates visual event in a language with no imagery; flattening it on mobile produces an undifferentiated column of text.

Asymmetric devices — indents, marginal notes, offset headings — need mobile equivalents rather than removal. A marginal note becomes an indented aside; it does not become another paragraph.

Rules survive. They carry the structural work and should remain visible at every viewport.

Because the language has no images, no layered surfaces, and no motion, mobile is almost entirely about the type scale and measure. That narrowness makes it easy to do well and easy to neglect entirely.

---

# Token Contract

Typographic must own the following rather than inherit them. This language has fewer tokens than any other, which makes each one more consequential.

* **Type families** — one or two, chosen for character rather than neutrality. This is the language's most consequential decision and cannot be inherited.
* **Type scale** — a wide range with genuinely large display sizes and carefully differentiated small sizes. A general-purpose scale is invariably too narrow at both ends.
* **Measure tokens** — a maximum reading width per type role. Most foundations supply a single container width and no measure at all; without explicit values, every surface improvises.
* **Line height and paragraph rhythm** — tuned per role for sustained reading.
* **Colour** — an ink and a ground, both slightly off pure values, plus a verified secondary tone and one accent.
* **Border width** — one hairline value, since rules are the only non-type device.
* **Radius** — zero, categorically.
* **Shadow** — none.
* **Spacing scale** — generous, with clearly distinguished steps.

A blueprint in this language whose type tokens came from its foundation has not adopted it. There is nothing else to look at.

---

# Suitable Architectures

- Blog
- Portfolio
- Documentation
- Corporate
- Nonprofit
- Marketing

Typographic suits architectures whose value is thinking, writing, or a point of view — particularly where a business wants to signal that it is confident enough not to decorate.

It requires content that can carry a page alone. A blueprint whose value proposition is visual, physical, or experiential should not use this language: Ecommerce, Hospitality, Travel, Real Estate, and Automotive all depend on showing the visitor something, and this language forbids exactly that.

---

# Anti-Patterns

**Never:**

- Introduce photography, illustration, or decorative imagery. This is the prohibition that defines the language.
- Use icons as visual relief.
- Add a background surface or container to create a component.
- Create hierarchy with colour that the type system should create.
- Remove underlines from links.
- Use a subtle focus indicator. With no colour or motion available, subtle means invisible.
- Add scroll-triggered reveals to a text page.
- Let the type scale stay timid. Without scale contrast there is no visual event at all.
- Set one measure for every role and call it a reading experience.
- Reduce margins on mobile to reclaim width.
- Choose a family purely for neutrality — a page with no imagery and no typographic character is blank, not spare.

**Specifically not Editorial:** Editorial has photography, captions, credits, and image-led rhythm. If a blueprint wants imagery, it wants Editorial. Typographic minus the prohibition is simply Editorial done sparsely.

**Specifically not Minimal:** Minimal reduces everything, including the type system. Typographic is typographically *rich* — many roles, wide scale, real variation — within a spare visual field. A page with three type sizes and lots of whitespace is Minimal.

**Specifically not Swiss:** Swiss subordinates type to the grid and chooses neutral faces deliberately. Typographic subordinates everything to type and chooses faces for character.
