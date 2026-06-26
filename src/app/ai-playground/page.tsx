'use client';
import { useState } from 'react';
import { Wand2, RotateCcw } from 'lucide-react';

export default function AIPlayground() {
  const [prompt, setPrompt] = useState('Explain transformers in 5 bullets.');
  const [output, setOutput] = useState('');
  function run() {
    setOutput('• Transformers use self-attention\n• Tokens attend to other tokens\n• Multi-head captures aspects\n• Stacked layers learn richer structure\n• Powers GPT, Claude, Gemini');
  }
  return (
    <div className="container-wide py-10">
      <h1 className="text-3xl font-bold mb-2">AI Playground</h1>
      <p className="text-ink-600 mb-6">Plug in your AI API to make it live.</p>
      <div className="card p-4 space-y-3">
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="input min-h-[160px] font-mono text-sm" />
        <div className="flex gap-2">
          <button onClick={run} className="btn btn-primary"><Wand2 className="w-4 h-4" /> Run</button>
          <button onClick={()=>{setPrompt(''); setOutput('');}} className="btn btn-outline"><RotateCcw className="w-4 h-4" /> Reset</button>
        </div>
        <pre className="code-block whitespace-pre-wrap">{output || 'Output appears here.'}</pre>
      </div>
    </div>
  );
}
