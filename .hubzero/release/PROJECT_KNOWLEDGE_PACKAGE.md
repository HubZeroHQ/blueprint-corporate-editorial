# Project Knowledge Package

Every released HubZero blueprint authors a Project Knowledge Package — a retrospective recording what was built, what was decided, what was learned, and what the blueprint honestly cannot do.

It is written at release, by whoever completed the blueprint, and committed to the blueprint's own repository as `<blueprint-name>-pkp.md`.

---

# Why It Exists

Blueprint Core evolves from real engineering experience rather than from speculation. The Project Knowledge Package is the mechanism that makes that possible.

```text
Blueprint  →  Release  →  Retrospective  →  Evidence  →  Core / Base / Skills / Creator
```

Two properties of this loop matter more than its shape.

**A retrospective never automatically changes Blueprint Core.** A finding recorded here is one data point. It is compared against the accumulated corpus of every previous blueprint's package, and only a pattern that recurs independently across several blueprints becomes a candidate for promotion. A blueprint author does not legislate for the ecosystem by writing a convincing paragraph.

**Evidence accumulates rather than expires.** A finding recorded two years ago still counts toward a threshold when it recurs for the fifth time. This is why packages are retained rather than summarized away, and why writing one thoroughly matters even when nothing in it seems novel at the time.

The promotion policy itself is a Blueprint Core maintainer concern and is not part of this document.

---

# When It Is Written

At release, after Engineering Review, Design Review, and Experience Generation are complete, and **before release approval**. It is verified as section 16 of `RELEASE_CHECKLIST.md`.

Writing it at release rather than afterward matters. The decisions and their reasoning are still recoverable at that moment; a month later, only the outcomes are.

## It Is a Release Gate

The retrospective is a required step, not an advisory one. A blueprint is not approved for release with an unwritten Project Knowledge Package.

This is deliberate. The evidence loop below only works if the corpus is complete — a retrospective that is optional is a retrospective that gets skipped on exactly the projects that ran hardest and therefore learned the most. Those are the ones the ecosystem most needs.

## Maintainer Exception

Where an external blocker genuinely prevents completion, a HubZero Blueprint Core maintainer — and only a maintainer — may approve an exception, recording in the release record: the specific blocker, the approving maintainer by name, and the date by which the retrospective will be completed.

An exception is a deferral with an owner and a date. It is not a waiver, and the package is still owed. Schedule pressure is not an external blocker.

---

# Required Sections

## Identity

The blueprint name, the fictional company it depicts, the repository, its version, and the Blueprint Core version it was built against.

Recording the Core version is what makes a finding interpretable later — a difficulty that existed under one version may already have been addressed in the next.

## Executive Summary

What this blueprint is and what it demonstrates, in a few paragraphs. Written for someone who has never seen it.

## Technical Overview

The stack, the rendering model, the routing approach, and the shape of the application. Enough for an engineer to orient themselves before opening the code.

## Architecture and Design Language

The canonical `id` of each, taken from the registries — `.hubzero/architecture/REGISTRY.md` and `.hubzero/design/languages/REGISTRY.md`. Where the blueprint composes architectures or carries modules, name them.

Record how the Design Language's Token Contract was satisfied: which tokens the blueprint owns, and any place the language proved difficult to hold.

## Content Model

The entities, their relationships, and what derives from them. This is frequently the most reusable section of the entire package, because the content model is what a future blueprint in the same architecture will want to start from.

## Engineering Decisions

The decisions that were genuinely decisions — where a reasonable alternative existed and was rejected. Record the alternative and why.

A decision with no alternative is a description, not a decision, and does not belong here.

## Notable Components and Interesting Engineering

The parts of this blueprint worth another engineer's attention: unusual solutions, hard problems solved well, and anything a future blueprint might want to look at rather than rediscover.

## Reusable Patterns

Patterns this blueprint used that might apply beyond it.

**State them as patterns, not as code.** "A shared component publishes a state attribute while CSS owns the motion values" is a pattern. A component listing is not. The governing rule is *extract principles, not implementations* — a pattern described abstractly can be recognized in a differently-implemented blueprint, and that recognition is what produces evidence.

## Limitations

What the blueprint honestly cannot do — every place it demonstrates rather than performs.

Be specific and complete. This section is the written form of Honest Demonstration, and it is also the most useful section for anyone evaluating whether the blueprint suits a client project. Include deliberate non-goals, and mark them as deliberate rather than as gaps.

## Lessons Learned

What building this taught, including what would be done differently.

**This is the section the evidence loop actually consumes.** Write findings so they can be recognized when they recur:

* State the finding as a general principle, then give the specific instance.
* Include failures and near-misses, not only successes. A hazard discovered late is more valuable evidence than a pattern that worked first time.
* Note where Blueprint Core's existing guidance was ambiguous, missing, or wrong. This is the most direct signal Core can receive.
* Note where a Base mechanism was missing and had to be built locally.

A lesson that could only apply to this blueprint is still worth recording. It costs a sentence, and the fifth time it appears it stops being blueprint-specific.

## Developer Notes

What a developer picking this up needs to know that the code does not say — setup quirks, deliberate constraints, and anything non-obvious that would otherwise be discovered the hard way.

## Structured Summary and Tags

A short machine-readable-ish summary and a set of tags: architecture, design language, modules, sectors, and notable capabilities. These make the corpus searchable as it grows.

---

# How to Write It

**Write for a reader who has never seen the blueprint** and who may be reading it years later, alongside twenty others.

**Record reasoning, not description.** The code already describes itself. What is not recoverable later is why a path was chosen and what was rejected.

**Be honest about difficulty.** A package that reports everything went smoothly is either untrue or uninformative. Where something was hard, awkward, or repeatedly got wrong, that is the finding.

**Do not editorialize the ecosystem.** Record what happened in this blueprint. Whether it should change Blueprint Core is a separate decision made against the whole corpus, not a case argued here.

---

# Guiding Principle

Every blueprint is an experiment the ecosystem gets to learn from, but only if the results were written down.

The package is the difference between twenty blueprints and twenty blueprints' worth of accumulated engineering knowledge.
