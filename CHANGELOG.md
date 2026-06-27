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

### Still open (later milestones)
- Real auth (Clerk) + `middleware.ts` route protection — Stage 7.
- Backend/API + database persistence — Stage 11.
- Stripe checkout flow — Stage 10.
- Live AI integration — Stage 6.
- `/blog` and `/docs` (still linked from the footer), plus `/signup`,
  `/forgot`, `/verify`.
