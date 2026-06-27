'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  BarChart3,
  BookOpen,
  Bot,
  CreditCard,
  ExternalLink,
  FileCode,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  ScrollText,
  Settings,
  Shield,
  ShieldAlert,
  Users,
  Video,
  X,
} from 'lucide-react';
import { getSession, logout } from '@/lib/auth';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, role: 'admin' },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3, role: 'admin' },
  { href: '/admin/courses', label: 'Courses', icon: BookOpen, role: 'admin' },
  { href: '/admin/lessons', label: 'Lessons', icon: FileText, role: 'admin' },
  { href: '/admin/videos', label: 'Videos', icon: Video, role: 'admin' },
  { href: '/admin/pages', label: 'Pages', icon: FileCode, role: 'admin' },
  { href: '/admin/moderation', label: 'Moderation', icon: ShieldAlert, role: 'admin' },
  { href: '/admin/ai', label: 'AI Monitoring', icon: Bot, role: 'admin' },
  { href: '/admin/users', label: 'Users', icon: Users, role: 'super-admin' },
  { href: '/admin/payments', label: 'Payments', icon: CreditCard, role: 'super-admin' },
  { href: '/admin/logs', label: 'Logs', icon: ScrollText, role: 'super-admin' },
  { href: '/admin/settings', label: 'Settings', icon: Settings, role: 'super-admin' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const session = getSession();

    setRole(session?.role || null);
    setName(session?.name || '');
  }, []);

  function handleLogout() {
    logout();
    router.push('/admin/login');
  }

  const visibleNav = NAV.filter((item) => item.role === 'admin' || role === 'super-admin');

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] shadow lg:hidden"
        aria-label="Open admin menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          aria-label="Close admin menu"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)] transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-4">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-glow">
              <span className="text-sm font-black text-white">S</span>
            </div>

            <div>
              <div className="font-black text-[var(--text-strong)]">StudyAI</div>
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Admin
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-[var(--bg-subtle)] lg:hidden"
            aria-label="Close admin menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
              <Shield className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-black text-[var(--text-strong)]">
                {name || 'Admin User'}
              </div>
              <div className="text-xs font-bold text-[var(--text-muted)]">
                {role === 'super-admin' ? 'Super Admin' : 'Content Admin'}
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3">
          {visibleNav.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`side-link ${active ? 'active' : ''}`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-1 border-t border-[var(--border)] p-3">
          <Link
            href="/"
            target="_blank"
            className="side-link"
          >
            <ExternalLink className="h-4 w-4" />
            View site
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="side-link w-full text-rose-500"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
}