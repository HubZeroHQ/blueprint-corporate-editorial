# Documentation Architecture

Documentation websites exist to help users successfully understand, adopt, and use a product, service, framework, or platform.

Their primary purpose is to reduce confusion by making information easy to discover, navigate, and maintain.

Documentation should prioritize clarity over visual complexity.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (versioned reference pages and API surfaces) and retrieval model (search-first reference lookup).
- **Composes with:** `saas`
- **Modules:** search, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Help users solve problems
- Reduce support requests
- Accelerate onboarding
- Explain concepts clearly
- Build developer confidence

---

## Audience

- Developers
- Customers
- Administrators
- Technical teams
- Integrators

---

# Essential Pages

- Home
- Getting Started
- Guides
- Tutorials
- API Reference
- Concepts
- FAQs
- Changelog
- Search

---

# Information Hierarchy

Documentation should progress naturally from introductory material toward advanced topics.

Navigation should allow both sequential learning and direct reference.

Search should be treated as a primary navigation method.

---

# Content Model

Documentation's content model is a reference tree, and its defining property is that structure and navigation are the same thing.

**Entities.** `Page` (slug, title, section, order, body, version). `Section` (slug, title, order). `ApiEntry` (name, signature, parameters, returns, examples) where an API surface exists.

**Relationships.** Pages belong to sections and carry an explicit order. Cross-references between pages are declared by slug so a moved page does not silently orphan its inbound links.

**Derivation.** The entire navigation tree, breadcrumbs, previous/next links, the search index, metadata, sitemap, and `TechArticle` structured data all derive from the page collection and its ordering. A hand-maintained sidebar is the single most common defect in this architecture and goes stale on the first addition.

Where content is versioned, the version is part of the record's identity and every derived system must respect it — including canonical URLs, which should point at the current version rather than at each archived one.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation *is* the architecture here, and it is the persistent structure rather than an affordance layered on top.

The section tree should be visible and reflect the reader's current position at all times. A reader in a nested reference page must be able to see where they are without navigating away to find out.

Search is a peer of the tree, not a fallback. Documentation readers frequently know the term they want and not where it lives.

Within a page, provide in-page navigation for long content and explicit previous/next links following the declared page order — a reader working through a guide sequentially should never have to return to the index to continue.

Every navigation surface derives from the page collection and its ordering. See `.hubzero/content/principles.md`.

---

# Interaction Model

- Full-text search
- Versioning
- Navigation sidebar
- Table of contents
- Code examples
- Copy-to-clipboard
- Cross references
- Feedback mechanisms

---

# Trust Signals

- Accurate examples
- Version information
- Update history
- Changelog
- Consistent terminology
- Reliable references

Trust comes from accuracy, consistency, and maintenance.

---

# Conversion Model

Documentation rarely focuses on direct conversions.

Instead, it should encourage visitors to:

- Successfully complete tasks
- Continue learning
- Adopt the product
- Return when needed

Success is measured by user success rather than sales.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A search returning no results.** The single most important empty state in this architecture. Offer the section tree as a fallback rather than a dead end.
- **A page with no children in a tree that implies them.**
- **An archived or superseded version.** A reader who lands on old documentation must be told, with a route to the current version.
- **A page that has moved.** Cross-references are declared by slug precisely so this can be handled deliberately rather than as a 404.
- **The first and last page of a sequence.** Previous/next affordances must handle both ends.
- **An API entry with no examples.**

---

# Common Mistakes

- Poor search
- Outdated documentation
- Broken examples
- Inconsistent terminology
- Excessive nesting
- Weak navigation

---

# Definition of Success

- Search success rate
- Task completion
- Reduced support requests
- Returning users
- Documentation engagement

---

# Relationship to Other Architectures

Documentation websites differ from Marketing websites by prioritizing education over persuasion.

Unlike Corporate websites, documentation exists to support existing or prospective users through accurate, structured technical information.