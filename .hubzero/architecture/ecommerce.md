# Ecommerce Website Architecture

An ecommerce website exists to help customers confidently purchase products.

Every decision should reduce uncertainty, simplify discovery, and increase confidence throughout the buying journey.

Visitors should quickly understand:

* What products are available.
* Why they should trust the brand.
* Why a product is worth purchasing.
* How to complete their purchase.

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (products, variants, collections), terminus (purchase), retrieval model (faceted browse and search), and trust mechanism (reviews, returns, delivery certainty).
- **Composes with:** `marketplace`, `blog`
- **Modules:** search, faq, locations, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

Transform product discovery into confident purchasing.

The buying experience should feel effortless.

# Content Model

**Entities.** `Product` (slug, description, specifications, media, collection references). `Variant` (options, price, availability). `Collection` (slug, description, product references). `Review` where genuine. `Location` (stores). `Question` (FAQ). `Policy` (shipping, returns).

**Relationships.** Variants belong to products; products reference collections; collections may nest. Related products derive from shared collections and attributes rather than from a hand-maintained list.

**Derivation.** Product and collection routes, filter facets, the search index, metadata, sitemap, `Product` and `Offer` structured data, breadcrumbs, and related products all derive from these records.

Price and availability live on the variant, not the product. A product-level price that ignores variant differences will contradict the cart, and the contradiction appears at the least forgivable moment.

Media belongs to the record with its ratio, focal point, and alternative text — product photography is content. See `.hubzero/content/principles.md`.

---

# Information Hierarchy

An ecommerce website should progressively communicate:

1. Brand introduction
2. Product discovery
3. Categories and filtering
4. Individual product information
5. Product trust signals
6. Shopping cart
7. Checkout
8. Order confirmation
9. Customer support

## Product Pages

Every product page should answer:

* What is it?
* Why should I buy it?
* Why should I buy it here?
* What should I expect after purchasing?

Images, descriptions, specifications, pricing, reviews, and shipping information should work together to remove hesitation.

## Checkout Models

HubZero currently supports two primary ecommerce checkout models.

## Conversational Checkout

Designed for businesses that complete sales through direct communication.

Examples include:

- WhatsApp
- Phone
- Instagram DM
- Manual quotation

The website should focus on helping customers discover products and gather enough confidence before initiating a conversation.

Product pages should prioritize:

- Product imagery
- Specifications
- Availability
- Enquiry actions
- WhatsApp CTAs

Checkout becomes the beginning of a conversation rather than the completion of a transaction.

---

## Direct Checkout

Designed for businesses selling products through online payments.

Examples include:

- Stripe
- Razorpay
- PayPal
- Cash on Delivery

The website should optimize for completing purchases with minimal friction.

Customers should be able to browse, compare, purchase, and track orders without leaving the platform.

Trust, pricing transparency, shipping information, and checkout usability become critical.

# Design Direction

Ecommerce websites should communicate:

* Trust
* Quality
* Clarity
* Efficiency

Products should remain the primary visual focus.

The interface exists to support purchasing rather than compete for attention.

# User Experience

Customers should never struggle to:

* find products,
* compare options,
* understand pricing,
* complete checkout,
* or manage their orders.

Every unnecessary interaction increases purchase friction.

# Essential Pages

- Home
- Collections (index and detail)
- Product detail
- Search
- Cart
- Checkout
- About
- Shipping and returns
- FAQ
- Contact
- Privacy, Terms

Plus modules the blueprint carries — Locations for physical stores, Editorial. See `modules.md`.

Cart and checkout are required even where no payment processing exists. Their honest limitations are stated in the flow rather than by omitting the flow.

---

# Navigation

Navigation is collection-led with search as a peer path, because visitors arrive both browsing and looking for something specific.

Collections form the browse hierarchy and should be shallow enough that a product is reachable in two or three steps. Faceted filters do the narrowing that a deep hierarchy would otherwise require.

Cart state must be visible and reachable from every page, and must survive navigation.

**Filter, sort, and search state belongs in the URL.** Product searches are shared and returned to constantly, and URL state also keeps the server and client in agreement about what is displayed.

---

# Interaction Model

Ecommerce is the most interaction-heavy architecture in the library, and every interaction is a place trust can be lost.

The essential interactions: filtering and sorting a collection, selecting variants, adding to cart, adjusting quantities, and progressing through checkout.

Variant selection must be unambiguous — a visitor should always know which combination they have chosen and whether it is available. Where a combination is unavailable, say so at selection rather than at checkout.

Cart and wishlist state is client-persisted, which makes it the architecture's principal rendering hazard. Initialize from the same empty state the server rendered and reconcile after mount, exposing whether reconciliation has happened so the interface can distinguish "empty" from "not yet known." See `.hubzero/rendering.md`.

---

# Trust Signals

Purchase requires more trust than enquiry, and the signals are largely practical rather than reputational.

**High priority**
- Clear, complete pricing with no surprises at checkout
- Delivery expectations stated before the cart
- A returns policy that is easy to find and plainly written
- Genuine product photography showing the actual item
- Specifications complete enough to decide with

**Medium priority**
- Reviews, where genuine
- Provenance and production story
- Stock visibility
- Contactable support

Never fabricate reviews or ratings, and never publish structured data describing them. See `.hubzero/seo/principles.md` — Structured Data Should Reflect Reality.

---

# Conversion Model

The terminus is a completed purchase.

The journey is browse → product → cart → checkout, and each step should reduce friction rather than add persuasion. A visitor who has reached checkout has already decided; the only remaining job is not to lose them.

State delivery cost and timing before the cart. Unexpected cost at checkout is the single largest cause of abandonment and the most avoidable.

**Honest demonstration is unavoidable here.** A blueprint has no payment processing. Disclose that within the checkout flow itself, in the brand's voice, rather than presenting a payment step that cannot complete or a fake confirmation. See `.hubzero/principles.md`.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A collection with no products**, or with one.
- **Filters returning nothing.** The most frequently reached state in this architecture; name the limiting constraint.
- **An out-of-stock product or variant.** Present it with a genuine next step rather than hiding the product.
- **An empty cart.** Reached constantly and often left as a bare message; it should route the visitor back into browsing.
- **An empty wishlist**, and the distinction between empty and not-yet-loaded.
- **A search returning nothing.**
- **A product with incomplete media or specifications.**
- **The honest checkout boundary.**

---

# Common Mistakes

- Product-level pricing that ignores variant differences and contradicts the cart
- Revealing delivery cost or timing only at checkout — the largest avoidable cause of abandonment
- Variant combinations that appear selectable and turn out to be unavailable at checkout
- Rendering "empty cart" and "cart not yet loaded" identically, so saved items appear to vanish and return
- Deep collection hierarchies where facets would serve better
- Product photography that does not show the actual item being sold
- Specifications too thin for a buyer to decide without contacting support
- Fabricated reviews or ratings, in the page or in structured data
- An empty cart or a zero-result filter left as a bare message with no route back into browsing
- A checkout that simulates payment or renders a fake confirmation

---

# Relationship to Other Architectures

**Marketplace** shares the browse-and-purchase structure but adds a second entity — the vendor — and a trust mechanism based on vendor reputation. Ecommerce assumes a single seller.

**Directory** shares faceted retrieval but terminates in a referral rather than a transaction.

**Corporate** and **Services** terminate in enquiry rather than purchase, which changes the entire journey.

Ecommerce composes naturally with **Blog** for editorial commerce and with the Locations module for physical retail.

---

# Definition of Success

Visitors should feel informed, confident, and comfortable completing a purchase while trusting both the product and the business behind it.
