# Government Architecture

Government websites exist to provide accurate, accessible, and trustworthy public information and services.

Their primary purpose is to help citizens complete tasks, find information, and access services with minimal friction.

Clarity, accessibility, and reliability should always take precedence over visual complexity.

---

# Classification

- **Kind:** primary
- **Distinct on:** Terminus (service completion rather than conversion), retrieval model (task-driven lookup), and trust mechanism (transparency and statutory obligation).
- **Composes with:** `directory`
- **Modules:** search, editorial, locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Deliver public information
- Provide digital government services
- Improve accessibility
- Increase transparency
- Reduce support requests

---

## Audience

- Citizens
- Businesses
- Visitors
- Public employees
- Media

---

# Essential Pages

- Home
- Departments
- Services
- News
- Announcements
- Documents
- Forms
- Contact
- Emergency Information

---

# Information Hierarchy

Services should be organized around citizen needs rather than internal organizational structures.

Frequently used services should always remain easily discoverable.

Navigation should prioritize tasks over departments.

---

# Content Model

A government site's content model *is* its architecture. Once every collection is typed, the search index, sitemap, structured data, and cross-references follow almost for free.

**Entities.** `Service` (slug, description, eligibility, how to access, status). `Department`. `Publication` (title, date, document reference). `Guidance` (structured body sections). `Location` (office, hours, accessibility). `Notice` (news, changes).

**Relationships.** Services reference departments and locations; guidance references the services it governs; publications reference departments.

**Derivation.** Service routes, department indexes, the search index, filter counts, breadcrumbs, metadata, sitemap, and `GovernmentService` structured data all derive from these records. Every summary the site states — how many services, how many are operating normally — is computed from the source rather than written down.

Operational status is a field on the service record, declared once and read by every surface that reports it. Honest limits read as trust here more than in any other architecture: a status page that admits its figures are fixed is more convincing than one that implies a live feed it does not have.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is task-led. A visitor arrives to do something specific, and the navigation's only job is to get them there quickly.

Organize by what a visitor needs to accomplish rather than by which department owns it. Departmental structure should exist, but subordinate to services — a visitor should never need to know which body is responsible in order to find the service.

Search is essential and heavily used. Service status, contact routes, and accessibility information must be reachable from every page.

Filter and search state belongs in the URL — these views are frequently shared, bookmarked, and returned to.

---

# Interaction Model

- Service directories
- Downloadable forms
- Public notices
- News and announcements
- Office directories
- Search
- Contact information
- Accessibility features

---

# Trust Signals

- Official branding
- Transparent information
- Accurate contact details
- Last updated dates
- Official publications
- Public records

Trust comes from consistency, accuracy, and transparency.

---

# Conversion Model

Government websites rarely focus on commercial conversions.

Instead, they should help visitors:

- Complete services
- Submit forms
- Access information
- Contact departments
- Stay informed

Success is measured by task completion rather than sales.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A service that is unavailable, suspended, or degraded.** This is a first-class state, not an error, and it must be expressible on the service record itself.
- **A search returning no results.** Heavily used; needs a genuine route forward.
- **A department with no current publications.**
- **A location temporarily closed or with altered hours.**
- **Filters returning nothing**, with the limiting constraint named.
- **The honest boundary on any transaction.** Where the real service happens elsewhere, link to it plainly rather than reproducing a form that cannot submit.

---

# Common Mistakes

- Bureaucratic navigation
- Difficult-to-find services
- Outdated information
- Poor accessibility
- Inconsistent terminology
- Excessive PDF dependence

---

# Definition of Success

- Task completion rate
- Successful service requests
- Search effectiveness
- Reduced support enquiries
- Accessibility compliance

---

# Relationship to Other Architectures

Government websites prioritize usability, accessibility, and public service over marketing.

Unlike Corporate websites, success is measured by helping citizens accomplish tasks rather than generating business.