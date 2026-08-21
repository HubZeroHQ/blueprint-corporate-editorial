# Identity

- **Blueprint name:** `blueprint-corporate-editorial`
- **Repository:** `blueprint-corporate-editorial` (HubZero Blueprint ecosystem)
- **Version:** 1.0.0 (package.json), built on **Blueprint Core v1.5.0** (`.hubzero/VERSION`)
- **Status:** Feature-complete reference implementation; not yet passed through a documented Engineering Review / Design Review / Release Verification cycle (no evidence of `.hubzero/release/RELEASE_CHECKLIST.md` execution in this snapshot)
- **Architecture category:** Corporate (`.hubzero/architecture/corporate.md`)
- **Design language:** Editorial (`.hubzero/design/languages/editorial.md`)
- **Purpose:** A HubZero "Focused Blueprint" — a production-grade, fully-built demonstration website for a fictional strategic-engineering/digital-transformation consultancy ("Meridian Group"), used to prove out HubZero's editorial design system and corporate information architecture as a reusable foundation for real client engagements.

---

# Executive Summary

This blueprint demonstrates what a **mature B2B consulting/engineering firm's marketing site** looks like when editorial (publication-grade) design principles are applied to a corporate information architecture. It is not a SaaS marketing site, not a portfolio, not e-commerce — it is a trust-building, narrative-driven site whose entire visual vocabulary (serif display type, restrained stone/neutral palette, hairline rules instead of boxes, near-zero shadow, generous whitespace) is borrowed from print publications rather than software UI kits.

It exists to give HubZero Studio AI (and any engineer picking this up) a concrete, working answer to "what does Corporate × Editorial look like when actually built," including the plumbing most such demos skip: Next.js App Router structure, Metadata API integration, a typed design-token layer, a `cva`-driven component variant system, and a floating-navigation "signature experience" with independently-derived interface states (scroll position, per-route hero darkness, mobile-menu state) instead of the coupled-state anti-pattern HubZero's own principles warn against.

It represents a **static, content-driven marketing site product** — no authentication, no database, no CMS, no real backend. The engineering problem it solves is: how do you build a fully responsive, accessible, SEO-structured, production-quality corporate site with configuration-driven branding/content, entirely from React Server Components and file-based routing, while keeping visual and engineering concerns cleanly separated so the blueprint can be reskinned for a real client without touching component internals.

---

# Technical Overview

## Architecture
- **Framework:** Next.js 16.2.10 App Router, React 19.2.4, TypeScript (strict mode), Tailwind CSS 4 (CSS-first `@theme` config, no `tailwind.config.js`).
- **Structure** follows the Blueprint Base contract described in `CLAUDE.md`/`AGENTS.md`:
  - `src/app/` — routes and framework-special files (`layout.tsx`, `error.tsx`, `loading.tsx`, `not-found.tsx`, `globals.css`).
  - `src/components/layout/` — structural primitives (`Page`, `Section`, `Container`, `Header`, `Footer`).
  - `src/components/ui/` — presentational primitives (`Typography`, `Button`, `Card` family, `Badge`, `Quote`, `Reveal`).
  - `src/config/` — `site.ts` (brand/name/URL), `navigation.ts` (nav item list), `metadata.ts` (root `Metadata` object), `env.ts` (Zod-validated env schema, currently just `NODE_ENV`).
  - `src/seo/` — `createMetadata.ts` (per-page metadata factory), `defaults.ts` (SEO defaults derived from `site.ts`), `robots.ts`, `sitemap.ts`.
  - `src/providers/` — `AppProvider` (root composition point) and `ThemeProvider` (currently a pass-through).
  - `src/lib/logger.ts` — trivial timestamped console logger.
  - `src/utils/cn.ts` — `clsx` + `tailwind-merge` class-merging helper used by every styled component.
  - `src/types/index.ts` — generic `Nullable`/`Optional`/`Maybe` utility types.
  - `src/styles/tokens.css` — a handful of CSS custom properties (radius, container width, transition durations) imported into `globals.css`.

## Routing
Fully static, file-based App Router routing. Fifteen routes total, two of which are dynamic segments:
- `/`, `/about`, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`, `/industries`, `/team`, `/careers`, `/blog`, `/blog/[slug]`, `/contact`, `/privacy`, `/terms`, plus framework-generated `/_not-found`, loading and error boundaries.
- No route groups, no parallel/intercepting routes, no middleware file present.

## Rendering
- Every page is a **React Server Component** by default; `"use client"` is scoped narrowly to exactly four files: `Header.tsx`, `Reveal.tsx`, `ContactForm.tsx`, and the two provider stubs (`AppProvider`, `ThemeProvider`).
- Dynamic segment pages (`services/[slug]`, `work/[slug]`, `blog/[slug]`) are `async function` Server Components that `await params` (Next.js 15+/16 async-params convention) — but **do not fetch or look up any real per-slug data**. They synthesize a display title by title-casing the slug string and otherwise render identical hardcoded body copy regardless of which slug was requested. See **Limitations** and **Notable Components** below — this is a deliberate but consequential simplification.
- No client-side data fetching, no React Query/SWR, no external API calls anywhere in the codebase.

## Data flow
There is no backend and no persistence layer. All "content" is one of:
1. Hardcoded arrays/objects at the top of a page file (`services`, `works`, `team`, `positions`, `posts`, `industries`) — page-local, not shared.
2. Global brand/nav config in `src/config/` (`site.ts`, `navigation.ts`).
3. Static assets in `public/`.

The `ContactForm` is the only interactive "submission" surface, and it deliberately does **not** simulate a backend: it builds a `mailto:` URL from form field values and redirects the browser to it (`window.location.href = "mailto:..."`), consistent with `.hubzero/principles.md`'s "Honest Demonstration Over Simulated Functionality."

## Component organization
Two-tier component system, matching Blueprint Base convention:
- **Layout primitives** (`Page`, `Section`, `Container`) are unstyled-beyond-spacing wrappers (`<main>`, `<section>`, `<div>`) that exist purely to standardize vertical rhythm (`py-16 md:py-24`) and max-width/gutters (`max-w-7xl px-6 lg:px-8`).
- **UI primitives** (`Typography`, `Button`, `Card`, `Badge`) are `class-variance-authority` (`cva`)-driven variant components, all `forwardRef`, all accepting `className` for Tailwind override via `cn()` (clsx + tailwind-merge).
- Every page composes these primitives directly with page-local JSX and page-local data arrays — there is no shared "ServiceCard" or "PostCard" component; each page hand-rolls its list rendering with `Card`/`Typography` primitives. This is a specific, repeatable pattern across the codebase (see **Reusable Patterns**).

## Styling
- Tailwind CSS 4, CSS-first theme configuration via `@theme` in `globals.css` (no legacy JS config file).
- Two font families loaded via `next/font/google`: **Inter** (`--font-inter`, sans, body/UI) and **Playfair Display** (`--font-playfair`, serif, all headings/display type) — mapped into Tailwind's `font-sans`/`font-serif` utilities.
- Color system is a single neutral scale: Tailwind's `stone-*` palette used throughout for every surface, text, and border color — no brand color token beyond stone black/white polarity. This is a direct expression of Editorial's "typography over color" principle.
- `src/styles/tokens.css` supplies a minimal token layer (border radius scale, container width, transition durations) but most components hardcode Tailwind utility values directly rather than referencing these tokens — the token layer is thin and only partially adopted.

## Accessibility
- Semantic landmark structure throughout (`<header>`, `<main>`/`Page`, `<footer>`, `<nav>`, `<address>`, `<blockquote>`/`<figure>`/`<figcaption>` in `Quote`).
- Form inputs in `ContactForm` all have associated `<label htmlFor>` and `required` attributes.
- `Button`'s `cva` base class includes `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2` — deliberate focus-visible styling rather than suppressing outlines.
- Mobile menu toggle button has `aria-label="Toggle Menu"`.
- Gaps: `error.tsx` and `loading.tsx` (see **Limitations**) do not meet the bar `.hubzero/principles.md` sets for these routes (no accessible live region on the loading state, minimal recovery affordance styling on the error boundary — both are unstyled/bare compared to the rest of the site).

## Animation philosophy
- `framer-motion` (v12) is the sole animation dependency, used in exactly three places: `Header` (nav entrance, active-tab indicator via shared `layoutId`, mobile menu open/close `AnimatePresence`), and `Reveal` (a generic scroll-triggered fade/rise-into-view wrapper using `whileInView` with `viewport={{ once: true, margin: "-100px" }}`).
- Motion consistently uses the same custom cubic-bezier ease, `[0.16, 1, 0.3, 1]` ("expo-out"-style), across both components — a deliberate, repeated signature rather than default framer-motion easing, and consistent with Editorial's "page settling into place" motion philosophy (opacity + a modest `y` translate, never scale/bounce/elastic).
- `Reveal` is used sparingly (only on the homepage in this snapshot) rather than on every section of every page — motion is treated as punctuation, not default behavior.

## Responsive strategy
- Tailwind's default breakpoint scale (`md`, `lg`) used consistently; mobile-first utility ordering throughout.
- The `Header` is the most responsively-elaborate component: desktop shows an inline nav + CTA inside the floating pill; below `md` it collapses to a hamburger button that opens a full-screen `AnimatePresence` overlay with large serif nav links and a full-width CTA — a genuine mobile-specific composition rather than a squeezed desktop layout, in line with `.hubzero/design/mobile-experience.md`'s "composition may change" guidance.
- Most content grids (`services`, `team`, `work`) use `grid-cols-1` on mobile expanding to 2–3 columns at `md`/`lg` — a standard responsive reflow rather than a mobile-specific recomposition; per the Mobile Experience Design guidance in `.hubzero/design/mobile-experience.md`, this satisfies responsive layout but a genuine Mobile Experience Design pass (as described in `.hubzero/agents/design-review.md`) has not obviously been executed against every component listed there (cards, statistics, footers).

---

# Design System

## Typography
- **Two-family system:** Playfair Display (serif) for all headings (`h1`–`h4`) and the `Quote` component; Inter (sans) for body copy, captions, and UI chrome.
- Scale is defined once in `Typography.tsx` via `cva` variants: `h1` (4xl→7xl), `h2` (3xl→5xl), `h3` (2xl→3xl), `h4` (xl→2xl), `lead` (lg→2xl, light weight, muted), `body` (base→lg), `small`, `caption` (xs, uppercase, wide tracking — used as an eyebrow/kicker label on nearly every section).
- The `Typography` component auto-selects a sensible default HTML tag per variant (`h1`→`<h1>`, `caption`/`small`→`<span>`, else `<p>`) but accepts an `as` prop override — keeps semantic heading order decoupled from visual size, which lets pages use `h1` styling on an `h2` element or vice versa without breaking outline structure.
- `caption` variant (uppercase, tracked-out, xs) is the recurring "eyebrow" label pattern used at the top of nearly every section across every page.

## Spacing
- `Section` standardizes vertical rhythm at `py-16 md:py-24`, overridden per-instance (`py-24 md:py-32 lg:py-40` for hero sections, etc.) but always as a Tailwind padding utility, never inline styles.
- `Container` standardizes horizontal gutters at `max-w-7xl px-6 lg:px-8`.
- Generous gap values (`gap-12`, `gap-16`, `gap-24`) are the norm between major blocks — consistent with Editorial's "when in doubt, add more space" principle.

## Color
- Effectively monochrome: the entire palette is Tailwind `stone` (50 through 950) plus pure black/white text-on-dark inversions. No accent/brand hue is used anywhere in the UI.
- Dark sections (`bg-stone-900`/`bg-stone-950`) are used as a compositional device — About/Industries/Careers hero, Footer, homepage "Recent Work" band — to create the "alternating text-forward/image-forward" rhythm Editorial calls for, not as a persistent dark mode.
- No true dark-mode/light-mode theme switching exists despite the presence of a `ThemeProvider` — see **Limitations**.

## Layout
- 12-column CSS grid (`md:grid-cols-12`) is the dominant pattern for asymmetric editorial layouts (e.g., About's "sticky 4-col caption label beside 8-col flowing copy" pattern, Services' "5-col pitch beside 6-col capability panel").
- Standard content grids (Team, Work, Blog list) use simpler `grid-cols-1 md:grid-cols-2/3` card grids.

## Component language
- Corners: `rounded-2xl`/`rounded-3xl` used consistently on media/panels, `rounded-full` on every interactive pill (buttons, badges, header shell, nav CTA, form inputs) — a deliberate two-corner-value system (soft-rounded content blocks, fully-round interactive controls), not sharp corners as the Editorial doc's "sharp or very subtly rounded" guidance would suggest in its strictest reading — see **Engineering Decisions**.
- Borders: hairline `border-stone-200`/`border-stone-800` rules used as section separators (`border-t`/`border-b`) far more often than boxes-around-content, matching Editorial guidance directly.
- Shadow: near-absent; the only shadows in the codebase are very soft (`shadow-sm`, or a custom `shadow-[0_8px_30px_rgb(0,0,0,0.04)]` on the scrolled header pill) — consistent with Editorial's "shadow nearly absent, functional only" rule.
- Cards read as article previews (image + client/category metadata row + serif title + description), never as bordered product tiles — `Card` itself ships with **no border and no shadow by default**, leaving pages to add `border` only where they explicitly want a boxed panel (e.g., Services' capability panel).

## Interaction patterns
- Hover states favor understated shifts: underline-on-hover for text links, `bg-stone-800`/color-shift for buttons, `-translate-y-1` lift + `scale-105` image zoom for cards (a slightly stronger effect than "pure" Editorial doctrine's most restrained reading, but still far short of Modern/Bold treatment).
- Active-state affordance: `active:scale-[0.98]` on all button variants — a tactile "press" cue.
- The header's active-nav-item indicator (`layoutId="active-nav"`) uses framer-motion's shared-layout animation so the underline slides between nav items on route change rather than popping.

---

# Features

## 1. Fifteen-route corporate information architecture
**Purpose:** Cover the full corporate-site funnel `.hubzero/architecture/corporate.md` prescribes — Identity → Credibility → Capabilities → Process → Differentiation → Conversion — across dedicated pages (Home, About, Services (+detail), Work (+detail), Industries, Team, Careers, Blog (+article), Contact, legal pages).
**Implementation:** Static Server Component pages, each independently composing layout/UI primitives with page-local hardcoded content arrays.
**Engineering considerations:** No shared content/data layer between pages means the same "list card" pattern is reimplemented per page rather than abstracted — see **Reusable Patterns** for the tradeoff discussion.

## 2. Floating pill navigation with per-route theming (signature experience)
**Purpose:** The blueprint's one "deliberate, memorable interaction" per `.hubzero/design/principles.md`'s "Signature Experience" requirement.
**Implementation:** `Header.tsx` renders a fixed, centered, rounded-full nav bar that:
  - Starts transparent/borderless on load, animates in with a `y`/opacity entrance.
  - Gains a frosted-glass (`backdrop-blur-xl`) stone background, hairline border, and soft shadow once `window.scrollY > 50` (`hasPillBackground`).
  - Independently switches between light and dark color treatment based on route (`isDarkHero` = an explicit allowlist of routes with dark hero sections: `/about`, `/industries`, `/careers`) combined with scroll and mobile-menu state (`isDarkTheme = isDarkHero && !scrolled && !mobileMenuOpen`).
  - Swaps the logo asset (`logo.svg` vs `logo-light.svg`) to match theme.
**Engineering considerations:** This is a textbook implementation of `.hubzero/principles.md`'s "Interface State Should Be Independently Derived" principle — `scrolled`, `mobileMenuOpen`, and `isDarkHero` are each computed from their own source (scroll listener, click state, static route list) and then *composed* into `isDarkTheme`/`hasPillBackground`, rather than one flag being derived by chaining through another. The dark-hero route list is a hardcoded array rather than page-level metadata, which is the one piece of this pattern that will need attention if new dark-hero pages are added later (see **Developer Notes**).

## 3. Configuration-driven branding
**Purpose:** Let a client project reskin the site without touching component code, per Blueprint Base's "Configuration Over Hardcoding" principle.
**Implementation:** `src/config/site.ts` centralizes name/description/URL/author; `src/config/navigation.ts` centralizes the nav item list consumed by both `Header` and `Footer`. Global visual identity (fonts, color scale, radii) is swappable via `globals.css`'s `@theme` block and `tokens.css`.
**Engineering considerations:** Page-level content (service list, team bios, work case studies, blog posts) is **not** centralized — it lives as arrays inside each page component. This is a conscious scope boundary (brand config vs. page content) but means "content update" work still requires editing `.tsx` files, not just config.

## 4. Metadata / SEO infrastructure
**Purpose:** Give every route correct `<title>`, description, Open Graph, and Twitter Card metadata via Next.js's typed Metadata API.
**Implementation:** Root `src/config/metadata.ts` sets the sitewide default/template title, OG defaults, and Twitter card type, consumed in `layout.tsx`. Most individual pages export their own lightweight `export const metadata = { title, description }` object, which Next.js merges against the root template (`%s | Meridian Group`).
**Engineering considerations:** A more complete per-page metadata factory (`src/seo/createMetadata.ts`, layering canonical URLs, OG image, keywords) exists but **is not imported or used anywhere in the codebase** — every page hand-writes a plain metadata object instead. Likewise `src/seo/robots.ts` and `src/seo/sitemap.ts` are fully-formed Next.js `MetadataRoute.Robots`/`MetadataRoute.Sitemap` generator functions, but Next.js only recognizes these as live routes when they live at `src/app/robots.ts`/`src/app/sitemap.ts` (or a route segment) — **no such files exist in `src/app/`**, so `/robots.txt` and `/sitemap.xml` are not actually served by this build. See **Limitations**.

## 5. Honest, backend-less contact form
**Purpose:** Provide a working "get in touch" conversion path without pretending to have a backend the blueprint doesn't have.
**Implementation:** `ContactForm.tsx` is a client component that intercepts submit, serializes the four fields into a plaintext body, and navigates the browser to a `mailto:` URL with pre-filled subject/body.
**Engineering considerations:** Directly implements `.hubzero/principles.md`'s "Honest Demonstration Over Simulated Functionality" — no fake success toast, no silently-discarded POST. Tradeoff: relies on the visitor having a configured mail client; there's no server-side validation or spam protection because there is no server.

## 6. Scroll-triggered content reveals
**Purpose:** Add restrained, reading-paced motion to long-form sections without competing with content, per Editorial's Motion Language.
**Implementation:** `Reveal.tsx` wraps a block in `framer-motion`'s `whileInView`, animating `opacity 0→1` and `y 30→0` once, the first time it enters viewport (`margin: "-100px"` pre-trigger).
**Engineering considerations:** Applied selectively (homepage sections in this snapshot) rather than globally — avoids the "every section fades in" fatigue that would contradict Editorial's "motion in service of reading, not spectacle" rule.

---

# Engineering Decisions

- **Monochrome (stone-only) palette instead of a brand accent color.** Tradeoff: maximizes the "typography as personality" Editorial signature and guarantees contrast/accessibility is trivially consistent; cost is that all differentiation between sections comes from light/dark inversion and imagery alone, so a real client re-skin will likely need to introduce at least one accent color deliberately (Editorial permits this) rather than inherit stone everywhere.
- **`cva` + `cn()` (clsx/tailwind-merge) for every variant component**, rather than a heavier component library (e.g., a full Radix/shadcn primitive set). Tradeoff: keeps the dependency surface small (no Radix, no headless-UI runtime) and the component code fully legible in three files, at the cost of hand-building accessibility primitives (focus trapping in the mobile menu, for instance) rather than inheriting them from a library.
- **Page-local content arrays instead of a shared content/data module.** Tradeoff: extremely fast to read any single page in isolation (everything needed is at the top of the file); cost is duplicated card-rendering JSX across Services/Work/Team/Blog/Careers pages and no single source of truth if, e.g., the same "Systems Engineering" category needs to stay in sync between the homepage teaser and the full Services page (already slightly inconsistent — see **Limitations**).
- **`services/[slug]`, `work/[slug]`, `blog/[slug]` derive a title from the slug instead of looking up real per-item data.** This was very likely a deliberate simplification (no data layer exists to look up against) rather than an oversight, but it is a decision with real user-facing consequences worth flagging explicitly — see **Limitations**.
- **`AppProvider` and `ThemeProvider` exist as empty pass-through wrappers**, and only `AppProvider` is actually mounted in `layout.tsx`. This reads as intentional Blueprint Base scaffolding — a designated extension point for a future client project that needs client-side context (e.g., real theme switching, analytics, feature flags) without that project having to invent the wiring itself — rather than dead code the blueprint forgot to remove. Left as-is, it is inert.
- **Two-corner-radius interactive language (`rounded-full` pills for anything clickable, `rounded-2xl`/`3xl` for content panels)** rather than the Editorial doc's more literal "sharp or very subtly rounded" guidance. This is a defensible, consistent system in its own right (every button/badge/input in the site uses the same full-round treatment, every media/panel uses the same soft-round treatment), but a strict Design Review pass against `.hubzero/design/languages/editorial.md`'s Corner Language section would likely flag the fully-round pills as reading closer to Modern/SaaS than Editorial's "printed page" restraint.

---

# Reusable Patterns

- **Independently-derived interface state composition** (`Header.tsx`'s `scrolled` / `mobileMenuOpen` / `isDarkHero` → composed `isDarkTheme` / `hasPillBackground`) — directly reusable as the reference implementation for `.hubzero/principles.md`'s "Interface State Should Be Independently Derived" principle in any future blueprint.
- **`cva`-variant primitive component with `as`-prop tag override** (`Typography.tsx`) — decouples visual scale from semantic HTML level; a clean pattern to copy into any design-language blueprint that needs the same flexibility.
- **`Page` / `Section` / `Container` triad** as the universal page-shell contract — every single page in this repo composes exactly these three, meaning any future page automatically inherits correct vertical rhythm and gutter behavior with zero new styling decisions.
- **Route-driven theme allowlist for a persistent floating nav** — a small, explicit `string[]` of "dark hero" routes checked against `usePathname()`, rather than a heavier per-page context/metadata mechanism. Simple, readable, and easy to audit, at the cost of needing manual updates when new dark-hero pages are added.
- **`mailto:`-based form submission** as the reference pattern for "conversion action with no backend" anywhere in the HubZero ecosystem that needs to stay honest about not having a server.

---

# Lessons Learned

- **Infrastructure that isn't wired up is worse than infrastructure that doesn't exist**, because it reads as done. `createMetadata.ts`, `robots.ts`, and `sitemap.ts` are all complete, correct, well-written implementations — and none of them run. A reviewer skimming `src/seo/` would reasonably assume SEO metadata generation and `/robots.txt`/`/sitemap.xml` are live. The lesson for future blueprints: infrastructure under `src/seo/` (or any directory) is only real once something in `src/app/` actually imports/re-exports it — verifying wiring, not just file existence, needs to be an explicit Engineering Review step.
- **Slug-derived placeholder titles are a reasonable stopgap that quietly becomes a bug once a listing page and its detail page disagree.** `work/page.tsx` lists four distinct case studies with distinct clients, images, and categories; `work/[slug]/page.tsx` ignores all of that and always renders the same "trading infrastructure" copy and logistics image regardless of which case study was clicked. This is exactly the kind of inconsistency `.hubzero/principles.md`'s "Finish Completely" principle is meant to catch — the happy path (page renders, doesn't 404) works, but the actual content is wrong for three of four links.
- **A monochrome palette makes visual consistency easy to achieve almost by default** — worth noting as a reason Editorial-language blueprints may look more "finished" earlier in development than color-driven design languages, and a reminder not to mistake that ease for the visual/design review being unnecessary.

---

# Notable Components

- **`Header.tsx`** (`src/components/layout/Header.tsx`) — the most architecturally significant component in the codebase. Owns scroll detection, mobile menu state, route-aware theming, and the framer-motion entrance/active-indicator/mobile-overlay animations. Client component; the only place in layout/ that is.
- **`Typography.tsx`** (`src/components/ui/Typography.tsx`) — the entire type-scale system in one `cva` config; every heading, paragraph, caption, and lead-in across all fifteen pages routes through this one component.
- **`Reveal.tsx`** (`src/components/ui/Reveal.tsx`) — an 18-line generic scroll-reveal wrapper; the entire motion vocabulary for content entrance beyond the header lives here.
- **`Card.tsx`** (`src/components/ui/Card.tsx`) — a compound component (`Card`, `CardImage`, `CardHeader`, `CardTitle`, `CardDescription`, `CardFooter`, `CardContent`) deliberately shipped with no default border/shadow, so every page decides its own boxed-vs-borderless treatment.
- **`ContactForm.tsx`** (`src/app/contact/ContactForm.tsx`) — the only component in the codebase implementing actual (non-decorative) client-side interaction logic beyond navigation/animation.
- **`AppProvider.tsx`** / **`ThemeProvider.tsx`** (`src/providers/`) — inert extension points; `AppProvider` is mounted in `layout.tsx`, `ThemeProvider` is defined but not mounted anywhere.

---

# Developer Notes

- The dark-hero route allowlist in `Header.tsx` (`["/about", "/industries", "/careers"]`) is a plain string array checked against `usePathname()`. Adding a new page with a dark hero section requires manually appending its path here — there is no page-level flag/metadata driving this, so it's easy to forget.
- `env.ts` currently validates only `NODE_ENV`; it's the correct extension point for any future required environment variable (API keys, analytics IDs) rather than reading `process.env` ad hoc elsewhere.
- `logger.ts` is a trivial `console` wrapper with ISO timestamps; it is not currently called anywhere in the codebase outside its own definition — available infrastructure, not yet adopted.
- `robots.ts`/`sitemap.ts` need to be moved to (or re-exported from) `src/app/robots.ts` / `src/app/sitemap.ts` before they will actually produce `/robots.txt` / `/sitemap.xml` — see **Limitations**.
- `sitemap.ts`'s implementation, even once wired up, only returns the homepage entry — it would need to be extended to enumerate all fifteen routes (and the dynamic slug pages) to be a complete sitemap.
- Node/TypeScript path alias `@/*` → `./src/*` is configured in `tsconfig.json` and used consistently throughout — no relative `../../` import chains anywhere observed.
- No test files exist anywhere in the repository (`src/**/*.test.*`, `src/**/*.spec.*` — none found). Verification is limited to `npm run lint` and `npm run typecheck` per `README.md`.

---

# Interesting Engineering

- The **shared `layoutId="active-nav"`** framer-motion technique on the header's active-route underline is a small but genuinely elegant touch: instead of each nav link independently animating its own underline in/out, framer-motion interpolates a single shared element's position between renders, producing a smooth "slide" between nav items as the route changes — a much higher-craft result than the CSS-only equivalent for very little code.
- The **`isDarkTheme` boolean formula** (`isDarkHero && !scrolled && !mobileMenuOpen`) packs three independently-sourced booleans into one readable line and is the cleanest concrete illustration in the codebase of the "compose, don't chain" state principle `.hubzero/principles.md` asks for — worth pointing to as a teaching example for future blueprints, not just this one.
- The custom cubic-bezier `[0.16, 1, 0.3, 1]` is reused verbatim in both `Header` and `Reveal`, which is a small detail but signals the easing curve was chosen once, deliberately, as part of the blueprint's motion identity — rather than each component picking its own "feels right" curve.

---

# Limitations

Intentional/acknowledged (consistent with `.hubzero/principles.md`'s "Honest Demonstration Over Simulated Functionality"):
- No real backend, database, CMS, or authentication anywhere — every route is static content.
- The contact form does not send data anywhere the visitor doesn't control; it opens a `mailto:` draft. There is no server-side validation, rate limiting, or spam protection because there is no server.
- All company/people/case-study/blog content is explicitly fictional placeholder content ("Meridian Group" does not exist), stated in `README.md` and repeated on the About page itself.

Unintentional / worth flagging to an engineer picking this up (not stated anywhere in repo docs):
- **`/robots.txt` and `/sitemap.xml` are not actually served.** `src/seo/robots.ts` and `src/seo/sitemap.ts` are correctly written Next.js MetadataRoute generators, but Next.js only treats these as live routes when present under `src/app/` (or a route segment) — they are not re-exported there.
- **`createMetadata()` is unused.** Every page hand-writes its own metadata object; the richer per-page SEO factory (canonical URLs, OG images, keywords) in `src/seo/createMetadata.ts` is dead code in this snapshot.
- **`ThemeProvider` is unused.** Defined, exported, but never mounted in `layout.tsx` or anywhere else.
- **Dynamic detail pages (`services/[slug]`, `work/[slug]`, `blog/[slug]`) do not reflect the slug they were navigated with**, beyond title-casing it into a heading. Body copy, images, and metadata on these pages are static and identical regardless of which list item was clicked — most visibly wrong on `/work/[slug]`, where the four case studies listed on `/work` have genuinely different clients/industries/images but all route to the same hardcoded "trading infrastructure" detail content.
- **`error.tsx` and `loading.tsx` are unstyled**, using bare `<button>`/`<p>` with no Tailwind classes and none of the site's Typography/Button primitives — a visible break in visual consistency versus every other route, and short of the accessibility bar (`.hubzero/principles.md`'s "Accessibility by Default" extends explicitly to these framework-generated routes) — no live region on the loading state, minimal focus/contrast treatment on the error recovery button.
- **No automated tests** of any kind (unit, integration, e2e) exist in the repository.
- Page-local content occasionally drifts: e.g., the homepage's "Recent Work" teaser and the full `/work` case-study list are independently hardcoded arrays rather than sharing a source, so keeping them in sync during content updates is a manual responsibility.

---

# Suggested Tags

`hubzero-blueprint`, `corporate`, `editorial-design`, `nextjs-16`, `app-router`, `react-19`, `typescript`, `tailwindcss-4`, `framer-motion`, `class-variance-authority`, `server-components`, `static-marketing-site`, `consulting-firm`, `b2b`, `design-system`, `floating-navigation`, `serif-typography`, `monochrome-palette`, `no-backend`, `reference-implementation`, `fictional-demo-content`

---

# Structured Summary

```yaml
name: blueprint-corporate-editorial
type: focused-blueprint
status: feature-complete-reference-implementation
repository: blueprint-corporate-editorial
technologies:
  - Next.js 16.2.10 (App Router)
  - React 19.2.4
  - TypeScript 5 (strict)
  - Tailwind CSS 4
  - framer-motion 12
  - class-variance-authority
  - clsx / tailwind-merge
  - zod
  - sharp
architecture: corporate
design_language: editorial
domains:
  - meridiangroup.test (fictional placeholder domain)
primary_language: TypeScript
platforms:
  - web
difficulty: intermediate
maturity: reference-implementation-not-release-verified
key_features:
  - 15-route corporate information architecture (Home, About, Services (+detail), Work (+detail), Industries, Team, Careers, Blog (+article), Contact, Privacy, Terms)
  - floating pill navigation with scroll-based frosted background and per-route dark/light theming
  - cva-driven Typography/Button/Card/Badge primitive system
  - Page/Section/Container layout shell used by every route
  - scroll-triggered Reveal motion component
  - honest mailto-based contact form with no backend
  - configuration-driven branding (site.ts, navigation.ts)
engineering_highlights:
  - independently-derived interface state composition in Header (scroll, route-theme, mobile-menu computed separately then composed)
  - shared framer-motion layoutId active-nav-indicator animation
  - single reused custom easing curve across all motion
  - two-tier layout-primitive / ui-primitive component architecture
related_projects:
  - HubZero Blueprint Base
  - other HubZero Focused Blueprints (architecture x design-language combinations)
keywords:
  - hubzero
  - blueprint
  - corporate website
  - editorial design
  - consulting firm
  - Next.js App Router
  - design system
  - Tailwind CSS 4
  - framer-motion
  - static marketing site
  - fictional demo company
  - Meridian Group
```
