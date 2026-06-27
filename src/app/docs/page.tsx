import Link from 'next/link';
import { ArrowRight, BookOpen, Compass, LifeBuoy, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Documentation — StudyAI',
  description: 'Get started with StudyAI: courses, roadmaps, AI tools, and account help.',
};

const SECTIONS = [
  {
    icon: Rocket,
    title: 'Getting started',
    description: 'Create an account, pick a roadmap, and start your first lesson.',
    href: '/courses',
  },
  {
    icon: Compass,
    title: 'Learning paths',
    description: 'Follow guided roadmaps from beginner to advanced.',
    href: '/learning-paths',
  },
  {
    icon: BookOpen,
    title: 'Using AI tools',
    description: 'How the AI tutor, quiz generator, and flashcards work.',
    href: '/ai-tutor',
  },
  {
    icon: LifeBuoy,
    title: 'Account & billing',
    description: 'Manage your profile, Pro plan, and preferences.',
    href: '/settings',
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">Docs</div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Documentation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Everything you need to get the most out of StudyAI.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.title} href={section.href} className="card group p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 transition group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-black text-[var(--text-strong)]">
                    {section.title}
                  </h2>
                  <ArrowRight className="h-4 w-4 text-primary-500" />
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
