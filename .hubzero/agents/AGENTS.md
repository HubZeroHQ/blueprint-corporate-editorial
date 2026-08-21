# HubZero AI Guide

Welcome to a HubZero Blueprint.

This repository is built upon the HubZero engineering platform. Before making implementation decisions, familiarize yourself with the knowledge contained in `.hubzero`.

Your role is not simply to generate code.

Your role is to build software consistent with HubZero's engineering philosophy, design direction, and architectural standards.

---

# Read Order

Unless instructed otherwise, consult these documents in the following order.

1. `.hubzero/principles.md`
2. `.hubzero/rendering.md`
3. `.hubzero/architecture/principles.md`
4. `.hubzero/content/principles.md`
5. `.hubzero/design/principles.md`
6. Relevant document in `.hubzero/architecture/`, plus any modules it carries (`architecture/modules.md`)
7. Relevant document in `.hubzero/seo/`
8. Relevant document in `.hubzero/design/languages/`
9. Relevant agent guidance in this directory (`planning.md`, `implementation.md`, `review.md`, `design-review.md`)

Not every document needs to be read for every task.

Read only what is relevant to the work being performed.

`.hubzero/principles.md` is the canonical source of engineering reasoning. Every other document assumes it rather than restating it.

---

# Canonical Registries

Two documents are the **only** source of these names anywhere in the ecosystem:

* `.hubzero/architecture/REGISTRY.md` — every architecture, its classification, what it composes with, and its aliases.
* `.hubzero/design/languages/REGISTRY.md` — every design language.

Read the name from the registry. Never rely on a list in a prompt, a README, a skill, or any other document — those drift, and the registry does not.

If a name is not in the registry, it is not an architecture or a design language. Where a non-canonical name appears (`agency`, `docs`, `shop`), resolve it through the registry's alias table rather than treating it as new.

---

# Source of Truth

`.hubzero` is the canonical source of HubZero knowledge.

Do not duplicate or reinterpret its contents.

If guidance exists within `.hubzero`, follow it unless the user explicitly instructs otherwise.

---

# The Contract

The sections below — Blueprint Core Integrity, Blueprint Base Infrastructure, Your Responsibilities, and Native Knowledge — define HubZero's behavioral contract for AI collaborators.

This contract is independent of model or vendor. Any AI collaborator working inside a HubZero blueprint is expected to honor it.

---

# Blueprint Core Integrity

The `.hubzero` directory is Blueprint Core.

It is the canonical engineering knowledge shared across the HubZero ecosystem.

AI agents may:

- Read it
- Reference it
- Apply its guidance

AI agents must never:

- Modify it
- Rewrite it
- Reformat it
- Delete it
- Extend it

Blueprint-specific knowledge belongs inside the blueprint repository, not Blueprint Core.

Only HubZero Blueprint Core maintainers may intentionally update `.hubzero`.

---

# Blueprint Base Infrastructure

This blueprint inherits shared engineering infrastructure from Blueprint Base.

Before creating new files or utilities, inspect the existing project structure and reuse the provided infrastructure where appropriate.

The shared engineering foundation includes:

- `src/config/` — Site configuration, metadata, environment configuration, navigation, and application constants.
- `src/seo/` — Metadata generation, robots, sitemap, and SEO infrastructure.
- `src/providers/` — Application-level React providers.
- `src/lib/` — Shared infrastructure integrations and libraries.
- `src/utils/` — Shared utility functions.
- `src/types/` — Shared TypeScript types.
- `src/components/layout/` — Structural layout primitives.
- `src/styles/` — Global styles and design tokens.

Do not introduce duplicate utilities, configuration, providers, or infrastructure when an equivalent already exists.

If shared engineering functionality is required by the vast majority of HubZero projects, extend the existing shared infrastructure.

If functionality is specific to this blueprint, keep it within the blueprint rather than modifying the shared engineering foundation.

Blueprint Base also supplies reusable AI skills — see Reusable AI Skills below.

Blueprint Base standardizes engineering.

Each blueprint owns its own visual identity.

---

# Reusable AI Skills

Blueprint Base supplies reusable AI skills — assistant-specific directories such as `.agents/skills/` and `.claude/skills/` at the blueprint root, alongside the infrastructure described above.

**This section is the single, canonical statement of the Skills contract.** It is not restated in `README.md`, in the stage documents, or in the release checklist.

## The Four Layers

| Layer | Answers |
|---|---|
| **Blueprint Core** (`.hubzero`) | *What should happen, and why?* |
| **Skills** | *How does the AI perform this workflow?* |
| **Blueprint Base** | *What infrastructure already exists?* |
| **The blueprint** | *What is specific to this product?* |

Skills are reusable implementation infrastructure, not knowledge. They encode a repeatable procedure — a sequence of steps with a defined output — rather than a judgement.

## Using Skills

**Use a skill when its responsibility is relevant to the work at hand — not because a stage has begun.**

There is no requirement to invoke every skill, and no stage requires one. Invoking a skill whose responsibility does not match the task is a defect, not diligence: it produces irrelevant output and obscures the work that mattered.

A skill never replaces manual verification, never automates a review pass, and never satisfies a release checklist item on its own.

**Blueprint Core always wins.** If a skill's guidance conflicts with `.hubzero`, follow `.hubzero`. A skill that appears to contradict Blueprint Core should be reported rather than followed.

Do not expect a skill to exist for every stage. Base supplies a small, curated set, and the absence of one is not a gap to work around — it means the stage is performed with the judgement described in `planning.md`, `implementation.md`, `review.md`, and `design-review.md`.

---

# Your Responsibilities

When contributing to a HubZero Blueprint:

* Produce production-ready work.
* Make deliberate engineering decisions.
* Respect established architecture.
* Preserve the blueprint's design language.
* Build maintainable solutions.
* Improve quality where appropriate.
* Be honest about what the implementation can and cannot do — see `.hubzero/principles.md` — Honest Demonstration Over Simulated Functionality.

Do not introduce unnecessary complexity.

---

# Native Knowledge

You already possess strong knowledge of programming languages, frameworks, accessibility, performance, testing, and software engineering.

Use your native capabilities for these topics.

Do not expect `.hubzero` to teach React, Next.js, Tailwind CSS, TypeScript, HTML, CSS, JavaScript, accessibility, or general software engineering practices.

`.hubzero` exists only to provide HubZero-specific knowledge.

---

# Design Philosophy

Engineering should be consistent.

Design should remain original.

Never attempt to make multiple blueprints visually similar simply because they originate from HubZero.

The HubZero signature is elegance, not repetition.

Every blueprint should develop its own identity.

---

# Blueprint Core

HubZero Blueprint is built upon four independent knowledge systems.

**Architecture**

Determines what the website should accomplish. See `.hubzero/architecture/`.

**Content**

Determines what the website is made of, and what everything else derives from. See `.hubzero/content/principles.md`.

**Design Language**

Determines how the website should feel. See `.hubzero/design/`.

**SEO**

Determines how the website should be discovered. See `.hubzero/seo/`.

Treat these as complementary systems.

Do not allow one to override another.

A strong blueprint satisfies all four.

Content sits between Architecture and the other two, because both consume it. Architecture defines which entities exist; SEO derives its metadata, structured data, and sitemap from those entities; Design Language expresses their depth. This is what *canonical data drives dependent systems* means in practice, and it is the most repeated finding in HubZero's accumulated experience.

---

# Working With Users

The user's goals always come first.

If a request conflicts with a HubZero principle, explain the trade-offs clearly before proceeding.

Do not silently ignore the user's request.

Do not blindly implement poor design decisions without first communicating their impact.

---

# During Implementation

Think before writing code.

Apply `.hubzero/principles.md` — particularly Read Before Writing, Inspect Before Creating, Extension Over Replacement, and Maintainability Over Cleverness.

Before considering an implementation complete:

- Review your own work.
- Remove unnecessary complexity.
- Eliminate duplication.
- Verify consistency.
- Verify the implementation renders predictably between server and client, and that essential content is meaningful before JavaScript runs — see `.hubzero/rendering.md`.
- Verify every dependent system derives from canonical content records rather than restating them — see `.hubzero/content/principles.md`.
- Ensure the implementation remains faithful to the selected Architecture, Content model, Design Language, and SEO strategy.

---

# During Review

Review more than correctness.

Evaluate:

* Engineering quality
* User experience
* Visual consistency
* Maintainability
* Accessibility
* Long-term value

Look for opportunities to simplify without reducing capability.

---

# Completion Lifecycle

A HubZero implementation progresses through five stages:

1. Planning
2. Implementation
3. Engineering Review — is it correct? See `.hubzero/agents/review.md`.
4. Design Review — would someone hire HubZero after seeing this? Includes the Mobile Experience Overhaul and Experience Generation passes. See `.hubzero/agents/design-review.md`.
5. Release Verification

Implementation is not complete simply because the requested functionality has been built. A technically correct blueprint that still reads as a template has not completed the lifecycle.

After implementation:

- Complete Engineering Review and Design Review using the guidance in `.hubzero/agents/`.
- Resolve any findings from both.
- Execute the canonical release process defined in:

`.hubzero/release/RELEASE_CHECKLIST.md`

Do not declare an implementation complete, production-ready, or ready for publication until every applicable release verification step has passed successfully.

---

# Final Reminder

Blueprints are not templates.

They are production-ready foundations for real businesses.

Every contribution should increase the long-term value of the blueprint.
