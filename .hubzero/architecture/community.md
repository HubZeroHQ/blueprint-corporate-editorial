# Community Architecture

Community websites exist to help people connect around shared interests, goals, knowledge, or experiences.

Their primary purpose is to encourage participation, facilitate discussion, and foster long-term engagement.

Healthy communities prioritize meaningful interaction over rapid growth.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (members, groups, discussions), terminus (participation rather than purchase), and retrieval model (activity-driven).
- **Composes with:** `events`, `directory`, `blog`
- **Modules:** editorial, search, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Encourage participation
- Build long-term engagement
- Share knowledge
- Foster collaboration
- Strengthen community relationships

---

## Audience

- Members
- Moderators
- Contributors
- Organizers
- Visitors

---

# Essential Pages

- Home
- About
- Community Guidelines
- Discussions
- Events
- Resources
- Member Directory
- Contact

---

# Information Hierarchy

Visitors should quickly understand:

- What the community is about
- Who it serves
- How to participate
- Where discussions take place

Navigation should encourage exploration while preventing information overload.

---

# Content Model

Community architecture is the most relationship-heavy in the library. Centralizing those relationships is more reliable than letting each page reconstruct them.

**Entities.** `Member` (profile, joined date, group references). `Group` (slug, purpose, membership). `Discussion` (slug, title, body, author, group, replies). `Event` (date, location, group). `Resource` (guides, guidelines).

**Relationships.** Members belong to groups; discussions belong to groups and reference an author; events reference groups and locations. Every one of these is a two-way relationship a page might traverse from either end, which is exactly why it must resolve in one place.

**Derivation.** Group and discussion routes, member directories, activity surfaces, the search index, metadata, sitemap, and structured data all derive from the graph.

A community blueprint demonstrates participation without a backend. Discussions and members are authored content; the honest boundary is that nothing new can be posted. State that where a visitor would otherwise try — see `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is activity-led rather than hierarchy-led.

Surface where things are happening — active discussions, upcoming events, recently joined groups — above a static directory of everything that exists. A community's navigation should suggest that people are present.

Groups are the organizing structure and should be reachable directly. Member directories and search support discovery within a group rather than replacing group navigation.

Filters that represent a shareable view of the community — a group's discussions, a member's activity — belong in the URL.

---

# Interaction Model

- Member profiles
- Discussions
- Events
- Notifications
- Search
- Resource library
- Moderation tools
- Announcements

---

# Trust Signals

- Active moderation
- Community guidelines
- Member contributions
- Transparent leadership
- Event history
- Success stories

Trust grows through consistency, openness, and respectful participation.

---

# Conversion Model

Encourage visitors to:

- Join the community
- Participate in discussions
- Attend events
- Share knowledge
- Return regularly

Community growth should prioritize quality participation over membership numbers.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A group with no discussions or members.** New groups are the normal case, not an edge case, and an empty group should invite the first contribution.
- **A member with no activity.**
- **No upcoming events.** Past events remain valuable; the empty state should say the calendar is open rather than rendering nothing.
- **A search or filter returning nothing.** The most likely state a visitor will hit in a discovery-driven architecture.
- **The honest posting boundary.** Every surface that would accept a contribution needs to state that it cannot, at the point of interaction.

---

# Common Mistakes

- Unclear purpose
- Poor moderation
- Difficult onboarding
- Weak search
- Inactive discussions
- Excessive barriers to participation

---

# Definition of Success

- Active members
- Returning visitors
- Discussion engagement
- Event participation
- Member retention

---

# Relationship to Other Architectures

Community websites prioritize engagement and long-term participation rather than commercial conversions.

They may complement Documentation, Education, or SaaS architectures by supporting users beyond the core product experience.