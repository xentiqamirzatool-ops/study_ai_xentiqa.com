'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  Bookmark,
  Brain,
  Code2,
  Crown,
  FileQuestion,
  LayoutDashboard,
  Map,
  Search,
  Sparkles,
  StickyNote,
  Trophy,
  User,
  X,
} from 'lucide-react';
import { courses } from '@/data/courses';

interface CommandPaletteProps {
  variant?: 'desktop' | 'mobile';
}

const QUICK_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Courses', href: '/courses', icon: BookOpen },
  { label: 'Roadmaps', href: '/learning-paths', icon: Map },
  { label: 'AI Quiz', href: '/ai-quiz', icon: FileQuestion },
  { label: 'Flashcards', href: '/flashcards', icon: Brain },
  { label: 'Notes', href: '/notes', icon: StickyNote },
  { label: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
  { label: 'Certificates', href: '/certificates', icon: Award },
  { label: 'Achievements', href: '/achievements', icon: Trophy },
  { label: 'AI Playground', href: '/ai-playground', icon: Sparkles },
  { label: 'Code Playground', href: '/code-playground', icon: Code2 },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Pro', href: '/pro', icon: Crown },
];

export default function CommandPalette({
  variant = 'desktop',
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Portal target is only available on the client.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const cmd =
        event.key.toLowerCase() === 'k' &&
        (event.metaKey || event.ctrlKey);

      const slash =
        event.key === '/' &&
        !(event.target instanceof HTMLInputElement) &&
        !(event.target instanceof HTMLTextAreaElement);

      if (cmd || slash) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const q = query.trim().toLowerCase();

  const filteredCourses = useMemo(() => {
    if (!q) {
      return courses.slice(0, 6);
    }

    return courses.filter((course) =>
      (
        course.title +
        ' ' +
        course.tagline +
        ' ' +
        course.level +
        ' ' +
        course.categories.join(' ') +
        ' ' +
        course.lessons.map((lesson) => lesson.title).join(' ')
      )
        .toLowerCase()
        .includes(q),
    );
  }, [q]);

  // Quick links also respond to the query so the search covers the whole app.
  const filteredLinks = useMemo(() => {
    if (!q) return QUICK_LINKS;
    return QUICK_LINKS.filter((link) => link.label.toLowerCase().includes(q));
  }, [q]);

  return (
    <>
      {variant === 'desktop' ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search"
          className="flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:border-primary-400 hover:text-primary-500 md:px-4"
        >
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-1 text-xs"
        >
          <Search className="h-5 w-5" />
          Search
        </button>
      )}

      {open && mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-primary-500/25 bg-[var(--surface)] shadow-[0_28px_90px_rgba(8,11,30,0.7)] ring-1 ring-inset ring-white/5"
            >
            <div className="p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3 transition focus-within:border-primary-500 focus-within:bg-[var(--surface)] focus-within:shadow-[0_0_22px_rgba(99,102,241,0.28)]">
                <Search className="h-5 w-5 flex-none text-primary-500" />

                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key !== 'Enter') return;
                    if (filteredCourses[0]) {
                      setOpen(false);
                      router.push(`/courses/${filteredCourses[0].slug}`);
                    } else if (filteredLinks[0]) {
                      setOpen(false);
                      router.push(filteredLinks[0].href);
                    } else if (q) {
                      setOpen(false);
                      router.push('/courses');
                    }
                  }}
                  placeholder="Search courses & pages, then press Enter…"
                  className="flex-1 bg-transparent text-[15px] font-medium text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)] focus:shadow-none focus-visible:shadow-none"
                />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-none rounded-lg p-1.5 text-[var(--text-muted)] transition hover:bg-rose-500/15 hover:text-rose-400"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
              </div>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-5">
              {filteredLinks.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                  Pages
                </h3>

                <div className="grid gap-2 sm:grid-cols-2">
                  {filteredLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl p-3 hover:bg-[var(--bg-subtle)]"
                      >
                        <Icon className="h-5 w-5 text-primary-500" />

                        <span className="font-semibold">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              )}

              <div>
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-[var(--text-muted)]">
                  Courses
                </h3>

                <div className="space-y-2">
                  {filteredCourses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 rounded-xl p-3 hover:bg-[var(--bg-subtle)]"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}
                      >
                        <span className="text-2xl">
                          {course.cover}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <div className="truncate font-bold">
                          {course.title}
                        </div>

                        <div className="truncate text-xs text-[var(--text-muted)]">
                          {course.level} • {course.hours}h
                        </div>
                      </div>
                    </Link>
                  ))}

                  {filteredCourses.length === 0 && (
                    <div className="rounded-xl border border-[var(--border)] p-6 text-center text-sm text-[var(--text-muted)]">
                      No results found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}