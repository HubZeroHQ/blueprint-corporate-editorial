# Legal Architecture

Legal websites exist to build trust, communicate expertise, and help prospective clients determine whether a law firm or legal professional is the right choice for their matter.

Visitors are often making high-stakes decisions.

The website should reduce uncertainty through clarity, credibility, and accessible information.

---

# Classification

- **Kind:** profile
- **Parent:** `services` — read that document first; this one specializes it.
- **Distinct on:** Trust mechanism — credentials, bar admissions, and matter history rather than general capability claims.
- **Composes with:** —
- **Modules:** editorial, careers, locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Build trust
- Demonstrate legal expertise
- Explain practice areas
- Encourage consultation requests
- Educate potential clients

---

## Audience

- Individuals seeking legal assistance
- Businesses requiring legal services
- Existing clients
- Referral partners

---

# Essential Pages

- Home
- About
- Attorneys
- Practice Areas
- Case Results (where appropriate)
- Resources / Articles
- FAQs
- Contact
- Consultation

---

# Information Hierarchy

Practice areas should be the primary method of navigation.

Attorney profiles should reinforce expertise without overshadowing the firm's capabilities.

Educational content should help visitors understand legal processes before contacting the firm.

---

# Content Model

A legal practice's content is a graph of expertise, and its credibility depends on the graph being internally consistent.

**Entities.** `Practice` (slug, description, related matters). `Person` (name, role, admissions, practice references, credentials). `Matter` or case study (slug, practice, outcome, attribution limits). `Insight` (article). `Location` (office). `Industry`.

**Relationships.** People reference practices and industries; matters reference practices and the people who worked them; insights reference practices and authors. A practice page's team, matters, and insights all derive from these references rather than being listed by hand.

**Derivation.** Practice, person, and matter routes, metadata, sitemap, `LegalService` and `Person` structured data, breadcrumbs, and related content all derive from the graph.

Credentials and admissions are the trust currency here and must be exact. Where a matter's outcome cannot be attributed, the record should carry that limitation as a field rather than omitting the context — role-and-sector attribution is what a real firm does when it cannot name a client.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is practice-led, with people as a close second — clients choose a firm through its expertise and the individuals who carry it.

Practices, people, and industries should each be reachable directly, and each should cross-link to the others: a practice page lists its people, a person lists their practices.

Where a firm has many practice areas, present them flat rather than nested. Requiring a second tap to discover whether a firm handles a matter is friction at exactly the wrong moment.

Contact and consultation routes must be reachable from every page, with the office locations directly accessible.

---

# Interaction Model

- Attorney profiles
- Practice area pages
- Consultation requests
- Office locations
- Resource library
- Frequently asked questions

---

# Trust Signals

- Attorney credentials
- Bar memberships
- Certifications
- Years of experience
- Published articles
- Client testimonials (where permitted)
- Awards and recognitions

Trust should come from genuine expertise rather than exaggerated marketing.

---

# Conversion Model

Encourage visitors to:

- Request a consultation
- Call the office
- Contact a specific attorney
- Learn about relevant practice areas

The website should reduce uncertainty before asking for commitment.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A practice with no published matters.** Common and entirely legitimate — confidentiality frequently prevents publication. Say so; it is more credible than an empty section.
- **A person with no photograph.** A designed absence is better than a placeholder silhouette.
- **A practice with no current insights.**
- **An office with altered hours.**
- **A matter whose outcome cannot be attributed.** The record carries the limitation; the page states it.
- **The honest enquiry boundary.** A consultation request that cannot be received must say what actually happens next.

---

# Common Mistakes

- Overly technical legal language
- Aggressive marketing
- Poor organization of practice areas
- Hidden contact information
- Weak attorney profiles
- Generic content with little practical value

---

# Definition of Success

- Consultation requests
- Contact conversions
- Practice area engagement
- Resource engagement
- Returning visitors

---

# Relationship to Other Architectures

Legal websites share similarities with Services websites but place significantly greater emphasis on trust, authority, expertise, and educational content.

Professional credibility should always outweigh promotional messaging.