'use client';

import { useState } from 'react';
import { CheckCircle2, HelpCircle, RotateCcw, XCircle } from 'lucide-react';

type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
};

/**
 * Interactive multiple-choice quiz for a lesson.
 * Renders lesson.quiz data (previously defined in the type but never shown).
 * Pure client-side self-check — no persistence (see Stage 11 / DB roadmap).
 */
export default function QuizPanel({ quiz }: { quiz: QuizQuestion[] }) {
  // selected[i] = chosen option index for question i, or null if unanswered
  const [selected, setSelected] = useState<(number | null)[]>(
    () => quiz.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = selected.filter((value) => value !== null).length;
  const allAnswered = answeredCount === quiz.length;
  const score = quiz.reduce(
    (total, question, index) =>
      selected[index] === question.answer ? total + 1 : total,
    0,
  );

  function choose(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    setSelected((previous) => {
      const next = [...previous];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function reset() {
    setSelected(quiz.map(() => null));
    setSubmitted(false);
  }

  return (
    <section className="mt-10 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary-500">
          <HelpCircle className="h-4 w-4" />
          Knowledge check
        </div>

        <span className="badge badge-ai">
          {answeredCount}/{quiz.length} answered
        </span>
      </div>

      <div className="mt-6 space-y-6">
        {quiz.map((question, questionIndex) => {
          const chosen = selected[questionIndex];

          return (
            <div key={`${question.q}-${questionIndex}`}>
              <p className="text-sm font-bold text-[var(--text-strong)]">
                {questionIndex + 1}. {question.q}
              </p>

              <div className="mt-3 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const isChosen = chosen === optionIndex;
                  const isCorrect = optionIndex === question.answer;

                  // Visual state only appears after submit
                  let stateClass =
                    'border-[var(--border)] bg-[var(--surface)] hover:border-primary-400';

                  if (submitted && isCorrect) {
                    stateClass =
                      'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300';
                  } else if (submitted && isChosen && !isCorrect) {
                    stateClass =
                      'border-rose-500/50 bg-rose-500/10 text-rose-600 dark:text-rose-300';
                  } else if (!submitted && isChosen) {
                    stateClass = 'border-primary-500 bg-primary-500/10';
                  }

                  return (
                    <button
                      key={`${option}-${optionIndex}`}
                      type="button"
                      onClick={() => choose(questionIndex, optionIndex)}
                      disabled={submitted}
                      aria-pressed={isChosen}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold text-[var(--text-body)] transition ${stateClass} ${
                        submitted ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <span>{option}</span>

                      {submitted && isCorrect && (
                        <CheckCircle2 className="h-4 w-4 flex-none text-emerald-500" />
                      )}

                      {submitted && isChosen && !isCorrect && (
                        <XCircle className="h-4 w-4 flex-none text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5">
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="btn btn-primary"
          >
            Check answers
          </button>
        ) : (
          <>
            <span
              className="text-sm font-black text-[var(--text-strong)]"
              role="status"
              aria-live="polite"
            >
              Score: {score}/{quiz.length}
              {score === quiz.length ? ' — perfect! 🎉' : ''}
            </span>

            <button type="button" onClick={reset} className="btn btn-outline">
              <RotateCcw className="h-4 w-4" />
              Try again
            </button>
          </>
        )}

        {!submitted && !allAnswered && (
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Answer all questions to check.
          </span>
        )}
      </div>
    </section>
  );
}
