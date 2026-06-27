import { Sparkles } from 'lucide-react';

export default function LoadingPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[var(--bg-base)]">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 animate-pulse items-center justify-center rounded-3xl bg-primary-500/10 text-primary-500">
          <Sparkles className="h-8 w-8" />
        </div>

        <h1 className="text-2xl font-black text-[var(--text-strong)]">
          Loading StudyAI
        </h1>

        <p className="mt-2 text-sm font-bold text-[var(--text-muted)]">
          Preparing your learning experience...
        </p>
      </div>
    </section>
  );
}