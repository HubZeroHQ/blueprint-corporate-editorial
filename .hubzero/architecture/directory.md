# Directory Architecture

A directory website exists to help someone find the right entity among many, and then send them elsewhere.

The operator does not own the entities listed, does not sell them, and does not complete the transaction. Their product is **the quality of the index and the confidence of the referral** — which makes coverage, accuracy, and impartiality the entire value proposition.

---

# Classification

- **Kind:** primary
- **Distinct on:** Content entity graph (records describing third parties the operator does not own), journey terminus (a referral rather than a transaction), and retrieval model (faceted index search).
- **Composes with:** `community`, `real-estate`, `marketplace`
- **Modules:** search, locations, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

**Why this is not Marketplace.** A marketplace facilitates and takes responsibility for a transaction. A directory ends at the handoff. That single difference removes the entire trust apparatus a marketplace needs — payment, protection, disputes — and replaces it with a different one: *is this listing accurate, and is this index complete?*

---

# Primary Objective

Help a visitor narrow a large set of entities to the right one, quickly, and hand them off with confidence.

The visitor's question is comparative rather than transactional: *which of these is right for me?* They are not deciding whether to buy — they are deciding whom to contact, visit, or engage.

Success is measured by whether the referral was good, which the operator often cannot observe. That makes accuracy and honest coverage the only reliable proxies.

## Audience

- Visitors with criteria seeking matches
- Visitors browsing a category to understand what exists
- Visitors verifying a specific entity they already know of
- Listed entities checking or claiming their record

---

# Content Model

The defining property is that **records describe entities the operator does not control**, which makes accuracy a maintenance obligation rather than a one-time authoring task.

**Entities.** `Entry` (slug, name, description, category references, attributes, location, contact routes, status, last-verified date). `Category` (slug, hierarchy, attribute schema). `Location` or region. `Attribute` definitions per category. `Article` where editorial guidance supports the index.

**Relationships.** Entries reference categories and locations. Categories define the attribute schema their entries carry — the same requirement as Marketplace, and for the same reason: facets cannot exist without it.

**Derivation.** Entry, category, and location routes, filter facets, the search index, metadata, sitemap, `LocalBusiness` or `Organization` structured data, breadcrumbs, and related entries all derive from these records.

Two properties are specific to this architecture:

**Every entry carries a verification date.** A directory's core liability is stale data. Recording when an entry was last confirmed — and surfacing it — converts an unavoidable weakness into a trust signal, because a visitor can weigh the information themselves.

**Coverage is content.** Where the index does not extend — a region, a category, a segment — that gap should be a stated fact rather than an absence a visitor discovers by finding nothing. A directory honest about its boundaries is more useful than one that appears comprehensive and is not.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Information Hierarchy

The journey is **criteria → narrowed set → comparison → referral**.

## 1. Criteria

The visitor states what they are looking for, through search, category, location, or facets. Entry points are plural because visitors arrive with different amounts of specificity.

## 2. Narrowed set

Results presented comparably, with enough information per entry to shortlist without opening each one. This is where a directory earns its keep — a list that requires visiting every entry to compare has done none of the work.

## 3. Comparison

The detail needed to choose between shortlisted entries: attributes, location, contact routes, and whatever proof the category warrants.

## 4. Referral

A clean handoff. The visitor leaves for the entity's own site, phone, or premises, and the directory's job is done.

Editorial guidance — how to choose, what to look for, what the categories mean — supports the journey and is frequently what makes a directory rank and recur.

---

# Essential Pages

- Home
- Category browse (index and nested)
- Search results
- Entry detail
- Location or region index
- About — including coverage and how entries are compiled
- Submit or claim a listing
- Contact
- Privacy, Terms

Plus modules the blueprint carries. See `modules.md`.

The About page carries unusual weight here: a visitor deciding whether to trust the index wants to know how it was assembled and what it excludes.

---

# Navigation

Navigation must accommodate visitors arriving with very different amounts of specificity.

Search, category, and location are three parallel entry points, all first-class. A visitor who knows the category, one who knows the area, and one who knows only a name should each get somewhere useful immediately.

Category hierarchies stay shallow, with facets doing the narrowing. Location navigation should be genuinely navigable rather than a map alone — a map is an interface, not an index, and it fails without scripting.

**Search, filter, sort, and location state belongs in the URL.** Directory results are shared and returned to constantly.

From an entry, the outbound referral must be unmistakable. A directory that obscures the entity's own contact routes to retain visitors has inverted its purpose.

---

# Interaction Model

The essential interactions are searching, faceted filtering, and comparing entries.

**Faceted filtering** derives from the category's attribute schema. Show result counts per facet, and prefer disabling a facet that would return nothing over offering it.

**Comparison** should be possible from the results list. The list carries the attributes that distinguish entries, so a visitor can shortlist without opening each one.

**Location-based narrowing** is common and should degrade gracefully. Where a map is offered, a list must exist alongside it — the map is enhancement, and the index must work without it. See `.hubzero/rendering.md` — Progressive Enhancement.

**The referral itself** is an interaction. Outbound links should be direct and honest — no interstitials, no obscured destinations.

Where a visitor's location would improve results, request it explicitly and function without it. A directory that requires location access before showing anything has excluded everyone who declines.

---

# Trust Signals

A directory's trust rests on the index rather than on any entity within it.

**High priority**
- Stated coverage — what is included and, explicitly, what is not
- Verification dates on entries
- How entries are compiled and whether inclusion is paid
- Accuracy of contact and location information
- Neutral presentation and disclosed ranking basis

**Medium priority**
- Category depth and attribute completeness
- Editorial guidance on choosing
- Update frequency
- A route for entities to correct their record

**Paid placement must be disclosed.** A directory that ranks by payment without saying so has abandoned the impartiality that is its only product, and a visitor who discovers it distrusts every entry.

Entity-level signals — credentials, ratings, accreditation — belong on entries where the category warrants them, but they are the entity's signals, not the directory's.

---

# Conversion Model

The terminus is a **referral**: the visitor leaves with a specific entity and enough confidence to act.

This is the only architecture in the library whose success involves the visitor departing, which changes the design objective. Retention is not the goal. A visitor who finds the right entity in thirty seconds and leaves has had an excellent experience and will return next time they need one.

Do not obscure outbound routes to increase time on site. It measures better and serves worse.

A secondary conversion is a listed entity claiming or submitting their record, which sustains the index.

**Honest demonstration applies.** A blueprint cannot process a submission, verify a claim, or maintain a live index. State those boundaries where a visitor would act. Where verification dates are authored fixed values rather than live data, say so on the coverage or about page rather than implying continuous maintenance.

---

# Common States

A directory's states are dominated by the gap between what a visitor wants and what the index holds. Each is authored content in the product's voice — see `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A search returning nothing.** The most frequently reached state; name the limiting facet and offer a broader search.
- **A category with no entries in the requested location.** Extremely common, and the state where honest coverage matters most — say whether the gap is the index's or the world's.
- **A location outside coverage.** An explicit statement, not an empty result.
- **An entry with incomplete information.** Show what is known and mark what is not; a blank field and an unknown field are different.
- **An entry whose verification date is old.** Surface it rather than hiding it.
- **An entry that has closed or is inactive.** Retain with status rather than removing silently — visitors searching for it deserve an answer.
- **A facet that would return nothing.**
- **The honest submission and index-maintenance boundaries.**

---

# Common Mistakes

- Appearing comprehensive while having partial coverage
- Omitting verification dates, so a visitor cannot weigh staleness
- Obscuring outbound contact routes to retain visitors
- Undisclosed paid placement
- Deep category hierarchies where facets would serve better
- Requiring location access before showing any results
- Offering a map with no list alternative
- Silently removing closed entries instead of marking them
- Result lists that carry too little to shortlist from
- Holding search and filter state outside the URL

---

# Relationship to Other Architectures

**Marketplace** is the nearest relative. Both index third-party entities with faceted search; a marketplace facilitates and takes responsibility for the transaction, a directory ends at the referral. Adding checkout to a directory makes it a marketplace.

**Real Estate** is structurally a directory of properties with a much deeper per-entry content model and an enquiry terminus. Where a directory's entries warrant substantial individual narrative, that architecture usually fits better.

**Community** shares the multi-entity graph but terminates in participation rather than referral.

**Government** frequently composes with Directory for service and provider indexes.

Directory composes beneath **Healthcare** for provider networks, **Community** for member and group indexes, and **Education** for programme and institution finders.

---

# Definition of Success

A visitor should reach the right entity quickly, understand how current the information is, and leave confident that the index was honest about what it does and does not cover.

The directory should be worth returning to — which depends entirely on whether the last referral was a good one.
