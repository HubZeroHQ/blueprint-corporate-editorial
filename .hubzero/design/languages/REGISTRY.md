# Design Language Registry

This is the **canonical source of design language identity** for the HubZero ecosystem.

Every system that needs to name a design language — Blueprint Core documents, Blueprint Creator, AI collaborators, skills, prompts, and blueprint documentation — reads that name from here. No other document maintains a design language list.

If a name does not appear in this registry, it is not a design language.

This registry carries **identity and metadata only**. The complete visual and interaction system for each language lives in its own document. Never duplicate a language's definition here.

```text
REGISTRY.md          canonical identity and metadata
       ↓
<id>.md              the complete design system
```

---

# How to Read This Registry

| Field | Meaning |
|---|---|
| **id** | The canonical name. Lowercase, kebab-case. The only form any system may use in configuration, repository names, or file paths. |
| **Leads with** | The subsystem at the top of this language's decision hierarchy — what it resolves conflicts in favour of. This is the fastest way to tell two adjacent languages apart. |
| **Register** | The broad emotional and commercial territory. Languages sharing a register are the ones most at risk of converging, and their Anti-Patterns must separate them explicitly. |
| **Nearest** | The existing languages this one is closest to. Read those before choosing between them. |

Every language has a document at `.hubzero/design/languages/<id>.md` defining the full contract — see `.hubzero/design/principles.md` — The Design Language Contract.

---

# The Library

| id | Leads with | Register | Nearest |
|---|---|---|---|
| `bold` | Scale | Assertive | `expressive`, `maximalist` |
| `brutalist` | Structural honesty | Raw | `industrial`, `monochrome`, `swiss` |
| `cinematic` | Photography | Immersive | `luxury`, `expressive` |
| `classic` | Proportion | Established | `luxury`, `humanist` |
| `craft` | Texture | Made | `organic`, `retro`, `industrial` |
| `editorial` | Reading experience | Considered | `typographic`, `classic` |
| `expressive` | Form | Energetic | `bold`, `playful`, `maximalist` |
| `glass` | Surface and depth | Contemporary | `premium`, `modern` |
| `humanist` | Typographic warmth | Approachable | `organic`, `classic`, `minimal` |
| `industrial` | Function | Utilitarian | `technical`, `brutalist`, `craft` |
| `luxury` | Restraint | Exclusive | `premium`, `classic`, `cinematic` |
| `maximalist` | Density | Abundant | `expressive`, `retro`, `bold` |
| `minimal` | Reduction | Quiet | `swiss`, `monochrome`, `humanist` |
| `modern` | Clarity | Current | `minimal`, `premium`, `glass` |
| `monochrome` | Colour discipline | Severe | `minimal`, `brutalist`, `swiss` |
| `organic` | Natural form | Warm | `craft`, `humanist` |
| `playful` | Delight | Friendly | `expressive`, `retro` |
| `premium` | Craftsmanship detail | Assured | `luxury`, `modern` |
| `retro` | Period reference | Nostalgic | `craft`, `playful`, `maximalist` |
| `swiss` | Grid | Objective | `minimal`, `monochrome`, `typographic` |
| `technical` | Information density | Engineered | `industrial`, `monochrome` |
| `typographic` | Type as interface | Literary | `editorial`, `swiss` |

**22 design languages.**

---

# Convergence Watch

The registry's `Register` and `Nearest` columns exist because of a measured failure, not a theoretical one.

Across HubZero's released blueprint corpus, **every blueprint shipped the same neutral typeface**, and several shipped shared foundation tokens entirely unmodified — including languages whose own documents mandate the opposite treatment. Sixteen supposedly distinct design languages produced measurably converging implementations.

The registry addresses this in two ways.

**Adjacent languages must separate themselves explicitly.** Where two languages share a register, each one's Anti-Patterns section must name the other and state what it does differently. `premium` must say how it is not `luxury`. `swiss` must say how it is not `minimal`. `craft` must say how it is not `organic`. A language that cannot articulate its nearest neighbour's territory has not established its own.

**Every language owns its tokens.** Each document's Token Contract states which shared values it must define rather than inherit. This is verified at Design Review and at Release Verification — see `.hubzero/agents/design-review.md`.

---

# Rejected Candidates

Recorded so the same proposals are not re-litigated. Each was assessed against the standard in **Adding a Design Language** below and failed.

| Candidate | Verdict |
|---|---|
| `futurist` | **Rejected.** Trend-bound by definition. Conflicts directly with `design/principles.md` — Design for Longevity. |
| `utilitarian` | **Rejected.** Covered by `technical` and `minimal` together; differs on no subsystem from their union. |
| `institutional` | **Rejected.** This is `classic` applied to a `government` architecture. An architecture concern, not a design language. |
| `refined` | **Rejected.** A synonym for `premium`. |
| `warm-minimal` | **Rejected.** A palette variant of `minimal`. Personalization, not a system. |
| `experimental` | **Rejected.** A language with no prohibitions is not a decision contract. Directly opposed to the purpose of this library. |
| `neo-editorial` | **Rejected.** A variant of `editorial`. |
| `digital` | **Rejected.** No definable answers across the subsystems. |
| `quiet-luxury` | **Rejected.** `luxury` already *is* restraint. If `luxury` reads as ornate in practice, the fix is sharpening its Anti-Patterns, not forking it. |
| `high-contrast` | **Rejected as a language; adopted as a contract.** It is an accessibility property that applies to every language. See `design/principles.md` — The Contrast Contract. |
| `tactile` | **Deferred.** Overlaps `premium` (materiality in detail) and `organic`. Revisit once `premium`'s Anti-Patterns are settled and the overlap is still under four subsystems. |
| `architectural` | **Deferred.** Sits between `brutalist` and `industrial`. Three languages in one neighbourhood invites the convergence this registry exists to prevent. |
| `scientific` | **Deferred.** Arguably distinct from `technical` by leading with data presentation and citation, but only one plausible architecture needs it today. |
| `geometric` | **Deferred.** Overlaps `bold` and `swiss`. Revisit if a shape-system-led language proves distinct from a grid-led one. |
| `neo-brutalist` | **Deferred.** Genuinely different from `brutalist`, but trend-bound in a way that conflicts with Design for Longevity. |

---

# Adding a Design Language

A design language is justified only when it produces **different answers on at least four of the eleven subsystems** from every existing language, **and** has a distinct Anti-Patterns set, **and** has a distinct Decision Hierarchy.

The last two matter as much as the first. A candidate that differs in its preferences but forbids nothing new, or that resolves conflicts the same way an existing language does, is a variant rather than a system.

1. Confirm it clears the four-subsystem bar against every entry above — not just against the one it feels closest to.
2. Confirm it is not already in **Rejected Candidates**.
3. Confirm it is not a palette, a typeface choice, or a trend.
4. Add the row here, then write `<id>.md` against the full Design Language Contract.
5. Update the `Nearest` column of any adjacent language, and add the mutual separation to both languages' Anti-Patterns.
6. Classify the change per `engineering/change-policy.md`.

Adding a design language is a Blueprint Core maintainer action. AI collaborators working inside a blueprint may read this registry and must never extend it.

---

# Guiding Principle

A larger library is only an improvement if its languages stay distinguishable.

Twenty-two languages that produce twenty-two different products is a stronger platform than sixteen. Twenty-two that produce one is a worse platform than one honest language would be.
