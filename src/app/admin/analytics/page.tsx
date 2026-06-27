import { courses } from '@/data/courses';
import { users } from '@/data/users';
import { BarChart3, BookOpen, TrendingUp, Users as UsersIcon } from 'lucide-react';

export const metadata = { title: 'Analytics — Admin · StudyAI' };

const WEEKLY = [42, 55, 48, 68, 72, 86, 92];
const TOP_COURSES = courses.slice(0, 5);

export default function AdminAnalyticsPage() {
  const totalLessons = courses.reduce((t, c) => t + c.lessons.length, 0);

  const kpis = [
    { label: 'Total users', value: users.length, delta: '+4%', icon: UsersIcon },
    { label: 'Courses', value: courses.length, delta: '+1', icon: BookOpen },
    { label: 'Lessons', value: totalLessons, delta: '+12', icon: BarChart3 },
    { label: 'Avg. completion', value: '63%', delta: '+5%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Analytics &amp; Reports</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">Engagement and growth overview. Demo data — connect a database to make this live.</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-[var(--text-strong)]">{kpi.value}</div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="font-bold text-[var(--text-muted)]">{kpi.label}</span>
                <span className="font-black text-success">{kpi.delta}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="card p-6">
          <h2 className="text-xl font-black text-[var(--text-strong)]">Signups · last 7 days</h2>
          <div className="mt-6 flex h-44 items-end gap-3">
            {WEEKLY.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-primary-600 to-secondary-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-black text-[var(--text-strong)]">Top courses</h2>
          <ul className="mt-5 space-y-3">
            {TOP_COURSES.map((c) => (
              <li key={c.slug} className="flex items-center justify-between gap-3 text-sm">
                <span className="truncate font-bold text-[var(--text-body)]">{c.title}</span>
                <span className="font-black text-primary-500">{c.students.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
