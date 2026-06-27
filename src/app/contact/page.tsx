'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react';
import NeuralBackdrop from '@/components/NeuralBackdrop';

const INFO = [
  { icon: Mail, title: 'Email us', value: 'hello@studyai.com' },
  { icon: MessageSquare, title: 'Live chat', value: 'Ask the AI Tutor anytime' },
  { icon: MapPin, title: 'Remote-first', value: 'Working worldwide' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="neural-bg relative overflow-hidden border-b border-[var(--border)]">
        <NeuralBackdrop />
        <div className="container-wide relative py-16 text-center">
          <div className="badge badge-ai mx-auto mb-5 w-fit">
            <Sparkles className="h-3.5 w-3.5" />
            We&apos;d love to hear from you
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Let&apos;s build your AI learning journey together
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Questions, feedback, partnerships — drop us a message and we&apos;ll
            get back to you.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          {/* Info cards */}
          <aside className="space-y-4">
            {INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/15 to-secondary-500/15 text-primary-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-black text-[var(--text-strong)]">
                      {item.title}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-5">
              <div className="flex items-center gap-2 font-black text-primary-500">
                <Sparkles className="h-5 w-5" />
                Fast replies
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                We usually respond within one business day. For instant help, try
                the AI Tutor.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="card relative overflow-hidden p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />

            {sent ? (
              <div className="relative flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-5 text-2xl font-black text-[var(--text-strong)]">
                  Message sent 🎉
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--text-muted)]">
                  Thanks for reaching out — we&apos;ll reply to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn btn-outline mt-6"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="relative space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                      Name
                    </label>
                    <input required className="input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="input"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[var(--text-strong)]">
                    Message
                  </label>
                  <textarea
                    required
                    className="input min-h-[180px] resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
