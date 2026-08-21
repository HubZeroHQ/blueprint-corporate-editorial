# Content Contract

Content is the fourth knowledge system in a HubZero blueprint, alongside Architecture, Design Language, and SEO.

Architecture determines what the site accomplishes. Design Language determines how it feels. SEO determines how it is found. **Content determines what the site is made of — and what everything else derives from.**

This document defines the canonical data contract. It is implementation-independent: it prescribes no database, no content management system, no file format, and no framework. It describes the relationships that must hold regardless of how content is stored.

For *how generated copy should read* — voice, believability, editorial consistency, the fictional content policy — see `.hubzero/experience/content.md`. That document governs quality of writing. This one governs structure of data. They are different concerns at different lifecycle stages.

---

# The Governing Principle

> **Canonical data drives dependent systems.**

Across HubZero's released blueprints, nineteen of twenty independently arrived at the same conclusion: define content once as typed records, then derive everything else from those records. Routes, navigation, metadata, sitemaps, structured data, related content, breadcrumbs, and search indexes are all *outputs* of the content model, not parallel systems maintained beside it.

This is the most repeated finding in HubZero's accumulated experience. It is written here so the twenty-first blueprint does not have to discover it.

The failure it prevents is **drift**. A hand-maintained sitemap goes stale the first time content is added. A separately-authored structured-data block eventually describes something the page no longer says. A navigation array and a content array disagree about what exists. None of these failures announce themselves; they are found by visitors and search engines, not by builds.

---

# 1. Canonical Records

Every content type is a typed record with a stable identifier.

A record has a **slug** that does not change once published, because routes, cross-references, and external links all depend on it. Renaming a slug is a content migration, not an edit.

Records are the single source of truth for what they describe. If a fact about a service appears on the services index, the service detail page, a case study, and the footer, it exists in one record and is read four times — never written four times.

---

# 2. One Resolution Layer

Relationships between records are declared by slug and resolved in **exactly one place**.

A page selects and composes. It does not join. The moment one page imports two collections and correlates them inline, a second page will do it differently, and the two will eventually disagree.

A single resolution layer has a further benefit: the content graph's invariants become inspectable in one file rather than distributed across every route that happens to traverse them.

Avoid embedding records inside one another. A case study referencing a client by slug stays correct when the client's name changes; a case study containing a copy of the client's name does not.

---

# 3. Derivation, Never Restatement

The following are **derived** from canonical records. Every one of them being hand-maintained is a defect, regardless of whether it is currently accurate.

* Route generation and static parameters
* Page metadata — titles, descriptions, canonical URLs, social tags
* Sitemap entries
* Structured data
* Breadcrumbs
* Navigation entries
* Related and recommended content
* Search indexes
* Filter and facet options
* Counts, totals, and summaries ("12 services", "3 of 8 available")

If a list could have been computed from the content and was written out instead, that is a finding at Engineering Review.

The test is simple: **add a new record, and see what fails to notice.** A correctly derived system requires no other edit. Anything requiring a second edit was a restatement.

---

# 4. Page Hierarchy Is Declared Once

The site's structural hierarchy — what contains what — is expressed in one structure.

Visible breadcrumbs and their structured-data equivalent derive from the same source. So do parent links, section indexes, and any "you are here" affordance. Two representations of one hierarchy will disagree, and the disagreement will be invisible to visual review because only one of them is visible.

---

# 5. Referential Integrity Is Verified

Slug references are validated, not assumed.

A reference to a record that does not exist should fail loudly at build or module load, or degrade deliberately — never render as a broken link or an empty section discovered by a visitor.

Where deliberate degradation is chosen, it must be explicit: a resolver that drops unresolvable references so deleting a record degrades the site rather than breaking the build is a legitimate decision, provided it is a decision and not an accident.

---

# 6. Content Depth Is Authored

Each record declares what depth of presentation it supports — a summary, a card, a full page — and carries the fields each of those requires.

The failure this prevents: a listing page presents four distinct items, and the detail route renders the same body for all four because only the listing's fields were ever authored. The happy path works, nothing errors, and three quarters of the content is wrong.

If a record appears in a listing, the listing's fields are part of that record. If it has a detail page, that page's fields are part of it too. A record that cannot fill the surface it appears on is incomplete, not flexible.

---

# 7. Media Belongs to the Record

An image is content, not styling.

Every media reference carries, alongside its source: **aspect ratio, focal point, responsive sizing hints, loading priority, alternative text**, and where relevant **caption and credit**.

These decisions belong together because they are one decision. Choosing a crop without knowing the aspect ratio it will occupy, or writing alternative text separately from the content the image illustrates, produces images that are individually fine and collectively incoherent.

Storing them beside the record means a component renders media without deciding anything about it, and the same image behaves consistently everywhere it appears. It also means art direction — including mobile-specific crops — is a content decision that survives a redesign.

---

# 8. Conversion Is Content

Each page declares its **one primary action**.

A page with two equally-weighted calls to action has not decided what it is for. Where a shared conversion terminus appears across many pages, it is one structure customized by context — not a block duplicated and diverged.

Secondary actions are permitted and should be visibly secondary. The hierarchy is declared in content so that it survives independently of how any particular design language expresses it.

---

# 9. Empty States Are Authored Content

Every collection that can be empty has authored copy for that condition, written in the product's voice.

This includes: an index with no records yet, a filter or search returning no matches, a taxonomy term with no members, a region with no coverage, a role listing with no vacancies.

Empty states are content, not markup. "No results" is a placeholder; a sentence that acknowledges the gap honestly and offers a next step is the product. These states are also where a blueprint's honesty is most visible — a filter that returns nothing should say so rather than rendering an ambiguous blank.

Design them before the dataset can be empty, not after someone finds one.

---

# 10. Temporal State Is Authored

Status is stored, never computed from the current clock.

Whether an event is upcoming or past, whether a role is open, whether a programme is active, what "latest" means — all are authored fields.

This is simultaneously an editorial decision and an engineering requirement:

* **Editorially**, a reference implementation that silently decays is not a reference. Screenshots, documentation, and demonstrations all assume the site says today what it said last year.
* **Technically**, deriving visible content from `now` is a rendering hazard. The server and the client evaluate it at different moments. See `.hubzero/rendering.md`.

Where a relative presentation is genuinely wanted ("published three months ago"), it is computed from an authored date against an authored reference point — not against the wall clock.

---

# Derived Navigation

Navigation is an output of the content model.

Menu entries, section indexes, and cross-links derive from the records and modules that exist. A navigation array maintained separately from content will eventually list something that is gone, or omit something that is there.

Where a module's public name is brand-owned — Editorial as "Journal", Locations as "Showrooms" — that name is declared **once** in configuration and read by navigation, breadcrumbs, sitemap, structured data, and metadata alike. See `.hubzero/architecture/modules.md` — Naming.

**Filter and query state belongs in the URL** wherever it represents a content view a visitor might reasonably share, bookmark, or return to. A filtered result set held only in component state cannot be linked, does not survive refresh, and breaks browser back-navigation. Holding it in the URL solves all three at once and keeps the server and client agreeing about what is displayed.

---

# Content Ownership Across Layers

| Layer | Owns |
|---|---|
| **Blueprint Core** | The rules in this document. No content. |
| **Blueprint Base** | No content. Infrastructure that consumes content. |
| **Focused Blueprint** | The content model's *shape* for its architecture, and the fictional content filling it. |
| **Client Project** | Real content replacing the fictional content, within the same shape. |

The shape is what makes a blueprint reusable. A client should be able to replace every record without touching a component — see `.hubzero/principles.md` — Configuration Over Hardcoding.

**Convention:** canonical content lives under `src/content/`. The corpus used both `src/content/` and `src/data/`; `src/content/` is canonical.

---

# CMS-Ready, Not CMS-Dependent

A blueprint that satisfies this contract is already shaped like something a content management system could feed, because a CMS produces exactly what this contract describes: typed records with stable identifiers and declared relationships.

That is the extent of the commitment. **This contract does not specify a CMS, require one, or anticipate a particular one.** Building toward a specific integration before one exists is speculation, and `.hubzero/principles.md` — Simplicity Requires Justification for Complexity applies.

The blueprint's content is static and typed. Being honest that content changes require a rebuild is better than implying an editorial workflow the blueprint does not have — see `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

---

# Relationship to Other Systems

**Architecture** defines which entities exist and how they relate — each architecture document states this in its *Content Model* section. This contract defines what must then be true of them.

**SEO** consumes the content model. Metadata, structured data, sitemaps, and internal linking are derived outputs, which is why structured data can only describe what the page actually renders — see `.hubzero/seo/principles.md`.

**Design Language** expresses content depth. A record that supports summary, card, and full presentations gives the design language three surfaces to express; one that does not, constrains it.

---

# Guiding Principle

Content is the product. Everything else in a blueprint exists to present it, find it, or describe it.

A content model that other systems derive from cannot fall out of agreement with itself. One that other systems merely reference will.
