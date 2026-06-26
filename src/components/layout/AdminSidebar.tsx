'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, BookOpen, FileText, Users, Video, FileCode, Settings, LogOut, Shield, ExternalLink } from 'lucide-react';
import { logout, getSession } from '@/lib/auth';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, role: 'admin' },
  { href: '/admin/courses', label: 'Courses', icon: BookOpen, role: 'admin' },
  { href: '/admin/lessons', label: 'Lessons', icon: FileText, role: 'admin' },
  { href: '/admin/videos', label: 'Videos', icon: Video, role: 'admin' },
  { href: '/admin/pages', label: 'Pages', icon: FileCode, role: 'admin' },
  { href: '/admin/users', label: 'Users', icon: Users, role: 'super-admin' },
  { href: '/admin/settings', label: 'Settings', icon: Settings, role: 'super-admin' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState('');
  useEffect(() => {
    const s = getSession();
    setRole(s?.role || null);
    setName(s?.name || '');
  }, []);
  return (
    <aside className="w-60 shrink-0 bg-white border-r border-ink-200 flex flex-col h-screen sticky top-0">
      <div className="px-4 h-16 flex items-center gap-2 border-b border-ink-200">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center"><span className="text-white font-bold text-sm">S</span></div>
        <div><div className="font-bold">StudyAI</div><div className="text-[10px] uppercase text-ink-500">Admin</div></div>
      </div>
      <div className="px-3 py-3">
        <div className="flex items-center gap-2 px-2 py-2 rounded-md bg-ink-50">
          <Shield className="w-3.5 h-3.5 text-brand-600" />
          <div><div className="text-sm font-semibold">{name}</div><div className="text-xs text-ink-500">{role === 'super-admin' ? 'Super Admin' : 'Content Admin'}</div></div>
        </div>
      </div>
      <nav className="flex-1 px-2 space-y-0.5">
        {NAV.filter(n => n.role === 'admin' || role === 'super-admin').map(n => {
          const Icon = n.icon;
          return <Link key={n.href} href={n.href} className={`side-link ${pathname === n.href ? 'active' : ''}`}><Icon className="w-4 h-4" />{n.label}</Link>;
        })}
      </nav>
      <div className="p-3 border-t border-ink-200 space-y-1">
        <Link href="/" target="_blank" className="side-link"><ExternalLink className="w-4 h-4" /> View site</Link>
        <button onClick={()=>{logout(); router.push('/admin/login');}} className="side-link w-full text-rose-700"><LogOut className="w-4 h-4" /> Log out</button>
      </div>
    </aside>
  );
}
