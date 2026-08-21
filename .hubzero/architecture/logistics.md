# Logistics Architecture

Logistics websites exist to communicate operational capability, build commercial trust, and help customers manage the movement of goods efficiently.

Their primary purpose is to demonstrate reliability while making it easy for customers to request quotations, track shipments, and understand available logistics services.

Operational clarity should always take precedence over marketing language.

---

# Classification

- **Kind:** profile
- **Parent:** `services` — read that document first; this one specializes it.
- **Distinct on:** Retrieval model — shipment lookup and coverage query alongside conventional service discovery.
- **Composes with:** —
- **Modules:** locations, careers, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Explain logistics services
- Generate qualified enquiries
- Support shipment tracking
- Build operational credibility
- Communicate coverage and capabilities

---

## Audience

- Businesses
- Manufacturers
- Retailers
- Importers
- Exporters
- Supply chain managers

---

# Essential Pages

- Home
- Services
- Industries
- Coverage
- Shipment Tracking
- About
- Resources
- Careers
- Contact

---

# Information Hierarchy

Visitors should immediately understand:

- What services are offered
- Which regions are covered
- Which industries are served
- How shipments are managed
- How to request a quotation

Service discovery should require minimal effort.

---

# Content Model

Logistics content combines a service catalogue with an operational coverage model.

**Entities.** `Service` (slug, description, modes, transit expectations). `Coverage` (region, service references, constraints). `Industry` (sector-specific solutions). `Location` (branch, depot, hours). `Article` (resources).

**Relationships.** Services reference the coverage regions they operate in and the industries they serve; locations reference the services available at them.

**Derivation.** Service and industry routes, coverage surfaces, metadata, sitemap, `Organization` and `Service` structured data, and branch listings all derive from these records.

Coverage is the field most damaging to have stale or vague, because a customer plans around it. Where coverage does not extend, say so explicitly — a stated gap is more useful than an ambiguous map.

Shipment tracking is the architecture's defining interaction and almost always exceeds a blueprint's honest capability. Demonstrate the interface against authored sample data and state plainly that it is not connected to a live system.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation separates the two things a visitor comes for: understanding the service, and performing an operational task.

Services, industries, and coverage form the commercial path. Tracking and quote requests are operational and must be reachable immediately from every page — a returning customer tracking a shipment should never navigate a marketing hierarchy to reach it.

Coverage should be explorable by region, with the constraint stated where coverage ends.

Branch and depot locations are reachable directly and cross-linked from coverage.

---

# Interaction Model

- Shipment tracking
- Quote requests
- Service coverage maps
- Industry solutions
- Branch locations
- Contact methods
- Customer support

---

# Trust Signals

- Fleet information
- Certifications
- Coverage network
- Years of experience
- Customer testimonials
- Operational statistics
- Industry partnerships

Trust should come from demonstrated operational capability rather than promotional claims.

---

# Conversion Model

Encourage visitors to:

- Request a quotation
- Contact the logistics team
- Track shipments
- Explore industry-specific solutions

Reduce friction between enquiry and response.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A tracking lookup with no match.** The most-used interaction in this architecture and the state most likely to be reached. It needs a genuine next step, not a bare negative.
- **A region outside coverage.** State the boundary explicitly rather than returning nothing.
- **A service unavailable on a given lane or mode.**
- **A branch temporarily closed.**
- **The honest tracking boundary.** Tracking against authored sample data must say so where the visitor enters a reference, not only in the README.

---

# Common Mistakes

- Unclear service descriptions
- Hidden contact information
- Poor shipment tracking
- Outdated coverage information
- Generic marketing copy
- Difficult quotation process

---

# Definition of Success

- Quote requests
- Shipment tracking usage
- Contact enquiries
- Customer retention
- Service page engagement

---

# Relationship to Other Architectures

Logistics shares characteristics with Services and Manufacturing while emphasizing operational capability, reliability, and long-term commercial relationships.