# Composable Modules

A module is a **structural experience pattern that attaches to any architecture**.

Modules exist because some structures recur across architectures that are otherwise unrelated. A publication section behaves the same way whether it sits inside a Corporate site, a SaaS product, or a Travel brand. A legal section behaves the same way everywhere. These patterns are not what distinguishes one architecture from another, so they do not belong to any single architecture document.

Modules are defined here once and referenced by every architecture that carries them. Each architecture's registry entry lists its typical modules — see `REGISTRY.md`.

---

# A Module Is Not a Component

This is the distinction that keeps Core from becoming a component catalogue and Base from becoming a component library.

A module defines **structure**: what entities exist, how they relate, what routes they need, what derives from them, and what their empty states must handle. It says nothing about how any of it looks.

A module does **not** imply:

* A Blueprint Base component. Base contains design-language-neutral infrastructure; a module's visual expression belongs entirely to the focused blueprint.
* A fixed set of files.
* A shared implementation between blueprints.

Two blueprints can both carry the Editorial module and share no code at all. What they share is the structure — the same entity shape, the same derivation obligations, the same states to handle. That is the reusable part.

---

# Naming: Canonical Identity, Brand-Owned Expression

Modules have **canonical identities** and, in some cases, **brand-owned public names**.

Across the released blueprint corpus, the Editorial module appeared under nine different public names — `blog`, `insights`, `journal`, `news`, `stories`, `field-notes`, and others — and the Locations module under five. That variety is correct. A travel brand's "Journal" and a law firm's "Insights" are the same structure wearing the voice of two different companies, and forcing both to say "Blog" would flatten exactly the originality HubZero exists to protect.

What is *not* correct is the module's name being decided independently in six places.

The rule:

> A module's **identity** is canonical. Its **public name** is declared once in configuration, and every dependent system reads it from there.

Navigation, breadcrumbs, sitemap, structured data, internal links, and page metadata all derive from that single declaration. They cannot disagree, because none of them holds its own copy. This is `.hubzero/content/principles.md` — Derivation, Never Restatement, applied to routing.

Modules marked **fixed** below have a conventional public name that should not be changed without reason: visitors and search engines both expect `/privacy` to be privacy, and there is no brand expression to be gained by relocating it.

---

# The Modules

## Editorial

**Purpose.** Publish dated, authored content that builds authority, demonstrates thinking, or reports news.

**When to use.** Whenever a business has something ongoing to say and the commitment to keep saying it. A blueprint should carry this module only if it also carries real content — an abandoned publication section damages credibility more than its absence.

**Naming.** Brand-owned. Declare once in configuration.

**Entities.** `Article` (slug, title, summary, body, published date, author reference, topic references, media). Optionally `Author` and `Topic` as their own records when the publication has more than one voice or a real taxonomy.

**Relationships.** Articles reference authors and topics by slug. Related articles derive from shared topics, not from a hand-maintained list.

**Routes.** An index, a detail route per article, and — where a taxonomy genuinely exists — an index per topic. Do not generate topic routes for taxonomies with one member.

**Derives.** Sitemap entries, `Article` structured data, breadcrumbs, related content, navigation entry, and any "latest posts" surface elsewhere on the site.

**States.** An empty index (a publication with no articles yet must say so in the brand's voice, not render blank). A topic with a single article. An article with no media. A long article requiring in-page navigation.

**Notes.** Publication dates are authored content, never derived from the current clock — see `.hubzero/content/principles.md` — Temporal State Is Authored.

---

## Legal

**Purpose.** State the terms under which the business operates and how it handles visitor data.

**When to use.** Always. This module appeared in every blueprint in the released corpus without exception.

**Naming.** Fixed — `privacy`, `terms`. Additional documents (cookie policy, accessibility statement) use equally conventional names.

**Entities.** `LegalDocument` (slug, title, last-updated date, structured body sections).

**Relationships.** Referenced from the footer on every page. Referenced from any form or interaction that collects information.

**Routes.** One per document.

**Derives.** Footer links, sitemap entries, breadcrumbs.

**States.** No meaningful empty state — a legal document that is incomplete should not ship. "Terms of service coming soon" fails the Experience Standard.

**Notes.** Legal content must name the fictional company and read as complete. Where the blueprint's honest limitations affect what the policy can truthfully claim — no analytics, no accounts, no data retention — the policy should say so plainly. That honesty is more convincing than boilerplate. See `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

---

## Contact

**Purpose.** Provide a real path to reach the business and set accurate expectations about what happens next.

**When to use.** Always.

**Naming.** Fixed — `contact`.

**Entities.** `ContactMethod` (kind, value, hours, purpose). Optionally references to `Location` records where the business is place-based.

**Relationships.** References Locations where both modules are present. Referenced from the footer, navigation, and every conversion terminus.

**Routes.** One, plus any purpose-specific variants the architecture requires (consultation, quote, support).

**Derives.** Footer contact block, `Organization` structured data, location structured data, navigation entry.

**States.** Outside business hours. A method that is unavailable. Most importantly: **the honest state of a form with no backend.** A blueprint that cannot send mail must say so at the point of interaction and offer a path that genuinely works — see the note below.

**Notes.** This module is where Honest Demonstration is most frequently violated. A contact form that appears to submit and silently discards its input is the single most common trust failure available to a blueprint. Prefer a protocol link that actually works, and state the limitation where the visitor will read it.

---

## About

**Purpose.** Establish who the business is, why it exists, and who is behind it.

**When to use.** Nearly always. Absent only where the architecture's entire purpose is a single conversion (some Marketing blueprints).

**Naming.** Brand-owned — `about`, `company`, `studio`, `firm`.

**Entities.** Narrative content sections. Optionally `Person` records where the team is named, and `Milestone` records where history is presented as a timeline.

**Relationships.** Person records are shared with any other module that credits people — Editorial authors, Careers hiring contacts, Services practitioners. One person, one record.

**Routes.** One, optionally with a detail route per person where the team is a meaningful entity rather than a photo grid.

**Derives.** `Organization` structured data, author references in Editorial, navigation entry.

**States.** A team with no photography. A history with few milestones.

**Notes.** This module carries the blueprint's HubZero attribution — an honest note that the company is fictional and the site is a demonstration. See `.hubzero/experience/branding.md` — HubZero Attribution.

---

## Locations

**Purpose.** Communicate physical presence — where the business operates, and what a visitor can do at each place.

**When to use.** When physical presence is part of the value proposition or the conversion. A business with one office mentions it in Contact; a business whose network *is* the offering needs this module.

**Naming.** Brand-owned — `locations`, `offices`, `stores`, `facilities`, `showrooms`.

**Entities.** `Location` (slug, name, address, coordinates, hours, contact methods, services offered, media).

**Relationships.** Locations reference the services or inventory available at them. Referenced by Contact.

**Routes.** An index, and a detail route per location where locations differ meaningfully. Where they do not, an index alone is correct — do not generate twelve near-identical pages.

**Derives.** Sitemap entries, `LocalBusiness` or `Place` structured data, breadcrumbs, map surfaces, contact page listings.

**States.** A location temporarily closed. A location with no photography. A region with no locations — the honest answer is to say where coverage does not extend, not to hide the gap.

**Notes.** Address and phone formatting must follow one convention throughout — see `.hubzero/experience/content.md` — Editorial Consistency.

---

## Careers

**Purpose.** Communicate what working at the business is like and provide a path to apply.

**When to use.** When recruiting is a genuine business objective. A Careers page with no roles and no culture content is worse than no Careers page.

**Naming.** Fixed — `careers`.

**Entities.** `Role` (slug, title, team, location, employment type, description, requirements). Culture content as narrative sections.

**Relationships.** Roles reference Locations where the business is place-based, and teams referenced in About.

**Routes.** An index, and a detail route per role.

**Derives.** Sitemap entries, `JobPosting` structured data, navigation or footer entry, filtered role listings.

**States.** **No open roles.** This is the common case and it is the state most often left unhandled. A careers page with no vacancies should still communicate culture and invite speculative interest, in the brand's voice.

**Notes.** Application handling almost always exceeds a blueprint's honest capability. State plainly how an application is actually received rather than simulating an applicant-tracking flow.

---

## FAQ

**Purpose.** Answer the questions a real customer asks before committing, in one retrievable place.

**When to use.** When the offering raises predictable questions that would otherwise obstruct conversion.

**Naming.** Fixed — `faq` (singular; the corpus contained both `faq` and `faqs`).

**Entities.** `Question` (question, answer, category reference).

**Relationships.** Questions reference the products, services, or policies they concern, so an answer can link to the page that elaborates it.

**Routes.** Usually one page. A detail route per question is justified only when answers are long enough to warrant their own search result.

**Derives.** `FAQPage` structured data — derived from the same records rendered on the page, never authored separately. Internal links to elaborating pages.

**States.** A category with no questions. A search returning no matches.

**Notes.** Questions must be ones a real customer would actually ask about this specific offering. Generic industry filler fails the Experience Standard. Native disclosure elements handle the interaction better than custom state — see `.hubzero/principles.md` — Native Before Custom.

---

## Search

**Purpose.** Let a visitor retrieve content by query when browsing the hierarchy would be slower.

**When to use.** When the content volume genuinely exceeds what navigation can expose. A site with twelve pages does not need search; adding it signals a scale the site does not have.

**Naming.** Fixed — `search`.

**Entities.** No entities of its own. Search consumes an **index derived from every other module's canonical records.**

**Relationships.** The index is built from canonical content, not maintained alongside it. An index that is hand-maintained will drift, and the drift is invisible until a visitor searches for something that exists and finds nothing.

**Routes.** One, with the query held in the URL so a result set is shareable and survives refresh and back-navigation.

**Derives.** Nothing derives from search; search derives from everything.

**States.** **Empty query** (before the visitor has typed — show something useful, not a blank page). **No results** — the state most often left unhandled, and the one a visitor is most likely to hit. Partial results. Results spanning multiple content types.

**Notes.** Query state belongs in the URL rather than component state — see `.hubzero/content/principles.md` — Derived Navigation. Where the index is built on the server and filtered on the client, the server must render a deterministic initial state; see `.hubzero/rendering.md`.

---

# Choosing Modules

Carry a module when its responsibility is genuinely part of the product. Do not carry one to look complete.

Two failure modes recur:

**The abandoned module.** An Editorial section with three placeholder posts, a Careers page with no roles and no culture, an FAQ with generic questions. Each of these actively damages credibility, because a visitor reads them as evidence of what the business is like.

**The premature module.** Search on a twelve-page site, Locations for a business with one office, a topic taxonomy with one member per topic. These add structure the content cannot fill.

A blueprint carrying four well-populated modules is stronger than one carrying eight thin ones.

---

# Adding a Module

A module is justified when a structure appears across **multiple different architectures** and is not what distinguishes any of them. That is the inverse of the architecture distinctness test: architectures are justified by difference, modules by recurrence.

Follow `engineering/evidence-policy.md`. A structure seen in one or two blueprints is not a module yet, however obviously reusable it looks.

---

# Guiding Principle

Modules exist so the architecture library can stay small while covering more of the world.

Every structure promoted to a module is a structure that no longer needs a new architecture invented for it.
