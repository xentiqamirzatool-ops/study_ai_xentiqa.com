'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login, DEMO_ACCOUNTS } from '@/lib/auth';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('user@studyai.com');
  const [password, setPassword] = useState('StudyAI123');
  const [err, setErr] = useState('');
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const s = login(email, password);
    if (!s) { setErr('Invalid'); return; }
    router.push(s.role === 'user' ? '/courses' : '/admin');
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-ink-50">
      <div className="w-full max-w-md card p-8">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {err && <div className="text-rose-700 text-sm">{err}</div>}
          <button className="btn btn-primary w-full"><LogIn className="w-4 h-4" /> Log in</button>
        </form>
        <div className="mt-4 text-xs text-ink-500 border-t pt-4">
          <div>Demo: {DEMO_ACCOUNTS.user.email} / {DEMO_ACCOUNTS.user.password}</div>
        </div>
        <Link href="/admin/login" className="block text-center mt-4 text-brand-700 text-sm">Admin login</Link>
      </div>
    </div>
  );
}
