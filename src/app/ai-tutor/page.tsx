'use client';

import { useState } from 'react';
import { Bot, Send, Sparkles, User } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const STARTER_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content:
      'Hi, I am your StudyAI Tutor. Ask me anything about AI, Python, machine learning, or prompt engineering.',
  },
];

const SUGGESTIONS = [
  'Explain AI like I am a beginner',
  'What should I learn first?',
  'Explain transformers simply',
  'Give me a Python practice task',
];

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>(STARTER_MESSAGES);
  const [input, setInput] = useState('');

  function sendMessage(value?: string) {
    const text = (value ?? input).trim();

    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: 'user', content: text },
      {
        role: 'assistant',
        content:
          'This is a demo AI Tutor response. Later we will connect this page to a real AI API so it can answer dynamically.',
      },
    ]);

    setInput('');
  }

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            AI Tutor
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Ask your personal AI tutor
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Get help with lessons, concepts, code, quizzes, and learning plans.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <main className="card flex min-h-[620px] flex-col overflow-hidden">
            <div className="border-b border-[var(--border)] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Bot className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="font-black text-[var(--text-strong)]">
                    StudyAI Tutor
                  </h2>
                  <p className="text-xs font-bold text-[var(--text-muted)]">
                    Demo chat interface
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto bg-[var(--bg-subtle)] p-5">
              {messages.map((message, index) => {
                const isUser = message.role === 'user';

                return (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                        <Bot className="h-5 w-5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                        isUser
                          ? 'bg-primary-500 text-white'
                          : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)]'
                      }`}
                    >
                      {message.content}
                    </div>

                    {isUser && (
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-secondary-500/10 text-secondary-500">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[var(--border)] p-4">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask StudyAI Tutor..."
                  className="input h-12"
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  className="btn btn-primary h-12"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-black text-[var(--text-strong)]">
                Suggested questions
              </h2>

              <div className="mt-4 space-y-3">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 text-left text-sm font-bold text-[var(--text-body)] transition hover:border-primary-400 hover:text-primary-500"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
              <h2 className="font-black text-[var(--text-strong)]">
                Coming next
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                We will later connect this chat to a real AI API with lesson context,
                memory, and quiz generation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}