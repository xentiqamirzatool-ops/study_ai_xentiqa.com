'use client';

import { useState } from 'react';
import { CheckCircle2, FileQuestion, RotateCcw, Sparkles, Wand2, XCircle } from 'lucide-react';

const DEMO_QUESTIONS = [
  {
    question: 'What is the main purpose of machine learning?',
    options: [
      'To manually write every rule',
      'To let systems learn patterns from data',
      'To replace all software developers',
      'To store files in a database',
    ],
    answer: 1,
  },
  {
    question: 'Which language is commonly used for AI development?',
    options: ['Python', 'HTML', 'CSS', 'SQL only'],
    answer: 0,
  },
  {
    question: 'What does a prompt do in AI?',
    options: [
      'It deletes the model',
      'It gives instructions or context to the AI',
      'It installs Python',
      'It creates a database',
    ],
    answer: 1,
  },
];

export default function AIQuizPage() {
  const [topic, setTopic] = useState('AI fundamentals');
  const [generated, setGenerated] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const score = DEMO_QUESTIONS.reduce((total, question, index) => {
    return answers[index] === question.answer ? total + 1 : total;
  }, 0);

  function reset() {
    setGenerated(false);
    setAnswers({});
    setTopic('AI fundamentals');
  }

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            AI Quiz Generator
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Generate practice quizzes with AI
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Turn any topic into quick practice questions and test your understanding.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="card self-start p-6 lg:sticky lg:top-24">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <FileQuestion className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black text-[var(--text-strong)]">
              Quiz setup
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Enter a topic and generate a demo quiz. Later this will connect to real AI.
            </p>

            <label className="mt-6 block text-sm font-bold text-[var(--text-strong)]">
              Topic
            </label>

            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="input mt-2"
              placeholder="Example: Transformers"
            />

            <button
              type="button"
              onClick={() => {
                setGenerated(true);
                setAnswers({});
              }}
              className="btn btn-primary mt-5 w-full"
            >
              <Wand2 className="h-4 w-4" />
              Generate Quiz
            </button>

            <button
              type="button"
              onClick={reset}
              className="btn btn-outline mt-3 w-full"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </aside>

          <main>
            {!generated ? (
              <div className="card flex min-h-[420px] items-center justify-center p-10 text-center">
                <div>
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-500/10 text-primary-500">
                    <FileQuestion className="h-8 w-8" />
                  </div>

                  <h2 className="text-2xl font-black text-[var(--text-strong)]">
                    Your quiz will appear here
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--text-muted)]">
                    Choose a topic and click Generate Quiz to create demo practice questions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="card p-6">
                  <h2 className="text-2xl font-black text-[var(--text-strong)]">
                    Quiz: {topic}
                  </h2>

                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Score: {score} / {DEMO_QUESTIONS.length}
                  </p>
                </div>

                {DEMO_QUESTIONS.map((question, questionIndex) => (
                  <div key={question.question} className="card p-6">
                    <h3 className="text-lg font-black text-[var(--text-strong)]">
                      {questionIndex + 1}. {question.question}
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {question.options.map((option, optionIndex) => {
                        const selected = answers[questionIndex] === optionIndex;
                        const correct = question.answer === optionIndex;
                        const answered = answers[questionIndex] !== undefined;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setAnswers((current) => ({
                                ...current,
                                [questionIndex]: optionIndex,
                              }))
                            }
                            className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                              selected && correct
                                ? 'border-success bg-success/10 text-success'
                                : selected && !correct
                                  ? 'border-rose-500 bg-rose-500/10 text-rose-500'
                                  : answered && correct
                                    ? 'border-success bg-success/10 text-success'
                                    : 'border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)] hover:border-primary-400 hover:text-primary-500'
                            }`}
                          >
                            <span>{option}</span>

                            {answered && correct && <CheckCircle2 className="h-5 w-5" />}
                            {selected && !correct && <XCircle className="h-5 w-5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
}