'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login, DEMO_ACCOUNTS } from '@/lib/auth';
import { Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@studyai.com');
  const [password, setPassword] = useState('StudyAI123');
  const [err, setErr] = useState('');
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const s = login(email, password);
    if (!s || (s.role !== 'super-admin' && s.role !== 'admin')) { setErr('Access denied.'); return; }
    router.push('/admin');
  }
  function fill(r: 'superAdmin'|'admin') {
    const a = DEMO_ACCOUNTS[r];
    setEmail(a.email); setPassword(a.password);
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-ink-50">
      <div className="w-full max-w-md card p-8">
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center"><Shield className="w-7 h-7 text-white" /></div>
        </div>
        <h1 className="text-2xl font-bold text-center">StudyAI Admin</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {err && <div className="text-rose-700 bg-rose-50 border border-rose-200 rounded-md px-3 py-2 text-sm">{err}</div>}
          <button className="btn btn-primary w-full">Sign in</button>
        </form>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button onClick={()=>fill('superAdmin')} className="text-xs px-3 py-2 rounded-md bg-rose-50 border border-rose-200">Super Admin</button>
          <button onClick={()=>fill('admin')} className="text-xs px-3 py-2 rounded-md bg-brand-50 border border-brand-200">Content Admin</button>
        </div>
        <Link href="/" className="block text-center mt-4 text-brand-700 text-sm">Back to site</Link>
      </div>
    </div>
  );
}
