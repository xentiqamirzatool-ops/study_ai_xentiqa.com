'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, Shield, ShieldCheck } from 'lucide-react';
import { DEMO_ACCOUNTS, login } from '@/lib/auth';

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const session = login(email, password);

    if (!session || (session.role !== 'super-admin' && session.role !== 'admin')) {
      setError('Access denied.');
      return;
    }

    router.push('/admin');
  }

  function fill(role: 'superAdmin' | 'admin') {
    const account = DEMO_ACCOUNTS[role];

    setEmail(account.email);
    setPassword(account.password);
    setError('');
  }

  return (
    <section className="neural-bg flex min-h-screen items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md p-6 sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-glow">
            <Shield className="h-7 w-7" />
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            StudyAI Admin
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Sign in with an admin account to manage the platform.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
              Email
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-2 transition focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-500/20">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                <Mail className="h-5 w-5" />
              </div>

              <input
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)]"
                type="email"
                value={email}
                placeholder="Enter admin email"
                autoComplete="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError('');
                }}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
              Password
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-2 transition focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-500/20">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                <Lock className="h-5 w-5" />
              </div>

              <input
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)]"
                type="password"
                value={password}
                placeholder="Enter admin password"
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError('');
                }}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm font-bold text-rose-500">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full">
            <ShieldCheck className="h-4 w-4" />
            Sign in
          </button>
        </form>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => fill('superAdmin')}
            className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-3 py-3 text-xs font-black text-rose-500"
          >
            Super Admin
          </button>

          <button
            type="button"
            onClick={() => fill('admin')}
            className="rounded-xl border border-primary-500/25 bg-primary-500/10 px-3 py-3 text-xs font-black text-primary-500"
          >
            Content Admin
          </button>
        </div>

        <Link
          href="/"
          className="mt-5 block text-center text-sm font-black text-primary-500 hover:text-primary-400"
        >
          Back to site
        </Link>
      </div>
    </section>
  );
}