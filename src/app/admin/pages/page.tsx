'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Pencil, Eye, Save, Plus, Trash2, Star, FileText, Bold, Italic, Heading1, Heading2, List, Link2, Code, Quote } from 'lucide-react';

interface PageRow { id: string; slug: string; title: string; status: 'Published'|'Draft'; author: string; body: string; }

const SEED: PageRow[] = [
  { id:'p1', slug:'/', title:'Home', status:'Published', author:'Super Admin', body:'# Welcome\n\nA free AI platform.' },
  { id:'p2', slug:'/about', title:'About', status:'Published', author:'Sarah Chen', body:'# About\n\nOur **mission**.' },
  { id:'p3', slug:'/contact', title:'Contact', status:'Published', author:'David Kim', body:'# Contact\n\nhello@studyai.com' },
];

function renderMd(md: string) {
  return md
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-ink-100 px-1 rounded">$1</code>')
    .split('\n\n').map(p => p.startsWith('<') ? p : `<p class="my-3">${p}</p>`).join('');
}

export default function AdminPages() {
  const [list, setList] = useState<PageRow[]>(SEED);
  const [activeId, setActiveId] = useState(SEED[0].id);
  const [tab, setTab] = useState<'edit'|'preview'>('edit');
  const active = useMemo(() => list.find(p => p.id === activeId)!, [list, activeId]);

  function update(patch: Partial<PageRow>) { setList(list.map(p => p.id === active.id ? {...p, ...patch} : p)); }
  function wrap(before: string, after = before) {
    const ta = document.getElementById('md-editor') as HTMLTextAreaElement | null;
    if (!ta) return;
    const s = ta.selectionStart, e = ta.selectionEnd;
    const next = active.body.slice(0,s) + before + active.body.slice(s,e) + after + active.body.slice(e);
    update({body: next});
  }
  function add() {
    const p: PageRow = { id: 'p'+Date.now(), slug: '/new', title: 'New page', status: 'Draft', author: 'You', body: '# New page' };
    setList([p, ...list]); setActiveId(p.id);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2"><FileText className="w-7 h-7 text-brand-600" /> Pages</h1>
        <div className="flex gap-2">
          <button onClick={add} className="btn btn-outline text-sm"><Plus className="w-4 h-4" /> New</button>
          <button className="btn btn-primary text-sm"><Star className="w-4 h-4" /> Publish</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-[300px_1fr] gap-4">
        <div className="card p-3 h-fit">
          {list.map(p => (
            <button key={p.id} onClick={()=>setActiveId(p.id)} className={`w-full text-left p-3 rounded-md border mb-1 ${p.id===active.id?'bg-brand-50 border-brand-300':'border-ink-100 hover:bg-ink-50'}`}>
              <div className="flex justify-between mb-1"><div className="font-medium text-sm">{p.title}</div><span className={`badge text-[9px] ${p.status==='Published'?'bg-brand-50 text-brand-700 border-brand-200':'bg-ink-100 text-ink-700 border-ink-200'}`}>{p.status}</span></div>
              <div className="text-[10px] text-ink-500 font-mono">{p.slug}</div>
            </button>
          ))}
        </div>
        <div className="card flex flex-col overflow-hidden">
          <div className="px-5 py-4 border-b border-ink-200">
            <input value={active.title} onChange={e=>update({title:e.target.value})} className="bg-transparent outline-none w-full text-xl font-bold" />
            <input value={active.slug} onChange={e=>update({slug:e.target.value})} className="bg-transparent outline-none w-full text-xs text-ink-600 font-mono mt-1" />
          </div>
          <div className="px-3 py-2 border-b border-ink-200 flex gap-1 flex-wrap bg-ink-50">
            <button onClick={()=>setTab('edit')} className={`text-xs px-3 py-1.5 rounded-md ${tab==='edit'?'bg-white shadow-sm':'text-ink-500'}`}><Pencil className="w-3 h-3 inline mr-1" />Edit</button>
            <button onClick={()=>setTab('preview')} className={`text-xs px-3 py-1.5 rounded-md ${tab==='preview'?'bg-white shadow-sm':'text-ink-500'}`}><Eye className="w-3 h-3 inline mr-1" />Preview</button>
            <div className="w-px h-5 bg-ink-200 mx-2" />
            {[
              {fn:()=>wrap('# ',''),i:<Heading1 className="w-3.5 h-3.5" />},
              {fn:()=>wrap('## ',''),i:<Heading2 className="w-3.5 h-3.5" />},
              {fn:()=>wrap('**','**'),i:<Bold className="w-3.5 h-3.5" />},
              {fn:()=>wrap('*','*'),i:<Italic className="w-3.5 h-3.5" />},
              {fn:()=>wrap('* ',''),i:<List className="w-3.5 h-3.5" />},
              {fn:()=>wrap('> ',''),i:<Quote className="w-3.5 h-3.5" />},
              {fn:()=>wrap('`','`'),i:<Code className="w-3.5 h-3.5" />},
              {fn:()=>wrap('[text](','https://)'),i:<Link2 className="w-3.5 h-3.5" />},
            ].map((b,i)=><button key={i} onClick={b.fn} className="w-7 h-7 rounded hover:bg-white">{b.i}</button>)}
          </div>
          {tab === 'edit' ? (
            <textarea id="md-editor" value={active.body} onChange={e=>update({body:e.target.value})} className="w-full font-mono text-sm p-6 outline-none min-h-[500px] resize-none" />
          ) : (
            <div className="p-8 min-h-[500px] prose-content" dangerouslySetInnerHTML={{__html: renderMd(active.body)}} />
          )}
        </div>
      </div>
    </div>
  );
}
