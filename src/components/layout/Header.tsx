'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  BookOpen,
  Bot,
  Brain,
  Code2,
  Crown,
  FileQuestion,
  LayoutDashboard,
  Map,
  Menu,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import CommandPalette from '@/components/CommandPalette';
import { useAITutor } from '@/components/ai/AITutorContext';

// 'tutor' items open the floating AI Tutor window instead of navigating.
const NAV_ITEMS = [
  { href: '/courses', label: 'Courses', icon: BookOpen, kind: 'link' as const },
  { href: '/learning-paths', label: 'Roadmaps', icon: Map, kind: 'link' as const },
  { href: '/ai-tutor', label: 'AI Tutor', icon: Bot, kind: 'tutor' as const },
  { href: '/ai-quiz', label: 'AI Quiz', icon: FileQuestion, kind: 'link' as const },
  { href: '/flashcards', label: 'Flashcards', icon: Brain, kind: 'link' as const },
  { href: '/ai-playground', label: 'AI Lab', icon: Sparkles, kind: 'link' as const },
  { href: '/code-playground', label: 'Code', icon: Code2, kind: 'link' as const },
  { href: '/pro', label: 'Pro', icon: Crown, kind: 'link' as const },
];

export default function Header() {
  const pathname = usePathname();
  const { openTutor } = useAITutor();
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
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-glow">
            <span className="text-sm font-black text-white">S</span>
          </span>
          <span className="text-[var(--text-strong)]">
            Study<span className="text-primary-500 dark:text-primary-400">AI</span>
          </span>
        </Link>

        {/* Actions — consistent across all sizes; heavy items hide on mobile */}
        <div className="flex items-center gap-2">
          <CommandPalette />

          <ThemeToggle />

          <Link href="/dashboard" className="hidden lg:inline-flex btn btn-outline">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>

          <Link href="/profile" className="hidden lg:inline-flex btn btn-outline">
            <User className="h-4 w-4" />
            Profile
          </Link>

          <Link href="/pro" className="hidden lg:inline-flex btn btn-primary">
            Get Pro
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)]"
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

              if (item.kind === 'tutor') {
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      openTutor();
                    }}
                    className={`${className} text-left`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              }

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

          <div className="container-wide mt-3 grid grid-cols-2 gap-3 px-0 lg:hidden">
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
