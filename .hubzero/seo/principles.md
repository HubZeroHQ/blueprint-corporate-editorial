# SEO Principles

Search engine optimization is not a collection of tricks.

It is the practice of making a website understandable, trustworthy, discoverable, and valuable to both people and search engines.

HubZero treats SEO as a product quality concern rather than a marketing afterthought.

---

# Users Before Search Engines

Every SEO decision should improve the experience of real users.

Never sacrifice clarity, usability, or honesty simply to target search rankings.

Good SEO follows good product design.

---

# Intent Before Keywords

Understand why a visitor is searching before deciding what content to create.

Pages should satisfy a clear search intent rather than attempting to rank for isolated keywords.

Content should answer questions, solve problems, or help users complete meaningful tasks.

---

# One Purpose Per Page

Every page should have a single primary purpose.

Avoid pages that attempt to rank for unrelated topics.

Focused pages are easier for users to understand and easier for search engines to classify.

---

# Information Architecture Matters

SEO begins with good information architecture.

Navigation, hierarchy, internal linking, and page relationships should reflect how people naturally think about the subject.

Search engines should never be required to guess the structure of a website.

---

# Earn Authority

Authority is earned through useful content, expertise, and trust.

Never attempt to manufacture authority through keyword stuffing, duplicate content, or manipulative optimization techniques.

Long-term credibility is more valuable than short-term rankings.

---

# Technical Excellence Supports Content

Technical SEO exists to help search engines accurately understand a website.

Metadata, structured data, canonical URLs, sitemaps, robots directives, performance, accessibility, and semantic HTML should support content rather than replace it.

Excellent technical SEO cannot compensate for poor content.

---

# Performance Is SEO

Fast websites create better user experiences.

Performance should be considered part of SEO rather than a separate optimization effort.

Reduce unnecessary JavaScript, optimize assets, and minimize loading delays wherever practical.

---

# Accessibility Improves Discoverability

Accessible websites are generally easier for search engines to interpret.

Use semantic HTML, meaningful headings, descriptive links, alternative text, and logical document structure.

Accessibility should never be treated as optional.

---

# Honest Metadata

Titles and descriptions should accurately describe the page.

Do not write misleading metadata simply to improve click-through rates.

Users should receive exactly what search results promise.

---

# SEO Derives From the Content Model

Metadata, structured data, sitemaps, breadcrumbs, and internal links are **outputs of the content model**, not a parallel system maintained beside it.

A hand-maintained sitemap goes stale the first time content is added. A separately-authored structured-data block eventually describes something the page no longer says. A navigation array and a content collection disagree about what exists. None of these failures announce themselves — they are found by search engines and visitors, not by builds.

Every SEO surface should derive from the same canonical records the page renders. See `.hubzero/content/principles.md` — Derivation, Never Restatement.

The test: add a content record, and see what fails to notice. Anything requiring a second edit was a restatement.

---

# Structured Data Should Reflect Reality

Structured data exists to describe real information.

Only publish structured data that accurately represents the page.

Never fabricate ratings, reviews, products, organizations, events, or other structured information.

Two consequences follow, and both are recurring failures.

**Structured data must be assembled from the same records rendered to the visitor.** A separate SEO content model drifts from the visible page and invites claims the page does not support. If the markup says something the visitor cannot see, one of the two is wrong.

**Describe only what the implementation can substantiate.** A blueprint depicting a fictional company must not publish ratings, review counts, attendance figures, availability, or transaction volumes it does not have. This is the same standard that governs generated content — see `.hubzero/experience/content.md` — Fictional Content Policy — applied to machine-readable claims, where it matters more because the claim is repeated in search results without the page's surrounding context.

---

# Indexability Is a Decision

Not every URL a site can produce deserves to exist in an index.

Filtered, sorted, paginated, and parameterized URLs are generated combinatorially, and several architectures in this library can produce effectively unbounded numbers of them. Left unmanaged, they compete with the pages that should rank, consume crawl budget, and dilute a site's topical clarity.

For every architecture, decide explicitly:

* Which pages are **durable ranking assets** and should be indexed.
* Which are **ephemeral or near-duplicate** and should be excluded or canonicalized to their parent.
* Which filter combinations have genuine search demand and warrant their own indexable page.

Sitemaps contain only canonical, indexable URLs — and, being derived from the content model, they cannot list something that no longer exists.

This decision is architecture-specific and is stated in each category's SEO document. Marketplace, Directory, Ecommerce, and Booking each carry a large generated surface and each resolves it differently.

**Where pages are generated programmatically, apply a content threshold.** A page created because a combination is possible, rather than because there is something on it, is thin content regardless of how the combination arose.

---

# Internal Links Should Be Intentional

Internal links help both users and search engines understand relationships between content.

Link naturally where it improves navigation or understanding.

Avoid excessive or artificial internal linking.

---

# SEO Is Continuous

SEO is not completed when a website launches.

Content, structure, performance, and technical quality should evolve as the website grows.

Treat SEO as an ongoing engineering responsibility.

---

# Category-Specific Strategy

Different website categories require different optimization strategies.

For example:

* Service websites emphasize expertise, trust, and local relevance.
* Ecommerce websites emphasize product discovery, structured data, and category architecture.
* SaaS products emphasize solution pages, documentation, and educational content.
* Portfolios emphasize projects, credibility, and professional reputation.

General principles remain constant, while implementation adapts to the needs of each category.

---

# HubZero Philosophy

HubZero does not optimize for search engines at the expense of people.

The objective is to build websites that deserve to rank because they are genuinely useful, technically excellent, and trustworthy.

Long-term quality always takes precedence over short-term ranking tactics.
