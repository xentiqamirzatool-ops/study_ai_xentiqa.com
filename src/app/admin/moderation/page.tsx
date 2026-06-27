import { CheckCircle2, EyeOff, ShieldAlert, Trash2 } from 'lucide-react';

export const metadata = { title: 'Moderation — Admin · StudyAI' };

const QUEUE = [
  { content: '"Buy followers at cheap-link…"', where: 'Forum · General', reason: 'Spam', reports: 3 },
  { content: 'Off-topic promotional comment', where: 'Lesson · Intro to ML', reason: 'Spam', reports: 2 },
  { content: 'Rude reply to another learner', where: 'Forum · Help', reason: 'Harassment', reports: 1 },
];

export default function AdminModerationPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Content Moderation</h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Review flagged community content. Demo queue — wire to the community + reports tables (Milestone C).</p>
        </div>
        <span className="badge badge-ai">
          <ShieldAlert className="h-3.5 w-3.5" />
          {QUEUE.length} pending
        </span>
      </header>

      <div className="space-y-4">
        {QUEUE.map((item) => (
          <div key={item.content} className="card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-bold text-[var(--text-strong)]">{item.content}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.where} · reported ×{item.reports}</p>
              </div>
              <span className="badge border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300">{item.reason}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className="btn btn-outline">
                <CheckCircle2 className="h-4 w-4" />
                Approve
              </button>
              <button type="button" className="btn btn-outline">
                <EyeOff className="h-4 w-4" />
                Hide
              </button>
              <button type="button" className="btn btn-danger">
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
