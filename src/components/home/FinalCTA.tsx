import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-[var(--bg-base)] py-20">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl border border-primary-400/30 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 px-6 py-14 text-center text-white shadow-2xl sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_35%)]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4" />
              Start today
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Ready to learn smarter with AI?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Start with free AI lessons, follow guided roadmaps, and build real skills step by step.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/courses" className="btn bg-white text-primary-700 hover:bg-slate-100">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/learning-paths" className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20">
                View Roadmaps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}