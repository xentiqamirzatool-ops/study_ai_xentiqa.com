import { CheckCircle2, Lock, PlayCircle, Trophy } from 'lucide-react';

const STEPS = [
  {
    title: 'Beginner',
    subtitle: 'AI basics, Python, prompts',
    status: 'Start here',
    icon: PlayCircle,
  },
  {
    title: 'Intermediate',
    subtitle: 'ML, data, projects',
    status: 'Build skill',
    icon: CheckCircle2,
  },
  {
    title: 'Advanced',
    subtitle: 'LLMs, agents, deployment',
    status: 'Go deeper',
    icon: Lock,
  },
  {
    title: 'AI Builder',
    subtitle: 'Portfolio and certificate',
    status: 'Final goal',
    icon: Trophy,
  },
];

export default function LearningRoadmap() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="container-wide py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
            Roadmap
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
            Follow a clear path from beginner to AI builder
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            StudyAI turns scattered tutorials into a guided journey with milestones, progress, and next steps.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="card relative p-6">
                {index < STEPS.length - 1 && (
                  <div className="absolute right-[-22px] top-1/2 hidden h-px w-10 bg-primary-500/40 md:block" />
                )}

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="text-xs font-black uppercase tracking-[0.18em] text-primary-500">
                  Step {index + 1}
                </div>

                <h3 className="mt-3 text-lg font-black text-[var(--text-strong)]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {step.subtitle}
                </p>

                <div className="badge badge-ai mt-5">
                  {step.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}