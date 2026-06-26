'use client';

import { useMemo, useState } from 'react';
import { BookOpen, Filter, Search, Sparkles, X } from 'lucide-react';
import type { Course, Level } from '@/types';
import CourseCard from '@/components/CourseCard';

const LEVELS: (Level | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesClient({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<Level | 'All'>('All');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = new Set<string>();

    courses.forEach((course) => {
      course.categories.forEach((item) => unique.add(item));
    });

    return ['All', ...Array.from(unique)];
  }, [courses]);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesLevel = level === 'All' || course.level === level;
      const matchesCategory = category === 'All' || course.categories.includes(category);

      const searchable = [
        course.title,
        course.tagline,
        course.level,
        ...course.categories,
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !value || searchable.includes(value);

      return matchesLevel && matchesCategory && matchesQuery;
    });
  }, [courses, query, level, category]);

  const clearFilters = () => {
    setQuery('');
    setLevel('All');
    setCategory('All');
  };

  const hasFilters = query || level !== 'All' || category !== 'All';

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="max-w-3xl">
            <div className="badge badge-ai mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Courses
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
              Explore AI courses built for real progress
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
              Learn AI, machine learning, Python, prompt engineering, and GenAI with structured lessons and guided roadmaps.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  {courses.length}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Courses
                </div>
              </div>

              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  {courses.reduce((total, course) => total + course.lessons.length, 0)}+
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Lessons
                </div>
              </div>

              <div className="card p-5">
                <div className="text-2xl font-black text-[var(--text-strong)]">
                  Free
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
                  Start today
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-5">
            <div className="card p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-[var(--text-strong)]">
                <Search className="h-4 w-4 text-primary-500" />
                Search
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search courses..."
                  className="input pl-10"
                />
              </div>
            </div>

            <div className="card p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-[var(--text-strong)]">
                <Filter className="h-4 w-4 text-primary-500" />
                Level
              </div>

              <div className="space-y-2">
                {LEVELS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLevel(item)}
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm font-bold transition ${
                      level === item
                        ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                        : 'text-[var(--text-body)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-strong)]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-[var(--text-strong)]">
                <BookOpen className="h-4 w-4 text-primary-500" />
                Categories
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-black transition ${
                      category === item
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)] hover:border-primary-400 hover:text-primary-500'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="btn btn-outline w-full"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            )}
          </aside>

          <main>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-bold text-[var(--text-muted)]">
                  Showing <span className="text-[var(--text-strong)]">{filtered.length}</span> of {courses.length} courses
                </div>

                <h2 className="mt-1 text-2xl font-black text-[var(--text-strong)]">
                  Course library
                </h2>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            ) : (
              <div className="card p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Search className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-black text-[var(--text-strong)]">
                  No courses found
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)]">
                  Try a different search term, level, or category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn btn-primary mt-6"
                >
                  Reset filters
                </button>
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
}