import Link from 'next/link';
import { ArrowRight, Globe, Heart, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Careers — StudyAI',
  description: 'Join StudyAI and help build the future of AI learning.',
};

const PERKS = [
  { icon: Globe, title: 'Remote-first', description: 'Work from anywhere, async by default.' },
  { icon: Rocket, title: 'High ownership', description: 'Small team, real impact, fast shipping.' },
  { icon: Heart, title: 'Mission-driven', description: 'Help millions become AI-literate.' },
];

const ROLES = [
  { title: 'Senior Frontend Engineer', team: 'Engineering', type: 'Remote · Full-time' },
  { title: 'Product Designer', team: 'Design', type: 'Remote · Full-time' },
  { title: 'ML Engineer', team: 'AI', type: 'Remote · Full-time' },
  { title: 'Content Lead, AI Curriculum', team: 'Education', type: 'Remote · Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">We&apos;re hiring</div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Build the future of learning
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            We&apos;re a small, ambitious team using AI to make great education
            accessible to everyone.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-3">
          {PERKS.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.title} className="card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[var(--text-strong)]">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="container-wide py-14">
          <h2 className="text-2xl font-black text-[var(--text-strong)]">
            Open roles
          </h2>

          <div className="mt-6 space-y-3">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="card flex flex-wrap items-center justify-between gap-3 p-5"
              >
                <div>
                  <div className="font-black text-[var(--text-strong)]">
                    {role.title}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {role.team} · {role.type}
                  </div>
                </div>

                <Link href="/contact" className="btn btn-outline">
                  Apply
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Don&apos;t see your role?{' '}
            <Link href="/contact" className="font-bold text-primary-500">
              Tell us how you&apos;d help
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
