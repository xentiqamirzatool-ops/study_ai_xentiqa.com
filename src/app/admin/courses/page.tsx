'use client';
import { useState } from 'react';
import Link from 'next/link';
import { courses as seed } from '@/data/courses';
import { Plus, Trash2, Pencil, ExternalLink } from 'lucide-react';
import { levelColor } from '@/lib/utils';

export default function AdminCourses() {
  const [list, setList] = useState(seed);
  return (
    <div className="space-y-6">
      <div className="flex justify-between"><h1 className="text-3xl font-bold">Courses</h1><button className="btn btn-primary"><Plus className="w-4 h-4" /> New</button></div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ink-50"><tr><th className="text-left p-3">Course</th><th className="p-3">Level</th><th className="p-3">Lessons</th><th className="p-3"></th></tr></thead>
          <tbody>
            {list.map(c => (
              <tr key={c.slug} className="border-t border-ink-100">
                <td className="p-3"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center`}>{c.cover}</div><div><div className="font-medium">{c.title}</div><div className="text-xs text-ink-500">/{c.slug}</div></div></div></td>
                <td className="text-center"><span className={`badge ${levelColor(c.level)}`}>{c.level}</span></td>
                <td className="text-center">{c.lessons.length}</td>
                <td className="p-3 text-right"><div className="inline-flex gap-2">
                  <Link href={`/courses/${c.slug}`} target="_blank" className="badge bg-ink-100 text-ink-700 border-ink-200"><ExternalLink className="w-3 h-3" /></Link>
                  <button className="badge bg-brand-50 text-brand-700 border-brand-200"><Pencil className="w-3 h-3" /></button>
                  <button onClick={()=>setList(list.filter(x=>x.slug!==c.slug))} className="badge bg-rose-50 text-rose-700 border-rose-200"><Trash2 className="w-3 h-3" /></button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
