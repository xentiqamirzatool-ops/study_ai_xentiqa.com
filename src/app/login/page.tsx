'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, LogIn, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { DEMO_ACCOUNTS, login } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const session = login(email, password);

    if (!session) {
      setError('Invalid email or password.');
      return;
    }

    router.push(session.role === 'user' ? '/dashboard' : '/admin');
  }

  function fillDemoUser() {
    setEmail(DEMO_ACCOUNTS.user.email);
    setPassword(DEMO_ACCOUNTS.user.password);
    setError('');
  }

  return (
    <section className="neural-bg min-h-[calc(100vh-4rem)] border-b border-[var(--border)]">
      <div className="container-wide grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_440px]">
        <div className="hidden lg:block">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Welcome back
          </div>

          <h1 className="max-w-2xl text-5xl font-black tracking-tight text-[var(--text-strong)]">
            Continue your AI learning journey.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-body)]">
            Sign in to continue courses, roadmaps, AI tools, and your learning progress.
          </p>

          <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <ShieldCheck className="h-6 w-6 text-success" />
              <div className="mt-3 font-black text-[var(--text-strong)]">
                Demo safe
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Current login uses local demo accounts until real auth is connected.
              </p>
            </div>

            <div className="card p-5">
              <Sparkles className="h-6 w-6 text-primary-500" />
              <div className="mt-3 font-black text-[var(--text-strong)]">
                AI ready
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Future login will unlock dashboard, AI tutor, notes, and progress.
              </p>
            </div>
          </div>
        </div>

        <div className="card w-full p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <LogIn className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-black text-[var(--text-strong)]">
              Sign in
            </h1>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Enter your email and password to access StudyAI.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                Email
              </label>

              <div className="flex h-14 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-2 transition focus-within:border-primary-500 focus-within:shadow-[0_0_18px_rgba(99,102,241,0.22)]">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                  <Mail className="h-5 w-5" />
                </div>

                <input
                  className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)]"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
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

              <div className="flex h-14 items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-2 transition focus-within:border-primary-500 focus-within:shadow-[0_0_18px_rgba(99,102,241,0.22)]">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                  <Lock className="h-5 w-5" />
                </div>

                <input
                  className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[var(--text-strong)] outline-none placeholder:text-[var(--text-muted)]"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
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
              <LogIn className="h-4 w-4" />
              Log in
            </button>
          </form>

          <button
            type="button"
            onClick={fillDemoUser}
            className="btn btn-outline mt-4 w-full"
          >
            Fill demo user
          </button>

          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 text-xs leading-6 text-[var(--text-muted)]">
            <div className="font-black text-[var(--text-strong)]">
              Demo user
            </div>
            <div>{DEMO_ACCOUNTS.user.email}</div>
            <div>{DEMO_ACCOUNTS.user.password}</div>
          </div>

          <Link
            href="/admin/login"
            className="mt-5 block text-center text-sm font-black text-primary-500 hover:text-primary-400"
          >
            Admin login
          </Link>
        </div>
      </div>
    </section>
  );
}