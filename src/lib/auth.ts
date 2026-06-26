'use client';
export type AuthRole = 'super-admin' | 'admin' | 'user' | null;
const KEY = 'studyai_auth';
export const DEMO_ACCOUNTS = {
  superAdmin: { email: 'admin@studyai.com', password: 'StudyAI123', role: 'super-admin' as const, name: 'Super Admin' },
  admin: { email: 'editor@studyai.com', password: 'StudyAI123', role: 'admin' as const, name: 'Content Admin' },
  user: { email: 'user@studyai.com', password: 'StudyAI123', role: 'user' as const, name: 'Student' },
};
export interface Session { email: string; role: AuthRole; name: string; }
export function login(email: string, password: string): Session | null {
  const accs = Object.values(DEMO_ACCOUNTS);
  const found = accs.find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
  if (!found) return null;
  const s: Session = { email: found.email, role: found.role, name: found.name };
  if (typeof window !== 'undefined') localStorage.setItem(KEY, JSON.stringify(s));
  return s;
}
export function logout() { if (typeof window !== 'undefined') localStorage.removeItem(KEY); }
export function getSession(): Session | null {
  if (typeof window === 'undefined') return null;
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) as Session : null; } catch { return null; }
}
