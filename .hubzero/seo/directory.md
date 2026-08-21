# Directory SEO

A directory competes almost entirely on **coverage and specificity**. Its organic strategy is to own the long tail of "category plus place" queries that no individual listed entity can rank for alone.

This is the architecture where programmatic page generation is most legitimate — and most dangerous. The same mechanism that produces thousands of genuinely useful location pages produces thousands of empty ones if applied without a threshold.

The governing rule: **generate a page only where there is enough content to justify it.**

---

# Search Intent

Visitors typically search to:

- Find entities of a type within a place
- Find entities matching specific criteria
- Verify or locate a specific known entity
- Compare options before choosing whom to contact
- Understand what options exist in a category

Intent is **navigational and comparative** rather than transactional. The visitor is choosing whom to approach, not what to buy — which means the referral, not a conversion, is the measurable outcome.

---

# Primary Keyword Categories

- Category plus location, at every geographic granularity
- Category plus attribute
- "Best" and "near me" phrasing
- Entity names, for verification searches
- Category definition queries ("what is a {category}")

**Category plus location is the entire long tail** and the architecture's principal asset. The volume per query is low; the aggregate is substantial and the intent is high.

---

# Essential Landing Pages

Required

- Home
- Category pages
- Location pages
- Category-plus-location pages — the core ranking assets
- Entry detail pages
- About, including coverage and compilation method
- Submit or claim a listing

Recommended

- Attribute-filtered pages, where demand exists
- Editorial guides on choosing within a category

**Apply a minimum-content threshold to generated pages.** A category-plus-location page with two entries is thin content that dilutes the site. Where coverage is insufficient, either do not generate the page or state the gap honestly and point to the nearest adequate coverage.

---

# Information Architecture

```text
Category  ×  Location
        ↓
Category-plus-location page
        ↓
Entry detail
```

Two independent axes that intersect. Both must be independently navigable and crawlable, and the intersection is where the ranking value concentrates.

Geographic granularity should follow how people actually search — region, city, and neighbourhood where the category warrants it — rather than administrative boundaries nobody uses.

---

# Internal Linking Strategy

Connect:

- Categories to their locations and locations to their categories
- Every intersection page to adjacent geographies and sibling categories
- Entries to their category and location pages
- Guides to the categories they discuss

**Adjacent-geography links are unusually valuable here.** A visitor finding thin coverage in one place is served by a link to the next place over, and those links also distribute crawl depth across the geographic tree.

---

# Structured Data

Required

- Organization
- WebSite
- BreadcrumbList
- ItemList, for index pages
- LocalBusiness or the appropriate subtype, per entry

Recommended

- Place
- FAQPage on guide content

Entry markup describes a **third party**, which makes accuracy an obligation the operator cannot verify continuously. Publish only fields the directory actually maintains, and reflect the entry's verification status honestly.

Do not publish aggregate ratings the directory does not genuinely collect.

---

# Content Strategy

Content is what separates a useful directory from a scraped one, and search engines assess it accordingly.

- Category pages should explain the category and how to choose within it
- Location pages should carry genuine local context, not a templated sentence with the place name substituted
- Entry descriptions should be substantive rather than a repeated field dump
- Guides earn the links that index pages never will

**Templated content with a substituted variable is the characteristic failure of this architecture.** A thousand pages differing only by place name is thin content at scale, and it is recognized as such.

State coverage honestly. A page that says what the index does not cover is more useful, and reads as more trustworthy, than one that appears complete and is not.

---

# Local SEO

**The entire strategy.** Local relevance is not a component of directory SEO; it is the substance of it.

Every location page needs genuine local content. Entry addresses and contact details must be accurate and consistently formatted, since the directory is frequently a citation source for the entities it lists.

Geographic hierarchy should be genuinely navigable — a visitor and a crawler should both be able to move from region to city to neighbourhood.

---

# Trust Signals

High Priority

- Stated coverage and stated gaps
- Verification dates on entries
- Accurate contact and location information
- Disclosed compilation method and whether inclusion is paid
- Neutral, disclosed ranking basis

Medium Priority

- Update frequency
- Correction route for listed entities
- Editorial guidance quality

Undisclosed paid placement in what appears to be an objective index is the trust failure this architecture is most prone to.

---

# Technical Considerations

- A minimum-content threshold gating generated page creation
- Canonical URLs resolving overlapping geographic and category variants
- Crawl-budget management across a large generated surface
- Closed entries retained with status rather than returning bare 404s
- Index pages must render their listings without scripting — a map-only interface is invisible to crawlers and to visitors without JavaScript
- Consistent, accurate structured data across generated pages

---

# Common Mistakes

- Generating intersection pages with no content behind them
- Templated location content with only the place name substituted
- Appearing comprehensive while coverage is partial
- Map-only interfaces with no crawlable list
- Omitting verification dates
- Removing closed entries silently instead of marking them
- Publishing aggregate ratings the directory does not collect
- Undisclosed paid placement
- Geographic granularity that follows administrative boundaries rather than search behaviour

---

# Success Metrics

- Category-plus-location page entrances
- Long-tail query coverage
- Outbound referral rate — the actual product
- Entry detail page traffic
- Listing submissions and claims
- Indexed pages against pages with sufficient content
