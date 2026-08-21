# Education Architecture

Education websites exist to help people discover, understand, and access learning opportunities.

Their primary purpose is to communicate educational offerings while making information easy to navigate for students, parents, educators, and administrators.

Clarity should always take precedence over marketing.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (programmes, faculty, campus), terminus (application), and trust mechanism (accreditation and outcomes).
- **Composes with:** `events`, `directory`
- **Modules:** editorial, careers, locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Present educational programs
- Support admissions or enrollment
- Share academic information
- Communicate institutional credibility
- Provide ongoing resources

---

## Audience

- Prospective students
- Current students
- Parents
- Faculty
- Staff
- Alumni

---

# Essential Pages

- Home
- About
- Programs or Courses
- Admissions
- Faculty
- Campus
- Resources
- Events
- News
- Contact

---

# Information Hierarchy

Programs should be easy to browse and compare.

Navigation should prioritize finding courses, admissions information, faculty, events, and learning resources.

Academic information should always be easier to find than promotional content.

---

# Content Model

Education content should be organized around visitor decisions rather than the institution's internal org chart.

**Entities.** `Programme` (slug, level, duration, fees, entry requirements, outcomes). `Faculty` (person, department, programme references). `Department`. `CampusFacility`. `Article` (news). `Event` (open days, deadlines).

**Relationships.** Programmes reference departments, faculty, and entry requirements; faculty reference programmes they teach. Admissions requirements reference the programmes they govern rather than being restated per page.

**Derivation.** Programme routes, faculty profiles, metadata, sitemap, `Course` and `EducationalOrganization` structured data, filter facets, and related-programme suggestions all derive from these records.

Fees, deadlines, and entry requirements are the highest-stakes content here and the most damaging to have disagree between pages. One canonical record per programme, read everywhere.

Academic terms and deadlines are authored temporal state, not computed from the current date.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation should mirror how a prospective student decides, not how the institution is administered.

Lead with academic pathways, admissions, campus life, and the practical questions that follow. Departmental structure is secondary and often better expressed within programme pages than as a top-level path.

Admissions is a journey rather than a page, and its steps should be navigable in order and re-enterable at any point.

Programme discovery benefits from filtering by level, subject, and mode. Hold those filters in the URL so a prospective student can share a filtered list with a parent or adviser.

---

# Interaction Model

- Course catalogue
- Program pages
- Admissions information
- Event listings
- Faculty directory
- Academic calendar
- Downloads
- Contact forms

---

# Trust Signals

- Accreditation
- Faculty credentials
- Student outcomes
- Alumni success
- Research
- Campus facilities
- Partnerships
- Testimonials

Trust should come from educational quality rather than promotional claims.

---

# Conversion Model

Encourage visitors to:

- Apply
- Request information
- Attend an event
- Contact admissions
- Explore programs

Conversion should support informed decision-making rather than pressure visitors.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A programme not currently accepting applications.** State the next intake rather than hiding the programme.
- **Filters returning no programmes.** Common when a visitor combines level, subject, and mode.
- **A department with no current faculty listed.**
- **A deadline that has passed.** Because deadlines are authored state, the passed condition must be authored too — not derived from the clock.
- **No upcoming events or open days.**
- **The honest application boundary.** A blueprint cannot process an application; say so where a visitor would submit one.

---

# Common Mistakes

- Difficult navigation
- Hidden admissions information
- Outdated course details
- Excessive marketing language
- Poor organization of resources
- Inconsistent academic information

---

# Definition of Success

- Program page engagement
- Applications
- Information requests
- Event registrations
- Resource downloads
- Student retention

---

# Relationship to Other Architectures

Education differs from Corporate by prioritizing learning and information over business promotion.

Education may incorporate Marketing techniques for recruitment, but educational content should remain the primary focus.

Education websites often require specialized functionality beyond the scope of a standard Corporate website.