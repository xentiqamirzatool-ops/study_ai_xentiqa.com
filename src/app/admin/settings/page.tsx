'use client';
import { useState } from 'react';
export default function Settings() {
  const [name, setName] = useState('StudyAI');
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="card p-5 space-y-3">
        <div><label className="text-xs font-semibold uppercase text-ink-500">Site name</label><input className="input mt-1" value={name} onChange={e=>setName(e.target.value)} /></div>
        <div><label className="text-xs font-semibold uppercase text-ink-500">OpenAI key</label><input type="password" className="input mt-1" placeholder="sk-…" /></div>
      </div>
    </div>
  );
}
