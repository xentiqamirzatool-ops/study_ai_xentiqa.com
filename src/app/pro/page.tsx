import { plans } from '@/data/plans';
import { Crown, CheckCircle2 } from 'lucide-react';

export default function ProPage() {
  return (
    <div className="container-wide py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 badge bg-amber-100 text-amber-800 border-amber-300 mb-4"><Crown className="w-3.5 h-3.5" /> Pro</div>
        <h1 className="text-3xl sm:text-4xl font-bold">Unlock videos and certificates</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(p => (
          <div key={p.id} className={`card p-6 flex flex-col relative ${p.highlight ? 'ring-2 ring-brand-500' : ''}`}>
            {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-brand-600 text-white border-brand-700">Popular</div>}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-bold">{p.priceLabel}</div>
            <ul className="mt-5 space-y-2 text-sm flex-1">{p.features.map(f => <li key={f} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 flex-none mt-0.5" />{f}</li>)}</ul>
            <button className={`btn mt-6 ${p.highlight ? 'btn-primary' : 'btn-outline'}`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
