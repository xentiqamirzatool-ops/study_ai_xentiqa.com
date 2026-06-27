'use client';

import { usePathname } from 'next/navigation';
import { Bot, Sparkles } from 'lucide-react';
import { useAITutor } from '@/components/ai/AITutorContext';

export default function FloatingAIButton() {
  const pathname = usePathname();
  const { open, openTutor } = useAITutor();

  // Hide on admin, and hide while the tutor window is already open.
  if (pathname?.startsWith('/admin') || open) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openTutor}
      className="group fixed bottom-24 right-6 z-50 lg:bottom-6"
      aria-label="Open AI Tutor"
    >
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-full bg-primary-500/30 blur-xl" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-2xl transition duration-300 group-hover:scale-110">
          <Bot className="h-7 w-7" />
        </div>

        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-black shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-[var(--bg-base)] px-4 py-2 text-sm font-bold text-[var(--text-strong)] shadow-xl group-hover:block">
        Ask AI Tutor
      </div>
    </button>
  );
}
