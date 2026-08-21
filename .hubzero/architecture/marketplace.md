# Marketplace Architecture

A marketplace website exists to make a two-sided exchange work: buyers must trust sellers they have never heard of, and sellers must believe buyers will find them.

The operator sells nothing. They sell the conditions under which strangers transact safely — which makes trust infrastructure the product rather than a supporting concern.

---

# Classification

- **Kind:** primary
- **Distinct on:** Content entity graph (a two-sided vendor × listing graph), trust mechanism (vendor reputation rather than operator reputation), and retrieval model (faceted search across independent sellers).
- **Composes with:** `ecommerce`, `directory`
- **Modules:** search, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

**Why this is not Ecommerce.** Ecommerce assumes a single seller whose reputation is the site's reputation. A marketplace has many sellers of varying quality, and a buyer's central question shifts from *is this product right?* to *can I trust this seller?* That question has no equivalent in Ecommerce and it restructures the entity graph, the trust signals, and the conversion path.

---

# Primary Objective

Enable a buyer to find and confidently transact with a seller they did not previously know.

Two audiences must be served without either being an afterthought, and their needs conflict. Buyers want breadth, comparability, and protection. Sellers want visibility, control, and low friction. A marketplace that optimizes entirely for one loses the other, and the site stops working for both.

## Audience

- Buyers searching across sellers for a specific item or category
- Buyers browsing without a fixed target
- Prospective sellers evaluating whether to list
- Existing sellers managing their presence

---

# Content Model

The defining structural property is that **listings belong to vendors, and vendors are first-class entities with their own reputation**.

**Entities.** `Vendor` (slug, name, story, joined date, ratings, policies, location). `Listing` (slug, title, description, price, condition, media, vendor reference, category references). `Category` (slug, hierarchy, attribute schema). `Review` (subject, rating, body, date). `Policy` (marketplace-level and vendor-level).

**Relationships.** Every listing references exactly one vendor. Reviews reference either a listing or a vendor, and the distinction matters — a review of a product is not a review of the seller. Categories define which attributes their listings carry, which is what makes faceted search possible.

**Derivation.** Listing, vendor, and category routes, filter facets, the search index, metadata, sitemap, `Product`, `Offer`, and `Organization` structured data, breadcrumbs, and related listings all derive from this graph.

**Categories own their attribute schema.** A category that cannot declare which attributes its listings carry cannot support faceted search, and faceted search is this architecture's retrieval model. This is the modelling decision that most determines whether the marketplace works.

**Vendor-level and listing-level policies both exist.** Marketplace policy sets the floor; vendor policy may extend it. A buyer must be able to see which applies before committing.

Never fabricate reviews, ratings, or transaction counts, and never publish structured data describing them. See `.hubzero/seo/principles.md` — Structured Data Should Reflect Reality.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Information Hierarchy

The buyer journey is **search → compare → evaluate seller → transact**, and the third step is what distinguishes it.

## 1. Discovery

Search and category browse, with facets derived from the category's attribute schema. Breadth is the value proposition and should be evident immediately.

## 2. Comparison

Listings from different vendors compared on equal terms. The presentation must be neutral — a marketplace that visibly favours certain sellers without disclosing why undermines the impartiality that justifies its existence.

## 3. Seller evaluation

The step Ecommerce does not have. A buyer assesses the vendor: their history, ratings, policies, and responsiveness. This must be reachable from the listing without abandoning it.

## 4. Transaction

Commitment, with the buyer clear on who they are transacting with, what protection applies, and what happens if something goes wrong.

A parallel seller journey — proposition, terms, how listing works, how to begin — runs alongside and must be genuinely navigable rather than a single footer link.

---

# Essential Pages

- Home
- Category browse (index and nested)
- Search results
- Listing detail
- Vendor profile
- Sell or become a vendor
- Buyer protection and policies
- FAQ
- About
- Contact
- Privacy, Terms

Plus modules the blueprint carries. See `modules.md`.

The vendor profile is structurally required. A marketplace where sellers have no presence of their own is an Ecommerce site with a confusing product mix.

---

# Navigation

Navigation must serve buyers browsing, buyers searching, and prospective sellers — three intents with different needs.

Search is the primary path and should be prominent everywhere. Category browse is the secondary path and should stay shallow, with facets doing the narrowing that deep nesting would otherwise require.

**The seller path must be a first-class destination**, not a footer link. Supply is as hard to acquire as demand, and a marketplace that only addresses buyers will run out of things to sell.

From any listing, the vendor must be one step away, and from any vendor, their listings.

**Search, filter, and sort state belongs in the URL** without exception. Marketplace searches are shared, bookmarked, and revisited more than almost any other filtered view.

---

# Interaction Model

The essential interactions are searching, faceted filtering, comparing across vendors, and evaluating a seller.

**Faceted filtering** is the signature interaction and its quality determines whether the marketplace is usable at scale. Facets derive from the category's attribute schema, and each should show how many results it would yield — a filter that leads to nothing wastes the interaction.

**Cross-vendor comparison** must present listings on genuinely equal terms, with the vendor identified on each. A buyer comparing three listings is implicitly comparing three sellers.

**Seller evaluation** should be possible without leaving the listing — a summary of the vendor's standing inline, with the full profile one step away.

Where sorting is offered, its basis must be stated. "Recommended" without explanation is the mechanism by which marketplaces lose the impartiality they depend on.

---

# Trust Signals

Trust operates at two levels simultaneously, and both must be present.

**Marketplace-level — high priority**
- Buyer protection terms, plainly stated
- Dispute resolution process
- What the operator does and does not guarantee
- Vendor vetting standards, if any
- Transparent ranking and sorting basis

**Vendor-level — high priority**
- Trading history and length of presence
- Ratings and reviews, with volume visible alongside score
- Response expectations
- Vendor-specific return and delivery terms
- Identifiable business information

**Medium priority**
- Category expertise or specialization
- Fulfilment reliability
- Verification badges, where the criteria are stated

A rating with no volume behind it is not a signal. Five stars from two reviews and five stars from two hundred are different facts and must be presented differently.

---

# Conversion Model

The terminus is a completed transaction between a buyer and a vendor, with the operator facilitating.

The buyer's final hesitation is almost never about the item — it is about the seller. Resolve it by surfacing vendor standing at the point of decision rather than requiring a detour to find it.

**State clearly who the buyer is transacting with.** Ambiguity about whether the operator or the vendor is responsible is the most common source of marketplace disputes, and the most avoidable.

There is a secondary conversion: a prospective seller deciding to list. Its terminus is a first listing, and its friction is usually informational — what it costs, what is required, how payment works.

**Honest demonstration applies to both.** A blueprint has no payment processing, no seller accounts, and no messaging. State those boundaries where a visitor would transact or register, in the brand's voice. See `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

---

# Common States

Marketplaces are defined by variable inventory, which makes these states routine rather than exceptional. Each is authored content in the product's voice — see `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A search returning nothing.** The most frequently reached state; suggest relaxing the limiting facet rather than returning blank.
- **A category with no listings**, or with very few. Common in a growing marketplace and worth saying honestly.
- **A vendor with no listings**, or a new vendor with no reviews. "New seller" is more useful than an empty rating.
- **A facet that would return nothing** — better disabled with its zero count shown than offered and dead.
- **A listing that has sold or been withdrawn.** Present it with alternatives rather than a bare 404.
- **A listing whose vendor is inactive.**
- **A review-less listing on an established vendor.**
- **The honest transaction, account, and messaging boundaries**, each stated at the point a visitor would act.

---

# Common Mistakes

- Treating vendors as metadata on a listing rather than as entities with their own presence
- Presenting a rating without its volume
- Sorting by "recommended" without disclosing the basis
- Leaving the seller journey to a single footer link
- Deep category hierarchies where facets would serve better
- Offering facets that lead to zero results
- Ambiguity about whether the operator or vendor is responsible
- Fabricating reviews, ratings, or transaction volumes
- Holding search and filter state outside the URL
- Returning a bare 404 for a sold listing instead of offering alternatives

---

# Relationship to Other Architectures

**Ecommerce** is the nearest relative and the one most often mistaken for it. Ecommerce has one seller whose reputation is the site's; Marketplace has many, and vendor reputation becomes a primary content entity. A single-seller site with a wide product range is Ecommerce, however large.

**Directory** shares the faceted retrieval model and the third-party entity graph, but terminates in a referral rather than a transaction. A marketplace that does not handle the exchange is a directory.

**Community** shares the multi-participant structure, but its terminus is participation rather than commerce.

Marketplace composes with **Ecommerce** where the operator also sells directly, and with **Booking** where the resources traded are availability-constrained.

---

# Definition of Success

A buyer should be able to find what they need across many sellers, compare on equal terms, understand who they are dealing with, and transact without wondering what happens if it goes wrong.

A seller should understand what listing costs, what it requires, and why this marketplace is worth their inventory.

The operator's impartiality should be evident rather than asserted.
