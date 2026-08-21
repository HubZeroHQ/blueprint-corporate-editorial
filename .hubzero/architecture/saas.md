# SaaS Website Architecture

A SaaS website exists to transform curiosity into product adoption.

Unlike service businesses, SaaS companies sell a product that users expect to experience before committing. The website should educate, demonstrate value, reduce uncertainty, and guide visitors toward becoming active users.

Visitors should leave understanding:

* What the product does.
* Who it is for.
* Which problems it solves.
* Why it is different.
* How to start using it.

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (features, plans, integrations), terminus (signup or trial), and retrieval model (problem-led discovery).
- **Composes with:** `documentation`, `blog`, `marketing`
- **Modules:** editorial, careers, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Communicate product value as quickly and clearly as possible while minimizing friction to adoption.

# Content Model

**Entities.** `Feature` (slug, problem solved, description, media). `Plan` (name, price, included features, limits). `Integration`. `Customer` or case study. `Article` (blog). `Question` (FAQ). `Role` (careers).

**Relationships.** Plans reference the features they include; features reference the integrations they use and the customers who rely on them; case studies reference features and plans.

**Derivation.** Feature, plan, and integration routes, the pricing comparison table, metadata, sitemap, `SoftwareApplication` structured data, related content, and navigation all derive from these records.

The pricing comparison is derived from the plan and feature records, never authored separately. A hand-maintained comparison table is the fastest-drifting content in this architecture and the most damaging to get wrong.

See `.hubzero/content/principles.md`.

---

# Information Hierarchy

A SaaS website should progressively communicate:

1. Product introduction
2. Core value proposition
3. Key features
4. Product demonstration
5. Integrations or compatibility
6. Pricing
7. Frequently asked questions
8. Customer proof
9. Call to action

# Design Direction

SaaS websites should communicate:

* Simplicity
* Capability
* Innovation
* Reliability
* Confidence

The interface should make the product feel approachable regardless of its underlying complexity.

# User Experience

Reduce every unnecessary step between understanding the product and trying it.

Users should never struggle to:

* understand what the product does,
* evaluate whether it suits them,
* compare plans,
* or begin using it.

# Essential Pages

- Home
- Product or Features (index and detail)
- Pricing
- Integrations
- Customers
- About
- Security
- Contact
- Privacy, Terms

Plus modules — Editorial, Careers, FAQ — and frequently a composed **Documentation** architecture. See `modules.md` and `REGISTRY.md`.

Pricing must exist as a page. A SaaS site that hides pricing behind a sales conversation has chosen an enquiry terminus and is structurally closer to Services.

---

# Navigation

Navigation is problem-led rather than feature-led. A visitor arrives with something to solve, not with a feature list in mind.

Product, pricing, and documentation are the three paths that matter most, and all three should be immediately reachable. Pricing in particular should never require exploration.

Where the blueprint composes with Documentation, that architecture owns its own navigation tree and should be enterable directly rather than nested beneath a marketing hierarchy.

Signup and trial actions are persistent and visible without dominating.

---

# Interaction Model

The meaningful interactions are comparing plans, exploring features, and initiating signup.

Plan comparison is the architecture's defining interaction. It must make differences legible at a glance and handle the annual/monthly toggle without ambiguity about what is being shown.

Product demonstrations — interactive tours, embedded previews — are effective and are precisely where honesty is most at risk. A demonstration must not imply an account, persistence, or a working backend that does not exist.

Where the product interface is shown, prefer authentic captures over stylized mockups.

---

# Trust Signals

SaaS buyers are evaluating an ongoing dependency, not a one-time purchase, and the trust signals reflect that.

**High priority**
- Transparent pricing with limits stated plainly
- Security and compliance information
- Customer stories with substantiated outcomes
- Genuine product documentation
- Uptime and reliability posture

**Medium priority**
- Integrations with tools the buyer already uses
- Public roadmap or changelog
- Support responsiveness
- Named customers

Hidden pricing and thin documentation are the two signals that most reliably lose a technical evaluator.

---

# Conversion Model

The terminus is a signup or trial start — self-service rather than mediated.

The journey is problem → solution → capability → pricing → signup, and educational content supports every stage of it. Content that helps a visitor regardless of whether they buy is this architecture's most effective acquisition mechanism.

**Honest demonstration applies directly.** A blueprint has no authentication and no accounts. A signup that appears to create one is a trust violation. State the boundary at the point of signup, and prefer a demonstration that genuinely works within the blueprint's limits over a simulated product experience.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A feature with no customer story.**
- **A plan with no distinguishing features** — a comparison table where two plans read identically indicates a modelling problem, not a display problem.
- **An integration directory with no entries in a category.**
- **A search returning nothing** where documentation is composed.
- **A customer story whose metrics cannot be attributed.**
- **The honest signup and account boundary**, stated at the point of signup.
- **The honest demonstration boundary** in any interactive product preview.

---

# Common Mistakes

- Feature-led copy that describes capabilities without naming the problem they solve
- Hiding pricing behind a sales conversation while claiming a self-service product
- A pricing comparison table maintained separately from the plan records, so it drifts
- Two plans that read identically in the comparison — a modelling problem, not a display problem
- An annual/monthly toggle that leaves ambiguity about which price is shown
- Thin or absent documentation, which loses technical evaluators faster than any pricing objection
- Stylized product mockups in place of authentic interface captures
- Approximating a documentation architecture instead of composing it
- A signup that appears to create an account the blueprint does not have
- An interactive product demonstration implying persistence or a backend that does not exist

---

# Relationship to Other Architectures

**Documentation** is the architecture SaaS most frequently composes with, and it should be composed rather than approximated — reference content has a genuinely different entity graph and retrieval model.

**Marketing** shares the conversion focus but has no product surface and no content library.

**Corporate** terminates in enquiry rather than self-service signup.

SaaS composes naturally with **Blog** for educational content and with the Careers module.

---

# Definition of Success

Visitors should leave believing the product solves a meaningful problem and feel confident beginning their journey.
