# Cinematic

Cinematic design treats imagery as the primary interface material and the page as a sequence rather than a document.

The visitor is moved through a composed progression of scenes. Type sits within imagery rather than beside it. Surfaces are dark so that light in the images carries the page. Scrolling is pacing.

Unlike Luxury, which creates value through absence and space, Cinematic creates it through immersion and atmosphere. Unlike Expressive, whose identity comes from an authored shape vocabulary, Cinematic's identity comes almost entirely from art direction.

This language demands genuine photographic quality. It is the only language in the library that cannot be rescued by good typography — with weak imagery, there is nothing left.

---

# Decision Hierarchy

When two subsystems conflict, resolve in this order:

1. **Photography** — imagery leads every composition decision.
2. **Colour and surface** — dark grounds that let images carry the light.
3. **Motion** — pacing and transition between scenes.
4. **Typography** — legible over imagery, restrained in form.
5. **Spacing** — full-bleed by default; margins are the exception.
6. **Visual rhythm** — the sequence of scenes down the page.
7. **Corner, border, shadow** — nearly absent; frames interrupt immersion.

Cinematic resolves toward immersion — until legibility is threatened, at which point legibility wins without negotiation. An unreadable overlay is a failure of art direction, not an acceptable atmospheric cost.

**Against Luxury:** Luxury withholds and creates distance through space. Cinematic surrounds and creates presence through atmosphere. Both are restrained typographically; Luxury is restrained *visually* as well, where Cinematic is maximal in imagery and minimal in everything else.

**Against Expressive:** Expressive builds identity from authored shapes and colour. Cinematic builds it from light, framing, and sequence. An Expressive page works as a wireframe; a Cinematic page does not.

---

# Signature Traits

- Full-bleed imagery as the default state, not a hero treatment
- Dark surfaces throughout, with images supplying the light
- Type composed within the frame rather than placed beside it
- The page structured as a sequence of scenes
- Scroll as pacing — the visitor is moved, deliberately
- Restrained typography that never competes with the image
- Almost no visible interface chrome

---

# Typography Language

Type is composed *into* the image, and its first obligation is to remain legible against a photograph that varies across its own area.

The type strategy is restraint: one family, a small number of weights, and a wide scale between a large display treatment and small supporting text. Because the imagery carries all the expression, expressive type would compete with it — a decorative face over a dramatic photograph produces two things fighting for the same attention.

Legibility over imagery is a compositional problem, not a styling one. Solve it in the art direction — choosing or generating images with an intentional area of low detail where type will sit — before reaching for a scrim. A gradient overlay is an acceptable second answer; a heavy dark box behind text is an admission that the image was never composed for the type.

Type placement follows the frame. Text sits where the composition has room for it, which frequently means off-centre, low, or to one side — never automatically centred.

---

# Colour Language

The page is dark. Deep, slightly desaturated grounds — closer to a graded film black than to pure black — let photographic light read as the brightest thing on screen.

The palette derives from the imagery rather than being imposed on it. A cohesive colour grade across every image *is* the colour system, and interface accents are drawn from within that grade so that chrome and content agree.

Pure black is usually wrong. It flattens the image edges and removes the sense of graded depth the language depends on.

Accent colour is rare and drawn from the photography. A brand colour that does not exist anywhere in the imagery will read as pasted on.

Light appearances are possible but difficult, and require the same discipline inverted: an off-white ground with imagery carrying deep tones. Attempting both appearances doubles the art-direction burden and should be a deliberate commitment rather than an assumption.

---

# Motion Language

Motion is pacing. It is the subsystem that most distinguishes Cinematic from a dark photographic layout.

Transitions between scenes are slower and more considered than in any other language — a cross-dissolve rather than a cut, a settle rather than a snap. Movement establishes continuity between one scene and the next, so a visitor experiences progression rather than a series of jumps.

Parallax and scroll-linked movement belong here, and this is one of the few languages where they are genuinely appropriate rather than decorative. The constraint: they must express depth or progression, never simply demonstrate that scrolling was detected.

Motion must never gate content. A scene that has not animated in must still be present and readable — see `.hubzero/rendering.md` — Progressive Enhancement. This is the most common way a Cinematic blueprint fails an accessibility review while looking spectacular in a demonstration.

---

# Photography Language

This subsystem is the language. It carries a correspondingly higher standard.

Imagery is directed, not selected. Every image shares a deliberate grade — the same colour temperature, contrast curve, and treatment of shadow — so the site reads as one production rather than a collection of sources. Inconsistent grading destroys this language faster than any other error available to it.

Composition is cinematic in the literal sense: wide framing, meaningful negative space, strong directional light, and a clear subject with depth behind it. Flat, evenly-lit stock photography is unusable here regardless of its subject.

Every image needs a declared focal point, because images are cropped aggressively across viewports and an unmanaged crop will cut the subject. Store this alongside the content record — see `.hubzero/content/principles.md` — Media Belongs to the Record.

Video and motion sequences are natural to this language. Where used, they must never be the only carrier of essential content, must respect reduced-motion preferences, and must have a composed still frame that stands alone when they do not play.

---

# Corner Language

Corners are square or very nearly so.

Imagery runs to the edge of the viewport, where a radius has nothing to round. Where a framed element does appear — an inset card, a control — a minimal radius is acceptable, applied uniformly.

Rounded imagery is specifically wrong. A rounded photograph reads as a component in an interface, which is precisely the framing this language avoids.

---

# Border Language

Borders are nearly absent.

The language's power comes from images meeting each other and the viewport directly. A border around an image announces it as content within an interface rather than as the environment the visitor is in.

Where a border is genuinely needed — a form field, a secondary control — it is a low-opacity hairline drawn from the surface palette, doing the minimum necessary to be found.

---

# Shadow Language

Shadow is atmospheric rather than architectural.

Depth comes from the imagery's own graded light, from gradient scrims that transition image into surface, and from the tonal relationship between layers. Not from elevation beneath rectangles.

A drop shadow on a card in a Cinematic composition reads as an interface element pasted onto a scene. Where separation is needed, use a gradient, a tonal shift, or space.

---

# Spacing Language

Full-bleed is the default state. Margins are the exception, applied to text and controls rather than to imagery.

Vertical spacing is generous and establishes the pacing between scenes. Each scene needs room to be experienced as its own moment rather than as a section in a stack — this is the spacing decision that most determines whether the sequence works.

Within a scene, type is composed against the frame's own negative space rather than positioned by a spacing scale. The image supplies the composition; the spacing system supplies the relationships between text elements inside it.

---

# Interaction Language

Interface chrome is minimal and appears when needed.

Controls are light-touch — a thin underline, a subtle brightening, a slow fade. Nothing that reads as a conventional button pressing down, which would break the sense that the visitor is inside a scene rather than operating a panel.

Focus states must be **highly visible** despite the language's restraint. This is a genuine tension: a subtle focus ring on a dark, variable photographic background can be effectively invisible. Resolve it in favour of visibility, with an indicator that holds against both the darkest and lightest imagery on the site.

Navigation typically floats over content and adapts to what is beneath it. Compute that adaptation from explicitly derived state rather than chaining it to scroll position or route — see `.hubzero/rendering.md` — Deriving Interface State.

---

# Component Language

Components are sparse and recede into the composition.

There are few of them by design: navigation, a small number of controls, occasional inset panels for text-dense passages. A Cinematic page with a card grid has usually stopped being Cinematic.

Where dense content genuinely must appear — a specification list, a schedule — give it its own composed passage on a solid surface rather than floating panels over imagery. Switching deliberately between immersive scenes and readable passages is part of the language; attempting both simultaneously is not.

---

# Visual Rhythm

The page is a sequence of scenes with deliberate pacing between them.

Rhythm comes from variation in framing across the sequence — a wide establishing scene, a close detail, a passage of text on a solid ground, another wide scene. Uniform full-bleed images stacked without variation produce monotony, which is this language's characteristic failure at length.

The sequence should have a shape: an opening that establishes, a middle that develops, and a resolution that arrives at the conversion. This is where the language's name is earned; a page composed like a reel of unrelated shots does not read as cinematic regardless of image quality.

Text-forward passages are the rests. They let the imagery mean something by not being continuous.

---

# Responsive Behavior

Cinematic requires the most mobile work of any language in the library, because a wide cinematic frame and a tall phone viewport are fundamentally opposed.

**Every full-bleed image needs a distinct mobile crop, authored as its own composition.** Scaling a wide frame to a phone either letterboxes it into insignificance or crops the subject out. This is a content decision recorded with the image, not a styling one — and it is non-negotiable in this language.

Prefer tall, portrait-oriented compositions on mobile. Vertical framing is native to the device and reads as intentional where a squeezed landscape frame reads as an oversight.

Type placement must be re-composed per viewport. Text positioned into a frame's negative space on desktop will sit over the subject on mobile, because the crop moved. Verify legibility at handheld width against the actual mobile crop.

Reduce motion and layering on mobile. Scroll-linked effects and parallax are expensive on lower-powered devices, and dropped frames destroy the illusion more thoroughly than their absence would.

The scene sequence itself may shorten. A ten-scene desktop progression is a long scroll on a phone; choosing which scenes carry the sequence is a composition decision, not a matter of hiding sections.

Verify contrast against the mobile crop specifically. A gradient scrim tuned for a wide frame frequently fails on a tighter one.

---

# Token Contract

Cinematic must own the following rather than inherit them.

* **Colour** — a dark, slightly desaturated surface scale plus a foreground scale verified against imagery, not against a flat background. Both are unlike any general-purpose default.
* **Scrim and gradient tokens** — the overlays that transition imagery into surface and guarantee type legibility. No foundation supplies these; without them, every scene improvises its own and they diverge.
* **Radius** — square or near-square, and categorically zero on imagery.
* **Shadow** — no conventional elevation scale. Atmospheric gradient tokens instead.
* **Motion duration and easing** — substantially slower than a neutral default, with easing that settles. An inherited fast standard curve produces an interface, not a sequence.
* **Type scale** — a wide range with a large display end and small, legible supporting text.
* **Spacing** — generous vertical intervals between scenes; minimal horizontal margins.

Focus indicator tokens deserve explicit definition here. The default assumption that a focus ring sits on a known background does not hold when the background is photography.

---

# Suitable Architectures

- Hospitality
- Travel
- Media
- Automotive
- Real Estate
- Events
- Marketing
- Portfolio

Cinematic suits architectures where the offering is experiential and the visitor is deciding whether to want something. It requires an architecture with genuine photographic subject matter.

It is a poor fit wherever a visitor arrives with a task to complete or information to locate — Documentation, Government, Logistics, and SaaS all need retrieval and density this language actively works against. It is also a poor fit for any blueprint that cannot commit to producing genuinely well-directed imagery.

---

# Anti-Patterns

**Never:**

- Ship imagery that has not been graded to a single consistent treatment. Inconsistent grading is this language's fatal error.
- Use flat, evenly-lit stock photography.
- Place type over an image without composing the image for it. A heavy dark box behind text is an admission of failed art direction.
- Let a scene's content depend on an animation having run.
- Use a subtle focus indicator on photographic backgrounds.
- Scale a wide desktop crop down for mobile instead of authoring a mobile crop.
- Add drop shadows to floating panels — use gradients and tonal separation.
- Round the corners of imagery.
- Build a card grid. If the content needs a grid, it needs a different language.
- Autoplay video with sound, or make video the sole carrier of essential content.
- Stack uniform full-bleed images without variation in framing.

**Specifically not Luxury:** Luxury creates value through space and absence, and its restraint is visual as well as typographic. Cinematic is maximal in imagery. A Cinematic page with sparse imagery and generous whitespace is a Luxury page with a dark palette.

**Specifically not Expressive:** identity here comes from light, framing, and sequence — not from shape vocabulary or saturated colour. Adding an authored shape system produces Expressive with photographs.

**Specifically not Bold:** Bold achieves impact through type scale and colour contrast within a simple system. Cinematic achieves it through atmosphere. Oversized type over a photograph is Bold, not Cinematic.
