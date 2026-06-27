# StudyAI — Launch Checklist (Phases 0–7)

A single, ordered guide to take StudyAI from "demo that builds" to "deployed
product." **Do the phases in order** (B → C → D → 6 depend on each other). After
every phase run `npm run typecheck` and `npm run build`. On Windows PowerShell,
run commands on separate lines (`&&` is not supported; use `cmd` if you want
`&&`).

Working directory for all commands:

```powershell
cd D:\Study_AI\study_ai_xentiqa.com
```

Legend: ☐ = to do.

---

## Phase 0 — Verify what's already applied  (~5 min)

☐ Run the build and dev server:
```powershell
npm run typecheck
npm run build
npm run dev
```
☐ Open http://localhost:3000 and click through:
`/features`, `/faq`, `/privacy`, `/terms`, `/careers`, `/blog`, `/docs`,
`/admin/analytics`, `/admin/payments`, `/admin/moderation`, `/admin/ai`,
`/admin/logs`, `/settings/theme`, `/checkout/success`, and any course lesson
(scroll to the new quiz).
☐ If `typecheck`/`build` show errors, stop and fix them first.

---

## Phase 1 — Create accounts & collect keys  (~30 min)

☐ **Clerk** (auth) — https://dashboard.clerk.com → create application →
copy **Publishable key** + **Secret key**.
☐ **Supabase** (database) — https://supabase.com → new project →
Settings → Database: copy **pooled** (port 6543) and **direct** (5432) connection
strings; Settings → API: copy **anon** and **service-role** keys.
☐ **Stripe** (payments) — https://dashboard.stripe.com → create a "Pro" product
with **monthly** and **yearly** recurring prices → copy the two **price IDs** +
**Publishable/Secret** keys. Install the Stripe CLI.
☐ **OpenAI** (AI, optional) — https://platform.openai.com → create an **API key**.
☐ Create `.env.local` (copy from `.env.example`) and fill values as you collect
them. Only `NEXT_PUBLIC_*` vars reach the browser.

---

## Phase 2 — Milestone B: Real auth (Clerk)  (~1–2 hrs)

Full detail: `StudyAI_MilestoneB_Clerk_Auth_Patch.md`.

☐ Install:
```powershell
npm install @clerk/nextjs
```
☐ Add to `.env.local`:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```
☐ Create `src/middleware.ts` — protects `/dashboard`, `/profile`, `/settings`,
etc., and gates `/admin` on an admin role (full code in the patch).
☐ Wrap `src/app/layout.tsx` in `<ClerkProvider>` (keep `ThemeProvider` inside).
☐ Add Clerk auth routes: `src/app/login/[[...rest]]/page.tsx` (`<SignIn/>`) and
`src/app/signup/[[...rest]]/page.tsx` (`<SignUp/>`); delete the old
`src/app/login/page.tsx`. Forgot-password + email verify are built into Clerk.
☐ Replace demo auth: delete `DEMO_ACCOUNTS` from `src/lib/auth.ts`; simplify
`src/app/admin/layout.tsx` to use `auth.protect()`.
☐ Swap header Login/Profile for `<SignedIn/>`, `<SignedOut/>`, `<UserButton/>`.
☐ In the Clerk dashboard, set your user's `publicMetadata` to `{ "role": "super-admin" }`.
☐ Remove the demo credentials block from `README.md`.
☐ Verify:
```powershell
npm run typecheck
npm run build
npm run dev
```
☐ Test: `/dashboard` logged out → redirect to login; `/admin` as non-admin →
redirect home; admin works after setting the role.

---

## Phase 3 — Milestone C: Database + persistence (Supabase + Prisma)  (~half day)

Full detail: `StudyAI_MilestoneC_Database_API_Patch.md`. (Requires Phase 2.)

☐ Install:
```powershell
npm install @prisma/client @supabase/supabase-js
npm install -D prisma
npx prisma init
```
☐ Add to `.env.local`:
```
DATABASE_URL="postgresql://...:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://...:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://xxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
SUPABASE_SERVICE_ROLE_KEY="eyJ..."
```
☐ Write `prisma/schema.prisma` — models `User`, `CourseProgress`, `LessonNote`,
`QuizResult`, `Bookmark` (full schema in the patch).
☐ Migrate:
```powershell
npx prisma migrate dev --name init
npx prisma generate
```
☐ Add `src/lib/prisma.ts` (singleton) and `src/lib/user.ts` (`getOrCreateUser`).
☐ Add API routes: `src/app/api/progress/route.ts` (+ notes, quiz-results,
bookmarks), each validated and scoped by the server-side Clerk `userId`.
☐ Wire UI: a "Mark complete" client button → `POST /api/progress`; save quiz
scores from `QuizPanel` → `POST /api/quiz-results`; load real progress on the
dashboard/lesson sidebar.
☐ Verify: mark a lesson complete, refresh → it persists; confirm the row in
Supabase → Table editor.

---

## Phase 4 — Milestone D: Payments (Stripe)  (~half day)

Full detail: `StudyAI_MilestoneD_Stripe_Payments_Patch.md`. (Requires B + C.)

☐ Install:
```powershell
npm install stripe @stripe/stripe-js
```
☐ Add to `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_PRO_MONTHLY=price_xxx
STRIPE_PRICE_PRO_YEARLY=price_yyy
```
☐ Extend the Prisma `User` with `stripeCustomerId`, `subscriptionStatus`,
`subscriptionPriceId`, `currentPeriodEnd`, then:
```powershell
npx prisma migrate dev --name add_subscription
```
☐ Add `src/lib/stripe.ts`, `src/app/api/checkout/route.ts`, and
`src/app/api/webhooks/stripe/route.ts` (verify the webhook signature!).
☐ Wire the `/pro` plan CTAs to call `/api/checkout`. (Result pages
`/checkout/success` + `/checkout/failed` already exist.)
☐ Add `isPro()` and gate `lesson.isPro` content + Pro AI tools.
☐ Test locally:
```powershell
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```
Use card `4242 4242 4242 4242`; confirm `subscriptionStatus` becomes `active` in
the DB.

---

## Phase 5 — Stage 6: Live AI  (~half day)

Full detail: `StudyAI_Stage6_Live_AI_Patch.md`. (Requires B; C optional for history.)

☐ Install:
```powershell
npm install openai
```
☐ Add to `.env.local`:
```
OPENAI_API_KEY=sk-...        # blank = demo/mock mode
AI_MODEL=gpt-4o-mini
```
☐ Add `src/lib/ai/service.ts` (provider-agnostic, mock-first),
`src/app/api/ai/chat/route.ts` (streaming, auth-gated), and
`src/lib/ai/useChat.ts` (client hook).
☐ Wire the AI tutor page to `useChat()` — message list, typing indicator,
error banner (`role="alert"`), sticky input. Reuse for `/ai-quiz`, `/flashcards`.
☐ Add a subtle "AI-generated — verify important info" note + per-user rate limit.
☐ Verify: works in demo mode with no key; streams real answers with a key.

---

## Phase 6 — Deploy (Vercel)  (~1 hr)

☐ Commit & push to GitHub (use `cmd` for `&&`, or separate lines in PowerShell):
```powershell
git add .
git commit -m "Production milestones: auth, db, payments, ai"
git push
```
☐ Import the repo at https://vercel.com.
☐ Add **all** env vars in Project → Settings → Environment Variables (use your
**live/production** keys, not test keys).
☐ Deploy. Then add the **production** Stripe webhook →
`https://yourdomain/api/webhooks/stripe` and put its signing secret in Vercel.
☐ Run `npx prisma migrate deploy` against the production DB (or enable it in the
build step).
☐ Add a custom domain in Vercel (SSL is automatic).

---

## Phase 7 — Before public launch

☐ Have `/privacy` and `/terms` **reviewed by a lawyer** — they are starter
templates only.
☐ Run Lighthouse (Performance + Accessibility) and fix any red flags.
☐ Test on a real phone (header, bottom nav, forms, lesson player, AI chat).
☐ Confirm AI route has per-user rate limiting and cost alerts.
☐ Unify the duplicated role type (`auth.ts` AuthRole vs `types/index.ts` Role)
into one source of truth now that Clerk owns roles.
☐ Set up basic error monitoring (e.g. Sentry) and uptime checks.

---

## The golden rule
Do the phases **in order**, run `npm run build` after each, and if anything
errors, capture the output and fix before moving on. Each milestone's full code
lives in its patch doc (referenced above).
