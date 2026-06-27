import { Activity, Bot, Clock, DollarSign } from 'lucide-react';

export const metadata = { title: 'AI Monitoring — Admin · StudyAI' };

const KPIS = [
  { label: 'Tokens · this week', value: '4.2M', icon: Activity },
  { label: 'AI cost · this week', value: '$182', delta: '+22%', icon: DollarSign },
  { label: 'Avg. latency', value: '1.4s', icon: Clock },
  { label: 'Error rate', value: '0.6%', icon: Bot },
];

const USAGE = [
  ['AI Tutor', 48],
  ['Quiz Generator', 22],
  ['AI Chat', 18],
  ['Code Assistant', 12],
] as const;

export default function AdminAIPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">AI Monitoring</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">Usage, cost, and performance. Demo data — becomes live once an AI provider key is configured (Stage 6).</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-500/10 text-secondary-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-[var(--text-strong)]">{kpi.value}</div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="font-bold text-[var(--text-muted)]">{kpi.label}</span>
                {'delta' in kpi && kpi.delta && (
                  <span className="font-black text-amber-500">{kpi.delta}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-black text-[var(--text-strong)]">Usage by feature</h2>
        <div className="mt-5 space-y-4">
          {USAGE.map(([label, pct]) => (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-bold text-[var(--text-body)]">{label}</span>
                <span className="font-black text-[var(--text-muted)]">{pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
