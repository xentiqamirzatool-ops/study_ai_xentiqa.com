'use client';

import { useState } from 'react';
import { Lightbulb, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const options = [
    {
      id: 'light',
      label: 'Light',
      icon: Sun,
    },
    {
      id: 'dark',
      label: 'Dark',
      icon: Moon,
    },
    {
      id: 'system',
      label: 'System',
      icon: Monitor,
    },
  ] as const;

  return (
    <div className="relative">
      <button
        aria-label="Theme"
        onClick={() => setOpen(!open)}
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:border-indigo-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
      >
        <Lightbulb className="h-5 w-5 text-amber-500 transition-transform duration-300 group-hover:rotate-12" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          {options.map((item) => {
            const Icon = item.icon;

            const active = theme === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setTheme(item.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-all

                ${
                  active
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-slate-800 dark:text-indigo-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }
                `}
              >
                <Icon className="h-4 w-4" />

                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}