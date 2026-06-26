'use client';
import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const DEFAULT = "print('Hello, StudyAI!')\nfor i in range(3):\n    print('Lesson', i+1)";

function fakeRun(code: string): string {
  const lines = code.split(/\r?\n/);
  const out: string[] = [];
  for (const line of lines) {
    const m = line.match(/^\s*print\((.*)\)\s*$/);
    if (m) out.push(m[1].replace(/['"]/g, '').replace(/,/g, ' '));
  }
  return out.join('\n') || '(no output)';
}

export default function CodePlayground() {
  const [code, setCode] = useState(DEFAULT);
  const [out, setOut] = useState('');
  return (
    <div className="container-wide py-10">
      <h1 className="text-3xl font-bold mb-2">Code Playground</h1>
      <p className="text-ink-600 mb-6">Write Python in your browser.</p>
      <div className="card overflow-hidden">
        <div className="flex justify-between px-4 py-2 bg-ink-50 border-b border-ink-200">
          <div className="text-xs">main.py</div>
          <div className="flex gap-2">
            <button onClick={()=>setOut(fakeRun(code))} className="btn btn-primary text-sm py-1 px-3"><Play className="w-3 h-3" /> Run</button>
            <button onClick={()=>{setCode(DEFAULT); setOut('');}} className="btn btn-outline text-sm py-1 px-3"><RotateCcw className="w-3 h-3" /> Reset</button>
          </div>
        </div>
        <textarea value={code} onChange={e=>setCode(e.target.value)} className="w-full bg-ink-900 text-ink-100 font-mono text-sm p-4 outline-none min-h-[320px]" />
      </div>
      <div className="card mt-4 p-4">
        <div className="text-xs font-semibold text-ink-500 mb-2">Output</div>
        <pre className="text-sm whitespace-pre-wrap text-emerald-700">{out || '(run to see output)'}</pre>
      </div>
    </div>
  );
}
