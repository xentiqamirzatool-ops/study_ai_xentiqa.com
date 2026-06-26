'use client';
import { useState } from 'react';
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-wide py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={e=>{e.preventDefault(); setSent(true);}} className="card p-6 mt-6 space-y-3">
        <input required className="input" placeholder="Name" />
        <input required type="email" className="input" placeholder="Email" />
        <textarea required className="input min-h-[140px]" placeholder="Message" />
        {sent ? <div className="text-brand-700">Thanks! We will reply.</div> : <button className="btn btn-primary">Send</button>}
      </form>
    </div>
  );
}
