import Link from 'next/link';
import { ArrowRight, BrainCircuit, Compass, Heart, Users } from 'lucide-react';

export const metadata = {
  title: 'About — StudyAI',
  description:
    'StudyAI is a premium, AI-first learning platform helping anyone master AI, ML, and prompt engineering through structured courses and AI tools.',
};

const STATS = [
  ['40K+', 'Learners'],
  ['10+', 'Courses'],
  ['96%', 'Would recommend'],
  ['4.9★', 'Average rating'],
];

const VALUES = [
  {
    icon: BrainCircuit,
    title: 'Intelligent',
    description:
      'AI is the protagonist — adaptive explanations, quizzes, and guidance that meet you where you are.',
  },
  {
    icon: Compass,
    title: 'Focused',
    description:
      'Calm, distraction-free design with one clear next step per screen so learning sticks.',
  },
  {
    icon: Heart,
    title: 'Encouraging',
    description:
      'Progress, streaks, and milestones are celebrated. The tone is supportive, never punishing.',
  },
  {
    icon: Users,
    title: 'For everyone',
    description:
      'From first-time learners to working engineers — beginner-friendly, but never shallow.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">Our story</div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Education, reimagined by AI
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            StudyAI gives every learner a tutor that never sleeps — combining
            structured courses with AI that explains, quizzes, and coaches in
            real time.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="card p-6 text-center">
              <div className="text-3xl font-black text-primary-500">{value}</div>
              <div className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="container-wide py-16">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="card p-8">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Our mission
              </h2>
              <p className="mt-3 leading-7 text-[var(--text-body)]">
                To make high-quality, personalized AI education effortless — and
                to help every person become AI-literate, fast.
              </p>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-black text-[var(--text-strong)]">
                Our vision
              </h2>
              <p className="mt-3 leading-7 text-[var(--text-body)]">
                A world where anyone can master any skill, guided by an AI tutor
                that adapts to how <em>they</em> learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
            What we value
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
            Principles behind every screen
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[var(--text-strong)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/courses" className="btn btn-primary">
            Browse courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
