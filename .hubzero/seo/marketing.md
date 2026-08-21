# Marketing SEO

Marketing websites optimize for a single conversion, not for a content library.

Unlike Corporate or SaaS SEO, which build authority across many pages over time, Marketing SEO concentrates relevance into a small number of pages that each serve one campaign, one audience, and one action.

Depth beats breadth. A marketing site with six excellent pages outranks one with sixty thin ones.

---

# Search Intent

Visitors typically search to:

- Find a specific product, offer, or campaign by name
- Evaluate a solution they have already heard about
- Compare a named alternative
- Complete an action they were prompted toward elsewhere
- Verify that an offer is legitimate before acting

Marketing traffic is frequently **branded and mid-funnel**. A visitor arriving from a paid channel, an event, or a referral is usually already aware of the offer and is searching to confirm rather than to discover.

Optimize for confirmation and conversion, not for broad discovery.

---

# Primary Keyword Categories

- Campaign and offer names
- Product or launch names
- Problem statements the offer solves
- Audience qualifiers (role, industry, region)
- Comparison and alternative terms
- Action terms (pricing, demo, waitlist, registration)

Do not pursue high-volume informational keywords that the site has no content to satisfy. A marketing architecture has no library to rank them with, and a thin page written to capture them weakens the pages that matter.

---

# Essential Landing Pages

Required

- Home — the primary conversion page
- Offer or campaign page
- Contact or conversion endpoint
- Privacy
- Terms

Recommended

- Pricing
- FAQ
- About
- Case study or proof page
- Comparison page

A marketing architecture legitimately has fewer indexable pages than any other architecture. That is a property of the architecture, not a deficiency to correct by adding pages.

---

# Information Architecture

Marketing information architecture is **shallow and convergent**.

```text
Landing
   ↓
Supporting evidence
   ↓
Objection handling
   ↓
Conversion
```

Every page should be reachable within one click of the entry point, and every page should terminate in the same primary action expressed in that page's context.

Avoid deep hierarchies. A visitor who has to navigate three levels to reach the conversion has been given three opportunities to leave.

---

# Internal Linking Strategy

Connect:

- Every supporting page back to the primary conversion page
- Proof pages to the claims they substantiate
- FAQ answers to the pages that elaborate them

Internal linking in a marketing architecture is **convergent, not exploratory**. Its purpose is to return visitors to the conversion, not to encourage browsing.

Do not build a link graph that rewards wandering. That is the correct pattern for Media and Documentation, and the wrong one here.

---

# Structured Data

Required

- Organization
- WebSite
- BreadcrumbList

Recommended

- FAQPage — where a real FAQ exists on the page
- Product or Offer — where a genuine product or offer is described
- Event — for event or registration campaigns

Only publish structured data that describes information visible on the page. A marketing page is the most tempting place to overstate, and the most damaging place to be caught doing so. See `.hubzero/seo/principles.md` — Structured Data Should Reflect Reality.

---

# Content Strategy

Write for a visitor who is one decision away from acting.

- Lead with the value proposition, not the company history.
- Substantiate every claim on the page that makes it.
- Handle objections explicitly rather than hoping they go unasked.
- Keep one message per page. A page arguing two things persuades of neither.

Marketing content is the most likely of any architecture to drift into unsubstantiated claims. Every number, testimonial, and outcome must be as internally consistent and defensible as content anywhere else in the blueprint — see `.hubzero/experience/content.md`.

---

# Local SEO

Relevant only when the campaign targets a specific geography — a regional launch, a local event, a market-entry campaign.

Where it is relevant, the geographic qualifier belongs in the page's primary purpose, not appended to a global page.

Otherwise unnecessary.

---

# Trust Signals

High Priority

- Named, substantiated proof (outcomes with stated methodology)
- Clear pricing or a clear statement of why pricing is not shown
- Identifiable company information
- Honest description of what happens after the visitor acts

Medium Priority

- Testimonials
- Logos and affiliations
- Press coverage
- Guarantees and policies

A marketing page asks for action faster than any other architecture. It therefore has to earn trust faster, with less room to do it. Vague superlatives spend trust rather than building it.

---

# Technical Considerations

- Fast first paint — marketing traffic frequently arrives on mobile from a paid or social referral
- Metadata and Open Graph tuned per campaign page, since these pages are shared directly far more often than other architectures' pages
- Canonical URLs, especially where campaign variants exist
- No index bloat from parameterized campaign URLs
- Core Web Vitals

---

# Common Mistakes

- Adding a blog with no editorial commitment behind it, purely to chase keywords
- Competing calls-to-action on one page
- Claims with no substantiation anywhere on the site
- Optimizing a campaign page for a broad informational keyword it cannot satisfy
- Letting parameterized campaign URLs into the index
- Treating page count as an SEO strategy

---

# Success Metrics

- Conversion rate on the primary action
- Branded search volume
- Landing page entrances
- Share and referral quality
- Assisted conversions from organic entry
