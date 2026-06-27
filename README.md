# StudyAI

A premium, **dark-first** AI learning platform — courses, learning roadmaps, AI
study tools, a user dashboard, and an admin panel. Built with **Next.js 14
(App Router) · React 18 · TypeScript · Tailwind CSS · Lucide**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

Useful scripts:

```bash
npm run typecheck   # tsc --noEmit
npm run build       # production build
```

## Status

Front-end and design system are complete (dark-first, indigo/violet branding,
light/dark/system theme, responsive, SEO via sitemap/robots/manifest). Course
browsing, lessons (with interactive quizzes), AI tool pages, dashboard, and
admin are implemented on **static demo data**.

The production backbone is staged as ready-to-apply patches (see the audit
output): **Clerk auth + middleware**, **Supabase + Prisma persistence**,
**Stripe payments**, and **live AI**. See `CHANGELOG.md` for what has changed.

## Environment

Copy `.env.example` to `.env.local` and fill in the values for the features you
enable (Clerk / Supabase / Stripe / OpenAI). Only `NEXT_PUBLIC_*` variables are
exposed to the browser.

## Demo authentication ⚠️

Authentication is currently a **local demo only** (`src/lib/auth.ts`,
localStorage-based). It is **not secure and must not be used in production** —
replace it with Clerk (see the Milestone B patch) before launch.

Demo accounts for local testing at http://localhost:3000/admin/login:

| Role | Email |
|---|---|
| Super Admin | admin@studyai.com |
| Content Admin | editor@studyai.com |
| Student | user@studyai.com |

> The demo password is defined in `src/lib/auth.ts`. Do not ship hardcoded
> credentials — this entire demo-auth file is removed when Clerk is integrated.

## Project structure

```
src/
  app/            # routes (App Router): marketing, courses, ai-*, dashboard, admin, settings…
  components/     # layout (Header/Footer/MobileBottomNav/AdminSidebar), UI, home sections
  data/           # static course/lesson/plan/user/video content
  lib/            # auth (demo), utils
  types/          # shared TypeScript types
```
