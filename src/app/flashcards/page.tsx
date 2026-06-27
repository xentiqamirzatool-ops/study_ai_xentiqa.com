'use client';

import { useState } from 'react';
import { ArrowRight, Brain, RotateCcw, Sparkles } from 'lucide-react';

const CARDS = [
  {
    front: 'What is Artificial Intelligence?',
    back: 'AI is the ability of machines to perform tasks that usually require human intelligence, such as reasoning, learning, and problem solving.',
  },
  {
    front: 'What is Machine Learning?',
    back: 'Machine learning is a type of AI where systems learn patterns from data instead of being manually programmed with every rule.',
  },
  {
    front: 'What is a prompt?',
    back: 'A prompt is the instruction or input you give to an AI model to guide its response.',
  },
];

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = CARDS[index];

  function nextCard() {
    setIndex((current) => (current + 1) % CARDS.length);
    setFlipped(false);
  }

  function resetCards() {
    setIndex(0);
    setFlipped(false);
  }

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Flashcards
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Review concepts with smart flashcards
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Practice AI, Python, prompt engineering, and machine learning terms with quick cards.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="text-sm font-bold text-[var(--text-muted)]">
              Card {index + 1} of {CARDS.length}
            </div>

            <button type="button" onClick={resetCards} className="btn btn-outline">
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          <button
            type="button"
            onClick={() => setFlipped((value) => !value)}
            className="card min-h-[340px] w-full p-8 text-left transition hover:border-primary-400"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <Brain className="h-7 w-7" />
            </div>

            <div className="text-xs font-black uppercase tracking-[0.2em] text-primary-500">
              {flipped ? 'Answer' : 'Question'}
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[var(--text-strong)]">
              {flipped ? card.back : card.front}
            </h2>

            <p className="mt-6 text-sm font-bold text-[var(--text-muted)]">
              Click the card to flip.
            </p>
          </button>

          <div className="mt-6 flex justify-end">
            <button type="button" onClick={nextCard} className="btn btn-primary">
              Next Card
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}