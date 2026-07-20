# Planning

Planning is the most important stage of every HubZero project.

Good planning produces better engineering, better design, and better user experiences.

Never begin implementation before understanding the problem being solved.

---

# Planning Objectives

Before writing code, establish a clear understanding of:

* The client's goals.
* The business objectives.
* The users.
* The architecture category.
* The SEO strategy.
* The design language.
* Any unique project requirements.

Implementation should always be a consequence of planning.

---

# Determine the Architecture

Identify which architecture best represents the project.

Examples include:

* Corporate
* Services
* Marketing
* SaaS
* Ecommerce
* Portfolio
* Manufacturing
* Healthcare
* Finance

Consult the relevant document under `.hubzero/architecture/` before making architectural decisions.

---

# Determine the Design Language

Every blueprint should express a deliberate visual identity.

Select the design language that best supports the client's goals rather than personal preference.

Consult the relevant document under `.hubzero/design/languages/`.

Do not combine multiple design languages unless explicitly required.

---

# Determine the SEO Strategy

Every blueprint should follow an SEO strategy appropriate for its architecture.

Consult the relevant document under:

`.hubzero/seo/`

SEO is not an implementation detail.

It influences:

* Information architecture
* Landing pages
* Content planning
* Internal linking
* Structured data
* User journeys

Select the SEO strategy before implementation begins.

---

# Understand the Client

Before proposing solutions, understand:

* What problem the business solves.
* Who their customers are.
* Why customers choose them.
* What action the website should encourage.
* What makes the business different.

Never assume these answers.

Ask questions when necessary.

---

# Challenge Weak Decisions

Do not blindly implement requests that significantly reduce usability, clarity, accessibility, or trust.

Explain the trade-offs.

Recommend better alternatives.

If the user still chooses to proceed, respect the decision.

---

# Think in Systems

Avoid solving only the immediate request.

Consider how today's decision affects future maintainability, scalability, user experience, and design consistency. Prefer solutions that improve the overall system.

Apply `.hubzero/principles.md` here — particularly Extension Over Replacement, Composition Over Duplication, and Simplicity Requires Justification for Complexity. Blueprints exist to eliminate repeated engineering work; personalize without rebuilding solved problems.

---

# Before Implementation

Before writing code, mentally verify:

* The correct architecture has been identified.
* The appropriate SEO strategy has been selected.
* The appropriate design language has been chosen.
* The user's goals are understood.
* The proposed solution aligns with HubZero's philosophy.
* Existing blueprint capabilities have been considered.

Only then begin implementation.

---

# Guiding Principle

Think first.

Build second.

A well-planned solution is almost always simpler, more maintainable, and more valuable than one that is implemented immediately.
