# .hubzero

`.hubzero` is the published knowledge layer of Blueprint Core.

Every HubZero Blueprint contains a synchronized copy of this directory. It exists to guide both AI collaborators and developers by providing HubZero-specific engineering knowledge, design philosophy, architectural direction, and implementation guidance.

This directory is intentionally documentation-only.

It does **not** contain production code, components, assets, or framework implementations.

## Purpose

Modern AI models already understand programming languages, frameworks, accessibility, performance, and general software engineering best practices.

`.hubzero` exists only to provide knowledge they do **not** already possess:

* HubZero's design philosophy.
* HubZero's architectural thinking.
* HubZero's engineering principles.
* HubZero's blueprint conventions.
* HubZero's review criteria.
* HubZero's decision-making process.

If a document only repeats knowledge already available to modern coding models, it does not belong in `.hubzero`.

## Ownership

`.hubzero` is owned exclusively by **Blueprint Core**.

Blueprint repositories receive synchronized copies of this directory.

Developers working inside blueprint repositories should **never** manually modify files within `.hubzero`.

Changes must always originate from the Blueprint Core repository so every blueprint shares the same engineering foundation.

## Philosophy

HubZero standardizes engineering, not creativity.

The purpose of `.hubzero` is to ensure that every blueprint is built with consistent engineering quality while allowing every blueprint to develop its own visual identity, personality, and design language.

Two HubZero blueprints should never feel like variations of the same website.

The only characteristic every HubZero project should consistently share is **elegance**.

## Using `.hubzero`

AI collaborators should treat `.hubzero` as the canonical source of HubZero knowledge.

Before making architectural, design, or engineering decisions, consult the relevant documentation contained within this directory.

Do not duplicate or reinterpret these documents unless explicitly instructed.

When HubZero guidance conflicts with generic implementation preferences, prefer HubZero guidance unless the user explicitly requests otherwise.

For framework usage, implementation details, accessibility, security, or other general software engineering topics, rely on your native capabilities unless `.hubzero` intentionally overrides them.

## Directory Structure

* `principles.md` — The canonical engineering principles. Every other document assumes this rather than restating it.
* `agents/` — Guidance for AI collaborators: planning, implementation, engineering review, and design review.
* `architecture/` — General architecture principles, plus website architecture categories and information architecture.
* `design/` — Design principles, design languages, and mobile experience guidance.
* `seo/` — SEO principles and category-specific SEO strategy.
* `experience/` — The experience standard, and brand, content, and photography generation guidance.
* `release/` — The canonical release checklist.

Additional directories may be introduced as Blueprint Core evolves, provided they contribute HubZero-specific knowledge rather than generic technical documentation.

## Guiding Principle

Every document inside `.hubzero` should answer one question:

> **"Does this teach an AI or developer something uniquely valuable about how HubZero builds software?"**

If the answer is **no**, the document does not belong here.

## Release Standards

Every HubZero Focused Blueprint must pass the canonical release process before publication.

The release process is defined in:

.hubzero/release/RELEASE_CHECKLIST.md

This document is part of Blueprint Core and must never be modified by AI agents or blueprint authors.

All release verification should be performed against this checklist.