import Link from 'next/link';
import { ArrowRight, CheckCircle2, Map, Sparkles } from 'lucide-react';
import { learningPaths } from '@/data/learningPaths';
import { getCourse } from '@/data/courses';
import { levelColor } from '@/lib/utils';

export const metadata = {
  title: 'Learning Roadmaps — StudyAI',
  description: 'Follow structured AI, machine learning, Python, and prompt engineering learning paths.',
};

export default function LearningPathsPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="max-w-3xl">
            <div className="badge badge-ai mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Learning Roadmaps
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
              Follow a clear path from beginner to AI builder
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
              Stop jumping between random tutorials. StudyAI roadmaps organize courses into step-by-step journeys.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  {learningPaths.length}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Roadmaps
                </div>
              </div>

              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  Guided
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Step by step
                </div>
              </div>

              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  AI
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Career focused
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {learningPaths.map((path) => (
            <article key={path.slug} id={path.slug} className="card overflow-hidden">
              <div className="border-b border-[var(--border)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-3xl">
                      {path.icon}
                    </div>

                    <h2 className="text-2xl font-black text-[var(--text-strong)]">
                      {path.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {path.description}
                    </p>
                  </div>

                  <span className={`badge ${levelColor(path.level)}`}>
                    {path.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary-500">
                  <Map className="h-4 w-4" />
                  Roadmap steps
                </div>

                <ol className="space-y-4">
                  {path.steps.map((step, index) => {
                    const course = step.courseSlug ? getCourse(step.courseSlug) : undefined;

                    return (
                      <li key={`${step.title}-${index}`} className="relative flex gap-4">
                        {index < path.steps.length - 1 && (
                          <div className="absolute left-[17px] top-9 h-full w-px bg-primary-500/25" />
                        )}

                        <span className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-500 text-sm font-black text-white">
                          {index + 1}
                        </span>

                        <div className="min-w-0 flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-black text-[var(--text-strong)]">
                                {step.title}
                              </h3>

                              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                                {step.note}
                              </p>
                            </div>

                            <CheckCircle2 className="h-5 w-5 flex-none text-success" />
                          </div>

                          {course && (
                            <Link
                              href={`/courses/${course.slug}`}
                              className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary-500 hover:text-primary-400"
                            >
                              Open course
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}