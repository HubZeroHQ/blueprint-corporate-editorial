# Brand Generation

Every blueprint should generate a complete, believable fictional brand rather than shipping with a generic placeholder name and a default logo.

A generated brand should be:

* **Believable** — the kind of name and identity a real company would actually adopt, not a name that announces itself as a placeholder.
* **Legally distinct** — original, with no resemblance to real, existing brands, logos, or trademarks.
* **Timeless** — free of naming or visual trends that will date the blueprint within a year or two.
* **Commercially realistic** — consistent with how a company in the selected Architecture category would actually present itself.
* **Consistent across metadata and assets** — the same name, tone, and mark appear everywhere the brand surfaces, from the logo to the page `<title>`.

Brand Generation happens after the Architecture and Design Language have been selected and after implementation is structurally complete. It never happens during implementation, and it never happens before Architecture and Design Language are known — a brand generated first has nothing to be consistent with.

Brand Generation happens before Content Generation (`content.md`) and Photography Generation (`photography.md`). Content and photography should reflect the brand, not the other way around.

---

# What a Generated Brand Includes

* Company name, tagline, and voice.
* Logo (primary mark).
* Favicon.
* Brand mark (a simplified variant of the logo for compact contexts).
* Open Graph image.
* Apple touch icons.
* Light and dark variants of the above where the Design Language supports a dark mode.

The logo, brand mark, and favicon may be SVG — they render at a single size or scale losslessly, and the major platforms that use them (browsers, the site itself) render SVG reliably. The Open Graph image should be a raster format (PNG or JPEG) instead. Social platforms that render link previews have inconsistent and often absent SVG support; a raster Open Graph image is the one choice that renders correctly everywhere it needs to.

---

# Canonical Brand Generation Prompt

Use the following as the base prompt for brand generation. Focused blueprints append their own architecture, Design Language, company description, and personality to it — this base defines quality standards, not any specific brand.

> Generate a complete visual brand identity for a fictional company. The identity must be original, professional, and free of any resemblance to real, existing brands, logos, or trademarks. It should feel like the work of a competent, deliberate design studio — not a generated placeholder. Produce a primary logo, a simplified brand mark suitable for small sizes (favicon, app icon), and an Open Graph share image, all sharing one coherent visual system. If the Design Language supports a dark mode, produce light and dark variants of each asset that remain recognizably the same brand.

Append to this prompt, per blueprint:

* The selected Architecture category.
* The selected Design Language, including its Typography and Photography Language subsections.
* A short description of the fictional company and the problem it solves.
* The personality the brand should express (e.g., confident and understated, energetic and bold).

---

# Integration Is Part of Generation

Brand Generation is not complete when assets exist on disk. It is complete when those assets are wired into:

* Site metadata (title, description, Open Graph, Twitter card).
* Favicon and apple touch icon declarations.
* Navigation.
* Footer.

An unwired asset is not a finished brand. Verify integration as part of the Experience Generation pass in `.hubzero/agents/design-review.md`.

---

# HubZero Attribution

Every blueprint should include subtle, professional attribution that it is part of the HubZero Blueprint ecosystem, alongside its fictional brand.

This is not marketing. It is provenance and transparency — a visitor or reviewer should be able to tell, without it disrupting the fictional brand's immersion, that the company is fictional and the site is a HubZero demonstration.

Typical locations:

* **Footer** — a small, unobtrusive line (e.g., "A HubZero Blueprint demonstration").
* **About page** — a brief, honest note that the company and its content are fictional.
* **Repository README** — a clear statement that the repository is a HubZero Blueprint and the business it depicts does not exist.

Attribution should never compete visually with the brand it accompanies. It belongs in the same understated register as a template credit, not the hero section.

---

# Generated Asset Philosophy

Generated assets remain configuration-driven, the same as any other brand content in a HubZero blueprint. Implementation code references assets by configuration; it does not hardcode filenames or paths that only happen to match what was generated.

No component should require editing after Brand Generation completes — only configuration and the asset files themselves change.

Any temporary tooling or scripts used to generate assets must be removed from the repository before release. A released blueprint's repository should contain the assets, not the machinery that produced them.
