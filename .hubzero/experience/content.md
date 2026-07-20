# Content Generation

Blueprints should never ship with lorem ipsum, generic filler copy, or placeholder text that reads as unfinished.

Content Generation happens after Brand Generation (`branding.md`), once the fictional company's name, tone, and voice are established, and before Photography Generation (`photography.md`) — imagery should illustrate the content that already exists (the team named, the case studies described), not the other way around. Content Generation never happens during implementation itself; implementation should reference content by configuration, written afterward.

---

# What Generated Content Includes

* Product and service descriptions.
* Pricing plans and tiers.
* Frequently asked questions.
* Legal pages (privacy policy, terms of service).
* Company history and About content.
* Support and help content.
* Testimonials and case studies.
* Team bios.

---

# Canonical Content Generation Prompt

Use the following as the base prompt for generated content. Focused blueprints append their own brand, architecture, and content type to it — this base defines quality standards, not any specific copy.

> Write copy for a fictional company that reads as production-ready — the kind of content a real company would publish, not a placeholder. Match the company's established name, tone, and voice exactly. Use realistic, internally consistent numbers, dates, and claims appropriate to the company's implied size and industry. Do not use lorem ipsum, generic filler phrases, or placeholder names anywhere in the output.

Append to this prompt, per piece of content:

* The fictional company's established name, tone, and voice (from Brand Generation).
* The selected Architecture category, which governs the terminology and information appropriate to the content (see `.hubzero/architecture/`).
* The specific content type and its purpose on the page.

---

# Believability Standards

* Pricing should reflect realistic market rates for the company's stated industry and Architecture category, not round arbitrary numbers.
* Metrics, statistics, and growth figures should stay within a plausible range for a company of the implied size and age. A number a real due-diligence reviewer would immediately question does not belong.
* FAQs should answer questions a real customer would actually ask about this specific offering, not generic industry filler.
* Legal pages should reference the company's actual name and read as complete, not "Terms of Service coming soon."

Terminology consistency is covered in full below — see Editorial Consistency.

---

# Fictional Content Policy

Every HubZero blueprint represents a fictional organization. Never scrape, copy, or adapt identifying information from a real company, person, or place — including when researching how a real industry presents itself for tone and structure.

Generate fictional company names, employee names, customers, testimonials, products, case studies, office locations, addresses, phone numbers, email addresses, and legal information. Believable is required — a name or address that announces itself as a placeholder fails this standard as much as one copied from a real business. Real-world attribution is prohibited unless a project explicitly and intentionally calls for it.

This is the standard verified by the Placeholder Content section of `.hubzero/release/RELEASE_CHECKLIST.md`.

---

# Editorial Consistency

Believable content is not just realistic, it is consistent. A blueprint that mixes American and British spelling, switches date formats between pages, or renders one testimonial's phone number with a country code and another's without reads as assembled rather than written.

Before writing content, establish and hold constant for the entire blueprint:

* **Locale** — a single English variant (e.g., US or UK), not a mix.
* **Spelling** — consistent with the chosen locale throughout (e.g., "color" vs. "colour").
* **Punctuation** — consistent quotation, dash, and list style.
* **Capitalization** — consistent heading, title, and button-label casing.
* **Dates** — one date format used everywhere (e.g., always `MMM D, YYYY`, never mixed with `DD/MM/YYYY`).
* **Currencies** — one currency and one formatting convention for it, appropriate to the fictional company's market.
* **Measurements** — one measurement system (metric or imperial), consistent with the locale and market.
* **Terminology** — a product, feature, or role named one way in navigation should never be renamed on a detail page, in a testimonial, or in a FAQ.
* **Address formatting** — one convention for how fictional addresses are structured, consistent with the chosen locale.
* **Phone formatting** — one convention for how fictional phone numbers are structured and displayed.

Editorial Consistency is verified during the Experience Generation Verification pass of `.hubzero/agents/design-review.md`, and again during Release Verification.

---

# Generated Asset Philosophy

The same philosophy that governs brand assets and photography governs content. See `branding.md` — Generated Asset Philosophy. Content is configuration-driven and generation happens after implementation.

Content should never claim functionality the implementation does not honestly provide — see `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.
