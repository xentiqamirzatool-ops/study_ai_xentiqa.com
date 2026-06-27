import Link from 'next/link';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  Lock,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'First Lesson',
    description: 'Complete your first StudyAI lesson.',
    status: 'Unlocked',
    icon: BookOpen,
    unlocked: true,
  },
  {
    title: '7 Day Streak',
    description: 'Study for 7 days in a row.',
    status: 'Unlocked',
    icon: Flame,
    unlocked: true,
  },
  {
    title: 'AI Explorer',
    description: 'Use the AI Tutor for the first time.',
    status: 'Unlocked',
    icon: Sparkles,
    unlocked: true,
  },
  {
    title: 'Quiz Master',
    description: 'Score 100% on an AI quiz.',
    status: 'Locked',
    icon: Target,
    unlocked: false,
  },
  {
    title: 'Python Starter',
    description: 'Complete your first Python practice task.',
    status: 'Locked',
    icon: Zap,
    unlocked: false,
  },
  {
    title: 'Certificate Earned',
    description: 'Complete a course and unlock a certificate.',
    status: 'Locked',
    icon: Award,
    unlocked: false,
  },
];

export default function AchievementsPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Trophy className="h-3.5 w-3.5" />
            Achievements
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            XP, badges, and learning rewards
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Stay motivated by unlocking badges as you learn, practice, and complete courses.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="card self-start p-6 lg:sticky lg:top-24">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-glow">
              <Star className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-3xl font-black text-[var(--text-strong)]">
              Level 4 Learner
            </h2>

            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
              You have earned 1,240 XP. Complete more lessons and quizzes to reach the next level.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs font-black text-[var(--text-muted)]">
                <span>XP Progress</span>
                <span>1,240 / 1,500</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
              </div>
            </div>

            <Link href="/courses" className="btn btn-primary mt-6 w-full">
              Earn More XP
            </Link>
          </aside>

          <main>
            <div className="mb-6">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Badge Collection
              </h2>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                3 unlocked · 3 locked
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {ACHIEVEMENTS.map((achievement) => {
                const Icon = achievement.icon;

                return (
                  <div
                    key={achievement.title}
                    className={`card p-6 ${
                      achievement.unlocked ? '' : 'opacity-70'
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                        achievement.unlocked
                          ? 'bg-primary-500/10 text-primary-500'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      {achievement.unlocked ? (
                        <Icon className="h-7 w-7" />
                      ) : (
                        <Lock className="h-7 w-7" />
                      )}
                    </div>

                    <h3 className="text-xl font-black text-[var(--text-strong)]">
                      {achievement.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {achievement.description}
                    </p>

                    <div
                      className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black ${
                        achievement.unlocked
                          ? 'bg-success/10 text-success'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                      }`}
                    >
                      {achievement.unlocked && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {achievement.status}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}