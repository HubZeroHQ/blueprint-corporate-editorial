# Editorial Design Language

Editorial is a design language that prioritizes storytelling, typography, and reading experience.

Rather than immediately directing users toward actions, Editorial design first builds understanding, trust, and emotional connection through carefully structured content.

Every page should feel intentionally written rather than assembled.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Reading experience** — measure, rhythm, and comfort over long passages.
2. **Typography** — the type system is the design.
3. **Spacing** — the vertical rhythm of a printed page.
4. **Photography** — imagery serves the text, with authored captions and credits.
5. **Border and rule** — hairlines structure the page as a printed page would.
6. **Colour** — sparing; the page is mostly ink on ground.
7. **Corner, shadow, motion** — recede entirely.

Editorial resolves toward whatever makes sustained reading easier. A treatment that improves a page at a glance while making a long article harder to read is the wrong answer here.

**Against Typographic:** Editorial is type *plus* imagery, captions, and long-form structure — it is a publication. Typographic forbids photography and makes type the entire interface. Editorial's photography language is substantial; removing it produces Typographic, not a restrained Editorial.

---

# Design Objective

Communicate through narrative.

Guide visitors through information in a deliberate sequence that naturally builds understanding before asking for action.

Editorial design values thoughtful communication over immediate conversion.

---

# Signature Traits

An Editorial blueprint should communicate:

* Authority
* Confidence
* Intelligence
* Clarity
* Craftsmanship

The interface should feel calm, deliberate, and highly curated.

---

# Content Leads Design

Content determines layout.

The design should adapt to the story being told rather than forcing content into predetermined sections.

Every page should read naturally from beginning to end.

---

# Typography Language

Typography is the primary visual element — the thing that establishes Editorial's personality before color or imagery does.

Hierarchy is built through scale, weight, and rhythm rather than color or decoration. Line length and line height should be tuned for sustained reading, not just legibility at a glance. Reserve a distinct treatment — a larger size, a different weight, occasionally a pull-quote pattern — for the sentence or statement that should stop a reader mid-scroll.

Avoid using more than a small number of deliberate type scale steps. Editorial hierarchy should read as considered, not improvised.

---

# Motion Language

Motion is quiet and in service of reading, never in service of spectacle.

Entrances should feel like a page settling into place — gentle opacity and position shifts tied to scroll position — rather than elements arriving from off-screen with energy. Avoid bounce, overshoot, or elastic easing entirely; they read as playful, which contradicts Editorial's calm authority.

Transitions between sections should feel like turning a page, not launching an application. If a transition would feel out of place in a beautifully designed print publication, it does not belong in an Editorial blueprint.

---

# Photography Language

Photography should read as documentary or editorial photography — the kind of image a respected publication would commission — not staged corporate stock photography.

Prefer natural light, authentic context, and restrained color grading over glossy, artificially lit compositions. Images should function as chapter breaks in the narrative: generously margined or full-bleed, appearing at moments that earn a visual pause rather than filling a grid.

Every image should justify its presence in the story being told. See `.hubzero/experience/photography.md` for how this translates into image generation.

---

# Corner Language

Corners should not call attention to themselves.

Use sharp or very subtly rounded corners consistently throughout — never a mix of sharp and heavily rounded elements. The restraint should feel closer to a printed page or column than a software interface.

---

# Border Language

Borders are used sparingly, as rule lines that separate sections the way a printed publication separates articles — thin, quiet, and structural.

Avoid enclosing cards or content blocks in full borders as a default treatment. A hairline rule above or below a section communicates more calmly than a box around it.

---

# Shadow Language

Shadow is nearly absent. Elevation and separation are communicated through whitespace and layering, not drop shadows.

Where a shadow is functionally necessary — a modal, a dropdown — keep it extremely soft and low-contrast. Shadow should never be used decoratively to make a card "pop."

---

# Spacing Language

Spacing follows a generous, rhythmic vertical baseline reminiscent of a printed column's leading.

Whitespace is not empty space to be minimized — it is what allows long-form content to remain comfortable to read. When in doubt, add more space between sections rather than less.

---

# Interaction Language

Interactions stay subtle enough that they never compete with the content being read.

Hover states favor understated shifts — an underline appearing, a slight opacity or color change — over scale transforms or color inversions. Focus states should remain clearly visible without introducing visual noise. Navigation should feel predictable, so readers can stay focused on the content rather than learning the interface.

---

# Component Language

Every recurring component should feel like part of the same publication, not a separate UI kit bolted onto the content.

Favor understated buttons and text links over heavy, high-contrast call-to-action buttons where the context allows it — a reader who has been persuaded by the narrative does not need to be shouted at. Cards, when used, should read as article previews rather than product tiles: typography-led, minimally bordered, image as a secondary element.

---

# Visual Rhythm

Pages should alternate between text-forward and image-forward sections the way a magazine spread alternates between long-form copy and full-page photography.

Maintain consistent margins and a consistent baseline rhythm across every section so that the alternation feels composed rather than inconsistent. Every section should feel like the next chapter, not a different template.

---

# Balance

Editorial design values restraint over spectacle.

Visual expression should emerge through composition, typography, and storytelling rather than decorative effects.

Every page should reward careful reading.

---

# Colour Language

Colour is sparing, and the page reads as ink on a ground rather than as a coloured interface.

Establish a ground and an ink first — often warmer than pure white and pure black — and let those two values carry most of the page. A single accent may mark links, section markers, or an occasional emphasis, and it should be the only colour a reader consciously registers.

Colour should never be used to establish hierarchy that typography and spacing can establish instead. In Editorial, reaching for a coloured heading or a tinted panel is usually a sign that the type scale is not doing its work.

Where a publication needs to distinguish sections or topics, prefer a restrained set of marks and rules over a palette of section colours. A magazine distinguishes its departments through typography and layout far more than through hue.

---

# Responsive Behavior

Editorial is a reading language, and mobile is where most reading actually happens — this is the viewport it should be best at, not the one it tolerates.

Measure is the governing constraint. Verify line length at handheld width explicitly; a measure that reads comfortably at desktop can become either uncomfortably short or fatiguingly dense depending on how the type scale was adjusted. Prioritize this over every other mobile decision.

Vertical rhythm must be preserved. The relationships between heading, paragraph, caption, and rule are what make the page read as a publication; compressing them proportionally produces an undifferentiated column of text.

Photography becomes a taller, more immersive sequence rather than reflowed desktop crops, and the order in which images appear should build the article the way a desktop layout builds an overview. Captions and credits stay attached to their images and remain legible — they are content, not decoration.

Multi-column desktop layouts become a single deliberately paced column, not stacked columns. Pull quotes and breakout elements need their own mobile treatment; a full-width pull quote on a phone is simply a paragraph in a different size unless it is composed as something distinct.

Long articles need in-page navigation on mobile that does not compete with the reading experience — an unobtrusive progress or section affordance rather than a persistent overlay.

---

# Token Contract

Editorial must own the following rather than inherit them.

* **Type scale and families** — a genuine editorial type system, typically pairing a text face chosen for sustained reading with a distinct display treatment. This is the language and cannot be inherited.
* **Measure** — an explicit maximum reading width token. Most foundations have no such value; without one, every long-form surface improvises and they diverge.
* **Line height and vertical rhythm** — tuned for extended reading rather than for interface text.
* **Colour** — a ground and an ink, typically warmer than pure white and black, plus one restrained accent.
* **Border** — hairline rules, which do the structural work here.
* **Radius** — sharp or very subtly rounded, applied consistently. A moderate inherited radius makes the page read as a software interface rather than a printed one.
* **Shadow** — absent. Printed pages do not float.

---

# Suitable Architectures

- Blog
- Media
- Nonprofit
- Corporate
- Portfolio
- Education

Editorial suits any architecture whose primary asset is written content and whose credibility comes from the quality of its thinking. It is a poor fit where the visitor's task is transactional — Ecommerce checkout and Booking flows need an interface language, not a publication one.

---

# Anti-Patterns

Avoid treating Editorial design as minimalism.

Avoid excessive decorative typography.

Avoid fragmented layouts that interrupt the reading experience.

Avoid overwhelming pages with competing visual elements.

Avoid prioritizing visual novelty over communication.

---

# Relationship With Other Design Languages

Editorial is more narrative-driven than Minimal.

It is quieter than Modern.

It is less visually expressive than Luxury.

Choose Editorial when trust is built through ideas, expertise, and thoughtful communication rather than immediate visual impact.

---

# Definition of Success

A successful Editorial design leaves visitors feeling informed, engaged, and confident.

The experience should feel less like browsing a website and more like reading a carefully crafted publication where every element contributes to the story being told.
