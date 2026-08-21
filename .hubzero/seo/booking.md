# Booking SEO

Booking websites are found by visitors who already know roughly what they want and need to know whether they can have it.

Search intent here is unusually close to the transaction, and it is frequently constrained by date and place. The pages that rank are the ones that answer an availability question, not the ones that describe a business.

The defining tension: availability is dynamic and search engines index static pages. Optimize the durable surfaces — the resource, the location, the offering — and let availability be answered on arrival.

---

# Search Intent

Visitors typically search to:

- Find a specific resource by name
- Find availability for a place and a date
- Compare options within an area or category
- Verify price, terms, and cancellation policy before committing
- Return to something already found

Intent is **high-commercial and time-bound**. A visitor searching for a date-constrained service is close to acting, which makes precision more valuable than reach.

---

# Primary Keyword Categories

- Resource and property names
- Category plus location ("consultation in {place}", "{resource type} {place}")
- Date and seasonal qualifiers
- Attribute qualifiers — capacity, duration, accessibility, specialization
- Policy terms — cancellation, deposit, requirements
- "Near me" and proximity phrasing

Prioritize **category plus location** over generic category terms. Booking demand is nearly always geographically bounded, and an ungrounded category page competes with the entire market for traffic it cannot convert.

---

# Essential Landing Pages

Required

- Home
- Resource index
- Resource detail — one indexable page per resource
- Location pages, where the business operates in more than one place
- Policies — cancellation, deposits, requirements
- Contact

Recommended

- Category or resource-type pages
- FAQ
- Editorial content supporting the decision

**Availability result pages should not be indexed.** They are parameterized, ephemeral, and near-duplicate. Canonicalize them to the resource or index page they filter, and let the durable pages carry the ranking.

---

# Information Architecture

Structure follows the visitor's constraint, which is almost always place first, then resource:

```text
Location
   ↓
Resource type
   ↓
Resource detail
   ↓
Availability (not indexed)
```

Each level should be a genuine page with substantive content rather than a routing step. A location page that lists resources and nothing else has no reason to rank.

Resource detail pages are the primary ranking assets and deserve the most content depth.

---

# Internal Linking Strategy

Connect:

- Locations to the resources available at them
- Resources to their policies and to comparable alternatives
- Editorial content to the resources it discusses
- Every page back to the availability entry point

Cross-link comparable resources explicitly. A visitor whose first choice is unavailable is the most common visitor this architecture has, and internal links are what keep them on the site.

---

# Structured Data

Required

- Organization
- WebSite
- BreadcrumbList
- LocalBusiness or the appropriate subtype, per location

Recommended

- Offer — for genuine, currently-valid rates
- Product or Service — per resource where applicable
- FAQPage

Publish availability and pricing in structured data **only where the values are accurate and current**. Stale or aspirational availability markup is worse than none — it produces search results that contradict the page. See `principles.md` — Structured Data Should Reflect Reality.

Where a blueprint's availability is authored demonstration data, do not mark it up as live availability.

---

# Content Strategy

Write for the decision, not for the category.

- Describe each resource specifically enough to choose between it and its siblings
- State policies plainly; cancellation terms are searched for directly
- Answer the practical questions — access, timing, what is included, what is not
- Where seasonality matters, address it as content rather than leaving it implicit

Editorial content supporting the decision — how to choose, what to expect, local context — earns links and rankings that resource pages cannot.

---

# Local SEO

**Essential.** Booking demand is geographically bounded more consistently than any other architecture in the library.

Every location needs a genuine page with its own address, hours, access information, and the resources available there. Name, address, and phone formatting must be identical everywhere they appear — inconsistency across the site is a direct local-ranking signal.

Where the business serves an area rather than operating from a premises, state the service area explicitly.

---

# Trust Signals

High Priority

- Total cost stated, including fees
- Cancellation and change terms
- Accurate availability
- Genuine photography of the actual resource
- Complete, current location and contact information

Medium Priority

- Reviews, where genuine
- Capacity and suitability detail
- Accessibility information

Never publish fabricated reviews or ratings in structured data.

---

# Technical Considerations

- Do not index parameterized availability or search-result URLs
- Canonicalize date-filtered variants to the underlying resource
- Fast first paint — booking traffic skews mobile and impatient
- Resource pages must render their substantive content without scripting
- Genuine, unique metadata per resource; templated titles across near-identical resources produce duplicate-content signals
- Structured availability must degrade honestly when it is not live

---

# Common Mistakes

- Indexing ephemeral availability result pages
- Generic category pages with no geographic grounding
- Resource pages thin enough to be interchangeable
- Availability markup that does not match the page
- Burying cancellation policy, which is searched for directly
- Requiring scripting to see what a resource actually is
- Inconsistent name, address, and phone formatting across pages

---

# Success Metrics

- Availability queries initiated
- Completed reservations from organic entry
- Resource page entrances
- Location page performance
- Branded search volume
- Policy page traffic — a leading indicator of purchase intent
