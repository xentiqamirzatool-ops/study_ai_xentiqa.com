export function cn(...c: (string | undefined | false | null)[]) { return c.filter(Boolean).join(' '); }
export function levelColor(level: string) {
  switch (level) {
    case 'Beginner': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Intermediate': return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'Advanced': return 'bg-rose-50 text-rose-700 border-rose-200';
    default: return 'bg-slate-50 text-slate-700 border-slate-200';
  }
}
