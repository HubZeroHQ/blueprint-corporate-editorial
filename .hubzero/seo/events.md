# Events SEO

Events SEO is governed by a constraint no other architecture has: **the primary content expires.**

An event page accumulates authority as the date approaches, peaks, and then describes something that has already happened. Handled carelessly, that authority is destroyed at exactly the moment it is most valuable — when the next edition is announced.

The strategy is therefore about **continuity across editions** as much as about ranking any single one.

---

# Search Intent

Visitors typically search to:

- Find events of a type in a place or period
- Find a specific named event
- Find details for an event already known — dates, venue, programme
- Evaluate whether an event is worth attending
- Research a past edition to judge a future one

Intent is sharply **time-bound and recurring**. The same query returns each year, which makes the durable event identity more valuable than any single edition's page.

---

# Primary Keyword Categories

- Event names, including abbreviations and year variants
- Category plus location ("{topic} conference {city}")
- Category plus period ("{topic} events {month}")
- Speaker names
- Topic and track terms
- "Near me" and proximity phrasing

Branded event-name queries are the highest-volume and highest-intent terms, and they persist year over year. Protecting the URL that serves them across editions is the single most consequential decision in this architecture.

---

# Essential Landing Pages

Required

- Home — the durable event identity
- Programme or agenda
- Session detail, where sessions are substantial
- Speaker pages
- Venue and travel
- Tickets and registration
- Past editions

Recommended

- Topic or track pages
- Editorial content around the event's subject
- FAQ

**Speaker and session pages are frequently the highest-ranking assets**, because they target specific names and topics that the event page cannot. They also outlive the edition.

---

# Information Architecture

```text
Event identity (durable URL)
   ↓
Current edition
   ↓
Programme → Session → Speaker
   ↓
Past editions (retained)
```

**Keep a durable URL for the event itself**, distinct from any edition. Branded queries should land there permanently, with the current edition surfaced from it.

Do not rebuild the site at a new URL each year. That discards accumulated authority annually and is the most common and most expensive error in this architecture.

---

# Internal Linking Strategy

Connect:

- The durable event page to the current edition
- Sessions to speakers and tracks, in both directions
- Past editions to the current one — this is what recovers value from expired content
- Topic content to the sessions covering it

**Past-edition pages should link forward.** They retain traffic long after the event, and that traffic is exactly the audience for the next one.

---

# Structured Data

Required

- Organization
- WebSite
- BreadcrumbList
- Event — for the edition and, where substantial, for sessions

Recommended

- Person, for speakers
- Place, for the venue
- Offer, for ticket types

Event markup is highly visible in search results and correspondingly damaging when wrong. **Dates must carry an explicit timezone.** A fixed UTC offset does not survive daylight-saving transitions and will misstate the time.

Update `eventStatus` honestly for postponed, rescheduled, or cancelled events — this is one of the few places structured data has a direct duty of accuracy to the public.

Do not publish attendance figures or ratings that are not genuine.

---

# Content Strategy

The programme is the primary content asset and must be **on the page**, not in a downloadable document. A PDF agenda is invisible to search and unlinkable.

- Session abstracts should be substantive enough to rank on their topic
- Speaker pages should carry genuine biography and affiliation
- Venue and travel content serves a real and searched need
- Topic content extends reach beyond people who already know the event

**Past editions are content, not archive.** Retain the programme, the speakers, and the outcomes. This is what convinces someone to attend the next one, and it continues to rank on speaker and topic queries indefinitely.

---

# Local SEO

**Important for physical events.** Location is part of nearly every discovery query for an in-person gathering.

The venue needs genuine content — address, access, transport, accessibility — with consistent formatting. Location should be explicit in metadata, structured data, and page content.

Less relevant for online events, where topic and speaker terms carry the discovery instead.

---

# Trust Signals

High Priority

- A specific, published programme
- Named speakers with accurate affiliations
- Clear total cost and what is included
- Accurate dates, venue, and status
- Evidence from past editions

Medium Priority

- Attendee profile
- Sponsors and partners
- Refund and transfer terms
- Previous attendee testimonials

Speaker affiliations are the most externally verifiable claims in the library. An inaccuracy is noticed immediately and by the person it misrepresents.

---

# Technical Considerations

- One durable event URL preserved across editions
- Explicit timezone on every published date, in content and in structured data
- Past-edition pages retained and reachable, never redirected wholesale to the current edition
- `eventStatus` kept accurate through postponement or cancellation
- The programme rendered server-side; an agenda that requires scripting is invisible to crawlers
- Canonical handling for edition-year URL variants

---

# Common Mistakes

- Rebuilding at a new URL each edition, discarding accumulated authority
- Publishing the programme only as a downloadable document
- Deleting or blanket-redirecting past editions
- Dates without an explicit timezone, or with a fixed UTC offset
- Leaving `eventStatus` stale after a change
- An agenda that renders as nothing without scripting
- Thin session pages that cannot rank on their own topic
- Neglecting speaker pages, which frequently rank best
- Fabricated attendance figures

---

# Success Metrics

- Branded event query volume, year over year
- Registrations from organic entry
- Programme and session page entrances
- Speaker page traffic
- Past-edition traffic converting to the current edition
- Retained authority on the durable event URL across editions
