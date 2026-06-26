'use client';

import Link from 'next/link';
import { MessageCircle, Sparkles, Wand2, X } from 'lucide-react';
import { useState } from 'react';

const ACTIONS = [
  {
    label: 'AI Playground',
    href: '/ai-playground',
    icon: Sparkles,
  },
  {
    label: 'Ask Tutor',
    href: '/ai-playground',
    icon: MessageCircle,
  },
  {
    label: 'Generate Quiz',
    href: '/courses',
    icon: Wand2,
  },
];

export default function FloatingAIButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-6">
      {open && (
        <div className="mb-3 w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl">
          <div className="px-3 py-2">
            <div className="text-sm font-black text-[var(--text-strong)]">
              Ask StudyAI
            </div>
            <div className="text-xs text-[var(--text-muted)]">
              Learn faster with AI help
            </div>
          </div>

          <div className="mt-1 space-y-1">
            {ACTIONS.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[var(--text-body)] transition hover:bg-[var(--bg-subtle)] hover:text-primary-500"
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-glow transition hover:scale-105"
        aria-label="Open AI assistant"
      >
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--bg-base)] bg-success text-[10px] font-black text-white">
          AI
        </span>

        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-md transition group-hover:opacity-100" />

        {open ? <X className="relative h-6 w-6" /> : <Sparkles className="relative h-6 w-6" />}
      </button>
    </div>
  );
}