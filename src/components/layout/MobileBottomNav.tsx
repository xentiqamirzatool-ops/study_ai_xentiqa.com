'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, BookOpen, Home, User } from 'lucide-react';
import CommandPalette from '@/components/CommandPalette';
import { useAITutor } from '@/components/ai/AITutorContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { openTutor } = useAITutor();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname?.startsWith(`${href}/`);

  const itemClass = (active: boolean) =>
    `flex flex-col items-center justify-center gap-1 text-xs font-bold ${
      active ? 'text-primary-500' : 'text-[var(--text-muted)]'
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--bg-base)]/95 backdrop-blur-xl lg:hidden">
      <div className="grid h-16 grid-cols-5">
        <Link href="/" className={itemClass(isActive('/'))}>
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>

        <Link href="/courses" className={itemClass(isActive('/courses'))}>
          <BookOpen className="h-5 w-5" />
          <span>Courses</span>
        </Link>

        <CommandPalette variant="mobile" />

        <button type="button" onClick={openTutor} className={itemClass(false)}>
          <Bot className="h-5 w-5" />
          <span>Tutor</span>
        </button>

        <Link href="/profile" className={itemClass(isActive('/profile'))}>
          <User className="h-5 w-5" />
          <span>Me</span>
        </Link>
      </div>
    </nav>
  );
}
