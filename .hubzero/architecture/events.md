# Events Architecture

An events website exists to convince someone that a specific gathering, at a specific time, is worth their attendance — and then to register them.

Its distinguishing property is that **the entire site has an expiry date**. Content is organized around a schedule, urgency is structural rather than manufactured, and a site that was accurate last month may be misleading today.

---

# Classification

- **Kind:** primary
- **Distinct on:** Content entity graph (sessions × speakers × times × venues), journey terminus (registration), and retrieval model (agenda and schedule navigation).
- **Composes with:** `community`, `hospitality`, `education`
- **Modules:** locations, faq, editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

**Why this is not Booking.** Booking reserves a resource against availability, and the resource persists. An event happens once. Its content is a programme rather than an inventory, its retrieval model is a schedule rather than an availability query, and its lifecycle — announced, open, imminent, past — has no equivalent in Booking. Events frequently *compose* with Booking where capacity is genuinely constrained.

---

# Primary Objective

Convert interest into registration before the event occurs.

The visitor's questions are sequential and time-bound: *what is this, is it for me, who will be there, can I attend, and what does it cost?* Every one must be answerable quickly, because a visitor deciding about a dated commitment will not research across several sessions.

The architecture serves a second audience continuously: people who have already registered and return for practical information. A site that optimizes only for acquisition fails them.

## Audience

- Prospective attendees evaluating whether to come
- Registered attendees seeking practical detail
- Speakers, sponsors, and partners
- People researching a past edition to judge a future one

---

# Content Model

The entity graph is a **programme**, and its defining property is that time is a structural dimension rather than an attribute.

**Entities.** `Event` or edition (slug, dates, venue, status, theme). `Session` (slug, title, abstract, start, end, track, venue space, speaker references). `Speaker` (name, bio, affiliation, session references). `Track` or theme. `Venue` (location, spaces, access). `TicketType` (name, price, inclusions, availability window). `Sponsor` or partner.

**Relationships.** Sessions reference speakers, tracks, a time, and a space. Speakers derive their sessions from those references. The agenda derives from the session collection ordered by time and grouped by track — never maintained as a separate document.

**Derivation.** Session, speaker, and track routes, the agenda in every view, metadata, sitemap, `Event` and `Person` structured data, filter facets, and related sessions all derive from these records.

Three rules carry most of the correctness:

**Lifecycle status is authored, never computed from the clock.** Whether an event is announced, open, sold out, imminent, or past is a field. A reference implementation whose status silently changes is not a reference, and deriving visible state from `now` is a rendering hazard. See `.hubzero/content/principles.md` — Temporal State Is Authored and `.hubzero/rendering.md`.

**Session times are stored with an explicit timezone.** An event has one canonical local timezone, and times displayed to remote visitors are the most reliable place this architecture produces a defect. A fixed UTC offset is not a timezone — it does not survive daylight-saving transitions.

**Past editions are content, not archive.** A visitor deciding about next year evaluates last year. Retain past programmes as first-class records rather than removing them.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Information Hierarchy

The journey is **awareness → programme → speakers → practicalities → registration**, compressed by the deadline.

## 1. Proposition

What this event is, who it is for, when and where. Answerable within moments of arrival — date, location, and theme are the first facts a visitor needs.

## 2. Programme

The agenda. This is the primary persuasion mechanism: a visitor decides largely on whether the sessions are worth their time.

## 3. People

Speakers and who else attends. For many events the audience is as persuasive as the programme.

## 4. Practicalities

Venue, access, accommodation, what is included. These convert someone who is interested but uncertain about logistics.

## 5. Registration

Ticket types, pricing, and what happens next.

Because the deadline compresses this, the registration path must be available from every stage. A visitor persuaded by the programme should not have to traverse the practicalities to act.

---

# Essential Pages

- Home
- Programme or agenda
- Session detail
- Speakers (index and detail)
- Venue and travel
- Tickets and registration
- FAQ
- About or past editions
- Contact
- Privacy, Terms

Plus modules the blueprint carries. See `modules.md`.

The agenda is the structural centre. An events site whose programme is a downloadable document has removed its most persuasive and most linkable content.

---

# Navigation

Registration must be reachable from every page, persistently, without dominating.

The programme is the primary path and should support several views of the same records — by time, by track, by speaker — because attendees plan differently. All views derive from one session collection.

Practical information is a distinct group and should be reachable directly; registered attendees returning for venue or schedule detail should not navigate a persuasion hierarchy to reach it.

**Agenda filter and view state belongs in the URL.** Attendees share "my sessions" and specific tracks with colleagues constantly, and the view must survive refresh.

Where past editions exist, they should be navigable without competing with the current one.

---

# Interaction Model

The essential interactions are exploring the agenda, filtering by track or time, and registering.

**Agenda navigation** is the signature interaction. A schedule spanning multiple tracks and days is genuinely difficult to present, and it must remain comprehensible without scripting — a programme that renders as nothing when JavaScript fails has lost its most important content. See `.hubzero/rendering.md` — Progressive Enhancement.

**Personal schedule building** is common and is a client-persisted state with the usual hazards: initialize from the state the server rendered, reconcile after mount, and distinguish "nothing selected" from "not yet known."

**Time display** must be unambiguous. Show the event's local time as canonical, and where a visitor's local time is also shown, label both explicitly. This is the interaction most likely to produce a genuinely harmful error.

**Filtering by track, day, or format** should be available from the agenda without leaving it.

---

# Trust Signals

Attendance costs time and often travel, which raises the evidentiary bar above a purchase.

**High priority**
- A specific, substantial programme — the strongest possible signal
- Named speakers with verifiable affiliations
- Total cost including what is and is not included
- Venue detail and accessibility information
- Evidence from past editions

**Medium priority**
- Attendee profile — who else comes
- Sponsors and partners
- Refund and transfer terms
- Testimonials from previous attendees

Never fabricate speaker affiliations, attendance figures, or testimonials, and never publish structured data describing them. A speaker list is the most externally verifiable content in the library, and an inaccuracy is discovered immediately.

---

# Conversion Model

The terminus is a completed registration.

Urgency is structural here rather than manufactured — the event genuinely happens on a date, and tickets genuinely run out. **Do not manufacture additional urgency.** Countdown pressure and invented scarcity on a site with a real deadline reads as manipulation and undermines the genuine constraint.

State total cost early, including what registration includes. Travel and accommodation frequently exceed the ticket price, and a visitor who discovers that late abandons.

Where tiered pricing has deadlines, those are authored dates presented plainly.

Where capacity is genuinely constrained, the blueprint composes with **Booking** and that architecture's requirements apply.

**Honest demonstration applies directly.** A blueprint cannot register anyone, take payment, or issue a ticket. State that within the registration flow, at the point of commitment — a confirmation for a registration that does not exist leaves a visitor believing they have somewhere to be, which is among the most harmful simulations available.

---

# Common States

An events site's states are dominated by lifecycle, and each phase is a first-class state rather than an edge case. Each is authored content in the product's voice — see `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **Announced, programme not yet published.** The site must be useful before the agenda exists — this is the state most often left unhandled, and every event passes through it.
- **Registration not yet open.** Offer notification rather than a dead page.
- **Sold out.** Offer a waitlist or the next edition; never a bare negative.
- **Imminent** — practical information becomes primary over persuasion.
- **In progress.**
- **Past.** The single most-neglected state. A past event's page is what convinces someone about the next one, and it should present the programme as evidence rather than redirecting or 404ing.
- **A cancelled or rescheduled session.** Present the change rather than removing the record.
- **A speaker withdrawn.**
- **A track or day with no sessions.**
- **Filters returning nothing.**
- **The honest registration and payment boundaries**, stated within the flow.

---

# Common Mistakes

- Publishing the programme only as a downloadable document
- Deriving lifecycle status from the current clock, so the demonstration decays
- Storing session times without an explicit timezone, or using a fixed UTC offset
- Leaving the past-event state unhandled, so the strongest evidence for the next edition disappears
- Building an agenda that renders as nothing without scripting
- Manufacturing urgency on a site that already has a genuine deadline
- Stating a ticket price without stating inclusions
- Omitting the announced-but-no-programme state
- Removing cancelled sessions rather than marking them
- Holding agenda view and filter state outside the URL
- Simulating a registration confirmation

---

# Relationship to Other Architectures

**Booking** is the closest structural relative, and Events composes with it where capacity is genuinely constrained. The distinction: Booking reserves a persistent resource against availability; Events sells attendance at a one-time programme.

**Community** shares the participation terminus and the multi-participant graph. Recurring gatherings run by a community are usually Community composed with Events.

**Education** shares the programme structure and frequently composes with Events for open days, lectures, and deadlines.

**Hospitality** composes with Events for venues that host them.

**Marketing** is the nearest single-purpose relative — a one-page event landing with no programme is Marketing, not Events. The programme is what makes this architecture distinct.

---

# Definition of Success

A prospective attendee should understand within moments what the event is, when it happens, and who it is for — and should be able to judge the programme's worth without hunting for it.

A registered attendee should find practical information without navigating persuasion.

Someone arriving after the event should find evidence that makes them want the next one.
