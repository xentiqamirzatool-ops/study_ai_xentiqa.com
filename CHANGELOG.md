# Changelog

## Audit fixes — Milestone A (June 2026)

Front-end / zero-dependency fixes from the production-readiness audit. No new
dependencies; no backend changes. Safe to ship after a local `typecheck` +
`build`.

### Added
- **Marketing & legal pages** (previously 404 from the footer):
  - `/features` — full feature overview.
  - `/faq` — accordion of common questions.
  - `/privacy` — Privacy Policy (template; review with counsel).
  - `/terms` — Terms of Service (template; review with counsel).
  - `/careers` — roles + perks.
- **`QuizPanel` component** (`src/components/QuizPanel.tsx`) — interactive
  multiple-choice knowledge check with per-option correct/incorrect feedback,
  scoring, and retry.

### Fixed
- **Lesson quizzes now render.** `lesson.quiz` existed in the data model and in
  60 lessons but was never displayed. The lesson page now renders `QuizPanel`
  when quiz data is present.
- **Fleshed out `/about`** — was a 3-line stub; now a proper story/mission/
  values page on the design system.

### Changed
- **`next.config.js`** — added security headers (HSTS, X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, Permissions-Policy), disabled
  `poweredByHeader`, and added an `images` config (AVIF/WebP, `remotePatterns`).
- **`.env.example`** — expanded from one variable to documented placeholders for
  Clerk (auth), Supabase + Prisma (DB), Stripe (payments), and the AI provider,
  grouped by roadmap stage.

## Audit fixes — Milestone A.2 (June 2026)

Additional zero-dependency, additive pages to remove dead links and complete the
demo admin set (Stage 9). No new dependencies.

### Fixed
- **Broken admin nav link:** `AdminSidebar` linked to `/admin/analytics`, which
  did not exist (404). Page added.

### Added
- **Admin pages:** `/admin/analytics`, `/admin/payments`, `/admin/moderation`,
  `/admin/ai`, `/admin/logs` (demo data, consistent with the existing admin),
  and wired all into `AdminSidebar` with role gating.
- **Footer link targets:** `/blog` and `/docs` (previously 404 from the footer).

## Audit fixes — Milestone A.3 (June 2026)

Settings sub-pages (Stage 8). No new dependencies.

### Added
- **`/settings/theme`** — *functional* theme switcher (light / dark / system) wired
  to the existing `ThemeProvider`; persists per device and reflects the live
  resolved theme. (Not a mock — this actually works.)
- **`/settings/security`** — password, 2FA, and active-session UI (controls go
  live with auth in Milestone B).
- **`/settings/billing`** — current plan, payment method, and invoice history UI
  (goes live with Stripe in Milestone D).
- Wired the `/settings` cards to link to the above (Profile, Security, Theme,
  Billing, Privacy); items without a page show a disabled "Coming soon".

## Audit fixes — Milestone A.4 (June 2026)

### Added
- **`/checkout/success`** and **`/checkout/failed`** — payment result pages on the
  design system (no dependency; the Stripe wiring in Milestone D redirects here).

## Header / mobile fixes (June 2026)

### Fixed
- **Header overflow on mobile / zoom-out.** The inline nav links and the
  Dashboard/Profile/Get Pro buttons used mismatched breakpoints, so they leaked
  onto narrow/zoomed viewports and pushed the page sideways. The header is now
  consistent at every width: logo + search + theme + menu always; Dashboard/
  Profile/Get Pro show only at `lg+`; all nav links live in the dropdown menu.
  No more horizontal shift on mobile.
- **Mobile search was blocked / grayed out.** The search modal rendered inside
  the bottom-nav's stacking context (`z-50`), so the floating AI button painted
  over it and ate the clicks. The modal is now rendered via `createPortal` to
  `document.body` (`z-1000`), so it always sits above everything. Header search
  is also usable on mobile now (icon button). Backdrop click closes it.

### Changed
- **"AI Tutor" now opens a floating window** on the current page instead of
  navigating to `/ai-tutor`. New `AITutorProvider` + `AITutorWidget` (a small
  chat panel); triggered by the header "AI Tutor" item, the mobile bottom-nav
  "Tutor" button, and the floating AI button. (Demo responses; wire to the live
  AIService in Stage 6 for real answers.)

## Mobile layout fixes (June 2026)

### Fixed
- **Sticky header was breaking** because `body { overflow-x: hidden }` turned the
  body into a horizontal scroll container, which disables `position: sticky`.
  Switched to `overflow-x: clip` (+ `max-width: 100%` on html/body) — this still
  prevents horizontal scrolling but does NOT break sticky, so the **header now
  stays pinned to the top while scrolling** on mobile.
- **No horizontal page shift on mobile.** Combined with the earlier header fix
  (action buttons/nav collapsed into the menu on small screens), the page now
  fits the viewport width; users only scroll horizontally if they intentionally
  zoom in.
- The **bottom navigation is fixed** (`fixed bottom-0`) and stays visible while
  scrolling (already correct in code); body keeps `pb-20` so content isn't
  hidden behind it.

> Note: the live site (study.ai.xentiqa.com) must be **redeployed** to pick up
> these changes — the screenshots showed the previous deployment.

## Branding — logo wired up (June 2026)

### Changed
- Replaced the placeholder gradient "S" badge with the real StudyAI logo image
  (`/logo.png`, rendered `rounded-full` via `next/image`) in the **Header**,
  **Footer**, and **Admin sidebar**.
- Pointed the **favicon / tab icon**, **Open Graph + Twitter** social preview,
  and **PWA manifest** icons (192 / 512 / maskable) at `/logo.png`.

### Action required
- Save the logo image as **`public/logo.png`** (square PNG, ≥512×512). See
  `public/PLACE_LOGO_HERE.txt`. Until that file is added the logo spots will be
  blank, but the build still passes.

## Mobile full-width, logo & scrollbar (June 2026)

### Fixed
- **Logo not loading (404).** `public/logo.png` didn't exist, so every logo spot
  404'd. Added a bundled **`public/logo.svg`** (brand mark) and a `Logo`
  component that uses `/logo.png` if you add it and **falls back to the SVG**
  otherwise — so the logo is never broken. Favicon, Open Graph/Twitter, and the
  PWA manifest now point at `/logo.svg` (no more 404s).
- **Right-side blank space / horizontal shift on mobile.** Guaranteed at the
  layout level: `overflow-x: clip` on `html`, `body`, and `main` (+ `w-full`/
  `max-w-full`), plus an explicit `viewport` (`width=device-width`). Combined
  with the earlier header collapse, pages now fill the viewport with no sideways
  movement at default zoom.

### Changed
- **Scrollbar** restyled to the brand dual-tone gradient (indigo→violet on
  WebKit; indigo on Firefox via `scrollbar-color`).
- Logo image references migrated from `next/image` to the resilient `Logo`
  component in Header, Footer, and Admin sidebar.

### Notes
- The AI Tutor window's **close (X) is top-right** of the panel (as required).
- To use your own robot logo, drop it at **`public/logo.png`** (square PNG,
  ≥512×512). No code change needed — it overrides the SVG automatically.

## Header mobile actions (June 2026)

### Fixed
- Mobile header was missing **Get Pro** and the **menu (hamburger) button**.
  Both are now always visible. Get Pro is compact on phones (crown + "Pro",
  expands to "Get Pro" at `sm+`). Dashboard/Profile remain desktop-only (`lg+`)
  and are available in the menu on mobile. Mobile header now reads:
  logo · search · theme · Pro · menu — fits without overflow.

## Header breakpoint hardening (June 2026)

### Fixed
- Pushed Dashboard/Profile to **`xl`** (≥1280px) instead of `lg`, removing the
  ~1024–1279px "tight zone" where Dashboard+Profile+Pro+menu could crowd and
  clip the Pro button / hamburger. Now everything below 1280px (phones, tablets,
  and desktop-width proxies) shows the compact header: logo · search · theme ·
  Pro · ☰. Dashboard/Profile remain available in the menu below 1280px.

## Header simplified (June 2026)

### Changed
- Removed **Dashboard** and **Profile** from the header bar entirely. The header
  is now consistent at all sizes: logo · search · theme · Pro · ☰. Dashboard,
  Profile, and Login are available inside the ☰ menu on every screen size.

## Logo, share image, search, AI tutor & lively pages (June 2026)

### Fixed
- **Favicon / tab icon** now uses your `/logo.png` (with `/logo.svg` fallback).
- **Social share preview** (WhatsApp, etc.): added `metadataBase` + Open Graph /
  Twitter image (`/logo.png`, 1200×1200) so shared links show a picture.
- **Global search** now responds to **Enter** — jumps to the best-matching
  course (or the courses page). Removed "AI Tutor" from its quick links.
- **Course-page search** overlap fixed: the global `.input` padding was
  overriding `pl-10`. Rebuilt as a clean input + small search button (live
  filtering as you type).

### Changed
- **AI Tutor removed from the header menu** — it's now a chatbot only, opened by
  the floating button and the bottom-nav "Tutor".
- **Code Playground** and **AI Lab** heroes now have an animated **neural-network
  backdrop** (`NeuralBackdrop`, reduced-motion aware) for a livelier feel.

### Action / note
- For the richest WhatsApp/Twitter preview, a 1200×630 banner is ideal; the
  square logo works as a thumbnail for now. Drop a `public/og.png` (1200×630)
  and I can point the share image at it.

## Favicon, share card, search, liveliness, footer (June 2026)

### Fixed
- **Favicon** forced to `/logo.png` only (was offering the SVG, which Chrome
  preferred). Clear the browser/site cache to see it update.
- **Share preview image** now generated dynamically as a real **1200×630 PNG**
  via `app/opengraph-image.tsx` (`next/og`). WhatsApp/Twitter/etc. now show a
  branded card — no dependency on a static file being deployed.
- **Global search effectiveness**: now also matches **course lesson titles** and
  filters the **Pages** (quick links) by your query; Enter jumps to the best
  match (course → page → courses).

### Changed
- **Every hero with `.neural-bg` is now animated** (drifting indigo/violet glow,
  reduced-motion aware) — courses, pro, about, features, faq, careers, settings,
  etc. Code Playground + AI Lab also have the canvas `NeuralBackdrop`.
- **Footer**: removed the "AI Powered Learning / Start Learning" promo card.

## Favicon + designed share card (June 2026)

### Fixed
- **Favicon** now uses Next's file convention `app/icon.svg` (the most reliable
  method) instead of the PNG that wasn't rendering. Removed the conflicting
  `metadata.icons`. Hard-refresh / clear cache to see it.
- **Share card** redesigned as a proper **1200×630 (1.91:1)** branded banner —
  logo mark + "Learn smarter, not harder." + a row of product offerings
  (Courses · AI Tutor · Roadmaps · Quizzes · Flashcards · Certificates) + URL —
  generated dynamically by `app/opengraph-image.tsx`. No longer just the logo.

### Still open (later milestones)
- Real auth (Clerk) + `middleware.ts` route protection — Stage 7.
- Backend/API + database persistence — Stage 11.
- Stripe checkout flow — Stage 10.
- Live AI integration — Stage 6.
- `/blog` and `/docs` (still linked from the footer), plus `/signup`,
  `/forgot`, `/verify`.
