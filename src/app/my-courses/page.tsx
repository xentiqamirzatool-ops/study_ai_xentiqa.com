import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { courses } from '@/data/courses';

const MY_COURSES = courses.slice(0, 5);

export default function MyCoursesPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <BookOpen className="h-3.5 w-3.5" />
            My Courses
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Continue your learning
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Track your active courses, progress, and next lessons.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="card p-6">
            <Sparkles className="h-6 w-6 text-primary-500" />
            <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
              5
            </div>
            <div className="text-sm font-bold text-[var(--text-muted)]">
              Active courses
            </div>
          </div>

          <div className="card p-6">
            <Clock className="h-6 w-6 text-primary-500" />
            <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
              12.5h
            </div>
            <div className="text-sm font-bold text-[var(--text-muted)]">
              Learning time
            </div>
          </div>

          <div className="card p-6">
            <Trophy className="h-6 w-6 text-primary-500" />
            <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
              1
            </div>
            <div className="text-sm font-bold text-[var(--text-muted)]">
              Completed
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {MY_COURSES.map((course, index) => {
            const progress = 25 + index * 14;

            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="card flex flex-col gap-5 p-5 transition hover:border-primary-400 sm:flex-row sm:items-center"
              >
                <div
                  className={`flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-gradient-to-br ${course.color}`}
                >
                  <span className="text-4xl">{course.cover}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="badge badge-ai">{course.level}</span>
                    <span className="badge border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)]">
                      {course.hours}h
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-[var(--text-strong)]">
                    {course.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {course.tagline}
                  </p>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                    <div
                      className="h-full rounded-full bg-primary-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    {progress}% complete
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 flex-none text-primary-500" />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}