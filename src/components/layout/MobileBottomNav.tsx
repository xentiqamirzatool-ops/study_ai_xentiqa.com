'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Home, Map, Sparkles, User } from 'lucide-react';
import CommandPalette from '@/components/CommandPalette';

const ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/learning-paths', label: 'Roadmaps', icon: Map },
  { href: '/ai-playground', label: 'AI', icon: Sparkles },
  { href: '/profile', label: 'Me', icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[var(--bg-base)]/95 backdrop-blur-xl lg:hidden">
      <div className="grid h-16 grid-cols-5">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname?.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 text-xs font-bold transition ${
                active
                  ? 'text-primary-500'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-strong)]'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}