'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = 'text',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  const lines = code.split('\n');

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0d1117] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="rounded-md bg-white/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-300">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index}>
                <td className="select-none border-r border-white/5 px-4 py-1 text-right text-xs text-gray-500">
                  {index + 1}
                </td>

                <td className="px-4 py-1">
                  <pre className="overflow-x-auto whitespace-pre text-sm leading-7 text-gray-100">
                    <code>{line || ' '}</code>
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}