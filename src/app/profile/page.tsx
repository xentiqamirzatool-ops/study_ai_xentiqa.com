import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Bookmark,
  BookOpen,
  CalendarDays,
  Mail,
  Map,
  Settings,
  ShieldCheck,
  Sparkles,
  StickyNote,
  Trophy,
  User,
} from 'lucide-react';

const STATS = [
  { label: 'Courses', value: '3', icon: BookOpen },
  { label: 'Certificates', value: '1', icon: Award },
  { label: 'Streak', value: '7 days', icon: Trophy },
  { label: 'Joined', value: '2026', icon: CalendarDays },
];

const INTERESTS = [
  'AI',
  'Python',
  'Machine Learning',
  'Prompt Engineering',
  'AI Agents',
];

export default function ProfilePage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <User className="h-3.5 w-3.5" />
            Profile
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-600 text-3xl font-black text-white shadow-glow">
              SA
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)]">
                StudyAI Learner
              </h1>

              <p className="mt-2 flex items-center gap-2 text-[var(--text-muted)]">
                <Mail className="h-4 w-4" />
                user@studyai.com
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/dashboard" className="btn btn-primary">
                  Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/settings" className="btn btn-outline">
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
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

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <main className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                About
              </h2>

              <p className="mt-4 leading-8 text-[var(--text-body)]">
                Learning AI, Python, prompt engineering, and machine learning with StudyAI.
                This profile will later include real user data, saved courses,
                achievements, and certificates.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Learning Interests
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span key={interest} className="badge badge-ai">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Recent Activity
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  'Completed AI Fundamentals lesson',
                  'Started Python for AI',
                  'Unlocked First Lesson achievement',
                  'Viewed Learning Roadmaps',
                  'Saved a course bookmark',
                  'Created a study note',
                ].map((activity) => (
                  <div
                    key={activity}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4"
                  >
                    <ShieldCheck className="h-5 w-5 text-success" />
                    <span className="text-sm font-bold text-[var(--text-body)]">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary-500" />

                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Quick Links
                </h2>
              </div>

              <div className="space-y-3">
                <Link href="/dashboard" className="btn btn-outline w-full">
                  <BookOpen className="h-4 w-4" />
                  Dashboard
                </Link>

                <Link href="/my-courses" className="btn btn-outline w-full">
                  <BookOpen className="h-4 w-4" />
                  My Courses
                </Link>

                <Link href="/notes" className="btn btn-outline w-full">
                  <StickyNote className="h-4 w-4" />
                  Notes
                </Link>

                <Link href="/bookmarks" className="btn btn-outline w-full">
                  <Bookmark className="h-4 w-4" />
                  Bookmarks
                </Link>

                <Link href="/certificates" className="btn btn-outline w-full">
                  <Award className="h-4 w-4" />
                  Certificates
                </Link>

                <Link href="/achievements" className="btn btn-outline w-full">
                  <Trophy className="h-4 w-4" />
                  Achievements
                </Link>

                <Link href="/learning-paths" className="btn btn-outline w-full">
                  <Map className="h-4 w-4" />
                  Roadmaps
                </Link>

                <Link href="/pro" className="btn btn-primary w-full">
                  Upgrade Pro
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-success/25 bg-success/10 p-6">
              <div className="font-black text-success">
                Profile ready
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                Later we will connect this page to real authentication and database records.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}