'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { useAITutor } from './AITutorContext';

type Message = { role: 'user' | 'ai'; text: string };

const SUGGESTIONS = ['Explain gradient descent', 'Quiz me on Python', 'Summarize this lesson'];

/**
 * Small floating AI Tutor window that opens on top of the current page
 * (instead of navigating to /ai-tutor). Demo responses for now — wire to the
 * live AIService (Stage 6) to stream real answers.
 */
export default function AITutorWidget() {
  const { open, closeTutor } = useAITutor();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hi! I'm your AI Tutor. Ask me anything about your lessons." },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTutor();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeTutor]);

  if (!open) return null;

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      {
        role: 'ai',
        text: `Demo mode — add an AI key (Stage 6) for live answers. You asked: "${trimmed}".`,
      },
    ]);
    setInput('');
  }

  return (
    <div
      role="dialog"
      aria-label="AI Tutor"
      className="fixed bottom-24 right-4 z-[60] flex max-h-[70vh] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl lg:bottom-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <span className="font-black">AI Tutor</span>
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
        </div>
        <button
          type="button"
          onClick={closeTutor}
          aria-label="Close AI Tutor"
          className="rounded-lg p-1.5 hover:bg-white/15"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
              message.role === 'user'
                ? 'ml-auto bg-primary-500/15 text-[var(--text-strong)]'
                : 'bg-[var(--bg-subtle)] text-[var(--text-body)]'
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 px-4 pb-2">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => ask(suggestion)}
            className="badge badge-ai cursor-pointer"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-center gap-2 border-t border-[var(--border)] p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the AI Tutor..."
          className="input"
          aria-label="Message the AI Tutor"
        />
        <button type="submit" className="btn btn-primary px-3" aria-label="Send">
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
