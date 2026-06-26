import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock,
  Flame,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';
import { courses } from '@/data/courses';

const STATS = [
  {
    label: 'Courses Started',
    value: '3',
    icon: BookOpen,
  },
  {
    label: 'Hours Learned',
    value: '12.5',
    icon: Clock,
  },
  {
    label: 'Certificates',
    value: '1',
    icon: Award,
  },
  {
    label: 'Current Streak',
    value: '7 days',
    icon: Flame,
  },
];

const QUICK_ACTIONS = [
  {
    title: 'Ask AI Tutor',
    description: 'Get help with lessons and concepts.',
    href: '/ai-playground',
    icon: BrainCircuit,
  },
  {
    title: 'Practice Code',
    description: 'Open the Python code playground.',
    href: '/code-playground',
    icon: BarChart3,
  },
  {
    title: 'View Roadmaps',
    description: 'Follow structured learning paths.',
    href: '/learning-paths',
    icon: Target,
  },
];

const RECENT = courses.slice(0, 4);
const RECOMMENDED = courses.slice(4, 7);

export default function DashboardPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Dashboard
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
                Welcome back to StudyAI
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
                Track your progress, continue courses, and use AI tools to learn faster.
              </p>
            </div>

            <div className="card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/10 text-success">
                  <Trophy className="h-6 w-6" />
                </div>

                <div>
                  <div className="text-sm font-bold text-[var(--text-muted)]">
                    Weekly Goal
                  </div>
                  <div className="text-xl font-black text-[var(--text-strong)]">
                    4 / 5 lessons
                  </div>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                <div className="h-full w-[80%] rounded-full bg-success" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="text-3xl font-black text-[var(--text-strong)]">
                  {stat.value}
                </div>

                <div className="mt-1 text-sm font-bold text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <main className="space-y-6">
            <div className="card p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[var(--text-strong)]">
                    Continue Learning
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Resume your active courses.
                  </p>
                </div>

                <Link href="/courses" className="btn btn-outline">
                  View all
                </Link>
              </div>

              <div className="space-y-4">
                {RECENT.map((course, index) => {
                  const progress = 28 + index * 17;

                  return (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 transition hover:border-primary-400"
                    >
                      <div
                        className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br ${course.color}`}
                      >
                        <span className="text-2xl">{course.cover}</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="truncate font-black text-[var(--text-strong)]">
                          {course.title}
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--surface)]">
                          <div
                            className="h-full rounded-full bg-primary-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <div className="mt-1 text-xs font-bold text-[var(--text-muted)]">
                          {progress}% complete
                        </div>
                      </div>

                      <ArrowRight className="h-4 w-4 flex-none text-primary-500" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[var(--text-strong)]">
                  Recommended Next
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Courses suggested for your next step.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {RECOMMENDED.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 transition hover:border-primary-400"
                  >
                    <div className="text-3xl">{course.cover}</div>

                    <div className="mt-3 line-clamp-2 font-black text-[var(--text-strong)]">
                      {course.title}
                    </div>

                    <div className="mt-2 text-xs font-bold text-[var(--text-muted)]">
                      {course.level} · {course.hours}h
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="card p-6">
              <div className="mb-5 flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-primary-500" />

                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Weekly Activity
                </h2>
              </div>

              <div className="flex h-40 items-end gap-2">
                {[35, 55, 42, 80, 64, 92, 70].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-primary-600 to-secondary-400"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-3 grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-[var(--text-muted)]">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={`${day}-${index}`}>{day}</div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-primary-500" />

                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Today
                </h2>
              </div>

              <p className="text-sm leading-7 text-[var(--text-muted)]">
                Complete one lesson today to keep your learning streak alive.
              </p>

              <Link href="/courses" className="btn btn-primary mt-5 w-full">
                Study Now
              </Link>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Quick Actions
              </h2>

              <div className="mt-4 space-y-3">
                {QUICK_ACTIONS.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 transition hover:border-primary-400"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="font-black text-[var(--text-strong)]">
                          {action.title}
                        </div>

                        <div className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                          {action.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-success/25 bg-success/10 p-6">
              <div className="flex items-center gap-2 font-black text-success">
                <CheckCircle2 className="h-5 w-5" />
                Achievement unlocked
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                You completed your first AI fundamentals lesson.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}