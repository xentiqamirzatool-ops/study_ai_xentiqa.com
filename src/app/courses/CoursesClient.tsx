'use client';
import { useState } from 'react';
import type { Course, Level } from '@/types';
import CourseCard from '@/components/CourseCard';
import { Search } from 'lucide-react';

const LEVELS: (Level | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesClient({ courses }: { courses: Course[] }) {
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<Level | 'All'>('All');
  const filtered = courses.filter(c =>
    (level === 'All' || c.level === level) &&
    (!q || c.title.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <>
      <div className="bg-ink-50 border-b border-ink-200">
        <div className="container-wide py-10">
          <h1 className="text-3xl sm:text-4xl font-bold">All Courses</h1>
          <p className="mt-2 text-ink-600">{courses.length} courses, all free.</p>
        </div>
      </div>
      <div className="container-wide py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-4">
          <div className="card p-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search…" className="input pl-9" />
            </div>
          </div>
          <div className="card p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">Level</div>
            {LEVELS.map(l => (
              <button key={l} onClick={()=>setLevel(l)} className={`w-full text-left px-3 py-2 rounded-md text-sm ${level===l ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-ink-700 hover:bg-ink-50'}`}>{l}</button>
            ))}
          </div>
        </aside>
        <div>
          <div className="mb-4 text-sm text-ink-500">Showing <span className="font-semibold">{filtered.length}</span> of {courses.length}</div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{filtered.map(c => <CourseCard key={c.slug} course={c} />)}</div>
        </div>
      </div>
    </>
  );
}
