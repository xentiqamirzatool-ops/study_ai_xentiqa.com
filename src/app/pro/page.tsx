import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';
import { plans } from '@/data/plans';

export const metadata = {
  title: 'Pro — StudyAI',
  description: 'Upgrade to StudyAI Pro for AI tools, certificates, and premium learning features.',
};

const BENEFITS = [
  {
    title: 'AI Tutor',
    description: 'Get explanations, summaries, quiz help, and study support.',
    icon: Sparkles,
  },
  {
    title: 'Certificates',
    description: 'Complete courses and earn shareable certificates.',
    icon: Trophy,
  },
  {
    title: 'Faster Learning',
    description: 'Use guided roadmaps and AI tools to stay consistent.',
    icon: Zap,
  },
  {
    title: 'Safe Learning',
    description: 'Beginner-friendly structure with privacy-first design.',
    icon: ShieldCheck,
  },
];

export default function ProPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">
            <Crown className="h-3.5 w-3.5" />
            StudyAI Pro
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Unlock AI tools, certificates, and faster learning
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Start free, then upgrade when you are ready for premium AI learning features.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative flex flex-col p-6 ${
                plan.highlight ? 'border-primary-500 shadow-glow' : ''
              }`}
            >
              {plan.highlight && (
                <div className="badge badge-ai absolute -top-3 left-1/2 -translate-x-1/2">
                  Popular
                </div>
              )}

              <h2 className="text-xl font-black text-[var(--text-strong)]">
                {plan.name}
              </h2>

              <div className="mt-3 text-4xl font-black text-[var(--text-strong)]">
                {plan.priceLabel}
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--text-body)]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={`btn mt-7 ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="container-wide py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
              Why Pro
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
              Built for serious learners
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="card p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-black text-[var(--text-strong)]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}