# Portfolio Architecture

Portfolio websites establish credibility through work rather than services.

Their primary purpose is to demonstrate capability, communicate expertise, and encourage potential clients or employers to begin a conversation.

Unlike corporate websites, portfolios focus on evidence over claims.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (works and case studies as the primary records) and trust mechanism (demonstrated craft rather than stated capability).
- **Composes with:** `blog`
- **Modules:** editorial, careers, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Showcase completed work
- Demonstrate expertise
- Build professional credibility
- Tell the story behind projects
- Generate qualified enquiries

---

## Audience

- Prospective clients
- Recruiters
- Hiring managers
- Collaborators
- Investors
- Industry peers

---

# Essential Pages

- Home
- Projects / Portfolio
- Project Detail
- About
- Services (optional)
- Writing / Insights (optional)
- Contact

---

# Information Hierarchy

Projects should be the central focus of the website.

Navigation should make it effortless to explore work, understand capabilities, and contact the owner.

Case studies should receive significantly more emphasis than marketing copy.

---

# Content Model

A portfolio's content model is small and deep. Few records, each carrying substantial narrative.

**Entities.** `Work` or case study (slug, client, sector, year, summary, narrative body, outcomes, media). `Service` or capability. `Article` (journal). `Person` where the studio names its team.

**Relationships.** Works reference services and sectors; articles reference works they discuss; services reference representative works.

**Derivation.** Work routes, service pages, metadata, sitemap, `CreativeWork` structured data, filter facets, and related work all derive from these records.

The failure this architecture is most prone to: an index listing several distinct works and a detail route that renders the same body for all of them. Each work record must carry its own full narrative, not just the fields the index needs. See `.hubzero/content/principles.md` — Content Depth Is Authored.

Where outcomes are stated, the record should require how the figure was produced. A metric with no stated basis weakens the case study it appears in.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is deliberately sparse. Work is the primary path; everything else supports it.

The work index is the spine, and it should let a visitor form an impression quickly before committing to a case study. Filtering by service or sector helps only when there is enough work to warrant it.

Studio, process, and contact form a short secondary group. A portfolio with elaborate navigation signals an agency rather than a practice.

From a case study, offer a clear route to the next piece of work — a visitor who has read one case study is the most likely person on the site to read another.

---

# Interaction Model

- Project showcase
- Case studies
- Image galleries
- Technology stack
- Search and filtering (when appropriate)
- Testimonials
- Contact methods

---

# Trust Signals

- Real projects
- Measurable outcomes
- Client testimonials
- Awards
- Certifications
- Publications
- Open source contributions
- Professional experience

Trust should come from evidence rather than exaggerated claims.

---

# Conversion Model

Encourage visitors to:

- Start a project
- Schedule a consultation
- Hire the individual or company
- Download a résumé or profile
- Explore additional work

Calls to action should remain professional rather than overly aggressive.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A filtered work index returning nothing.** Say it in the studio's voice; this state is reached often when filters are offered on a small body of work.
- **A work with no photography.** Designed as a composition rather than a missing image.
- **A journal with no entries.**
- **A person with no portrait.**
- **The last piece of work** in any "next project" affordance.
- **The honest enquiry boundary.**

---

# Common Mistakes

- Showing too many low-quality projects
- Describing projects without explaining outcomes
- Excessive animations distracting from the work
- Generic marketing language
- Poor project organization
- Weak project storytelling

---

# Definition of Success

- Qualified enquiries
- Project page engagement
- Time spent exploring work
- Contact conversion rate
- Returning visitors

---

# Relationship to Other Architectures

Portfolio differs from Corporate by prioritizing work over company information.

Portfolio differs from Services by demonstrating capability through completed projects instead of describing service offerings.

Portfolio may be combined with Corporate or Services where appropriate.