# Nonprofit Architecture

Nonprofit websites exist to communicate a mission, demonstrate impact, and encourage meaningful participation.

Their purpose is not to maximize sales but to build trust, inspire action, and support long-term relationships with donors, volunteers, beneficiaries, and partners.

Mission should always take precedence over marketing.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (programmes, regions, beneficiaries), terminus (donation or volunteering), and trust mechanism (transparency about outcomes and limits).
- **Composes with:** `events`, `blog`
- **Modules:** editorial, careers, locations, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Communicate the organization's mission
- Demonstrate measurable impact
- Encourage donations
- Recruit volunteers
- Share programs and initiatives
- Build long-term trust

---

## Audience

- Donors
- Volunteers
- Beneficiaries
- Sponsors
- Partners
- Communities served

---

# Essential Pages

- Home
- About
- Mission
- Programs
- Impact
- Stories
- Events
- Donate
- Volunteer
- Contact

---

# Information Hierarchy

Visitors should quickly understand:

- Who the organization serves
- What it does
- Why it exists
- How they can help

Programs, impact, and donation pathways should be easy to discover.

---

# Content Model

Nonprofit trust is strongest when methods, limits, and underperformance are modelled as primary content rather than appended as disclaimers.

**Entities.** `Programme` (slug, region, methodology, outcomes, status). `Region`. `Story` (field notes, beneficiary narratives). `Person` (staff, trustees). `Report` (annual reviews, financials). `Event`.

**Relationships.** Programmes reference regions and the people who run them; stories reference programmes and regions; reports reference programmes and periods.

**Derivation.** Programme and region routes, impact surfaces, metadata, sitemap, `NGO` and `Article` structured data, and related content all derive from these records.

Outcome records should carry their methodology and their limits as fields, not as footnotes. A programme record that can express "this underperformed, and here is why" produces a more credible organization than one that can only express success.

Donation and volunteering flows almost always exceed a blueprint's honest capability. State the boundary at the point of interaction rather than presenting a form that appears to process a gift.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation should lead with the work rather than with the organization.

Programmes, impact, and stories form the primary path; the organization's structure, governance, and reports are secondary but must be easy to find — donors look for them deliberately, and burying them undermines the transparency the architecture depends on.

Ways to participate — donating, volunteering, partnering — should be reachable from every page without dominating it.

Where programmes span regions, both axes should be navigable, and both should derive from the same records.

---

# Interaction Model

- Donation platform integration
- Volunteer registration
- Event listings
- News and updates
- Success stories
- Program directory

---

# Trust Signals

- Financial transparency
- Annual reports
- Impact statistics
- Partner organizations
- Testimonials
- Certifications
- Team information

Trust should come from openness, accountability, and measurable outcomes.

---

# Conversion Model

Encourage visitors to:

- Donate
- Volunteer
- Attend events
- Share the mission
- Subscribe for updates

Participation should feel meaningful rather than transactional.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A programme with no published outcomes yet.** New programmes are normal; saying so is more credible than implying results.
- **A programme that underperformed.** This architecture should be able to express it as content rather than omitting the programme.
- **A region with no active programmes.**
- **No upcoming events.**
- **A report period not yet published.**
- **The honest donation boundary.** A donation page that cannot process a gift must state that at the point of giving. This is the most consequential honesty requirement in the library.

---

# Common Mistakes

- Unclear mission
- Weak explanation of impact
- Hidden donation options
- Outdated program information
- Excessive promotional language
- Lack of transparency

---

# Definition of Success

- Donations
- Volunteer registrations
- Newsletter subscriptions
- Event participation
- Returning supporters
- Time spent exploring programs

---

# Relationship to Other Architectures

Nonprofit websites differ from Corporate websites by prioritizing mission and impact over business objectives.

They may borrow elements from Marketing architecture but should always emphasize authenticity, transparency, and long-term trust.