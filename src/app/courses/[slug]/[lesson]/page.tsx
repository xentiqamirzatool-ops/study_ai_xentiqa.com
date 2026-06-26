import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Crown,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { courses, getLesson } from '@/data/courses';
import CodeBlock from '@/components/CodeBlock';

export function generateStaticParams() {
  const params: { slug: string; lesson: string }[] = [];

  for (const course of courses) {
    for (const lesson of course.lessons) {
      params.push({
        slug: course.slug,
        lesson: lesson.slug,
      });
    }
  }

  return params;
}

function renderInlineMarkdown(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

export default function LessonPage({
  params,
}: {
  params: { slug: string; lesson: string };
}) {
  const data = getLesson(params.slug, params.lesson);

  if (!data) {
    notFound();
  }

  const { course, lesson, prev, next, index } = data;
  const progress = Math.round(((index + 1) / course.lessons.length) * 100);

  return (
    <div className="container-wide grid gap-8 py-8 lg:grid-cols-[280px_1fr]">
      <aside className="self-start lg:sticky lg:top-24">
        <div className="card overflow-hidden">
          <div className={`bg-gradient-to-br ${course.color} p-5`}>
            <div className="text-4xl">{course.cover}</div>

            <div className="mt-4 text-sm font-black text-white">
              {course.title}
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2 text-xs font-bold text-white/85">
              Lesson {index + 1} of {course.lessons.length} · {progress}%
            </div>
          </div>

          <div className="p-3">
            <Link
              href={`/courses/${course.slug}`}
              className="mb-3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-black text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-primary-500"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Back to course
            </Link>

            <div className="max-h-[calc(100vh-18rem)] space-y-1 overflow-y-auto pr-1">
              {course.lessons.map((item, itemIndex) => {
                const active = item.slug === lesson.slug;

                return (
                  <Link
                    key={item.slug}
                    href={`/courses/${course.slug}/${item.slug}`}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
                      active
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                        : 'text-[var(--text-body)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-strong)]'
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg text-xs font-black ${
                        active
                          ? 'bg-primary-500 text-white'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      {itemIndex + 1}
                    </span>

                    <span className="min-w-0 flex-1 truncate">{item.title}</span>

                    {item.isPro && (
                      <Crown className="h-3.5 w-3.5 flex-none text-amber-400" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      <article className="min-w-0">
        <div className="mb-5 flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
          <Link href={`/courses/${course.slug}`} className="hover:text-primary-500">
            {course.title}
          </Link>

          <ChevronRight className="h-3.5 w-3.5" />

          <span>Lesson {index + 1}</span>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="badge badge-ai">
              <BookOpen className="h-3.5 w-3.5" />
              Lesson {index + 1}
            </span>

            <span className="badge border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)]">
              {lesson.duration}
            </span>

            {lesson.isPro && (
              <span className="badge border-amber-300 bg-amber-100 text-amber-800">
                <Crown className="h-3 w-3" />
                Pro
              </span>
            )}
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-[var(--text-body)]">
            {lesson.summary}
          </p>
        </div>

        <section className="mt-6 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary-500">
            <BookOpen className="h-4 w-4" />
            What you will learn
          </div>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {lesson.whatYouLearn.map((item, itemIndex) => (
              <li
                key={`${item}-${itemIndex}`}
                className="flex gap-3 text-sm leading-6 text-[var(--text-body)]"
              >
                <span className="text-success">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="prose-content mt-10">
          <h2>Explanation</h2>

          {lesson.content.split('\n').map((paragraph, paragraphIndex) =>
            paragraph.trim() ? (
              <p
                key={`${paragraph}-${paragraphIndex}`}
                dangerouslySetInnerHTML={{
                  __html: renderInlineMarkdown(paragraph),
                }}
              />
            ) : null,
          )}
        </section>

        {lesson.code && (
          <section className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-[var(--text-strong)]">
              <Sparkles className="h-5 w-5 text-primary-500" />
              Code Example
            </h2>

            <CodeBlock code={lesson.code.code} language={lesson.code.language} />
          </section>
        )}

        {lesson.realWorld && (
          <section className="mt-8 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6">
            <div className="flex items-center gap-2 font-black text-emerald-500">
              <Lightbulb className="h-5 w-5" />
              Real-world use
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              {lesson.realWorld}
            </p>
          </section>
        )}

        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-6">
            <div className="flex items-center gap-2 font-black text-amber-500">
              <AlertTriangle className="h-5 w-5" />
              Common mistakes
            </div>

            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--text-body)]">
              {lesson.commonMistakes.map((mistake, mistakeIndex) => (
                <li key={`${mistake}-${mistakeIndex}`}>• {mistake}</li>
              ))}
            </ul>
          </section>
        )}

        {lesson.practice && (
          <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6">
            <div className="flex items-center gap-2 font-black text-[var(--text-strong)]">
              <Sparkles className="h-5 w-5 text-primary-500" />
              Practice
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              {lesson.practice}
            </p>
          </section>
        )}

        <div className="mt-10 flex justify-between gap-3 border-t border-[var(--border)] pt-6">
          {prev ? (
            <Link href={`/courses/${course.slug}/${prev.slug}`} className="btn btn-outline">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link href={`/courses/${course.slug}/${next.slug}`} className="btn btn-primary">
              Next
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link href={`/courses/${course.slug}`} className="btn btn-primary">
              Finish
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}