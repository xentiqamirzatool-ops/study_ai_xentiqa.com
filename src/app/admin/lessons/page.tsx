'use client';

import { useState } from 'react';
import {
  Crown,
  FileText,
  Pencil,
  Plus,
  Search,
  Trash2,
} from 'lucide-react';
import { courses } from '@/data/courses';

export default function AdminLessonsPage() {
  const allLessons = courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      course: course.title,
      courseSlug: course.slug,
      ...lesson,
    })),
  );

  const [list, setList] = useState(allLessons);
  const [query, setQuery] = useState('');

  const filtered = list.filter((lesson) =>
    `${lesson.title} ${lesson.summary} ${lesson.course}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="badge badge-ai mb-3">
            <FileText className="h-3.5 w-3.5" />
            Lesson Manager
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            Lessons ({filtered.length})
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage lesson titles, summaries, access level, and course curriculum.
          </p>
        </div>

        <button type="button" className="btn btn-primary">
          <Plus className="h-4 w-4" />
          New Lesson
        </button>
      </div>

      <div className="card p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lessons..."
            className="input h-12 pl-11"
          />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
              <tr>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Lesson
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Course
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Duration
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Access
                </th>
                <th className="p-4 text-right font-black text-[var(--text-strong)]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border)]">
              {filtered.map((lesson, index) => (
                <tr key={`${lesson.courseSlug}-${lesson.slug}`} className="transition hover:bg-[var(--bg-subtle)]">
                  <td className="p-4">
                    <div>
                      <div className="font-black text-[var(--text-strong)]">
                        {lesson.title}
                      </div>

                      <div className="mt-1 max-w-md truncate text-xs font-bold text-[var(--text-muted)]">
                        {lesson.summary}
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-bold text-[var(--text-body)]">
                    {lesson.course}
                  </td>

                  <td className="p-4 font-bold text-[var(--text-body)]">
                    {lesson.duration}
                  </td>

                  <td className="p-4">
                    {lesson.isPro ? (
                      <span className="badge border-amber-300 bg-amber-100 text-amber-800">
                        <Crown className="h-3 w-3" />
                        Pro
                      </span>
                    ) : (
                      <span className="badge border-primary-500/25 bg-primary-500/10 text-primary-500">
                        Free
                      </span>
                    )}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary-500/25 bg-primary-500/10 text-primary-500"
                        aria-label="Edit lesson"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setList((current) =>
                            current.filter((_, itemIndex) => itemIndex !== index),
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-500"
                        aria-label="Delete lesson"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-sm text-[var(--text-muted)]">
                    No lessons found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}