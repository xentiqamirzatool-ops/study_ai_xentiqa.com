import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  FileQuestion,
  GraduationCap,
  Map,
  Sparkles,
  Trophy,
} from 'lucide-react';

export const metadata = {
  title: 'Features — StudyAI',
  description:
    'Everything in StudyAI: structured courses, learning roadmaps, an AI tutor, quiz and flashcard generators, a code playground, and certificates.',
};

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Structured Courses',
    description:
      '10+ tracks from beginner to advanced, with lessons, examples, code, and knowledge checks.',
  },
  {
    icon: Map,
    title: 'Learning Roadmaps',
    description: 'Guided paths that turn scattered courses into a clear journey to mastery.',
  },
  {
    icon: Bot,
    title: 'AI Tutor',
    description: 'Ask anything and get explanations grounded in your current lesson.',
  },
  {
    icon: FileQuestion,
    title: 'AI Quiz Generator',
    description: 'Auto-generate quizzes to target your weak spots and reinforce what you learn.',
  },
  {
    icon: Brain,
    title: 'Flashcards',
    description: 'Spaced-repetition flashcards that adapt to how well you remember.',
  },
  {
    icon: Code2,
    title: 'Code Playground',
    description: 'Practice and experiment with code right inside the platform.',
  },
  {
    icon: Sparkles,
    title: 'AI Lab',
    description: 'A sandbox to explore prompts and AI capabilities hands-on.',
  },
  {
    icon: Trophy,
    title: 'Certificates',
    description: 'Earn shareable certificates when you complete a course.',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Everything you need
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            A complete AI learning toolkit
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Courses, roadmaps, and AI tools that work together to help you learn
            faster and remember more.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[var(--text-strong)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/courses" className="btn btn-primary">
            Start learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pro" className="btn btn-outline">
            See Pro
          </Link>
        </div>
      </section>
    </>
  );
}
