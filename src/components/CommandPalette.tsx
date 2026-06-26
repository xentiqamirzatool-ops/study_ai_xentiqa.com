'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Code2,
  Crown,
  Map,
  Search,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { courses } from '@/data/courses';

type CommandPaletteProps = {
  variant?: 'desktop' | 'mobile';
};

const QUICK_LINKS = [
  { label: 'Courses', href: '/courses', icon: BookOpen },
  { label: 'Roadmaps', href: '/learning-paths', icon: Map },
  { label: 'AI Lab', href: '/ai-playground', icon: Sparkles },
  { label: 'Code Playground', href: '/code-playground', icon: Code2 },
  { label: 'Pro', href: '/pro', icon: Crown },
  { label: 'Login', href: '/login', icon: User },
];

export default function CommandPalette({ variant = 'desktop' }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return courses.slice(0, 5);
    }

    return courses
      .filter((course) => {
        const searchable = [
          course.title,
          course.tagline,
          course.level,
          ...course.categories,
        ]
          .join(' ')
          .toLowerCase();

        return searchable.includes(value);
      })
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isSearchKey = event.key === '/' && !event.ctrlKey && !event.metaKey;
      const isCommandKey =
        event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey);

      if (isSearchKey || isCommandKey) {
        const target = event.target as HTMLElement | null;
        const isTyping =
          target?.tagName === 'INPUT' ||
          target?.tagName === 'TEXTAREA' ||
          target?.isContentEditable;

        if (!isTyping) {
          event.preventDefault();
          setOpen(true);
        }
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {variant === 'mobile' ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-1 text-xs font-bold text-[var(--text-muted)]"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden min-w-[190px] items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:border-primary-400 hover:text-primary-500 md:flex"
          aria-label="Open search"
        >
          <span className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search courses
          </span>

          <span className="rounded-md border border-[var(--border)] px-1.5 py-0.5 text-[10px]">
            /
          </span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/50 p-4 backdrop-blur-sm">
          <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-4">
              <Search className="h-5 w-5 text-primary-500" />

              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses, roadmaps, AI tools..."
                className="w-full bg-transparent text-sm font-semibold text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)]"
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-[var(--bg-subtle)]"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-3">
              <div className="px-3 pb-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Quick links
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {QUICK_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-[var(--text-body)] transition hover:bg-[var(--bg-subtle)] hover:text-primary-500"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 px-3 pb-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Courses
              </div>

              <div className="space-y-2">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-[var(--bg-subtle)]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}
                    >
                      <span className="text-xl">{course.cover}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-black text-[var(--text-strong)]">
                        {course.title}
                      </div>
                      <div className="truncate text-xs text-[var(--text-muted)]">
                        {course.level} · {course.hours}h · {course.categories[0]}
                      </div>
                    </div>
                  </Link>
                ))}

                {filteredCourses.length === 0 && (
                  <div className="rounded-2xl border border-[var(--border)] p-6 text-center text-sm text-[var(--text-muted)]">
                    No courses found. Try a different keyword.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}