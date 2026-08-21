# Hospitality Architecture

Hospitality websites help visitors evaluate experiences before making reservations.

Whether representing a hotel, resort, restaurant, café, or venue, the website should create confidence through clear information, compelling presentation, and a frictionless booking journey.

The experience begins long before the visitor arrives.

---

# Classification

- **Kind:** profile
- **Parent:** `services` — read that document first; this one specializes it.
- **Distinct on:** Retrieval model — availability and date-bound selection rather than open browsing.
- **Composes with:** `booking`, `events`
- **Modules:** locations, editorial, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Showcase experiences
- Increase bookings
- Build trust
- Answer common questions
- Encourage direct reservations

---

## Audience

- Guests
- Travelers
- Families
- Event organizers
- Tourists
- Returning customers

---

# Essential Pages

- Home
- Accommodation or Menu
- Experiences
- Gallery
- About
- Events
- Reservations
- Contact

---

# Information Hierarchy

Visitors should quickly understand:

- What is offered
- Why it is unique
- Availability
- Pricing
- How to book

Booking should always remain easy to access throughout the site.

---

# Content Model

Hospitality content must support factual specification and editorial narrative simultaneously — a room has a size and a story.

**Entities.** `Property` (slug, location, description, media). `Room` or `Suite` (slug, specifications, capacity, rates, media). `Experience` (activities, dining, wellness). `Location`. `Article` (journal).

**Relationships.** Rooms belong to properties; experiences reference properties and locations; rates reference rooms and seasons.

**Derivation.** Property and room routes, metadata, sitemap, `Hotel` and `LodgingBusiness` structured data, related experiences, and availability surfaces all derive from these records.

Every record needs both a prose field and a structured specification list. A system that supports only one forces the other into the wrong shape — narrative crammed into bullet points, or specifications buried in paragraphs.

Rates and currency use one convention throughout. Structured data describes only what the site can substantiate, never every marketing claim on the page.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation balances aspiration with the practical business of booking.

Property, accommodation, dining, and experiences form the exploratory path; availability and reservation must be persistently reachable without interrupting it. A visitor deep in an experience page should be able to check dates without losing their place.

Where multiple properties exist, the property is the organizing level and everything else nests beneath it.

Date and occupancy selections are shareable state and belong in the URL.

---

# Interaction Model

- Reservation system
- Availability
- Menus or room listings
- Photo galleries
- Events
- Maps
- Contact information
- Reviews

---

# Trust Signals

- Guest reviews
- Awards
- Professional photography
- Amenities
- Location
- Partnerships
- Certifications

Trust should come from accurately representing the experience rather than exaggerating it.

---

# Conversion Model

Encourage visitors to:

- Reserve
- Book a table
- Check availability
- Contact the business
- Explore amenities

Reduce friction throughout the booking process.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **No availability for the selected dates.** The defining empty state of this architecture. Offer nearby dates or alternative accommodation rather than a bare negative.
- **A property or room with incomplete photography.** Designed before it occurs, per the language's Photography treatment.
- **An experience that is seasonal and currently unavailable.**
- **A property with no upcoming events or offers.**
- **The honest reservation boundary.** A blueprint cannot hold a booking; state that where a visitor would confirm one.

---

# Common Mistakes

- Poor photography
- Hidden pricing
- Difficult reservations
- Outdated menus or room information
- Missing location details
- Slow mobile experience

---

# Definition of Success

- Reservations
- Booking completion
- Contact enquiries
- Returning visitors
- Time spent exploring offerings

---

# Relationship to Other Architectures

Hospitality combines elements of Corporate and Ecommerce architectures while emphasizing experience, trust, and reservations rather than direct product sales.

Visual storytelling supports decision-making but should never replace clear information.