'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ExternalLink,
  Pencil,
  Plus,
  Search,
  Trash2,
} from 'lucide-react';
import { courses as seed } from '@/data/courses';
import { levelColor } from '@/lib/utils';

export default function AdminCoursesPage() {
  const [list, setList] = useState(seed);
  const [query, setQuery] = useState('');

  const filtered = list.filter((course) =>
    `${course.title} ${course.slug} ${course.level} ${course.categories.join(' ')}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="badge badge-ai mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            Course Manager
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            Courses
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage StudyAI courses, levels, lessons, and public course pages.
          </p>
        </div>

        <button type="button" className="btn btn-primary">
          <Plus className="h-4 w-4" />
          New Course
        </button>
      </div>

      <div className="card p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses..."
            className="input h-12 pl-11"
          />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--bg-subtle)]">
              <tr>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Course
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Level
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Lessons
                </th>
                <th className="p-4 text-left font-black text-[var(--text-strong)]">
                  Students
                </th>
                <th className="p-4 text-right font-black text-[var(--text-strong)]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border)]">
              {filtered.map((course) => (
                <tr key={course.slug} className="transition hover:bg-[var(--bg-subtle)]">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color}`}
                      >
                        <span className="text-2xl">{course.cover}</span>
                      </div>

                      <div className="min-w-0">
                        <div className="font-black text-[var(--text-strong)]">
                          {course.title}
                        </div>

                        <div className="text-xs font-bold text-[var(--text-muted)]">
                          /{course.slug}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className={`badge ${levelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </td>

                  <td className="p-4 font-bold text-[var(--text-body)]">
                    {course.lessons.length}
                  </td>

                  <td className="p-4 font-bold text-[var(--text-body)]">
                    {course.students.toLocaleString()}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/courses/${course.slug}`}
                        target="_blank"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] transition hover:border-primary-400 hover:text-primary-500"
                        aria-label="Open course"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>

                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary-500/25 bg-primary-500/10 text-primary-500"
                        aria-label="Edit course"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setList((current) =>
                            current.filter((item) => item.slug !== course.slug),
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-500"
                        aria-label="Delete course"
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
                    No courses found.
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