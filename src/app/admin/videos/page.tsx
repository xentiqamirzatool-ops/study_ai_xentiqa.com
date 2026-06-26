'use client';
import { useState } from 'react';
import { videos as seed } from '@/data/videos';
import { Plus, Trash2, Pencil, Crown } from 'lucide-react';

export default function AdminVideos() {
  const [list, setList] = useState(seed);
  return (
    <div className="space-y-6">
      <div className="flex justify-between"><h1 className="text-3xl font-bold">Videos</h1><button className="btn btn-primary"><Plus className="w-4 h-4" /> New</button></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(v => (
          <div key={v.id} className="card overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-5xl">{v.thumbnail}</div>
            <div className="p-4">
              {v.isPro && <span className="badge bg-amber-50 text-amber-700 border-amber-200"><Crown className="w-3 h-3" />Pro</span>}
              <h3 className="font-semibold mt-2">{v.title}</h3>
              <div className="flex gap-2 mt-3"><button className="badge bg-brand-50 text-brand-700 border-brand-200"><Pencil className="w-3 h-3" /></button><button onClick={()=>setList(list.filter(x=>x.id!==v.id))} className="badge bg-rose-50 text-rose-700 border-rose-200"><Trash2 className="w-3 h-3" /></button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
