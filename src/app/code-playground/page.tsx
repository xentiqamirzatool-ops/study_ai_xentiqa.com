'use client';

import { useState } from 'react';
import { Code2, Copy, Play, RotateCcw, Sparkles, Terminal } from 'lucide-react';
import NeuralBackdrop from '@/components/NeuralBackdrop';

const DEFAULT_CODE = `print('Hello, StudyAI!')
for i in range(3):
    print('Lesson', i + 1)`;

const EXAMPLES = [
  {
    label: 'Hello AI',
    code: `print('Hello, StudyAI!')
print('I am learning Python for AI')`,
  },
  {
    label: 'Loop',
    code: `for i in range(5):
    print('Step', i + 1)`,
  },
  {
    label: 'Variables',
    code: `name = 'Mirza'
skill = 'AI'
print(name, 'is learning', skill)`,
  },
];

function fakeRun(code: string): string {
  const lines = code.split(/\r?\n/);
  const output: string[] = [];
  const variables = new Map<string, string>();

  for (const line of lines) {
    const variableMatch = line.match(/^\s*([a-zA-Z_]\w*)\s*=\s*['"](.+)['"]\s*$/);
    if (variableMatch) {
      variables.set(variableMatch[1], variableMatch[2]);
      continue;
    }

    const printMatch = line.match(/^\s*print\((.*)\)\s*$/);
    if (printMatch) {
      const parts = printMatch[1]
        .split(',')
        .map((part) => part.trim())
        .map((part) => {
          if ((part.startsWith("'") && part.endsWith("'")) || (part.startsWith('"') && part.endsWith('"'))) {
            return part.slice(1, -1);
          }

          if (variables.has(part)) {
            return variables.get(part);
          }

          return part.replace(/\s*\+\s*/g, ' ');
        });

      output.push(parts.join(' '));
    }
  }

  return output.join('\n') || '(no output)';
}

export default function CodePlayground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState('');

  function runCode() {
    setOutput(fakeRun(code));
  }

  function resetCode() {
    setCode(DEFAULT_CODE);
    setOutput('');
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);
  }

  return (
    <>
      <section className="neural-bg relative overflow-hidden border-b border-[var(--border)]">
        <NeuralBackdrop />
        <div className="container-wide relative py-14">
          <div className="max-w-3xl">
            <div className="badge badge-ai mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Code Playground
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
              Practice Python directly in your browser
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
              Try simple Python examples, run demo code, and learn programming basics for AI.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="card overflow-hidden">
            <div className="flex flex-col gap-3 border-b border-[var(--border)] bg-[var(--bg-subtle)] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <div className="font-black text-[var(--text-strong)]">main.py</div>
                  <div className="text-xs font-bold text-[var(--text-muted)]">
                    Demo Python runner
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={runCode} className="btn btn-primary">
                  <Play className="h-4 w-4" />
                  Run
                </button>

                <button type="button" onClick={copyCode} className="btn btn-outline">
                  <Copy className="h-4 w-4" />
                  Copy
                </button>

                <button type="button" onClick={resetCode} className="btn btn-outline">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </button>
              </div>
            </div>

            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              spellCheck={false}
              className="code-surface min-h-[420px] w-full resize-none p-5 font-mono text-sm leading-7 text-slate-100 outline-none"
            />
          </div>

          <aside className="space-y-6">
            <div className="card overflow-hidden">
              <div className="flex items-center gap-3 border-b border-[var(--border)] p-5">
                <Terminal className="h-5 w-5 text-success" />

                <div>
                  <h2 className="font-black text-[var(--text-strong)]">Output</h2>
                  <p className="text-xs font-bold text-[var(--text-muted)]">
                    Result from your demo code
                  </p>
                </div>
              </div>

              <pre className="code-surface min-h-[180px] whitespace-pre-wrap p-5 font-mono text-sm leading-7 text-emerald-300">
                {output || '(run to see output)'}
              </pre>
            </div>

            <div className="card p-5">
              <h2 className="font-black text-[var(--text-strong)]">Examples</h2>

              <div className="mt-4 space-y-2">
                {EXAMPLES.map((example) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => {
                      setCode(example.code);
                      setOutput('');
                    }}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left text-sm font-bold text-[var(--text-body)] transition hover:border-primary-400 hover:text-primary-500"
                  >
                    {example.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary-500/20 bg-primary-500/5 p-5">
              <h2 className="font-black text-[var(--text-strong)]">
                Note
              </h2>

              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                This is a safe demo runner. Later we can connect a real sandboxed code execution API.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}