import Link from 'next/link';
import { ChevronLeft, CreditCard, Download } from 'lucide-react';

export const metadata = { title: 'Billing — Settings · StudyAI' };

const INVOICES = [
  { date: 'Jun 26, 2026', amount: '$19.00', status: 'Paid' },
  { date: 'May 26, 2026', amount: '$19.00', status: 'Paid' },
  { date: 'Apr 26, 2026', amount: '$19.00', status: 'Paid' },
];

export default function BillingSettingsPage() {
  return (
    <div className="container-wide max-w-3xl py-12">
      <Link href="/settings" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--text-muted)] hover:text-primary-500">
        <ChevronLeft className="h-4 w-4" />
        Back to settings
      </Link>

      <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Billing &amp; subscription</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Manage your plan and payment method. Live billing connects with Stripe (Milestone D).
      </p>

      <div className="mt-8 space-y-5">
        <div className="card flex flex-wrap items-center justify-between gap-4 border-primary-500 p-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">Current plan</div>
            <div className="text-2xl font-black text-primary-500">Pro · $19/mo</div>
            <div className="text-sm text-[var(--text-muted)]">Renews Jul 26, 2026</div>
          </div>
          <div className="flex gap-2">
            <Link href="/pro" className="btn btn-outline">Change plan</Link>
            <button type="button" className="btn btn-ghost text-rose-500">Cancel</button>
          </div>
        </div>

        <div className="card flex flex-wrap items-center justify-between gap-3 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <div className="font-black text-[var(--text-strong)]">Visa •••• 4242</div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">Expires 09/27</div>
            </div>
          </div>
          <button type="button" className="btn btn-outline">Update card</button>
        </div>

        <div className="card p-6">
          <div className="font-black text-[var(--text-strong)]">Billing history</div>
          <div className="mt-4 space-y-2">
            {INVOICES.map((invoice) => (
              <div key={invoice.date} className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3 text-sm">
                <span className="font-bold text-[var(--text-body)]">{invoice.date}</span>
                <span className="font-black text-[var(--text-strong)]">{invoice.amount}</span>
                <span className="badge border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">{invoice.status}</span>
                <button type="button" className="inline-flex items-center gap-1 text-sm font-bold text-primary-500">
                  <Download className="h-3.5 w-3.5" />
                  PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
