'use client';

import Link from 'next/link';
import { ChevronLeft, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const OPTIONS = [
  { value: 'light' as const, label: 'Light', icon: Sun, hint: 'Bright, high-contrast' },
  { value: 'dark' as const, label: 'Dark', icon: Moon, hint: 'Default · easy on the eyes' },
  { value: 'system' as const, label: 'System', icon: Monitor, hint: 'Match your device' },
];

export default function ThemeSettingsPage() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="container-wide max-w-3xl py-12">
      <Link href="/settings" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--text-muted)] hover:text-primary-500">
        <ChevronLeft className="h-4 w-4" />
        Back to settings
      </Link>

      <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)]">Theme</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Choose how StudyAI looks. Your choice is saved to this device. Currently showing:{' '}
        <span className="font-black text-primary-500">{resolvedTheme}</span>.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {OPTIONS.map((option) => {
          const Icon = option.icon;
          const selected = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              aria-pressed={selected}
              className={`card flex flex-col items-start gap-3 p-5 text-left transition ${
                selected ? 'border-primary-500 ring-2 ring-primary-500/40' : ''
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-black text-[var(--text-strong)]">{option.label}</div>
                <div className="text-xs font-semibold text-[var(--text-muted)]">{option.hint}</div>
              </div>
              {selected && (
                <span className="badge badge-ai">Selected</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
