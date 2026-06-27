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
    if (isLogin) {
      setReady(true);
      return;
    }

    const session = getSession();

    if (!session || (session.role !== 'super-admin' && session.role !== 'admin')) {
      router.replace('/admin/login');
      return;
    }

    setReady(true);
  }, [pathname, isLogin, router]);

  if (isLogin) {
    return <>{children}</>;
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-base)] text-sm font-bold text-[var(--text-muted)]">
        Loading admin...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <div className="flex min-h-screen">
        <AdminSidebar />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}