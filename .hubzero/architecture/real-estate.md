# Real Estate Architecture

Real estate websites help people discover, evaluate, and enquire about properties.

Their primary purpose is to simplify the property search process while building confidence in the agency, developer, or individual agent.

Properties should always be the central focus of the experience.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (listings, neighbourhoods, advisors) and retrieval model (faceted property search).
- **Composes with:** `directory`, `booking`
- **Modules:** search, editorial, locations, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Showcase available properties
- Generate qualified enquiries
- Build trust in the agency or developer
- Simplify property discovery
- Encourage appointments and viewings

---

## Audience

- Home buyers
- Sellers
- Investors
- Renters
- Property owners

---

# Essential Pages

- Home
- Properties
- Property Detail
- Buy
- Rent
- About
- Agents
- Resources
- Contact

---

# Information Hierarchy

Properties should be the primary navigation destination.

Visitors should be able to move naturally from discovery, to evaluation, to enquiry.

Filtering and searching should require minimal effort.

---

# Content Model

Real-estate content is a graph of listings, places, and people, and it depends on referential integrity more than most.

**Entities.** `Listing` (slug, type, status, price, specifications, neighbourhood, advisor, media). `Neighbourhood` (slug, description, listing references). `Advisor` (person, listing references, contact). `Article` (journal).

**Relationships.** Listings reference a neighbourhood and an advisor; neighbourhoods and advisors derive their listing sets from those references rather than maintaining their own.

**Derivation.** Listing, neighbourhood, and advisor routes, filter facets, metadata, sitemap, `RealEstateListing` and `Place` structured data, internal links, and related listings all derive from the graph.

Validate slug references — a listing pointing at a neighbourhood that no longer exists should fail at build rather than render a broken page. Plain slug relationships are maintainable only when they are checked.

Listing status is an authored field. Price, area, and measurement formatting follow one convention throughout.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is search-led, because a visitor arrives with criteria rather than with a section in mind.

Listing discovery with faceted filters is the primary path. Neighbourhoods and advisors are secondary paths that should also lead back into listings — a visitor exploring a neighbourhood is still shopping.

Filter state belongs in the URL without exception. Property searches are shared, bookmarked, and returned to more than almost any other filtered view on the web.

From a listing, the advisor and the neighbourhood must both be one step away.

---

# Interaction Model

- Property search
- Advanced filtering
- Property galleries
- Interactive maps
- Agent profiles
- Appointment requests
- Mortgage resources
- Saved properties (optional)

---

# Trust Signals

- Verified listings
- Professional photography
- Market knowledge
- Agent profiles
- Client testimonials
- Awards
- Local expertise

Trust should come from transparency and accurate property information.

---

# Conversion Model

Encourage visitors to:

- Request a viewing
- Contact an agent
- Schedule a consultation
- Save properties
- Register for updates

Conversion should occur naturally after helping visitors understand the property.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A filtered search returning no listings.** The most frequently reached state in this architecture. Suggest relaxing the limiting constraint rather than returning a blank result.
- **A neighbourhood with no current listings.** Common and legitimate; the neighbourhood content still has value.
- **An advisor with no current listings.**
- **A listing that is under offer or sold.** An authored status, presented rather than hidden.
- **A listing with incomplete media.**
- **The honest enquiry and viewing boundary.** A blueprint cannot arrange a viewing; say what actually happens.

---

# Common Mistakes

- Poor property photography
- Weak search functionality
- Missing pricing information
- Incomplete listings
- Difficult enquiry process
- Outdated listings

---

# Definition of Success

- Property enquiries
- Viewing requests
- Search engagement
- Returning visitors
- Lead quality

---

# Relationship to Other Architectures

Real Estate shares similarities with Ecommerce by presenting searchable listings, but the purchase journey is significantly longer and relationship-driven.

Trust, information quality, and property discovery take priority over transactional checkout.