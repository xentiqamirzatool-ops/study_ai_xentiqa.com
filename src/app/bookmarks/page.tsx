import Link from 'next/link';
import { ArrowRight, Bookmark, BookOpen, Clock, Sparkles, Star } from 'lucide-react';
import { courses } from '@/data/courses';

const BOOKMARKED = courses.slice(0, 6);

export default function BookmarksPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Bookmark className="h-3.5 w-3.5" />
            Bookmarks
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Saved learning items
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Keep your favourite courses, lessons, and AI resources in one place.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKMARKED.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="card group overflow-hidden"
            >
              <div
                className={`flex h-36 items-center justify-center bg-gradient-to-br ${course.color}`}
              >
                <span className="text-5xl transition group-hover:scale-110">
                  {course.cover}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="badge badge-ai">
                    <Bookmark className="h-3.5 w-3.5" />
                    Saved
                  </span>

                  <span className="badge border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)]">
                    {course.level}
                  </span>
                </div>

                <h2 className="text-xl font-black text-[var(--text-strong)] group-hover:text-primary-500">
                  {course.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--text-muted)]">
                  {course.tagline}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs font-bold text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.hours}h
                  </span>

                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    {course.lessonsCount} lessons
                  </span>

                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-primary-500">
                  Open course
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
          <div className="flex items-center gap-2 font-black text-primary-500">
            <Sparkles className="h-5 w-5" />
            Coming next
          </div>

          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
            Bookmarks will later sync with your account and allow saving lessons, notes, flashcards, and courses.
          </p>
        </div>
      </section>
    </>
  );
}