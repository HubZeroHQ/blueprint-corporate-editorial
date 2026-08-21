# Finance Website Architecture

Financial websites exist to establish credibility, transparency, and confidence.

Financial decisions often involve significant trust.

The website should communicate competence long before encouraging conversion.

# Classification

- **Kind:** profile
- **Parent:** `services`
- **Distinct on:** Trust mechanism — regulatory standing, disclosure quality, and demonstrable prudence.
- **Composes with:** —
- **Modules:** editorial, careers, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Reduce uncertainty while demonstrating expertise and integrity.

# Content Model

**Entities.** `Service` (slug, description, eligibility, process, disclosures). `Person` (name, role, qualifications, regulatory registrations). `Insight` (article, publication date, author). `Question` (FAQ). `Disclosure` (regulatory statements, risk warnings). `Location`.

**Relationships.** Services reference the disclosures that govern them and the people qualified to deliver them; insights reference services and authors.

**Derivation.** Service and person routes, metadata, sitemap, `FinancialService` structured data, related insights, and navigation all derive from these records.

**Disclosures are first-class content, not footnotes.** Model them as records referenced by the services they govern, so a risk warning appears wherever its service does and cannot be forgotten on one page. This is the modelling decision that most distinguishes Finance from a generic Services blueprint.

See `.hubzero/content/principles.md`.

---

# Information Hierarchy

The architecture should progressively communicate:

1. Firm overview
2. Services
3. Expertise
4. Team and advisors
5. Regulatory compliance
6. Client success stories
7. Educational resources
8. Contact or consultation request

# Design Direction

Financial websites should communicate:

* Stability
* Confidence
* Precision
* Transparency
* Professionalism

Avoid visual decisions that feel speculative, overly playful, or unnecessarily promotional.

# Content Strategy

Complex financial concepts should be explained clearly.

Visitors should finish each page feeling more informed rather than overwhelmed.

# Essential Pages

- Home
- About
- Services (index and detail)
- Insights
- Leadership or team
- Resources
- FAQ
- Contact
- Privacy, Terms, and regulatory disclosures

Plus modules the blueprint carries. See `modules.md`.

Regulatory and disclosure pages are required rather than optional, and must read as complete.

---

# Navigation

Navigation is service-led with insights as a credibility path.

Regulatory information, disclosures, and firm details must be findable without effort. Burying them undermines exactly the impression this architecture depends on — a visitor looking for them is testing the firm's transparency.

Contact should be prominent, and where different services have different contact routes, those should be distinguishable.

---

# Interaction Model

Finance sites are reading experiences, and restraint in interaction is itself a trust signal.

Calculators and modelling tools are effective and are the architecture's principal honesty hazard. Any figure produced must state its assumptions, its limitations, and that it is illustrative rather than advice. A tool that produces a confident number without stating its basis is worse than no tool.

Native disclosure handles FAQ and disclosure content well.

Avoid ornamental dashboards. Invented data presented as performance is a trust violation in the one architecture where it does most damage.

---

# Trust Signals

Financial credibility comes from information hierarchy, disclosure quality, restraint, and clear scope — not from invented statistics.

**High priority**
- Regulatory standing and registrations, stated exactly
- Qualifications of named individuals
- Clear scope: what the firm does and explicitly does not do
- Disclosure quality — risks stated as plainly as benefits
- Fee transparency

**Medium priority**
- Length of operation and assets under management, where genuine
- Published thinking
- Professional memberships
- Client sectors

Restraint reads as competence here. A finance site that oversells signals the opposite of what it intends.

---

# Conversion Model

The terminus is a qualified enquiry or consultation, and the path to it must never feel like pressure.

Reduce uncertainty before asking: what the process involves, what it costs, what happens after contact, and who the visitor will be dealing with.

A financial services blueprint should disclose its fictional status repeatedly at the points where a visitor might otherwise infer a real regulated offering. This is more important here than anywhere else in the library, because the inference carries real-world consequence.

Where a contact form cannot be received, do not imitate a working one.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A service currently unavailable to new clients.**
- **A person whose registrations are pending or limited.**
- **No recent insights** — a stale publication section damages credibility more than an empty one.
- **A calculator with insufficient inputs**, and its illustrative-only boundary stated at the point of use.
- **A disclosure that applies conditionally.**
- **The honest enquiry boundary**, and the fictional-firm disclosure, at every point a visitor might act.

---

# Common Mistakes

- Invented performance figures, assets under management, or client counts
- Disclosures relegated to footnotes rather than modelled as content that travels with the service it governs
- A calculator that produces a confident number without stating its assumptions or its illustrative status
- Ornamental dashboards presenting invented data as performance
- Overselling — in this architecture, restraint reads as competence and enthusiasm reads as risk
- Vague scope, leaving a visitor unsure what the firm does and does not do
- Fee structures that are implied rather than stated
- Regulatory standing described loosely rather than exactly
- A stale insights section, which damages credibility more than an empty one
- Omitting the fictional-firm disclosure where a visitor could infer a real regulated offering

---

# Relationship to Other Architectures

Finance is a **profile of Services**, differing in trust mechanism: regulatory standing and disclosure quality. Read `services.md` and, beneath it, `corporate.md` for the underlying journey.

**Legal** is the nearest sibling profile — both are credential-led and disclosure-heavy.

**Insurance** is not a separate architecture; it is served by this one.

Finance composes with very little. Client portals, account aggregation, and transactional capability all exceed what a blueprint can honestly demonstrate.

---

# Definition of Success

Visitors should feel comfortable trusting the organization with important financial decisions.
