# Media Architecture

Media websites exist to publish, organize, and distribute content efficiently.

Their primary purpose is to help readers discover relevant content while encouraging continued engagement and repeat visits.

Editorial quality should always take precedence over excessive advertising or click-driven design.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (stories, desks, contributors, series) and retrieval model (topical and contributor-driven rather than purely chronological).
- **Composes with:** `community`
- **Modules:** editorial, search, careers, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Publish content
- Increase readership
- Encourage repeat visits
- Build authority
- Improve content discovery

---

## Audience

- Readers
- Subscribers
- Journalists
- Contributors
- Advertisers

---

# Essential Pages

- Home
- Categories
- Articles
- Authors
- About
- Newsletter
- Search
- Contact

---

# Information Hierarchy

Content should be organized around topics rather than publication dates.

Readers should easily move between related articles, authors, and categories.

Navigation should support exploration without overwhelming visitors.

---

# Content Model

A media architecture organizes readers around topics, desks, contributors, and series — not only around dates.

**Entities.** `Story` (slug, title, standfirst, body blocks, published date, desk, contributor references, media). `Desk` or section. `Contributor` (name, bio, story references). `Series` or collection. `Topic`.

**Relationships.** Stories reference a desk, one or more contributors, topics, and optionally a series. Contributor pages, desk indexes, series indexes, and related stories all derive from those references.

**Derivation.** Story, desk, contributor, and series routes, the feed, the search index, metadata, sitemap, `NewsArticle` structured data, and ranked related content all derive from the story collection.

Related-content ranking should draw on desk, series, and topic relationships together rather than on a single tag match.

Long-form bodies are structured blocks rather than opaque markup, so the layout can express pull quotes, breakouts, and measured text without parsing prose. Every image carries its ratio, focal point, caption, and credit as content.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is multi-axis: readers arrive by desk, by contributor, by series, and by topic, and each is a legitimate primary path.

Desks are the organizing spine. Contributors and series are peer paths rather than subordinate ones, because a reader following a writer or a series is following something the desk structure does not express.

Search is essential at any meaningful archive size.

Within a story, offer routes onward along every axis — same desk, same contributor, same series, related topics — ranked rather than listed exhaustively.

---

# Interaction Model

- Article publishing
- Categories
- Tags
- Author profiles
- Search
- Related articles
- Newsletter signup
- Comments (optional)

---

# Trust Signals

- Named authors
- Publication dates
- Editorial standards
- Sources
- Citations
- Author biographies

Authority should be built through consistently valuable content.

---

# Conversion Model

Encourage visitors to:

- Read additional articles
- Subscribe
- Join newsletters
- Share content
- Become members

Engagement should naturally follow useful content.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **A desk, contributor, or series with no stories.**
- **A search returning nothing.** Heavily used at archive scale.
- **A story with no lead image.** Requires a coherent authored fallback rather than a generic placeholder — a graphic fallback derived from the story's own record reads as editorial, a grey box does not.
- **A contributor with no biography.**
- **The most recent and oldest story** in any sequential affordance.
- **The honest subscription boundary.** A newsletter signup that cannot subscribe anyone must say so.

---

# Common Mistakes

- Clickbait headlines
- Poor article organization
- Excessive advertising
- Weak search
- Difficult navigation
- Thin content

---

# Definition of Success

- Returning visitors
- Articles per session
- Reading time
- Newsletter subscriptions
- Organic search traffic
- Content shares

---

# Relationship to Other Architectures

Media websites prioritize publishing and discovery rather than product sales or service enquiries.

Unlike Marketing websites, editorial integrity should remain the primary objective while supporting sustainable audience growth.