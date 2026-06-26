'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Search, Menu, X, BookOpen, Map, Sparkles, Code2, Crown, User } from 'lucide-react';

const NAV = [
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/learning-paths', label: 'Roadmaps', icon: Map },
  { href: '/ai-playground', label: 'AI Lab', icon: Sparkles },
  { href: '/code-playground', label: 'Code', icon: Code2 },
  { href: '/pro', label: 'Pro', icon: Crown },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname?.startsWith('/admin')) return null;
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-ink-200">
      <div className="container-wide h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center"><span className="text-white font-bold text-sm">S</span></span>
            <span className="text-ink-900">Study<span className="text-brand-600">AI</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => {
              const Icon = n.icon;
              const active = pathname?.startsWith(n.href);
              return (
                <Link key={n.href} href={n.href} className={`px-3 py-1.5 rounded-md text-sm font-medium transition flex items-center gap-1.5 ${active ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:bg-ink-100'}`}>
                  <Icon className="w-3.5 h-3.5" />{n.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/courses" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-100 hover:bg-ink-200 text-sm text-ink-600 w-48 md:w-64">
            <Search className="w-4 h-4" /><span className="text-xs">Search…</span>
          </Link>
          <Link href="/login" className="hidden sm:inline-flex btn btn-outline text-sm py-1.5 px-3"><User className="w-3.5 h-3.5" />Sign in</Link>
          <Link href="/pro" className="btn btn-primary text-sm py-1.5 px-3">Get Pro</Link>
          <button className="lg:hidden p-2 rounded-md hover:bg-ink-100" onClick={() => setOpen(o => !o)}>{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-200 px-4 py-3 space-y-1 bg-white">
          {NAV.map(n => <Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-ink-700 hover:bg-ink-100">{n.label}</Link>)}
        </div>
      )}
    </header>
  );
}
