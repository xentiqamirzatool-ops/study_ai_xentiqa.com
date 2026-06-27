import { ScrollText } from 'lucide-react';

export const metadata = { title: 'System Logs — Admin · StudyAI' };

type Level = 'INFO' | 'WARN' | 'ERROR' | 'AUDIT';

const LOGS: { time: string; level: Level; message: string }[] = [
  { time: '09:12', level: 'INFO', message: 'user.login priya@email.com' },
  { time: '09:14', level: 'WARN', message: 'ai.cost threshold reached 80%' },
  { time: '09:15', level: 'ERROR', message: 'payment.failed sam@email.com (card_declined)' },
  { time: '09:16', level: 'AUDIT', message: 'role.change ravi@email.com → Instructor' },
  { time: '09:20', level: 'INFO', message: 'course.publish "Deep Learning Foundations"' },
  { time: '09:24', level: 'AUDIT', message: 'admin.login editor@studyai.com' },
];

function levelClass(level: Level) {
  switch (level) {
    case 'INFO':
      return 'text-emerald-400';
    case 'WARN':
      return 'text-amber-400';
    case 'ERROR':
      return 'text-rose-400';
    case 'AUDIT':
      return 'text-primary-300';
  }
}

export default function AdminLogsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">System Logs</h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">Recent system and audit events. Demo stream — back with a real logging/audit table (Milestone C).</p>
        </div>
        <span className="badge badge-ai">
          <ScrollText className="h-3.5 w-3.5" />
          Live tail
        </span>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-[#1e293b] bg-[#020617] p-5 font-mono text-xs leading-relaxed">
        {LOGS.map((log, i) => (
          <div key={i} className="whitespace-nowrap">
            <span className="text-slate-500">{log.time}</span>{' '}
            <span className={`font-bold ${levelClass(log.level)}`}>{log.level}</span>{' '}
            <span className="text-slate-300">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
