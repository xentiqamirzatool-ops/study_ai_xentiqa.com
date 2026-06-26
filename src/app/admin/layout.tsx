'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSession } from '@/lib/auth';
import AdminSidebar from '@/components/layout/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const isLogin = pathname === '/admin/login';
  useEffect(() => {
    if (isLogin) { setReady(true); return; }
    const s = getSession();
    if (!s || (s.role !== 'super-admin' && s.role !== 'admin')) router.replace('/admin/login');
    else setReady(true);
  }, [pathname, isLogin, router]);
  if (isLogin) return <>{children}</>;
  if (!ready) return <div className="min-h-screen flex items-center justify-center text-ink-500 bg-ink-50">Loading…</div>;
  return (
    <div className="flex bg-ink-50 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 min-w-0 px-6 py-6">{children}</div>
    </div>
  );
}
