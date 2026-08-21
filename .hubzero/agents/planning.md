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

**Read the canonical list from `.hubzero/architecture/REGISTRY.md`.** Do not work from a list in a prompt or from memory — the registry is the only place architecture names live, and it records classifications and aliases that a list cannot.

Three decisions follow, in order:

**1. Which primary architecture?** Every blueprint declares exactly one. A blueprint that cannot name its primary architecture has not finished planning — "both equally" is a deferred decision that resurfaces later as incoherent navigation.

**2. Is it a profile?** Where the registry classifies an architecture as a profile, read its parent's document first for the journey, then the profile's for what its audience specifically demands. Reading only the profile produces a site that knows what credentials to display and not what order to establish confidence in.

**3. Does it compose?** Some products genuinely are two architectures — a hotel is Hospitality composed with Booking. The registry records legitimate compositions. Prefer composition over inventing a new architecture; most apparent gaps are compositions.

Then select the **composable modules** the blueprint carries — see `.hubzero/architecture/modules.md`. Carry a module when its responsibility is genuinely part of the product. An abandoned module damages credibility more than its absence.

---

# Determine the Content Model

Before any implementation, establish the entity graph: what records exist, how they relate, and what will derive from them.

The architecture document's *Content Model* section states the entities. `.hubzero/content/principles.md` defines the contract they must satisfy.

Getting this wrong is the most expensive architectural mistake available, because routes, navigation, metadata, sitemap, structured data, related content, and search all inherit the error.

Decide explicitly:

* The canonical records and their stable identifiers.
* The relationships between them, and where they resolve.
* What each record must carry to fill every surface it appears on.
* Which states can legitimately be empty, and what they say.

---

# Determine the Design Language

Every blueprint should express a deliberate visual identity.

**Read the canonical list from `.hubzero/design/languages/REGISTRY.md`.** Its `Leads with` and `Nearest` columns are the fastest way to distinguish adjacent languages — several are close enough that choosing between them requires reading both.

Select the design language that best supports the client's goals rather than personal preference.

Do not combine multiple design languages unless explicitly required.

Adopting a design language means committing to **all of it** — the eleven subsystems and the six contract sections defined in `.hubzero/design/principles.md`. In particular, read the language's **Token Contract** during planning rather than discovering it at review: it states which shared values the blueprint must own rather than inherit, and a blueprint that inherits them has not adopted its language regardless of how the result looks.

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


# Guiding Principle

Think first.

Build second.

A well-planned solution is almost always simpler, more maintainable, and more valuable than one that is implemented immediately.
