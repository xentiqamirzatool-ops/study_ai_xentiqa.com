import Link from 'next/link';
import { courses } from '@/data/courses';
import { users } from '@/data/users';
import { videos } from '@/data/videos';
import { BookOpen, FileText, Users, Video, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const totalLessons = courses.reduce((a,c) => a + c.lessons.length, 0);
  const stats = [
    { label: 'Courses', value: courses.length, icon: BookOpen },
    { label: 'Lessons', value: totalLessons, icon: FileText },
    { label: 'Users', value: users.length, icon: Users },
    { label: 'Videos', value: videos.length, icon: Video },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => {
          const I = s.icon;
          return (
            <div key={s.label} className="card p-5">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center"><I className="w-5 h-5" /></div>
              <div className="mt-3 text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-ink-600">{s.label}</div>
            </div>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {h:'Courses',d:'Manage courses',href:'/admin/courses'},
          {h:'Lessons',d:'Manage lessons',href:'/admin/lessons'},
          {h:'Pages',d:'WordPress-style editor',href:'/admin/pages'},
          {h:'Videos',d:'Pro video lessons',href:'/admin/videos'},
          {h:'Users',d:'Team & students',href:'/admin/users'},
          {h:'Settings',d:'Integrations',href:'/admin/settings'},
        ].map(x => (
          <Link key={x.h} href={x.href} className="card p-5 group">
            <div className="font-semibold flex justify-between">{x.h} <ChevronRight className="w-4 h-4" /></div>
            <div className="text-sm text-ink-500 mt-1">{x.d}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
