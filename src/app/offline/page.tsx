'use client';

import Link from 'next/link';
import { BookOpen, Home, RefreshCw, Sparkles, WifiOff } from 'lucide-react';

export default function OfflinePage() {
  return (
    <section className="neural-bg flex min-h-[calc(100vh-4rem)] items-center border-b border-[var(--border)]">
      <div className="container-wide py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="badge badge-ai mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Offline Mode
          </div>

          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary-500/10 text-primary-500">
            <WifiOff className="h-12 w-12" />
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            You&apos;re offline
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            It looks like your internet connection is unavailable. Please reconnect
            and refresh to continue learning.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              <RefreshCw className="h-4 w-4" />
              Retry connection
            </button>

            <Link href="/" className="btn btn-outline">
              <Home className="h-4 w-4" />
              Home
            </Link>

            <Link href="/courses" className="btn btn-outline">
              <BookOpen className="h-4 w-4" />
              Browse courses
            </Link>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            <div className="card p-6">
              <BookOpen className="mx-auto h-8 w-8 text-primary-500" />
              <h3 className="mt-4 text-lg font-black text-[var(--text-strong)]">
                Saved courses
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Future versions will let you access downloaded lessons offline.
              </p>
            </div>

            <div className="card p-6">
              <RefreshCw className="mx-auto h-8 w-8 text-primary-500" />
              <h3 className="mt-4 text-lg font-black text-[var(--text-strong)]">
                Auto sync
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Your progress will sync automatically once you reconnect.
              </p>
            </div>

            <div className="card p-6">
              <WifiOff className="mx-auto h-8 w-8 text-primary-500" />
              <h3 className="mt-4 text-lg font-black text-[var(--text-strong)]">
                Reconnect
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Check your Wi-Fi or mobile data and try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
