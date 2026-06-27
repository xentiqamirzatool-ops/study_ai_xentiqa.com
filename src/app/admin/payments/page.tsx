import { CreditCard, DollarSign, RefreshCcw, TrendingUp } from 'lucide-react';

export const metadata = { title: 'Payments — Admin · StudyAI' };

const KPIS = [
  { label: 'MRR', value: '$38.2k', icon: DollarSign },
  { label: 'ARR', value: '$412k', icon: TrendingUp },
  { label: 'Active subscriptions', value: '1,840', icon: CreditCard },
  { label: 'Churn (30d)', value: '2.1%', icon: RefreshCcw },
];

const TXNS = [
  { user: 'priya@email.com', plan: 'Pro · Monthly', amount: '$19.00', status: 'Paid' },
  { user: 'ravi@email.com', plan: 'Pro · Yearly', amount: '$182.00', status: 'Paid' },
  { user: 'sam@email.com', plan: 'Pro · Monthly', amount: '$19.00', status: 'Failed' },
  { user: 'mina@email.com', plan: 'Pro · Monthly', amount: '$19.00', status: 'Refunded' },
];

function statusClass(status: string) {
  if (status === 'Paid') return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300';
  if (status === 'Failed') return 'bg-rose-500/10 text-rose-600 dark:text-rose-300';
  return 'bg-amber-500/10 text-amber-600 dark:text-amber-300';
}

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Payments &amp; Revenue</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">Demo figures. Connect Stripe (Milestone D) for live revenue, invoices, and reconciliation.</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-black text-[var(--text-strong)]">{kpi.value}</div>
              <div className="mt-1 text-sm font-bold text-[var(--text-muted)]">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-black text-[var(--text-strong)]">Recent transactions</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-xs uppercase tracking-wide text-[var(--text-muted)]">
                <th className="py-2 pr-4 font-bold">Customer</th>
                <th className="py-2 pr-4 font-bold">Plan</th>
                <th className="py-2 pr-4 font-bold">Amount</th>
                <th className="py-2 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {TXNS.map((t) => (
                <tr key={t.user} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-3 pr-4 font-bold text-[var(--text-body)]">{t.user}</td>
                  <td className="py-3 pr-4 text-[var(--text-muted)]">{t.plan}</td>
                  <td className="py-3 pr-4 font-black text-[var(--text-strong)]">{t.amount}</td>
                  <td className="py-3">
                    <span className={`badge ${statusClass(t.status)}`}>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
