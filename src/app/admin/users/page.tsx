'use client';
import { useState } from 'react';
import { users as seed } from '@/data/users';
import { Plus, Trash2 } from 'lucide-react';

export default function AdminUsers() {
  const [list, setList] = useState(seed);
  return (
    <div className="space-y-6">
      <div className="flex justify-between"><h1 className="text-3xl font-bold">Users</h1><button className="btn btn-primary"><Plus className="w-4 h-4" /> Invite</button></div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ink-50"><tr><th className="text-left p-3">User</th><th className="p-3">Role</th><th></th></tr></thead>
          <tbody>
            {list.map(u => (
              <tr key={u.id} className="border-t border-ink-100">
                <td className="p-3"><div className="font-medium">{u.name}</div><div className="text-xs text-ink-500">{u.email}</div></td>
                <td className="text-center"><span className="badge bg-ink-100 text-ink-700 border-ink-200">{u.role}</span></td>
                <td className="p-3 text-right"><button onClick={()=>setList(list.filter(x=>x.id!==u.id))} className="badge bg-rose-50 text-rose-700 border-rose-200"><Trash2 className="w-3 h-3" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
