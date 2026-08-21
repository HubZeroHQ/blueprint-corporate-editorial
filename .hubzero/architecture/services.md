# Services Website Architecture

A services website exists to transform expertise into trust.

Unlike product-based businesses, service businesses sell knowledge, experience, and outcomes rather than physical goods.

Visitors should understand:

* Who the business serves.
* What problems it solves.
* Why it is qualified.
* What working together looks like.
* How to begin.

# Classification

- **Kind:** profile
- **Parent:** `corporate`
- **Distinct on:** Trust mechanism — expertise and process rather than scale and track record. Read `corporate.md` for the journey; this document specializes it.
- **Composes with:** `booking`, `blog`
- **Modules:** editorial, careers, locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Establish credibility before encouraging enquiries.

Trust is the most valuable asset of a service business.

# Content Model

**Entities.** `Service` (slug, description, process, outcomes). `Person` (name, role, expertise, service references). `CaseStudy` or engagement. `Industry`. `Question` (FAQ). `Article`. `Location`.

**Relationships.** Services reference the people who deliver them and the industries they serve; case studies reference services; questions reference the services they concern.

**Derivation.** Service and person routes, metadata, sitemap, `Service` and `ProfessionalService` structured data, related content, and navigation all derive from these records.

Process is content, not layout. Where a service has a defined engagement sequence, model it as ordered steps on the service record so it renders consistently everywhere it appears rather than being rewritten per page.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Information Hierarchy

Most service businesses should progressively communicate:

1. Business identity
2. Expertise
3. Services
4. Process
5. Proof of capability
6. Frequently asked questions
7. Contact or consultation

The exact structure may vary depending on the industry.

# Personalization

Industry-specific service businesses should extend this architecture rather than replace it.

Examples include:

* Manufacturing
* Healthcare
* Finance
* Engineering
* Legal
* Consulting
* Creative agencies

These industries share a common objective while requiring specialized trust signals.

# Essential Pages

- Home
- About
- Services (index and detail)
- Process
- Proof — case studies, testimonials, or credentials
- FAQ
- Contact or consultation
- Privacy, Terms

Plus modules the blueprint carries. See `modules.md`.

Service detail pages are non-negotiable. A services business that describes its offering only in a list has not given a prospect enough to decide with.

---

# Navigation

Navigation is service-led, with expertise and process as supporting paths.

Where a business has many services, present them flat rather than nested. Requiring a second interaction to discover whether a firm handles a particular need is friction at exactly the wrong moment.

Contact or consultation must be reachable from every page. Process and FAQ should be reachable from service pages, since those are the questions a prospect forms while reading one.

---

# Interaction Model

Services sites are reading experiences with a single meaningful interaction: initiating contact.

Filtering services by industry or need helps where the catalogue is large. Native disclosure handles FAQ content better than custom state — see `.hubzero/principles.md` — Native Before Custom.

Where a consultation request cannot be received, the honest answer frequently produces a better page: explaining what actually happens next is more persuasive than a form that appears to submit.

---

# Trust Signals

Trust is the most valuable asset of a service business, and it is established before capability is explained.

**High priority**
- Demonstrated expertise — published thinking, credentials, specialization
- Process transparency: what working together actually involves
- Case studies or engagement outcomes
- Named practitioners with genuine depth

**Medium priority**
- Testimonials with role-and-sector attribution
- Certifications and memberships
- Length of practice
- Client sectors served

Industry-specific profiles extend these with the proofs their audience demands — see the profiles listed under Relationship to Other Architectures.

---

# Conversion Model

The terminus is a qualified enquiry or a booked consultation.

Reduce uncertainty before asking. A prospect who understands the process, the likely cost range, and what happens after they make contact converts at a rate no amount of persuasive copy achieves.

Each service page's call to action should reference that service specifically.

Where the blueprint composes with **Booking**, the terminus becomes an availability-constrained appointment and that architecture's requirements apply.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A service with no published case studies.** Confidentiality frequently prevents publication; saying so is more credible than an empty section.
- **A person with no photograph.**
- **An industry with no representative work.**
- **A filtered service list returning nothing.**
- **No FAQ entries for a service.**
- **The honest enquiry boundary**, stated at the point of contact.

---

# Common Mistakes

- Describing services only as a list, with no detail page a prospect can decide from
- Leading with the firm's history before establishing what problem it solves
- Process described in abstract stages that could belong to any business
- Testimonials with no attribution — not even role and sector
- Nesting a large service catalogue behind a second interaction
- Case studies that state an outcome without stating how it was measured
- A consultation request that appears to submit and goes nowhere
- Expertise asserted through adjectives rather than demonstrated through published thinking
- Treating an industry profile's trust signals as optional decoration rather than as the reason the profile exists

---

# Relationship to Other Architectures

Services is a **profile of Corporate**, differing in trust mechanism: expertise and process rather than scale and track record. Read `corporate.md` for the underlying journey.

Services is itself the **most-used parent in the library**. These profiles inherit it and specialize the trust mechanism further:

- **Legal** — credentials, admissions, matter history
- **Finance** — regulatory standing and disclosure
- **Healthcare** — clinical credentials and care quality
- **Manufacturing** — production capability and certification
- **Logistics** — operational coverage and tracking
- **Automotive** — provenance and specification
- **Hospitality** and **Travel** — composed with Booking

`agency`, `consulting`, and `firm` are aliases of this architecture, not separate ones. See `REGISTRY.md`.

---

# Definition of Success

Visitors should leave believing the organization is knowledgeable, trustworthy, and capable of solving their problem.
