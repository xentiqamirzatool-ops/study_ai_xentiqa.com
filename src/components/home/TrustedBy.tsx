import { Sparkles } from 'lucide-react';

const TRUST_ITEMS = [
  'AI Learners',
  'Data Students',
  'Prompt Engineers',
  'Python Beginners',
  'ML Builders',
];

export default function TrustedBy() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg-base)]">
      <div className="container-wide py-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)]">
            <Sparkles className="h-4 w-4 text-primary-500" />
            Trusted by learners building real AI skills
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--text-body)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}