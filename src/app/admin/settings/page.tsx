'use client';

import { useState } from 'react';
import {
  Bell,
  Bot,
  CreditCard,
  Database,
  KeyRound,
  Mail,
  Save,
  Settings,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState('StudyAI');
  const [siteUrl, setSiteUrl] = useState('https://studyai.com');
  const [supportEmail, setSupportEmail] = useState('support@studyai.com');

  return (
    <div className="space-y-6">
      <div>
        <div className="badge badge-ai mb-3">
          <Settings className="h-3.5 w-3.5" />
          Admin Settings
        </div>

        <h1 className="text-3xl font-black text-[var(--text-strong)]">
          Platform settings
        </h1>

        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Manage branding, AI keys, billing, email, security, and system integrations.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary-500" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Branding
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  Site name
                </label>
                <input
                  className="input"
                  value={siteName}
                  onChange={(event) => setSiteName(event.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  Site URL
                </label>
                <input
                  className="input"
                  value={siteUrl}
                  onChange={(event) => setSiteUrl(event.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  Support email
                </label>
                <input
                  className="input"
                  value={supportEmail}
                  onChange={(event) => setSupportEmail(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-5 flex items-center gap-3">
              <Bot className="h-5 w-5 text-primary-500" />
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                AI Providers
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  OpenAI API Key
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="sk-..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  Claude API Key
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="sk-ant-..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                  Gemini API Key
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="AIza..."
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-6">
              <div className="mb-5 flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary-500" />
                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Stripe
                </h2>
              </div>

              <div className="space-y-4">
                <input type="password" className="input" placeholder="Stripe secret key" />
                <input className="input" placeholder="Webhook endpoint secret" />
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-5 flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Email
                </h2>
              </div>

              <div className="space-y-4">
                <input className="input" placeholder="SMTP host" />
                <input className="input" placeholder="From email" />
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-primary">
            <Save className="h-4 w-4" />
            Save Settings
          </button>
        </main>

        <aside className="space-y-6">
          {[
            {
              title: 'Database',
              description: 'Supabase or PostgreSQL not connected yet.',
              icon: Database,
            },
            {
              title: 'Security',
              description: 'Add auth, rate limits, and secure secrets before production.',
              icon: ShieldCheck,
            },
            {
              title: 'Notifications',
              description: 'Email and in-app notifications are UI-ready only.',
              icon: Bell,
            },
            {
              title: 'Secrets',
              description: 'Store production keys only in Vercel environment variables.',
              icon: KeyRound,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="card p-6">
                <Icon className="h-6 w-6 text-primary-500" />
                <h3 className="mt-4 text-lg font-black text-[var(--text-strong)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}