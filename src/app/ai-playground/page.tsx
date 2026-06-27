'use client';

import { useState } from 'react';
import { Bot, Copy, RotateCcw, Sparkles, Wand2 } from 'lucide-react';
import NeuralBackdrop from '@/components/NeuralBackdrop';

const EXAMPLES = [
  'Explain transformers in 5 bullets.',
  'Create a 7-day roadmap to learn prompt engineering.',
  'Explain machine learning like I am a beginner.',
  'Generate a quiz about Python basics.',
];

export default function AIPlayground() {
  const [prompt, setPrompt] = useState('Explain transformers in 5 bullets.');
  const [output, setOutput] = useState('');

  function run() {
    setOutput(
      '• Transformers use self-attention to understand relationships between tokens.\n• Tokens can attend to other tokens in the same sequence.\n• Multi-head attention captures different patterns at the same time.\n• Stacked layers learn deeper language and reasoning structures.\n• Transformers power modern AI systems like GPT, Claude, Gemini, and many copilots.',
    );
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  }

  function reset() {
    setPrompt('');
    setOutput('');
  }

  return (
    <>
      <section className="neural-bg relative overflow-hidden border-b border-[var(--border)]">
        <NeuralBackdrop />
        <div className="container-wide relative py-14">
          <div className="max-w-3xl">
            <div className="badge badge-ai mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              AI Playground
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
              Test prompts and learn how AI responds
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
              This playground is currently demo-based. Later we will connect it to a real AI API.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="card p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Prompt
                </h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Write your instruction for the AI.
                </p>
              </div>

              <Bot className="h-6 w-6 text-primary-500" />
            </div>

            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              className="input min-h-[260px] resize-none font-mono text-sm leading-7"
              placeholder="Ask StudyAI anything..."
            />

            <div className="mt-4 flex flex-wrap gap-2">
              {EXAMPLES.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-body)] transition hover:border-primary-400 hover:text-primary-500"
                >
                  {example}
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button type="button" onClick={run} className="btn btn-primary">
                <Wand2 className="h-4 w-4" />
                Run Prompt
              </button>

              <button type="button" onClick={reset} className="btn btn-outline">
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
              <div>
                <h2 className="text-xl font-black text-[var(--text-strong)]">
                  Output
                </h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  AI response appears here.
                </p>
              </div>

              <button
                type="button"
                onClick={copyOutput}
                className="btn btn-outline"
                disabled={!output}
              >
                <Copy className="h-4 w-4" />
                Copy
              </button>
            </div>

            <div className="min-h-[420px] bg-[#0d1117] p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-slate-100">
                {output || 'Output appears here.'}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}