'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { AlertTriangle, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="neural-bg flex min-h-[calc(100vh-4rem)] items-center justify-center border-b border-[var(--border)]">
      <div className="container-wide py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge badge-ai mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Something went wrong
          </div>

          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500">
            <AlertTriangle className="h-12 w-12" />
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Unexpected error
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
            An unexpected error occurred while loading this page.
            Please try again or return to the homepage.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="btn btn-primary"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="btn btn-outline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Link>
          </div>

          <div className="mt-14 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-left">
            <div className="text-sm font-black text-[var(--text-strong)]">
              Error details
            </div>

            <pre className="mt-4 overflow-auto rounded-2xl bg-[var(--bg-subtle)] p-4 text-xs leading-6 text-[var(--text-muted)]">
{error.message || 'Unknown error'}
            </pre>

            {error.digest && (
              <div className="mt-4 text-xs font-bold text-[var(--text-muted)]">
                Error ID: {error.digest}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}