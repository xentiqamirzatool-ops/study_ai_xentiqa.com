import { BrainCircuit, Code2, FileQuestion, Map, MessageSquareText, Trophy } from 'lucide-react';

const FEATURES = [
  {
    title: 'AI Tutor',
    description: 'Ask questions inside lessons and get clear explanations in context.',
    icon: MessageSquareText,
  },
  {
    title: 'Structured Courses',
    description: 'Follow beginner-friendly tracks for AI, ML, Python, and prompts.',
    icon: BrainCircuit,
  },
  {
    title: 'Adaptive Quizzes',
    description: 'Practice weak areas with quizzes designed around your progress.',
    icon: FileQuestion,
  },
  {
    title: 'Learning Roadmaps',
    description: 'See exactly what to learn next with guided skill paths.',
    icon: Map,
  },
  {
    title: 'Code Practice',
    description: 'Learn by writing and testing code directly in the browser.',
    icon: Code2,
  },
  {
    title: 'Certificates',
    description: 'Complete courses and collect shareable achievement certificates.',
    icon: Trophy,
  },
];

export default function AIFeatures() {
  return (
    <section className="container-wide py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
          Features
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
          A complete AI learning toolkit
        </h2>

        <p className="mt-4 text-[var(--text-muted)]">
          Everything is designed to help learners understand faster, practice better, and stay consistent.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="card group p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 transition group-hover:scale-105 group-hover:bg-primary-500 group-hover:text-white">
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
    </section>
  );
}