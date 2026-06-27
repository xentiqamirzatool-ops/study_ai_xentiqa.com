import Link from 'next/link';
import { ChevronLeft, KeyRound, Laptop, ShieldCheck, Smartphone } from 'lucide-react';

export const metadata = { title: 'Security — Settings · StudyAI' };

const SESSIONS = [
  { device: 'MacBook Pro · Chrome', location: 'Karachi, PK', current: true, icon: Laptop },
  { device: 'iPhone · Safari', location: 'Karachi, PK', current: false, icon: Smartphone },
];

export default function SecuritySettingsPage() {
  return (
    <div className="container-wide max-w-3xl py-12">
      <Link href="/settings" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--text-muted)] hover:text-primary-500">
        <ChevronLeft className="h-4 w-4" />
        Back to settings
      </Link>

      <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Security</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Manage your password, two-factor authentication, and active sessions.
        These controls become live once authentication is connected (see Milestone B).
      </p>

      <div className="mt-8 space-y-5">
        <div className="card flex flex-wrap items-center justify-between gap-3 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <div className="font-black text-[var(--text-strong)]">Password</div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">Last changed 2 months ago</div>
            </div>
          </div>
          <button type="button" className="btn btn-outline">Change password</button>
        </div>

        <div className="card flex flex-wrap items-center justify-between gap-3 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-black text-[var(--text-strong)]">Two-factor authentication</div>
              <div className="text-xs font-semibold text-[var(--text-muted)]">Add an extra layer of protection</div>
            </div>
          </div>
          <button type="button" className="btn btn-primary">Enable 2FA</button>
        </div>

        <div className="card p-5">
          <div className="font-black text-[var(--text-strong)]">Active sessions</div>
          <div className="mt-4 space-y-3">
            {SESSIONS.map((session) => {
              const Icon = session.icon;
              return (
                <div key={session.device} className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[var(--text-muted)]" />
                    <div>
                      <div className="text-sm font-bold text-[var(--text-body)]">{session.device}</div>
                      <div className="text-xs text-[var(--text-muted)]">{session.location}</div>
                    </div>
                  </div>
                  {session.current ? (
                    <span className="badge border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">This device</span>
                  ) : (
                    <button type="button" className="text-sm font-bold text-rose-500">Revoke</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
