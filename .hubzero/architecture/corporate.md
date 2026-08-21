# Corporate Website Architecture

A corporate website exists to establish trust, communicate capability, and convert confidence into action.

It is not a brochure.

It is not a collection of pages.

It is the digital representation of a business.

Every visitor should leave with three questions answered:

* Who are they?
* Why should I trust them?
* What should I do next?

Every architectural decision should contribute toward answering those questions.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (capabilities, evidence, people), terminus (qualified enquiry), and trust mechanism (demonstrated track record).
- **Composes with:** `blog`, `careers`
- **Modules:** editorial, careers, locations, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

The primary objective of a corporate website is to transform an unfamiliar visitor into a confident prospective customer.

Trust should be established before capability.

Capability should be established before conversion.

---

# Content Model

**Entities.** `Capability` or service (slug, description, outcomes). `CaseStudy` (slug, client, sector, challenge, outcome, capability references). `Person` (name, role, expertise). `Industry`. `Article` (editorial). `Location`. `Role` (careers).

**Relationships.** Case studies reference capabilities and industries; people reference capabilities and author articles; capabilities reference representative case studies. A capability page's proof, team, and related thinking all derive from those references rather than being listed by hand.

**Derivation.** Capability, case study, and person routes, metadata, sitemap, `Organization` structured data, breadcrumbs, related content, and navigation all derive from these records.

The failure this architecture is most prone to: a case study index listing several distinct engagements while the detail route renders one shared body. Each case study record carries its own full narrative, not only the fields the index displays. See `.hubzero/content/principles.md` — Content Depth Is Authored.

---

# Information Hierarchy

Corporate websites should progressively answer the questions users naturally ask.

The exact sections may differ depending on the business, but the flow should remain intentional.

## 1. Identity

Immediately communicate:

* Who the business is.
* What it does.
* Who it serves.
* Why it exists.

Visitors should never need to search for the purpose of the business.

---

## 2. Credibility

Before explaining every service, establish confidence.

Credibility may be demonstrated through:

* Experience
* Portfolio
* Clients
* Testimonials
* Certifications
* Metrics
* Case studies
* Team expertise

Different businesses require different forms of credibility.

Choose those appropriate for the client.

---

## 3. Capabilities

Explain what the business actually offers.

Focus on outcomes rather than feature lists.

Users care more about problems being solved than processes being described.

---

## 4. Process

Reduce uncertainty.

Help visitors understand what working with the business feels like.

A transparent process creates confidence.

---

## 5. Differentiation

Every business needs a reason to be chosen.

Clearly communicate what makes the client different.

Avoid generic marketing language.

Specificity builds trust.

---

## 6. Conversion

Every corporate website should guide users toward meaningful action.

Calls-to-action should feel like the natural conclusion of the visitor's journey rather than interruptions.

---

# Navigation

Navigation should remain predictable.

Users should always know:

* where they are,
* where they can go,
* and how to contact the business.

Avoid unnecessary navigation complexity.

---

# Content Strategy

Write for people.

Avoid writing for search engines first.

Clear communication consistently outperforms unnecessary technical language.

Every paragraph should help users make decisions.

---

# Visual Direction

Corporate websites should communicate professionalism before creativity.

Creativity should strengthen trust, never compete with it.

The appropriate level of visual expression depends on the client's industry, audience, and chosen design language.

---

# Common Mistakes

Avoid:

* Generic corporate clichés.
* Empty marketing statements.
* Long paragraphs without purpose.
* Excessive visual effects.
* Overwhelming users with information immediately.
* Multiple competing calls-to-action.
* Explaining every detail before establishing trust.

---

# Personalization

Blueprints are foundations.

During client implementation:

* Replace all placeholder branding.
* Adapt content to the client's business.
* Adjust information architecture if necessary.
* Introduce client-specific functionality.
* Preserve the underlying architectural philosophy.

Personalization should never compromise clarity or trust.

---

# Essential Pages

- Home
- About
- Capabilities or Services (index and detail)
- Case studies or Work (index and detail)
- Industries
- Team
- Contact
- Privacy, Terms

Plus any modules the blueprint carries — Editorial, Careers, Locations. See `modules.md`.

The index-and-detail pairing is the structural requirement. A capabilities page that lists services without giving each one a page of its own cannot carry the depth this architecture's journey depends on.

---

# Interaction Model

A corporate site is largely a reading experience, and its interactions should stay quiet.

The meaningful interactions are filtering work by capability or industry, navigating between related records, and initiating contact. Each should be straightforward and require no explanation.

Where work or case studies are filtered, hold the filter in the URL so a visitor can share a filtered view — a prospect frequently sends a colleague "your work in our sector."

Resist adding interaction that does not serve the journey. Sophistication here is expressed through clarity, not through interface novelty.

---

# Trust Signals

Credibility must be established before capability, and this architecture's trust signals are its most important content.

**High priority**
- Case studies with specific, substantiated outcomes
- Named clients or, where confidentiality prevents it, sector-and-role attribution
- Team expertise with genuine depth
- Length of operation and scale, stated plainly

**Medium priority**
- Certifications and accreditations
- Testimonials
- Partnerships
- Published thinking

Specificity is the whole game. "We increased conversion by 34% for a European logistics operator over eight months" carries more weight than any number of confident adjectives. Where a metric is stated, the record should carry how it was produced.

---

# Conversion Model

The terminus is a qualified enquiry.

Calls to action should feel like the natural conclusion of the visitor's journey rather than interruptions in it. Each page declares one primary action, expressed in that page's context — a capability page invites a conversation about that capability, not a generic "get in touch."

A shared conversion section at the end of substantive pages keeps the language consistent while allowing context-specific framing.

Where the blueprint cannot receive an enquiry, the conversion path must say what actually happens. See `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A capability with no published case studies.** Common and legitimate; say so rather than rendering an empty proof section.
- **A filtered work index returning nothing.**
- **A person with no photograph.** A designed absence beats a placeholder silhouette.
- **An industry with no representative work.**
- **A case study whose outcome cannot be attributed.** The record carries the limitation; the page states it.
- **The honest enquiry boundary**, stated where a visitor would submit.

---

# Relationship to Other Architectures

**Services** is a profile of this architecture, specializing it for businesses selling expertise rather than track record. Most of this document applies there unchanged.

**Marketing** shares the conversion emphasis but has no content library and a single convergent journey. A corporate site that reduces to one page is a marketing site.

**Portfolio** shares the evidence-led structure but leads with craft rather than with organizational credibility.

**SaaS** replaces the enquiry terminus with self-service signup, which changes the journey fundamentally.

Corporate composes naturally with **Blog** and the Careers module.

---

# Definition of Success

A successful corporate website should make visitors feel:

* confident,
* informed,
* respected,
* and comfortable taking the next step.

The website should never feel like it is trying to sell.

It should feel like it has already demonstrated why the business deserves consideration.
