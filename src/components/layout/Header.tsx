'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BookOpen,
  Brain,
  Code2,
  Crown,
  FileQuestion,
  Map,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';
import Logo from '@/components/Logo';

// AI Tutor is intentionally NOT here — it's a floating chatbot (bottom-nav
// "Tutor" + the floating button), not a navigable page.
const NAV_ITEMS = [
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/learning-paths', label: 'Roadmaps', icon: Map },
  { href: '/ai-quiz', label: 'AI Quiz', icon: FileQuestion },
  { href: '/flashcards', label: 'Flashcards', icon: Brain },
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

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-base)]/85 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 text-lg font-extrabold">
          <Logo size={36} className="h-9 w-9 shadow-glow" />
          <span className="text-[var(--text-strong)]">
            Study<span className="text-primary-500 dark:text-primary-400">AI</span>
          </span>
        </Link>

        {/* Actions. Dashboard/Profile are desktop-only (they live in the menu on
            mobile). Search, theme, Get Pro and the menu button are always shown. */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <CommandPalette />

          <ThemeToggle />

          <Link href="/pro" className="btn btn-primary px-3 sm:px-4">
            <Crown className="h-4 w-4" />
            <span className="hidden sm:inline">Get&nbsp;</span>Pro
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
              open
                ? 'border-transparent bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-glow'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] hover:border-transparent hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-600 hover:text-white'
            }`}
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown menu (all sizes) */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-base)] px-4 py-4">
          <nav className="container-wide grid gap-2 px-0 sm:grid-cols-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const className = `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
                isActive(item.href)
                  ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300'
                  : 'text-[var(--text-body)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-strong)]'
              }`;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={className}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="container-wide mt-3 grid grid-cols-2 gap-3 px-0">
            <Link href="/dashboard" onClick={() => setOpen(false)} className="btn btn-outline">
              Dashboard
            </Link>
            <Link href="/profile" onClick={() => setOpen(false)} className="btn btn-outline">
              Profile
            </Link>
            <Link href="/login" onClick={() => setOpen(false)} className="btn btn-outline">
              Login
            </Link>
            <Link href="/pro" onClick={() => setOpen(false)} className="btn btn-primary">
              Get Pro
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
