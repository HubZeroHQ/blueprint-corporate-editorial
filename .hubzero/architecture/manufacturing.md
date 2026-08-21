# Manufacturing Website Architecture

A manufacturing website exists to demonstrate capability, reliability, scale, and operational excellence.

Unlike general service businesses, manufacturing companies sell confidence in their ability to consistently produce quality products at scale.

Visitors should leave knowing:

* What products are manufactured.
* What industries are served.
* What manufacturing capabilities exist.
* Why this manufacturer can be trusted.
* How to begin a business relationship.

# Classification

- **Kind:** profile
- **Parent:** `services`
- **Distinct on:** Trust mechanism — production capability, certification, and quality systems.
- **Composes with:** —
- **Modules:** locations, careers, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Build confidence before generating enquiries.

Large manufacturing decisions are based on trust, quality, certifications, and long-term partnerships rather than impulse.

# Content Model

**Entities.** `Capability` (process, tolerances, materials, envelope). `Facility` (location, equipment, certifications). `Sector` (industries served). `Project` or case study (sector, capability references, outcome). `Certification` (standard, scope, validity). `Specification` (label, value, unit). `Role` (careers).

**Relationships.** Capabilities reference the facilities that perform them and the sectors they serve; projects reference capabilities and sectors; certifications reference the facilities and processes they cover.

**Derivation.** Capability, facility, and sector routes, metadata, sitemap, `Organization` structured data, related content, and navigation all derive from these records.

**Credibility here comes from relationships between evidence types, not from isolated claims.** A capability that cross-links to the facility performing it, the certification covering it, and a project demonstrating it is far more convincing than the same capability described well in isolation.

Technical specifications are modelled as label/value/unit records so they render consistently and can be compared. See `.hubzero/content/principles.md`.

---

# Information Hierarchy

The architecture should progressively communicate:

1. Company overview
2. Manufacturing capabilities
3. Products
4. Industries served
5. Facilities and technology
6. Quality assurance and certifications
7. Production process
8. Case studies or partnerships
9. Contact and quotation request

# Design Direction

Manufacturing websites should communicate:

* Precision
* Reliability
* Capability
* Scale
* Professionalism

Visual decisions should reinforce engineering competence rather than marketing.

# Essential Pages

- Home
- Company or About
- Capabilities (index and detail)
- Facilities
- Industries or sectors
- Quality and certifications
- Projects or case studies
- Contact
- Privacy, Terms

Plus modules — Careers and Locations are common. See `modules.md`.

Quality and certification content warrants its own page. For this audience it is a primary evaluation criterion, not a credential to mention in passing.

---

# Navigation

Navigation is capability-led, with sectors as a parallel entry point — buyers arrive either knowing the process they need or knowing their industry.

Both paths must lead to the same evidence, and each should cross-link to the other.

Quality, certifications, and facilities should be directly reachable. A technical buyer looks for these deliberately and early.

Contact and quotation routes must be reachable from every page.

---

# Interaction Model

Interactions are evaluative rather than transactional.

The meaningful interactions are exploring capabilities against requirements, comparing specifications, and requesting a quotation.

Specification data should be presented in semantic tables or definition lists that preserve the label/value relationship — and must retain that relationship at handheld width. See `.hubzero/principles.md` — Native Before Custom.

Where technical drawings or plates are used, they carry information and need their own responsive treatment rather than being scaled down.

Quotation requests almost always exceed a blueprint's capability; state what actually happens rather than simulating submission.

---

# Trust Signals

Manufacturing buyers evaluate capability evidence, and vagueness is disqualifying.

**High priority**
- Specific process capabilities with tolerances, materials, and envelope
- Certifications with scope and validity stated
- Facility and equipment detail
- Quality systems and inspection processes
- Projects demonstrating comparable work

**Medium priority**
- Sectors served
- Length of operation and scale
- Supply chain and lead times
- Partnerships and approvals

Specificity is the entire trust mechanism. A capability page without numbers has told a technical buyer nothing.

---

# Conversion Model

The terminus is a qualified enquiry or a request for quotation.

The buyer's question is narrow: can this supplier make my part, to my tolerance, at my volume, within my timeline. Every page should move toward answering it.

Provide enough specification detail that a buyer can self-qualify before making contact. An enquiry from someone who already knows the capability fits is worth many from people who do not.

Where a quotation request cannot be received, say what actually happens.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A capability with no representative project.** Common where work is confidential; say so.
- **A certification approaching or past its validity** — an authored field, presented honestly.
- **A sector with no representative work.**
- **A facility with no photography.**
- **A specification that does not apply to a given process.** Distinguish "not applicable" from "not stated."
- **The honest quotation boundary.**

---

# Common Mistakes

- Capability described without numbers — tolerances, materials, envelope, volumes
- Certifications named without their scope or validity
- Isolated capability claims that do not cross-link to the facility, certification, or project evidencing them
- Specification tables that lose the label-to-value relationship at handheld width
- Technical drawings scaled down rather than given a mobile-specific treatment
- Generic industrial stock photography that conveys no operational information
- Marketing language where a technical buyer expects specification
- Confusing "not applicable" with "not stated" in a specification
- Too little detail for a buyer to self-qualify, producing enquiries that waste both parties' time
- A quotation request that appears to submit and goes nowhere

---

# Relationship to Other Architectures

Manufacturing is a **profile of Services**, differing in trust mechanism: production capability and certification. Read `services.md` and `corporate.md` for the underlying journey.

**Logistics** is the nearest sibling profile — both are operationally led, and both frequently serve the same buyers.

**Ecommerce** applies where a manufacturer sells standard products directly, which is a composition rather than a replacement.

**Automotive** shares the specification-graph content model at a consumer-facing scale.

---

# Definition of Success

Visitors should feel confident that the company is capable of delivering reliable manufacturing solutions for their business.
