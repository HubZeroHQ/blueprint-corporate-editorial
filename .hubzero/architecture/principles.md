# Architecture Principles

This document establishes the principles common to every document under `architecture/`. Category-specific documents (`corporate.md`, `saas.md`, `ecommerce.md`, and others) assume these principles rather than restating them.

---

# Architecture Represents Function, Not Industry

An architecture category describes what a website is structurally organized to accomplish — establish trust and convert (Corporate), demonstrate and onboard a product (SaaS), enable discovery and purchase (Ecommerce) — not which industry the client operates in.

Two businesses in the same industry can require different architectures. Two businesses in unrelated industries can share the same architecture. A dental practice and a law firm are different industries that can both be served by a Corporate or Services architecture. An automotive dealership's website shares more structurally with Services and Ecommerce than with a category of its own — see `automotive.md`'s own "Relationship to Other Architectures."

Before treating an industry as requiring its own architecture document, verify it cannot already be served by an existing category through personalization. Add a new architecture document only when a genuinely different structural pattern emerges, not whenever a new industry is served.

Category-agnostic implementation — building the underlying structure so it can be personalized across industries rather than hardcoded to one — is what allows a blueprint to be reused across future client projects instead of rebuilt per client.

---

# Complete User Journeys

An architecture is not a set of independent pages. It is a journey a visitor completes, one step building the confidence or context needed for the next.

Evaluate an architecture by its complete path, not by whether each page is individually well-built:

* **Corporate** — discovery → credibility → capability → contact.
* **SaaS** — landing → product understanding → signup → dashboard.
* **Documentation** — landing → learning → API reference.
* **Ecommerce** — browse → product → cart → checkout.

A blueprint that implements every page correctly but never connects them into this path has satisfied the architecture's parts without satisfying the architecture itself. See `.hubzero/design/principles.md` — Build Experiences, Not Pages.

---

# Guiding Principle

Architecture documents describe the shape of an experience for AI collaborators and engineers to apply across many clients. They are not industry checklists. A blueprint that reuses its architecture cleanly across an unrelated industry has correctly separated architecture from content.
