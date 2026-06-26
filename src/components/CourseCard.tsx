import Link from 'next/link';
import { Clock, Users, Star, Crown, ArrowRight } from 'lucide-react';
import type { Course } from '@/types';
import { levelColor } from '@/lib/utils';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="card group block overflow-hidden">
      <div className={`h-32 bg-gradient-to-br ${course.color} relative flex items-center justify-center`}>
        <span className="text-5xl">{course.cover}</span>
        {course.isPro && <span className="absolute top-3 right-3 badge bg-amber-100 text-amber-800 border-amber-300"><Crown className="w-3 h-3" /> PRO</span>}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className={`badge ${levelColor(course.level)}`}>{course.level}</span>
          <span className="badge bg-ink-100 text-ink-700 border-ink-200">{course.categories[0]}</span>
        </div>
        <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">{course.title}</h3>
        <p className="text-sm text-ink-600 mt-1">{course.tagline}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.hours}h</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" />{(course.students/1000).toFixed(1)}k</span>
            <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400" />{course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
