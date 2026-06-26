import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 p-10 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-black">
            Ready to become an AI Engineer?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Join thousands of learners mastering Artificial Intelligence,
            Machine Learning, Prompt Engineering and AI Agents.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="btn bg-white text-primary-700 hover:bg-slate-100"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/pro"
              className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              View Pro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}