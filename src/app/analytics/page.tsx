import {
  Activity,
  BarChart3,
  BookOpen,
  Clock,
  DollarSign,
  Eye,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

const STATS = [
  { label: 'Total Visitors', value: '28.4k', change: '+18%', icon: Eye },
  { label: 'Active Learners', value: '4,820', change: '+12%', icon: Users },
  { label: 'Course Views', value: '91.2k', change: '+24%', icon: BookOpen },
  { label: 'Revenue', value: '$8.6k', change: '+9%', icon: DollarSign },
];

const TOP_COURSES = [
  ['AI Fundamentals', '12,400 views'],
  ['Prompt Engineering', '9,850 views'],
  ['Python for AI', '8,220 views'],
  ['Machine Learning Basics', '6,900 views'],
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="badge badge-ai mb-3">
          <BarChart3 className="h-3.5 w-3.5" />
          Analytics
        </div>

        <h1 className="text-3xl font-black text-[var(--text-strong)]">
          Reports & analytics
        </h1>

        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Track learners, course performance, revenue, and platform growth.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className="card p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>

                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success">
                  {stat.change}
                </span>
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

      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <main className="card p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Weekly Growth
              </h2>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Demo chart showing platform usage trend.
              </p>
            </div>

            <TrendingUp className="h-6 w-6 text-success" />
          </div>

          <div className="flex h-80 items-end gap-3">
            {[42, 58, 51, 72, 66, 88, 94, 76, 85, 97, 90, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-primary-600 to-secondary-400"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>

          <div className="mt-4 grid grid-cols-12 gap-2 text-center text-[10px] font-bold text-[var(--text-muted)]">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(
              (month) => (
                <div key={month}>{month}</div>
              ),
            )}
          </div>
        </main>

        <aside className="space-y-6">
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary-500" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Top Courses
              </h2>
            </div>

            <div className="space-y-3">
              {TOP_COURSES.map(([title, views], index) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500/10 text-sm font-black text-primary-500">
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="truncate font-black text-[var(--text-strong)]">
                      {title}
                    </div>
                    <div className="text-xs font-bold text-[var(--text-muted)]">
                      {views}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary-500" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-3 text-sm">
              {[
                'New user joined StudyAI',
                'AI Fundamentals reached 10k views',
                'Prompt Engineering course updated',
                'New certificate issued',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 font-bold text-[var(--text-body)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
            <div className="flex items-center gap-2 font-black text-primary-500">
              <Sparkles className="h-5 w-5" />
              Coming next
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Later we will connect analytics to real events, database records, and revenue data.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}