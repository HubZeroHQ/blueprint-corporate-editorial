# Architecture Principles

This document establishes the principles common to every document under `architecture/`. Category-specific documents (`corporate.md`, `saas.md`, `ecommerce.md`, and others) assume these principles rather than restating them.

The canonical list of architectures — their names, classifications, and relationships — lives in `REGISTRY.md`. This document defines the reasoning; the registry defines the identities. Never enumerate architectures anywhere else.

---

# Architecture Represents Function, Not Industry

An architecture category describes what a website is structurally organized to accomplish — establish trust and convert (Corporate), demonstrate and onboard a product (SaaS), enable discovery and purchase (Ecommerce) — not which industry the client operates in.

Two businesses in the same industry can require different architectures. Two businesses in unrelated industries can share the same architecture. A dental practice and a law firm are different industries that can both be served by a Corporate or Services architecture.

Before treating an industry as requiring its own architecture, verify it cannot already be served by an existing one through personalization, profiling, or composition.

Category-agnostic implementation — building the underlying structure so it can be personalized across industries rather than hardcoded to one — is what allows a blueprint to be reused across future client projects instead of rebuilt per client.

---

# The Distinctness Test

An architecture is justified only when it differs from **every** existing architecture on **at least two** of the following four axes.

**1. Content entity graph.** What the site is fundamentally a database of, and how those records relate. Ecommerce is a graph of products, variants, and collections. Documentation is a graph of pages, versions, and references. These are not the same shape and no amount of styling makes them so.

**2. Journey terminus.** What conversion actually is — an enquiry, a purchase, a signup, an application, a registration, a referral elsewhere, or simply comprehension. An architecture whose terminus is "the visitor understood something" is structurally unlike one whose terminus is a transaction.

**3. Retrieval model.** How a visitor finds the thing they came for — browse, faceted filter, search, read-through, compare, availability query, or reference lookup. This determines navigation, indexing, and what the landing page has to do.

**4. Trust mechanism.** What proof the visitor demands before acting. Credentials, outcomes, reviews, transparency, accreditation, scale, or provenance. Different proofs require different structures to carry them.

Apply the test honestly:

* Differs on **two or more** axes → a new **primary** architecture is justified.
* Differs on **exactly one** → it is a **profile** of an existing architecture.
* Differs on **none** → it is **personalization**, and needs no document at all.

An industry existing is not evidence. A client asking is not evidence. Structural difference is the only evidence this test accepts.

---

# Primary Architectures and Profiles

Every architecture in `REGISTRY.md` is classified as one of two kinds.

**A primary architecture** defines a structure from first principles. It owns its own journey, its own entity graph, and its own conversion model.

**A profile** inherits a primary architecture's structure and specializes it. It differs on exactly one axis — almost always the trust mechanism — and its document exists to carry knowledge that genuinely cannot be derived from the parent: the trust signals that industry demands, the vocabulary its audience expects, the pages its regulators or conventions require.

A profile does not replace its parent. An agent working on a Legal blueprint reads `services.md` for the journey and `legal.md` for what makes legal work different. Reading only the profile produces a site that knows what credentials to display and not what order to establish confidence in.

Profiles are not a lesser class of document. They are how the library grows to cover more of the world without every industry demanding a new structure.

---

# Composition

Some products are genuinely two architectures at once. An automotive dealership browses and compares inventory like Ecommerce, establishes operational trust like Services, and schedules test drives like Booking. Forcing that into one category produces a document that describes nothing accurately.

Composition is the answer, and it is deliberately simple:

> A blueprint declares **one primary architecture** and may compose **additional architectures** whose structures it also implements.

The primary architecture owns the site's journey, its navigation spine, and its conversion terminus. Composed architectures contribute their own entity graphs, routes, and retrieval models beneath it.

Two rules keep this from becoming a framework:

* **One primary, always.** A blueprint that cannot name its primary architecture has not finished planning. "Both equally" is not an answer; it is a deferred decision that surfaces later as incoherent navigation.
* **Compose structures, not journeys.** A composed architecture brings its pages and its data model. It does not bring a second competing conversion path. A visitor should never encounter two sites arguing about what they are here to do.

Composition relationships are recorded per-architecture in `REGISTRY.md` and explained in each document's *Relationship to Other Architectures* section.

**Composition is preferred over invention.** Before proposing a new architecture, determine whether an existing primary composed with another already describes it. Most apparent gaps are compositions.

---

# Modules Before Architectures

Many recurring structures are not architectures at all. Nearly every blueprint, across unrelated architectures, needs a way to publish articles, state its legal terms, list its locations, or answer common questions.

These are **composable modules** — structural experience patterns that attach to any architecture. They are defined once in `modules.md` and referenced by every architecture that uses them.

Before proposing a new architecture, ask whether the structure in question is actually a module. A pattern that appears across many *different* architectures is by definition not what distinguishes one of them.

---

# Complete User Journeys

An architecture is not a set of independent pages. It is a journey a visitor completes, one step building the confidence or context needed for the next.

Evaluate an architecture by its complete path, not by whether each page is individually well-built:

* **Corporate** — discovery → credibility → capability → contact.
* **SaaS** — landing → product understanding → signup → dashboard.
* **Documentation** — landing → learning → API reference.
* **Ecommerce** — browse → product → cart → checkout.
* **Booking** — intent → availability → selection → confirmation.

A blueprint that implements every page correctly but never connects them into this path has satisfied the architecture's parts without satisfying the architecture itself. See `.hubzero/design/principles.md` — Build Experiences, Not Pages.

---

# Architecture Determines the Content Model

An architecture's entity graph is the first thing to establish and the thing most other decisions derive from. Routes, navigation, metadata, sitemap, structured data, related content, and search all follow from it.

Each architecture document states its entity graph in a *Content Model* section. That section is the input to `.hubzero/content/principles.md`, which defines how canonical records drive every dependent system.

Getting the entity graph wrong is the most expensive architectural mistake available, because everything downstream inherits the error.

---

# The Architecture Contract

Every document under `architecture/` defines the same sections. A consistent contract is what lets an AI collaborator find the answer it needs without reading the document end to end, and what makes a missing decision visible rather than silently improvised.

The table below lists them in their canonical reading order. Individual documents may present them in a different sequence where their own narrative flow warrants it, and some carry additional architecture-specific sections. What is guaranteed is that **every section below exists in every document**, under exactly these headings.

| Section | Answers |
|---|---|
| **Classification** | Is this primary or a profile, what does it compose with, what modules does it carry? |
| **Primary Objective** | What is this site structurally organized to accomplish? |
| **Content Model** | What entities exist and how do they relate? |
| **Information Hierarchy** | In what order does the site earn the right to ask for the conversion? |
| **Essential Pages** | What must exist for the journey to be complete? |
| **Navigation** | How does a visitor move through it? |
| **Interaction Model** | What does a visitor actually *do* here beyond reading? |
| **Trust Signals** | What proof does this audience demand? |
| **Conversion Model** | What is the terminus, and how does the site arrive at it? |
| **Common States** | What do empty, partial, and error conditions look like *here*? |
| **Common Mistakes** | What goes wrong repeatedly in this architecture? |
| **Relationship to Other Architectures** | What is it near, and how is it different? |
| **Definition of Success** | How would we know it worked? |

Where a section genuinely does not apply, say so and say why. An omitted section reads as an oversight; a section that states "local SEO is generally unnecessary here, because…" reads as a decision.

---

# Guiding Principle

Architecture documents describe the shape of an experience for AI collaborators and engineers to apply across many clients. They are not industry checklists.

A blueprint that reuses its architecture cleanly across an unrelated industry has correctly separated architecture from content.
