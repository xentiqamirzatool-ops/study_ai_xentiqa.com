'use client';
import { useState } from 'react';
import { courses } from '@/data/courses';
import { Crown, Pencil, Trash2 } from 'lucide-react';

export default function AdminLessons() {
  const all = courses.flatMap(c => c.lessons.map(l => ({course: c.title, ...l})));
  const [list, setList] = useState(all);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Lessons ({list.length})</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ink-50"><tr><th className="p-3 text-left">Lesson</th><th className="p-3">Course</th><th className="p-3">Pro</th><th></th></tr></thead>
          <tbody>
            {list.map((l, i) => (
              <tr key={i} className="border-t border-ink-100">
                <td className="p-3 font-medium">{l.title}</td>
                <td className="p-3 text-center">{l.course}</td>
                <td className="p-3 text-center">{l.isPro ? <span className="badge bg-amber-50 text-amber-700 border-amber-200"><Crown className="w-3 h-3" />Pro</span> : <span className="badge bg-brand-50 text-brand-700 border-brand-200">Free</span>}</td>
                <td className="p-3 text-right"><button className="badge bg-brand-50 text-brand-700 border-brand-200"><Pencil className="w-3 h-3" /></button><button onClick={()=>setList(list.filter((_,j)=>j!==i))} className="badge bg-rose-50 text-rose-700 border-rose-200 ml-1"><Trash2 className="w-3 h-3" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
