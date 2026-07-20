# Photography Generation

Blueprints should never ship with gray placeholder blocks, generic stock photography, or "image coming soon" states.

Photography Generation happens after Brand Generation (`branding.md`) and Content Generation (`content.md`), once the brand and its content are established. It never happens during implementation — implementation should reference images by configuration, generated afterward.

---

# Style Comes From the Design Language, Not This Document

This document defines quality standards for image generation. It does not define what any specific image should look like.

Subject, mood, lighting character, and treatment are defined by the active Design Language's Photography Language subsection under `.hubzero/design/languages/`. Corporate Editorial photography should look nothing like Luxury, Technical, or Travel photography — consult the selected language before generating anything.

---

# Canonical Image Generation Prompt

Use the following as the base prompt for every generated image. Focused blueprints append the specific purpose, subject, placement, and architecture context — this base defines quality standards only.

> Generate a photograph that is editorial-quality, realistic, and commercially believable — the kind of image a real company would license for its own website. Lighting should be cohesive with the rest of the site's imagery. The composition should feel intentional and architecture-aware, not generic stock photography. Do not include any text, logos, watermarks, or identifiable real brands, people, or locations.

Append to this prompt, per image:

* The active Design Language's Photography Language subsection.
* The image's purpose (hero, section illustration, team portrait, case study, etc.).
* The subject.
* Where the image will be placed and at what aspect ratio.
* Any Architecture-specific context (e.g., a Healthcare blueprint's imagery should read as clinical and reassuring; a Hospitality blueprint's should read as inviting).

---

# Generated Asset Philosophy

The same philosophy that governs brand assets governs photography. See `branding.md` — Generated Asset Philosophy. Images are configuration-driven, generation happens after implementation, and generation tooling is removed before release.
