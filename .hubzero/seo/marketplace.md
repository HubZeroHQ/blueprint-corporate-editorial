# Marketplace SEO

A marketplace's organic surface is enormous and mostly low-value. Thousands of listings, many near-duplicate, most short-lived.

The discipline is therefore the opposite of most architectures: **the primary SEO problem is deciding what not to index.** Category and vendor pages are durable and rank; individual listings are numerous and ephemeral.

A marketplace that indexes everything competes with itself and dilutes the pages that could have ranked.

---

# Search Intent

Visitors typically search to:

- Find a category of item across sellers
- Find a specific item or model
- Compare prices across sellers
- Evaluate a particular seller
- Find sellers within a location or specialization

Intent divides into **buyer intent** (dominant) and **seller intent** (small but commercially critical — a marketplace needs supply). Both need dedicated surfaces.

---

# Primary Keyword Categories

- Category terms, at every level of the hierarchy
- Category plus attribute ("{category} {material}", "{category} under {price}")
- Brand, model, and product names
- Comparison and alternative terms
- Vendor and shop names
- Seller-intent terms ("sell {category}", "list on {marketplace}")

Category-plus-attribute terms are the highest-value opportunity, because they map exactly onto facet combinations the site already supports. Choose a small number of high-intent facet combinations to expose as indexable pages, and exclude the combinatorial remainder.

---

# Essential Landing Pages

Required

- Home
- Category pages, at each hierarchy level
- Selected high-intent facet pages
- Vendor profile pages
- Listing detail
- Sell or become a vendor
- Buyer protection and policies

Recommended

- Location-based category pages, where relevant
- Editorial buying guides
- FAQ

**Facet page selection is the central decision.** Expose combinations with genuine search demand and enough inventory to satisfy it. Exclude the rest via robots directives — an unfiltered facet space generates effectively infinite near-duplicate URLs.

---

# Information Architecture

```text
Category
   ↓
Subcategory
   ↓
Selected facet page
   ↓
Listing detail

Vendor profile → that vendor's listings
```

Two axes, both legitimate: the category tree and the vendor. A listing belongs to both, and both should be crawlable paths to it.

Keep the category tree shallow. Depth beyond three levels usually indicates facets doing hierarchy's job badly.

---

# Internal Linking Strategy

Connect:

- Categories to their subcategories and to selected facet pages
- Listings to their vendor and their category
- Vendors to their categories of activity
- Buying guides to the categories they discuss

Link from listings **up** to durable pages. Listings expire; the link equity they accumulated should flow somewhere permanent.

Related-listing links should stay within category to reinforce topical clustering rather than scattering across the catalogue.

---

# Structured Data

Required

- Organization
- WebSite
- BreadcrumbList
- Product and Offer, per listing
- ItemList, for category pages

Recommended

- AggregateRating and Review — **only where genuine**
- LocalBusiness, per vendor where applicable

Marketplace listings are the most common place fabricated review markup appears, and it is a manual-action risk as well as a trust violation. Publish ratings only where real reviews exist, and never invent volumes. See `principles.md` — Structured Data Should Reflect Reality.

Offer markup must reflect the listing's actual price and availability.

---

# Content Strategy

Category pages need genuine content, not just a grid. A category that is only a listing container has nothing to rank on and loses to competitors who explain the category.

- Write category descriptions that help a buyer choose
- Buying guides earn links that listing pages never will
- Vendor profiles should carry real narrative rather than an auto-generated summary
- Seller-facing content — costs, process, requirements — serves a small but valuable search audience

Listing content is written by vendors and its quality is uneven. Category and guide content is where the operator controls quality, which is why it carries the SEO strategy.

---

# Local SEO

Relevant where vendors are geographically grounded — physical shops, local services, collection-only goods.

Where relevant, location-plus-category pages are high-intent and worth building deliberately. Vendor profiles should carry consistent address and contact formatting.

Unnecessary for a purely shipped-goods marketplace with national or global reach.

---

# Trust Signals

High Priority

- Buyer protection terms, clearly stated
- Vendor ratings with volume visible
- Transparent, disclosed ranking basis
- Accurate pricing and availability
- Identifiable vendor information

Medium Priority

- Vendor trading history
- Dispute resolution process
- Verification criteria, where badges are used

Undisclosed paid placement is both a trust failure and, where it affects organic-looking results, a quality signal risk.

---

# Technical Considerations

- Robots directives excluding the unselected facet space — the single most important technical decision in this architecture
- Canonical URLs resolving parameter and sort variations
- A crawl-budget strategy: large catalogues exhaust it on low-value URLs
- Sold and expired listings return a useful page with alternatives rather than a bare 404
- Pagination handled explicitly on deep category listings
- Structured data validated at scale, since it is generated rather than authored

---

# Common Mistakes

- Indexing the full facet combination space
- Category pages that are grids with no content
- Fabricated or aggregated review markup
- Letting expired listings 404 without alternatives
- Auto-generated vendor profiles with no substance
- Treating the seller-acquisition path as an afterthought
- Sort and view parameters generating indexable duplicates
- Undisclosed paid ranking

---

# Success Metrics

- Category page organic entrances
- Selected facet page performance
- Vendor profile traffic
- Listing discovery from organic
- Seller signups from organic
- Crawl efficiency — indexed pages against valuable pages
