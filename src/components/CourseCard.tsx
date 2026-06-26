import Link from 'next/link';
import { ArrowRight, Clock, Crown, Star, Users } from 'lucide-react';
import type { Course } from '@/types';
import { levelColor } from '@/lib/utils';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group block overflow-hidden"
    >
      <div
        className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${course.color}`}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_30%)]" />

        <span className="relative text-5xl transition-transform duration-300 group-hover:scale-110">
          {course.cover}
        </span>

        {course.isPro && (
          <span className="badge absolute right-3 top-3 border-amber-300 bg-amber-100 text-amber-800">
            <Crown className="h-3 w-3" />
            PRO
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`badge ${levelColor(course.level)}`}>
            {course.level}
          </span>

          <span className="badge border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)]">
            {course.categories[0]}
          </span>
        </div>

        <h3 className="text-base font-black leading-6 text-[var(--text-strong)] transition group-hover:text-primary-500">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--text-muted)]">
          {course.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 text-xs font-semibold text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {course.hours}h
            </span>

            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {(course.students / 1000).toFixed(1)}k
            </span>

            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {course.rating}
            </span>
          </div>

          <ArrowRight className="h-4 w-4 text-primary-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}