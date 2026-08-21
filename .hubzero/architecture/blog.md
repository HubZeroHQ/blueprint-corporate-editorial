# Blog Architecture

Blog websites exist to educate, inform, and build long-term authority through consistently valuable content.

Their primary purpose is to help readers discover trustworthy information while encouraging continued learning and repeat visits.

Content quality should always outweigh publishing frequency.

---

# Classification

- **Kind:** primary
- **Distinct on:** Entity graph (dated authored articles) and retrieval model (chronological and topical read-through).
- **Composes with:** —
- **Modules:** editorial, about, contact, legal

Canonical identity is recorded in `REGISTRY.md`. See `principles.md` — The Distinctness Test.

---

# Primary Objective

- Publish valuable content
- Build topical authority
- Educate readers
- Improve organic discoverability
- Encourage long-term engagement

---

## Audience

- Readers
- Industry professionals
- Customers
- Researchers
- Search engine visitors

---

# Essential Pages

- Home
- Categories
- Articles
- Authors
- About
- Search
- Newsletter
- Contact

---

# Information Hierarchy

Articles should be organized around meaningful topics rather than publication dates alone.

Readers should naturally discover related content through categories, tags, and internal linking.

Navigation should encourage exploration without overwhelming the visitor.

---

# Content Model

A blog's content model is the simplest in the library, which makes discipline about it easy to neglect.

**Entities.** `Article` (slug, title, summary, body, published date, topic references, media). `Topic` where a genuine taxonomy exists. `Author` where there is genuinely more than one voice.

**Relationships.** Articles reference topics and authors by slug. Related articles derive from shared topics, never from a hand-maintained list per article.

**Derivation.** Article routes, topic indexes, metadata, sitemap, `Article` structured data, the feed, related content, and any "latest" surface elsewhere all derive from the article collection.

Do not create a `Topic` record until at least two articles share it. A taxonomy with one member per term produces routes with nothing on them and a navigation that promises more than exists.

Publication dates are authored, never derived from the clock. See `.hubzero/content/principles.md` — Temporal State Is Authored.

See `.hubzero/content/principles.md` for the contract these records must satisfy.

---

# Navigation

Navigation is minimal by design. An index, topics where a real taxonomy exists, and the standard modules.

The chronological index is the spine. Topic navigation should appear only where there are enough articles per topic to make it useful — a topic list with one article behind each term makes a small publication look emptier than no topic list at all.

Within an article, provide a clear path onward: related articles derived from shared topics, and a visible route back to the index. A reader who finishes an article and finds no next step is a reader who leaves.

---

# Interaction Model

- Article publishing
- Categories
- Tags
- Author profiles
- Search
- Related articles
- Newsletter signup
- Reading time
- Table of contents

---

# Trust Signals

- Named authors
- Publication dates
- Last updated dates
- Sources and references
- Editorial standards
- Author biographies

Authority should be earned through consistently valuable content.

---

# Conversion Model

Encourage visitors to:

- Read additional articles
- Subscribe to newsletters
- Share content
- Return for future updates
- Explore related topics

Content should naturally lead to deeper engagement.

---

# Common States

Each of the following is authored content in the product's voice, designed before it occurs. See `.hubzero/content/principles.md` — Empty States Are Authored Content.

- **An index with no articles.** A publication that has not launched must say so in its own voice. This is the state most often left rendering a blank page.
- **A topic with one article, or none.** Prefer not generating the route at all over generating an almost-empty index.
- **An article with no media.** The layout must hold without an image, not reserve a gap for one.
- **A very long article.** In-page navigation and a reading position affordance become necessary past a certain length.
- **The most recent article.** Any "next article" affordance must handle being at either end of the sequence.

---

# Common Mistakes

- Thin content
- Duplicate topics
- Clickbait headlines
- Poor categorization
- Weak internal linking
- Outdated articles

---

# Definition of Success

- Organic traffic
- Returning readers
- Average reading time
- Newsletter subscriptions
- Articles per session
- Search visibility

---

# Relationship to Other Architectures

Blog websites differ from Media websites by prioritizing long-term topical authority over frequent news publishing.

They often complement Corporate, SaaS, Services, and Ecommerce architectures by providing educational content that supports trust and organic discovery.