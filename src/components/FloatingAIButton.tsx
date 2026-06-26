import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function FloatingAIButton() {
  return (
    <Link
      href="/ai-playground"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white shadow-glow transition hover:scale-105 lg:bottom-6 lg:right-6"
      aria-label="Open AI assistant"
    >
      <Sparkles className="h-6 w-6" />
    </Link>
  );
}