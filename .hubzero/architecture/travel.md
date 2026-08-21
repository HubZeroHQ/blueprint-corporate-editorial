# Travel Architecture

Travel websites help visitors discover destinations, experiences, accommodations, or transportation while building confidence before booking or planning a trip.

Their primary purpose is to inspire exploration, provide accurate information, and reduce uncertainty throughout the planning process.

Trust, clarity, and information quality should always outweigh visual spectacle.

---

# Classification

- **Kind:** profile
- **Parent:** `services` — read that document first; this one specializes it.
- **Distinct on:** Retrieval model — destination and date-driven discovery rather than service-list browsing.
- **Composes with:** `booking`, `events`
- **Modules:** editorial, locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Inspire travel
- Provide destination information
- Simplify trip planning
- Increase bookings or enquiries
- Build trust

---

## Audience

- Tourists
- Families
- Business travelers
- Adventure travelers
- International visitors

---

# Essential Pages

- Home
- Destinations
- Experiences
- Tours
- Packages
- Gallery
- About
- FAQs
- Contact
- Booking

---

# Information Hierarchy

Visitors should be able to discover destinations naturally through categories, locations, interests, or travel styles.

Important planning information should always be available before booking.

---

# Content Model

Travel content is destination-led and itinerary-shaped, which makes it a graph rather than a catalogue.

**Entities.** `Destination` (slug, region, description, media, best-time guidance). `Journey` or itinerary (slug, destinations, duration, pacing, inclusions). `Experience` (activities at a destination). `Article` (journal). `Location`.

**Relationships.** Journeys reference an ordered sequence of destinations; experiences reference destinations; articles reference destinations and journeys.

**Derivation.** Destination and journey routes, metadata, sitemap, `TouristDestination` and `Trip` structured data, related journeys, and filter facets all derive from these records.

A journey's ordered destination sequence is the architecture's distinguishing structure. It must be a declared ordering on the record, so route generation, the itinerary display, maps, and structured data all read the same sequence.

Seasonality and departure dates are authored temporal state. A reference implementation whose "next departure" silently passes has decayed.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is destination-led, with journeys as the parallel path.

A visitor either knows where they want to go or knows what kind of trip they want, and the navigation must serve both entry points equally. Destinations and journeys should each be reachable directly and should cross-link.

Planning resources — when to go, how to prepare, practical guidance — form a supporting group that should be reachable from any destination or journey.

Where filtering by region, duration, or season is offered, hold it in the URL. Trip research happens across sessions and devices.

---

# Interaction Model

- Destination guides
- Search and filtering
- Booking integration
- Maps
- Itineraries
- Photo galleries
- Reviews
- Contact methods

---

# Trust Signals

- Verified reviews
- Professional photography
- Local expertise
- Certifications
- Safety information
- Awards
- Partnerships

Trust should come from accurate information rather than exaggerated marketing.

---

# Conversion Model

Encourage visitors to:

- Book experiences
- Request quotations
- Contact travel advisors
- Explore destinations
- Save itineraries

Planning should naturally progress toward booking.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A destination with no journeys currently offered.**
- **Filters returning no journeys.** Reached often when duration and season are combined.
- **A journey outside its season.** Authored state, presented with the next available window.
- **A destination with incomplete photography** — particularly damaging in this architecture, where imagery carries the persuasion.
- **A journey with no upcoming departures.**
- **The honest booking boundary.** State it where a visitor would reserve, not only in the README.

---

# Common Mistakes

- Poor destination organization
- Outdated information
- Hidden pricing
- Weak booking experience
- Missing maps
- Slow image-heavy pages

---

# Definition of Success

- Booking requests
- Destination page engagement
- Returning visitors
- Average session duration
- Lead quality

---

# Relationship to Other Architectures

Travel websites combine elements of Hospitality and Marketing while placing greater emphasis on destination discovery, planning, and confidence before commitment.