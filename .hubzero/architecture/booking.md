# Booking Architecture

A booking website exists to convert intent into a confirmed commitment against constrained availability.

What distinguishes it from every other architecture is that **the thing being sold does not always exist**. A service can always be enquired about. A product can be back-ordered. A booking is a specific resource at a specific time, and if that combination is taken, no amount of persuasion helps — the visitor needs an alternative, immediately.

Every structural decision follows from that constraint.

---

# Classification

- **Kind:** primary
- **Distinct on:** Content entity graph (resource × time), journey terminus (an availability-constrained reservation), and retrieval model (an availability query rather than a browse).
- **Composes with:** `services`, `hospitality`, `travel`, `healthcare`, `events`
- **Modules:** locations, faq, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

**Why this exists as its own architecture.** Hospitality, Travel, Healthcare, and Automotive each independently re-derived an availability model in HubZero's released blueprints. Four unrelated architectures solving the same structural problem separately is the definition of a missing primary architecture — and none of their documents could own it, because the problem belongs to none of them.

In most blueprints Booking is **composed** beneath another primary architecture rather than used alone. A hotel is Hospitality composed with Booking. A clinic is Healthcare composed with Booking. Used alone, it suits a business whose entire proposition is scheduled access.

---

# Primary Objective

Move a visitor from intent to a confirmed reservation with the fewest possible opportunities to lose them.

The visitor's question is narrow and practical: *can I get what I want, when I want it, and what will it cost?* Every step that does not answer part of that question is friction.

Unlike an enquiry-led architecture, which builds confidence gradually before asking, Booking must surface availability early. A visitor who reads three pages of persuasion before discovering their dates are unavailable has been wasted, and they will not return.

## Audience

- Visitors with a specific date or window already in mind
- Visitors flexible on timing but fixed on the resource
- Visitors comparing options across providers
- Returning visitors who know exactly what they want

---

# Content Model

Booking's entity graph is the only one in the library where **time is a first-class dimension**.

**Entities.** `Resource` (slug, name, description, capacity, attributes, media) — the room, table, appointment slot, vehicle, or seat being reserved. `AvailabilityWindow` (resource reference, start, end, status). `Rate` (resource reference, period, price, conditions). `Policy` (cancellation, deposit, requirements). `Location`. `AddOn` (optional extras).

**Relationships.** Availability windows and rates both reference a resource and a period. Policies reference the resources and rates they govern. Add-ons reference the resources they apply to.

**Derivation.** Resource routes, availability surfaces, rate displays, metadata, sitemap, `Reservation` and `Offer` structured data, filter facets, and alternative suggestions all derive from these records.

Three modelling rules carry most of the architecture's correctness:

**Availability is authored, never computed from the clock.** A reference implementation whose availability silently decays is not a reference. Anchor the demonstration to an authored reference date so screenshots, documentation, and reviews remain stable. See `.hubzero/content/principles.md` — Temporal State Is Authored.

**Rates belong to a resource and a period together.** A rate stored on the resource alone cannot express seasonality, and a seasonal rate restated per page will disagree with itself.

**Policies are content, not footnotes.** Cancellation terms, deposits, and requirements should be records referenced by the resources they govern, so they appear wherever their resource does and cannot be omitted from one surface.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Information Hierarchy

The journey is **intent → availability → selection → confirmation**, and its distinguishing property is that availability appears early rather than at the end.

## 1. Intent

Establish what the visitor wants and when. Where flexibility exists, capture it — a visitor open to adjacent dates is a visitor whose first choice being unavailable is recoverable.

## 2. Availability

Show what is actually available for the stated intent. This is the architecture's pivotal moment: an honest, immediate answer, with alternatives presented alongside a negative rather than after it.

## 3. Selection

Present the specific resource in enough detail to commit — what it is, what it includes, what it costs in total, and what the terms are. Every cost must be visible here. A price that grows during confirmation is the most reliable way to lose a booking that was already won.

## 4. Confirmation

Collect what is genuinely required and nothing more, then state clearly what happens next.

Persuasive content — the property, the practitioner, the experience — supports this journey rather than preceding it. A visitor should be able to check availability from anywhere without leaving the page they are reading.

---

# Essential Pages

- Home
- Resource index — rooms, services, slots, or vehicles
- Resource detail
- Availability or search results
- Reservation flow
- Policies — cancellation, deposits, requirements
- FAQ
- Contact
- Privacy, Terms

Plus modules the blueprint carries — Locations is almost always present. See `modules.md`.

Where Booking is composed beneath another architecture, that architecture owns the exploratory pages and Booking owns the availability, selection, and confirmation surfaces.

---

# Navigation

Availability must be reachable from **every page**, without abandoning the current one.

This is the architecture's defining navigation requirement. A visitor reading about a room, a practitioner, or an experience is a visitor forming intent, and requiring them to navigate away to act on it loses a proportion of them at every step.

The resource index is the browse path; the availability query is the direct path. Both must be first-class.

**Date, duration, and occupancy selections belong in the URL.** These views are shared constantly — with a partner, a colleague, a family member — and they must survive refresh and back-navigation. Holding them in component state breaks all three at once.

Policies must be reachable before the confirmation step, not only within it.

---

# Interaction Model

Booking is interaction-dense, and every interaction is a place a reservation can be lost.

**The availability query** is the architecture's signature interaction. It must respond quickly, state its result unambiguously, and never leave a visitor uncertain whether something is available or merely not yet loaded.

**Date selection** must be forgiving. Accept a range of input forms, make the selected period unmistakable, and handle a start-without-end gracefully.

**Progressive disclosure of cost.** Show the total, including known fees, as early as it can be known. Where a cost genuinely cannot be determined until later, say so rather than showing a partial total that will change.

**Alternative suggestion** is the interaction most often skipped. When the requested combination is unavailable, offering adjacent dates, a comparable resource, or a nearby location converts a dead end into a booking.

Selection state is client-held and must be initialized from the same state the server rendered, reconciled after mount, with the interface able to distinguish "nothing selected" from "not yet known." See `.hubzero/rendering.md`.

---

# Trust Signals

A booking asks a visitor to commit to a specific time, which raises the stakes above an enquiry and often above a purchase.

**High priority**
- Total cost stated before commitment, with no later additions
- Cancellation and change terms, plainly written and easy to find
- Accurate, current availability
- Genuine photography of the actual resource
- A clear statement of what happens after booking

**Medium priority**
- Reviews, where genuine
- Location detail and access information
- Capacity and suitability information
- Contactable support

Availability accuracy is itself the primary trust signal. A visitor who books and is later told the slot was not available has experienced the worst failure this architecture can produce.

---

# Conversion Model

The terminus is a confirmed reservation.

The conversion is unusually fragile because it is time-bound and often comparison-shopped. Three disciplines matter more than persuasion:

**Surface availability early.** Late discovery of unavailability is the largest avoidable loss.
**State total cost early.** Cost that grows during the flow is the second largest.
**Never present a dead end.** An unavailable request always has an alternative worth offering.

**Honest demonstration is unavoidable here.** A blueprint cannot hold a reservation, take a deposit, or send a confirmation. The boundary must be stated **within the reservation flow**, at the point a visitor would commit — not only in a README. A confirmation screen for a booking that does not exist is among the most damaging simulations a blueprint can present, because the visitor's mental model is now that they have somewhere to be.

Prefer a flow that genuinely completes within the blueprint's limits — a request that opens a real message, with the terms stated — over a simulated confirmation.

---

# Common States

Availability-constrained architectures have more meaningful empty states than any other, and they are the architecture rather than edge cases. Each is authored content in the product's voice — see `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **No availability for the requested period.** The defining state of this architecture. It must offer alternatives — adjacent dates, comparable resources, another location — rather than returning a bare negative.
- **Partial availability** across a requested range.
- **A resource available but not bookable** — below minimum stay, outside notice period, exceeding capacity. Each needs its own explanation; a generic "unavailable" leaves the visitor unable to adjust.
- **A period outside the booking window** — too far ahead, or in the past.
- **Availability that changes during the session.** State it plainly rather than failing at confirmation.
- **A resource with incomplete photography.**
- **Filters returning nothing**, with the limiting constraint named.
- **The honest reservation boundary**, stated within the flow at the point of commitment.

---

# Common Mistakes

- Requiring a visitor to navigate away from exploratory content to check availability
- Revealing unavailability only at the final step
- Showing a partial price that increases during confirmation
- Returning a bare negative with no alternative
- Deriving availability from the current clock, so the demonstration decays
- Holding date and occupancy state outside the URL, breaking sharing and back-navigation
- Presenting a generic "unavailable" where the real reason is a minimum stay or notice period
- Collecting information at confirmation that was not needed
- Burying cancellation terms until after commitment
- Simulating a confirmation for a reservation the blueprint cannot make

---

# Relationship to Other Architectures

Booking is most often **composed beneath another primary architecture** rather than used alone:

- **Hospitality** + Booking — rooms and suites against dates
- **Travel** + Booking — departures and itineraries
- **Healthcare** + Booking — appointments against practitioner availability
- **Events** + Booking — registration against capacity
- **Services** + Booking — consultations and scheduled work
- **Automotive** + Booking — test drives and service appointments

In each case the parent architecture owns the persuasion, the content, and the navigation spine; Booking owns availability, selection, and confirmation.

**Ecommerce** is the nearest non-composed relative — both terminate in a transaction — but Ecommerce sells inventory that can be replenished, back-ordered, or shipped later. Booking sells a moment, and moments do not queue.

**Marketplace** shares the two-sided problem where multiple providers offer bookable resources; that composition is a marketplace of availability rather than a booking site.

---

# Definition of Success

A visitor should be able to discover whether they can have what they want, at the time they want it, within moments of arriving — and should never encounter a cost, a condition, or an unavailability they were not told about earlier.

Where the answer is no, they should leave with an alternative worth considering rather than with nothing.

Where the answer is yes, they should know exactly what happens next.
