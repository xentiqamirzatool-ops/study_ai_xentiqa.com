import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Crown,
  PlayCircle,
  Star,
  Users,
} from 'lucide-react';
import { courses, getCourse } from '@/data/courses';
import { levelColor } from '@/lib/utils';

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);

  if (!course) {
    notFound();
  }

  const firstLesson = course.lessons[0];

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-12">
          <div className="mb-6 flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
            <Link href="/courses" className="hover:text-primary-500">
              Courses
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[var(--text-strong)]">{course.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className={`badge ${levelColor(course.level)}`}>
                  {course.level}
                </span>

                {course.categories.map((category) => (
                  <span
                    key={category}
                    className="badge border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)]"
                  >
                    {category}
                  </span>
                ))}

                {course.isPro && (
                  <span className="badge border-amber-300 bg-amber-100 text-amber-800">
                    <Crown className="h-3 w-3" />
                    PRO
                  </span>
                )}
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-body)]">
                {course.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm font-bold text-[var(--text-muted)]">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary-500" />
                  {course.hours}h
                </span>

                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary-500" />
                  {course.lessonsCount} lessons
                </span>

                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary-500" />
                  {course.students.toLocaleString()} students
                </span>

                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {course.rating}
                </span>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${course.color}`}
              >
                <span className="text-6xl">{course.cover}</span>
              </div>

              <div className="p-5">
                <Link
                  href={`/courses/${course.slug}/${firstLesson.slug}`}
                  className="btn btn-primary w-full"
                >
                  Start Course
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
                  <div className="rounded-xl border border-[var(--border)] p-3">
                    <div className="font-black text-[var(--text-strong)]">
                      {course.lessonsCount}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">Lessons</div>
                  </div>

                  <div className="rounded-xl border border-[var(--border)] p-3">
                    <div className="font-black text-[var(--text-strong)]">
                      {course.level}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <main>
            <div className="card p-6">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Overview
              </h2>

              <p className="mt-4 leading-8 text-[var(--text-body)]">
                {course.description}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-primary-500">
                What you will learn
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.lessons
                  .flatMap((lesson) => lesson.whatYouLearn)
                  .slice(0, 8)
                  .map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-[var(--text-body)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" />
                      {item}
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-5">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-primary-500">
                  Curriculum
                </div>

                <h2 className="mt-2 text-2xl font-black text-[var(--text-strong)]">
                  Course content
                </h2>
              </div>

              <div className="card divide-y divide-[var(--border)] overflow-hidden">
                {course.lessons.map((lesson, index) => (
                  <Link
                    key={lesson.slug}
                    href={`/courses/${course.slug}/${lesson.slug}`}
                    className="group flex items-center justify-between gap-4 p-4 transition hover:bg-[var(--bg-subtle)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-500/10 text-sm font-black text-primary-500">
                        {index + 1}
                      </span>

                      <div className="min-w-0">
                        <div className="truncate font-black text-[var(--text-strong)] group-hover:text-primary-500">
                          {lesson.title}
                        </div>

                        <div className="truncate text-sm text-[var(--text-muted)]">
                          {lesson.summary}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-none items-center gap-3 text-xs font-bold text-[var(--text-muted)]">
                      {lesson.isPro && (
                        <span className="badge border-amber-300 bg-amber-100 text-amber-800">
                          <Crown className="h-3 w-3" />
                          Pro
                        </span>
                      )}

                      <span>{lesson.duration}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <aside className="self-start lg:sticky lg:top-24">
            <div className="card p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-[var(--text-strong)]">
                <PlayCircle className="h-5 w-5 text-primary-500" />
                Start learning
              </div>

              <p className="text-sm leading-6 text-[var(--text-muted)]">
                Begin with the first lesson and follow the full structured course path.
              </p>

              <Link
                href={`/courses/${course.slug}/${firstLesson.slug}`}
                className="btn btn-primary mt-5 w-full"
              >
                Start Course
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/courses" className="btn btn-outline mt-3 w-full">
                Back to Courses
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}