import Link from 'next/link';
import { courses } from '@/data/courses';
import { users } from '@/data/users';
import { videos } from '@/data/videos';
import {
  Activity,
  ArrowRight,
  BookOpen,
  FileText,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';

const ADMIN_LINKS = [
  { title: 'Courses', description: 'Create and manage courses', href: '/admin/courses', icon: BookOpen },
  { title: 'Lessons', description: 'Edit lesson content and curriculum', href: '/admin/lessons', icon: FileText },
  { title: 'Pages', description: 'Manage marketing and static pages', href: '/admin/pages', icon: Sparkles },
  { title: 'Videos', description: 'Manage premium video lessons', href: '/admin/videos', icon: Video },
  { title: 'Users', description: 'Manage students and team accounts', href: '/admin/users', icon: Users },
  { title: 'Settings', description: 'Integrations and platform settings', href: '/admin/settings', icon: Settings },
];

export default function AdminDashboardPage() {
  const totalLessons = courses.reduce((total, course) => total + course.lessons.length, 0);

  const stats = [
    { label: 'Courses', value: courses.length, icon: BookOpen },
    { label: 'Lessons', value: totalLessons, icon: FileText },
    { label: 'Users', value: users.length, icon: Users },
    { label: 'Videos', value: videos.length, icon: Video },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 p-8 text-white shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
          <ShieldCheck className="h-3.5 w-3.5" />
          Admin Center
        </div>

        <h1 className="mt-5 text-4xl font-black tracking-tight">
          StudyAI Admin Dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-white/80">
          Manage courses, users, lessons, videos, pages, and platform settings from one place.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                <Icon className="h-6 w-6" />
              </div>

              <div className="text-3xl font-black text-[var(--text-strong)]">
                {stat.value}
              </div>

              <div className="mt-1 text-sm font-bold text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <main>
          <div className="mb-5">
            <h2 className="text-2xl font-black text-[var(--text-strong)]">
              Management
            </h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Quick access to core admin tools.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {ADMIN_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link key={item.href} href={item.href} className="card group p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 transition group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black text-[var(--text-strong)]">
                      {item.title}
                    </h3>

                    <ArrowRight className="h-4 w-4 text-primary-500" />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </main>

        <aside className="space-y-6">
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary-500" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Platform Health
              </h2>
            </div>

            <div className="space-y-4">
              {[
                ['Frontend', 'Healthy'],
                ['Auth Demo', 'Active'],
                ['Content Data', 'Loaded'],
                ['AI API', 'Not connected'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3 text-sm"
                >
                  <span className="font-bold text-[var(--text-body)]">{label}</span>
                  <span className="font-black text-primary-500">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-success" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Growth Snapshot
              </h2>
            </div>

            <div className="flex h-40 items-end gap-2">
              {[38, 55, 48, 68, 72, 86, 92].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-primary-600 to-secondary-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}