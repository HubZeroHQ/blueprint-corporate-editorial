# Architecture Registry

This is the **canonical source of architecture identity** for the HubZero ecosystem.

Every system that needs to name an architecture — Blueprint Core documents, Blueprint Creator, AI collaborators, skills, prompts, and blueprint documentation — reads that name from here. No other document maintains an architecture list.

If a name does not appear in this registry, it is not an architecture.

---

# How to Read This Registry

| Field | Meaning |
|---|---|
| **id** | The canonical name. Lowercase, kebab-case. The only form any system may use in configuration, repository names, or file paths. |
| **Kind** | `primary` — defines a structure from first principles. `profile` — inherits a primary and specializes it on one axis. See `principles.md` — Primary Architectures and Profiles. |
| **Parent** | For profiles: the primary architecture whose journey and structure it inherits. Read the parent's document first. |
| **Distinct on** | Which of the four distinctness axes justify this entry. `E` entity graph · `T` terminus · `R` retrieval model · `P` proof/trust mechanism. See `principles.md` — The Distinctness Test. |
| **Composes with** | Architectures this one legitimately combines with. See `principles.md` — Composition. |
| **Modules** | Composable modules typically carried by this architecture. Defined in `modules.md`. |

Every architecture has a paired SEO document at `.hubzero/seo/<id>.md` and an architecture document at `.hubzero/architecture/<id>.md`. That pairing is 1:1 and must be maintained.

---

# Primary Architectures

| id | Kind | Distinct on | Composes with | Modules |
|---|---|---|---|---|
| `blog` | primary | E, R | — | editorial, about, contact, legal |
| `booking` | primary | E, T, R | services, hospitality, travel, healthcare, events | locations, faq, about, contact, legal |
| `community` | primary | E, T, R | events, directory, blog | editorial, search, about, contact, legal |
| `corporate` | primary | E, T, P | blog, careers | editorial, careers, locations, about, contact, legal |
| `directory` | primary | E, T, R | community, real-estate, marketplace | search, locations, about, contact, legal |
| `documentation` | primary | E, R | saas | search, editorial, about, contact, legal |
| `ecommerce` | primary | E, T, R, P | marketplace, blog | search, faq, locations, editorial, about, contact, legal |
| `education` | primary | E, T, P | events, directory | editorial, careers, locations, faq, about, contact, legal |
| `events` | primary | E, T, R | community, hospitality, education | locations, faq, editorial, about, contact, legal |
| `government` | primary | T, R, P | directory | search, editorial, locations, faq, about, contact, legal |
| `marketing` | primary | T, R | — | faq, about, contact, legal |
| `marketplace` | primary | E, R, P | ecommerce, directory | search, faq, about, contact, legal |
| `media` | primary | E, R | community | editorial, search, careers, about, contact, legal |
| `nonprofit` | primary | E, T, P | events, blog | editorial, careers, locations, about, contact, legal |
| `portfolio` | primary | E, P | blog | editorial, careers, about, contact, legal |
| `real-estate` | primary | E, R | directory, booking | search, editorial, locations, about, contact, legal |
| `saas` | primary | E, T, R | documentation, blog, marketing | editorial, careers, faq, about, contact, legal |

---

# Profiles

| id | Kind | Parent | Distinct on | Composes with | Modules |
|---|---|---|---|---|---|
| `automotive` | profile | `services` | P | ecommerce, booking | locations, editorial, faq, about, contact, legal |
| `finance` | profile | `services` | P | — | editorial, careers, faq, about, contact, legal |
| `healthcare` | profile | `services` | P | booking, directory | locations, careers, faq, editorial, about, contact, legal |
| `hospitality` | profile | `services` | P | booking, events | locations, editorial, faq, about, contact, legal |
| `legal` | profile | `services` | P | — | editorial, careers, locations, faq, about, contact, legal |
| `logistics` | profile | `services` | R | — | locations, careers, editorial, about, contact, legal |
| `manufacturing` | profile | `services` | P | — | locations, careers, editorial, about, contact, legal |
| `services` | profile | `corporate` | P | booking, blog | editorial, careers, locations, faq, about, contact, legal |
| `travel` | profile | `services` | R | booking, events | editorial, locations, faq, about, contact, legal |

**On `services`.** Services is classified as a profile of Corporate because it shares Corporate's entity graph, terminus, and retrieval model, differing only in what proof its audience demands — expertise and process rather than scale and track record. It is nonetheless the **most-used parent in the library**, and seven further profiles inherit from it. Read `corporate.md` for the journey, `services.md` for how expertise-led businesses specialize it.

---

# Aliases

Non-canonical names that have appeared in the ecosystem, and what they resolve to. **Always use the canonical `id`.** These entries exist so that an agent encountering an alias resolves it rather than inventing a new architecture.

| Alias | Canonical id | Note |
|---|---|---|
| `agency` | `services` | An agency is a services business. `blueprint-agency-modern` predates this registry; its repository name is retained, but the architecture it implements is `services`. |
| `consulting` | `services` | — |
| `firm` | `services` | — |
| `shop` / `store` / `retail` | `ecommerce` | — |
| `docs` | `documentation` | — |
| `news` / `publication` / `magazine` | `media` | Use `blog` instead where the publication is single-voice and chronological. |
| `charity` / `ngo` | `nonprofit` | — |
| `property` / `realty` | `real-estate` | — |
| `landing` / `campaign` | `marketing` | — |

---

# Rejected Candidates

Recorded so the same proposals are not re-litigated. Each was assessed against the four-axis distinctness test in `principles.md` and failed.

| Candidate | Verdict |
|---|---|
| `restaurant` | Profile of `hospitality`; differs on no axis. Personalization. |
| `fitness` / `wellness` | `services` composed with `booking`. |
| `religious` | `community` composed with `events`. |
| `insurance` | Profile of `finance`; differs on no axis beyond vocabulary. |
| `telecom` / `energy` / `utilities` | `services` with a `directory` of plans. Personalization. |
| `personal-brand` / `creator` | `portfolio`. Differs on no axis. |
| `app-landing` | `marketing`. Differs on no axis; the store CTA is a conversion detail. |
| `agency` | Alias of `services`. See above. |
| `membership` / `association` | Deferred, not rejected. Currently a `nonprofit` composed with `community`. Revisit if a real need differs on two axes. |
| `support-center` / `help-center` | Deferred, not rejected. Currently a `documentation` profile. Revisit if retrieval and terminus both prove distinct from developer documentation. |
| `careers` / `employer-brand` | Not an architecture. It is the `careers` **module** — see `modules.md`. Revisit only if a recruiting-led site proves distinct on two axes. |

---

# Adding an Architecture

1. Apply the distinctness test in `principles.md`. Two axes minimum.
2. Confirm it is not a **module** (`modules.md`), a **profile**, or a **composition** of existing architectures.
3. Confirm it is not already in **Rejected Candidates** above.
4. Add the row here, then write `architecture/<id>.md` against the Architecture Contract and `seo/<id>.md`.
5. Classify the change per `engineering/change-policy.md`. A new architecture is an Engineering Improvement; renaming or reclassifying an existing one is a Breaking Change.

Adding an architecture is a Blueprint Core maintainer action. AI collaborators working inside a blueprint may read this registry and must never extend it.

---

# Guiding Principle

A registry earns its keep by being the only place a name lives.

The moment a second document maintains its own architecture list, both lists begin to drift, and the drift is silent until something built on the stale one reaches a client.
