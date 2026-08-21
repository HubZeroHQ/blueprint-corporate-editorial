# Marketing Website Architecture

A marketing website exists to communicate a single message with maximum clarity.

Unlike corporate or SaaS websites, marketing websites are focused on one objective. Every section should support that objective and remove distractions.

Visitors should immediately understand:

* What is being promoted.
* Why it matters.
* Why they should care.
* What they should do next.

# Classification

- **Kind:** primary
- **Distinct on:** Terminus (one specific action) and retrieval model (single convergent journey with no content library).
- **Composes with:** —
- **Modules:** faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Capture attention, build interest, and encourage a specific action.

The desired action may be:

* Joining a waitlist
* Registering for an event
* Purchasing a product
* Downloading a resource
* Contacting the business
* Learning more

# Content Model

Marketing has the smallest content model in the library, and its discipline is refusing to grow it.

**Entities.** `Offer` or campaign (slug, proposition, benefits, proof). `Benefit` (claim, substantiation). `Proof` (testimonial, metric, case reference, each carrying its basis). `Question` (FAQ). `Policy` (legal).

**Relationships.** Benefits reference the proofs that substantiate them. This is the architecture's most important relationship: a claim that cannot resolve to a proof record is a claim that should not be published.

**Derivation.** Campaign routes, metadata, Open Graph assets, sitemap, `Offer` and `FAQPage` structured data, and the conversion surfaces all derive from these records.

Do not build an article collection unless the blueprint genuinely carries editorial commitment. An abandoned content library damages a marketing site more than its absence.

See `.hubzero/content/principles.md`.

---

# Information Hierarchy

A marketing website should progressively communicate:

1. Clear value proposition
2. Supporting benefits
3. Social proof
4. Product or campaign details
5. Objection handling
6. Call to action

Every section should move visitors closer to conversion.

# Design Direction

Marketing websites should communicate:

* Energy
* Confidence
* Clarity
* Memorability

Creative expression is encouraged provided it strengthens communication rather than distracting from it.

# User Experience

Remove friction.

Avoid unnecessary navigation, excessive content, or competing objectives.

Visitors should always understand the next logical action.

# Essential Pages

- Home — the primary conversion page
- Offer or campaign detail, where the campaign warrants its own page
- Contact or conversion endpoint
- FAQ
- Privacy, Terms

Optionally: Pricing, About, a proof or case page.

**A marketing architecture legitimately has fewer indexable pages than any other.** That is a property of the architecture, not a deficiency to correct by adding pages. Six excellent pages outperform sixty thin ones.

---

# Navigation

Navigation is minimal and convergent. Every path leads back to the conversion.

Avoid a conventional multi-section menu. A marketing site with eight top-level destinations has diluted the single message it exists to communicate.

Every page should be reachable within one step of the entry point, and every page should terminate in the same primary action expressed in that page's context.

Internal linking returns visitors to the conversion rather than encouraging exploration — the opposite of the pattern that serves Media and Documentation.

---

# Interaction Model

Interaction is deliberately sparse. The only interaction that matters is the conversion itself.

Where the offer requires a selection — a plan, a date, a variant — that selection should be the page's single interactive element and should be impossible to get wrong.

Resist interactive decoration. A marketing page's job is to remove every reason not to act, and each additional interaction is a reason to hesitate.

Where the conversion cannot complete, the honest path frequently converts better than a simulated one, because a visitor who understands what will happen is a visitor who is not surprised.

---

# Trust Signals

A marketing page asks for action faster than any other architecture, with less room to earn it.

**High priority**
- Every claim substantiated on the page that makes it
- Clear pricing, or a clear statement of why it is not shown
- Identifiable company information
- An honest description of what happens after the visitor acts

**Medium priority**
- Testimonials with attribution
- Recognizable affiliations
- Guarantees and policies
- Press coverage

Vague superlatives spend trust rather than building it. Specificity is the only mechanism that works at this pace.

---

# Conversion Model

The terminus is one specific action, and the entire architecture exists to reach it.

The journey converges: value proposition → supporting benefits → proof → objection handling → action. Every section moves the visitor closer or should be removed.

**One primary call to action per page.** A page offering two equally-weighted actions has not decided what it is for, and this architecture cannot absorb that ambiguity the way a content-rich one can.

Where the blueprint cannot receive the conversion, state it at the point of action and offer a path that genuinely works.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A campaign that has ended.** Authored state, not derived from the clock, with a genuine next step rather than a dead page.
- **An offer that is unavailable in the visitor's context.**
- **A benefit with no substantiating proof** — this should fail review rather than render.
- **No FAQ entries.**
- **The honest conversion boundary**, stated at the point of action. In this architecture the conversion is essentially the whole product, which makes this the most consequential honest disclosure available.

---

# Common Mistakes

- Adding a blog or resource library with no editorial commitment behind it
- Two equally-weighted calls to action on one page
- Claims with no substantiating proof anywhere on the site
- Manufacturing urgency on an offer that has no genuine deadline
- Treating page count as a strategy — this architecture is legitimately small
- Optimizing a campaign page for a broad informational keyword it cannot satisfy
- Letting parameterized campaign URLs into the index
- Describing the company at length before stating the offer
- A conversion that appears to complete and does not

---

# Relationship to Other Architectures

**Corporate** and **Services** share the persuasion emphasis but carry a content library and a broader journey. A marketing site that grows a blog, a case study index, and a team page has become one of them.

**SaaS** shares the conversion focus but has a product surface, documentation, and a self-service terminus.

**Ecommerce** terminates in a transaction with a cart and checkout rather than in a single action.

Marketing composes with very little by design. `landing` and `campaign` are aliases of this architecture.

---

# Definition of Success

Visitors should leave with a clear understanding of the message and complete the intended action with confidence.
