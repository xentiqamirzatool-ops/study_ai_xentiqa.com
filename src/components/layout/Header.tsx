'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BookOpen,
  Code2,
  Crown,
  Map,
  Menu,
  Search,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_ITEMS = [
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/learning-paths', label: 'Roadmaps', icon: Map },
  { href: '/ai-playground', label: 'AI Lab', icon: Sparkles },
  { href: '/code-playground', label: 'Code', icon: Code2 },
  { href: '/pro', label: 'Pro', icon: Crown },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-base)]/85 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-extrabold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-glow">
            <span className="text-sm font-black text-white">S</span>
          </span>

          <span className="text-[var(--text-strong)]">
            Study<span className="text-primary-500 dark:text-primary-400">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition ${
                  active
                    ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                    : 'text-[var(--text-body)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-strong)]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/courses"
            className="hidden items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text-muted)] transition hover:border-primary-400 hover:text-primary-500 md:flex"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>

          <ThemeToggle />

          <Link href="/login" className="hidden sm:inline-flex btn btn-outline">
            <User className="h-4 w-4" />
            Login
          </Link>

          <Link href="/pro" className="hidden sm:inline-flex btn btn-primary">
            Get Pro
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-base)] px-4 py-4 lg:hidden">
          <nav className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
                    active
                      ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                      : 'text-[var(--text-body)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-strong)]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn btn-outline"
              >
                Login
              </Link>

              <Link
                href="/pro"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
              >
                Get Pro
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}