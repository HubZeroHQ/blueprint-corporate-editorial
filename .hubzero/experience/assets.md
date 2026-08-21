# Asset Contract

This document defines what visual assets a released blueprint must have, what form they take, and what "integrated" means.

`branding.md`, `content.md`, and `photography.md` define *how* assets are generated and to what quality standard. This document defines *which assets must exist* and *when the set is complete* — the checkable half of Experience Generation.

It exists because generated assets fail in two ways that quality standards do not catch: an asset that was produced and never wired up, and a visual slot that was never assigned an asset at all. Both survive a review that only looks at the assets that are present.

---

# The Governing Rule

> **Every visual slot has an intentional asset, and every asset is referenced by configuration.**

Two obligations, and a blueprint must satisfy both.

**Intentional** means the asset was chosen for that slot — its subject, crop, and treatment decided for where it appears. Not a generic image scaled to fit, and not a placeholder that survived to release.

**Referenced by configuration** means implementation code names assets through configuration rather than hardcoding paths. No component should require editing when an asset is replaced. See `branding.md` — Generated Asset Philosophy.

---

# Required Brand Assets

Every released blueprint carries the full set. An incomplete set is not a partial pass.

| Asset | Format | Notes |
|---|---|---|
| Primary logo | SVG acceptable | The full lockup, used in navigation and footer |
| Brand mark | SVG acceptable | Simplified variant for compact contexts |
| Favicon | SVG or ICO | Must remain legible at the smallest rendered size |
| Apple touch icon | PNG | Raster required; platforms do not reliably render SVG here |
| Open Graph image | **PNG or JPEG** | Raster required — social platforms have inconsistent and often absent SVG support |
| Light and dark variants | As above | Required where the Design Language supports a dark appearance |

**The Open Graph image is the most frequently mishandled asset in the set.** It has different requirements from every other brand asset: a fixed aspect ratio, a raster format, and legibility at a small preview size in a feed. It cannot be an in-page graphic reused without verification, and it cannot be the SVG logo.

Where a Design Language forbids photography, the Open Graph image is composed typographically in that language rather than borrowed from outside it.

---

# Required Content Imagery

The specific slots depend on the architecture and the modules the blueprint carries. Determine them from the architecture's *Content Model* and *Essential Pages* sections, and from `.hubzero/architecture/modules.md`.

Slots that recur across most blueprints:

* **Hero or opening imagery** for every page that has one
* **Card and listing imagery** for every record that appears in a listing
* **Detail imagery** for every record with its own page
* **Team or person imagery**, where people are named
* **Case study, project, or work imagery**
* **Gallery imagery**, where a gallery exists
* **Location imagery**, where the Locations module is carried
* **Mobile crops** for every image whose desktop composition does not survive a portrait viewport

Every one of these carries its ratio, focal point, responsive sizing hints, loading priority, alternative text, and — where relevant — caption and credit, stored with the content record. See `.hubzero/content/principles.md` — Media Belongs to the Record.

---

# Integration Is Part of Generation

An asset on disk is not a delivered asset.

Generation is complete only when the asset is referenced by the systems that need it:

* Site metadata — title, description, Open Graph, and social card
* Favicon and apple touch icon declarations
* Web app manifest, where present
* Navigation and footer
* The content records that reference content imagery

**Verify the wiring, not the file listing.** An unreferenced asset and a missing asset produce the same visitor experience, and only one of them is obvious from looking at the repository. This is the same failure class described in `.hubzero/agents/review.md` — Verify Infrastructure Is Wired.

---

# Coherence Across the Set

Individually acceptable assets can still fail collectively.

* **One visual system.** Every image shares a consistent treatment — grade, lighting character, and colour temperature — consistent with the active Design Language's Photography Language.
* **One brand system.** Logo, mark, favicon, and social image read as the same identity at every size.
* **Consistent aspect ratios** within a slot type. Cards in one listing should not vary in shape.
* **Consistent subject treatment.** If one team portrait is environmental and another is a studio headshot, the set reads as assembled rather than directed.

Coherence is more visible than individual quality. A site of uniformly directed, merely-good images reads as more professional than one mixing excellent images with mismatched ones.

---

# The Asset Audit

Before release, enumerate every visual slot and confirm each has an intentional asset. Then enumerate every asset and confirm each is referenced.

The audit answers three questions, in order:

**1. Does every slot have an asset?**
Walk the architecture's pages and the modules the blueprint carries. Include the slots most often forgotten: empty states, lifecycle routes, the Open Graph image, mobile crops, and dark-appearance variants.

**2. Is every asset referenced?**
Diff the asset directory against the references in configuration and content. Unreferenced assets are either a missed integration or dead weight — determine which, and resolve it. Generated-asset workflows routinely produce more than ships.

**3. Is the set coherent?**
Review the assets together rather than page by page. Inconsistent grading is invisible in isolation and obvious in aggregate.

**"Images exist" is not the standard.** A blueprint where every slot is filled with a generic image has passed a file-existence check and failed the audit.

---

# Repository Hygiene

The repository ships the assets, not the machinery that produced them.

Remove before release: generation scripts, prompt files, intermediate exports, unused variants, and any one-off tooling. A released blueprint's repository should contain nothing that reveals the assets were generated rather than commissioned.

Optimize what ships. Correct dimensions, appropriate formats, and no image substantially larger than the largest size it renders at.

---

# Verification

The Asset Contract is verified during the Experience Generation Verification pass of `.hubzero/agents/design-review.md`, and again at Release Verification.

---

# Guiding Principle

A prospective client does not evaluate assets individually. They form a single impression from the whole set, and one unfilled slot or one mismatched image is enough to produce it.

The question is never whether the images are good. It is whether every place an image belongs has one that was chosen.
