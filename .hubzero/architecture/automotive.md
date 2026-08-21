# Automotive Architecture

Automotive websites exist to help customers discover vehicles, services, or dealerships while building confidence before making an enquiry, booking a service, or purchasing a vehicle.

Visitors often compare multiple options before taking action.

The website should simplify comparison, communicate trust, and reduce uncertainty throughout the decision-making process.

---

# Classification

- **Kind:** profile
- **Parent:** `services` — read that document first; this one specializes it.
- **Distinct on:** Trust mechanism — buyers demand provenance, specification, and dealer credibility before a high-value considered purchase.
- **Composes with:** `ecommerce`, `booking`
- **Modules:** locations, editorial, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Showcase vehicles or services
- Generate qualified enquiries
- Increase service bookings
- Build dealership credibility
- Support long-term customer relationships

---

## Audience

- Vehicle buyers
- Existing owners
- Fleet customers
- Service customers
- Businesses

---

# Essential Pages

- Home
- Inventory
- Vehicle Detail
- Services
- Financing
- About
- Offers
- Contact

---

# Information Hierarchy

Vehicles or services should remain the primary navigation focus.

Visitors should easily move from browsing inventory to comparing options and requesting additional information.

---

# Content Model

Automotive content is a specification graph. Every claim a buyer weighs must resolve to one canonical numeric record.

**Entities.** `Vehicle` (slug, model, variants, specifications, pricing, media). `Variant` (trim, options, price delta). `Specification` (label, value, unit). `Offer` (finance or lease terms, validity). `Location` (dealership or experience centre). `Article` (editorial).

**Relationships.** Variants belong to a vehicle; specifications belong to a variant; offers reference variants; locations reference the vehicles they stock. Comparison views derive from the specification records themselves rather than from a separate comparison table.

**Derivation.** Vehicle and variant routes, metadata, sitemap, `Vehicle` and `Offer` structured data, comparison sets, filter facets, and related-model suggestions all derive from these records.

Every metric — range, capacity, performance, price — has exactly one canonical numeric representation, formatted at the point of display. A figure restated in a second place will eventually disagree with the first, and a buyer who notices has lost confidence in all of them.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is model-led. A visitor arrives thinking about a vehicle, not about a department.

Surface the model range as the primary path, with ownership concerns — service, financing, charging — as a clearly separated secondary group. Locations and contact must be reachable from every page.

Comparison is a persistent affordance rather than a page: a visitor building a comparison should be able to continue browsing without losing it, and should be able to share the result. Hold comparison selections in the URL so the state survives refresh and back-navigation.

---

# Interaction Model

- Vehicle inventory
- Search and filtering
- Vehicle comparison
- Image galleries
- Finance calculator
- Service booking
- Dealer locations
- Contact forms

---

# Trust Signals

- Verified inventory
- Transparent pricing
- Warranty information
- Customer reviews
- Manufacturer certifications
- Awards
- Professional photography

Trust should come from accurate information rather than promotional claims.

---

# Conversion Model

Encourage visitors to:

- Book a test drive
- Request a quotation
- Contact the dealership
- Schedule vehicle servicing
- Apply for financing

Reduce friction between research and enquiry.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A model with no available stock or offers.** State it plainly with a route to be notified or to contact a dealer, rather than showing an empty offers panel.
- **A comparison with one vehicle selected.** The comparison view must be useful before it is complete.
- **A comparison at its maximum.** Adding beyond the limit needs explicit feedback or deterministic replacement behaviour, never a silent no-op.
- **A specification a variant does not have.** Distinguish "not applicable" from "not stated" — a blank cell means neither.
- **Filters returning no vehicles.** Say which constraint is the limiting one.
- **A location with no stock of the model being viewed.**

---

# Common Mistakes

- Outdated inventory
- Missing specifications
- Poor search functionality
- Hidden pricing
- Weak comparison tools
- Slow image galleries

---

# Definition of Success

- Vehicle enquiries
- Test drive bookings
- Service appointments
- Finance applications
- Inventory engagement

---

# Relationship to Other Architectures

Automotive combines elements of Services and Ecommerce while emphasizing comparison, trust, and long-term customer relationships rather than immediate online purchases.