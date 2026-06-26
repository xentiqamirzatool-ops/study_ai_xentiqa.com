import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, ChevronRight, Code2, Crown } from 'lucide-react';
import { courses } from '@/data/courses';
import { learningPaths } from '@/data/learningPaths';
import { plans } from '@/data/plans';
import CourseCard from '@/components/CourseCard';

const TOPICS = [
  { name: 'AI', icon: '🧠' },{ name: 'Machine Learning', icon: '📊' },
  { name: 'Prompts', icon: '✨' },{ name: 'Python', icon: '🐍' },
  { name: 'Agents', icon: '🤖' },{ name: 'GenAI', icon: '🎨' },
];

export default function HomePage() {
  const featured = courses.slice(0, 6);
  const totalLessons = courses.reduce((a,c) => a + c.lessons.length, 0);
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 via-white to-white border-b border-ink-200">
        <div className="container-wide py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" /> 100,000+ learners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-tight">
              Learn AI from <span className="text-brand-600">the world's best</span> free tutorials.
            </h1>
            <p className="mt-5 text-lg text-ink-600 max-w-xl">
              Step-by-step lessons on AI, ML, Prompt Engineering and modern AI tools.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/courses" className="btn btn-primary">Browse Courses <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/learning-paths" className="btn btn-outline">Roadmaps</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-2xl font-bold">{courses.length}</div><div className="text-xs text-ink-500 uppercase">Courses</div></div>
              <div><div className="text-2xl font-bold">{totalLessons}+</div><div className="text-xs text-ink-500 uppercase">Lessons</div></div>
              <div><div className="text-2xl font-bold">100k+</div><div className="text-xs text-ink-500 uppercase">Learners</div></div>
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold mb-4">Top topics today</div>
            {[
              {t:'What is AI?',c:'Fundamentals',m:8,s:'ai-fundamentals/what-is-ai'},
              {t:'RTCF Framework',c:'Prompts',m:8,s:'prompt-engineering/rtcf'},
              {t:'Transformers',c:'GenAI',m:10,s:'generative-ai/transformers'},
              {t:'First ML Script',c:'Python',m:11,s:'python-for-ai/ml-script'},
            ].map((x,i) => (
              <Link key={i} href={`/courses/${x.s}`} className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-ink-50 group">
                <span className="w-6 h-6 rounded bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center">{i+1}</span>
                <div className="flex-1 min-w-0"><div className="text-sm font-medium truncate group-hover:text-brand-700">{x.t}</div><div className="text-xs text-ink-500">{x.c} · {x.m} min</div></div>
                <ChevronRight className="w-4 h-4 text-ink-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="mb-8"><div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">Browse</div><h2 className="text-2xl font-bold">Topics</h2></div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {TOPICS.map(t => (
            <Link key={t.name} href="/courses" className="card p-4 text-center group">
              <div className="text-3xl">{t.icon}</div>
              <div className="text-xs font-semibold mt-2 group-hover:text-brand-700">{t.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-ink-50 border-y border-ink-200">
        <section className="container-wide py-12">
          <div className="mb-8"><div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">Popular</div><h2 className="text-2xl font-bold">Featured Courses</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{featured.map(c => <CourseCard key={c.slug} course={c} />)}</div>
          <div className="mt-8 text-center"><Link href="/courses" className="btn btn-outline">View all {courses.length} <ArrowRight className="w-4 h-4" /></Link></div>
        </section>
      </div>

      <section className="container-wide py-12">
        <div className="mb-8 text-center"><div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">Membership</div><h2 className="text-2xl font-bold">Free forever. Pro when ready.</h2></div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(p => (
            <div key={p.id} className={`card p-6 flex flex-col relative ${p.highlight ? 'ring-2 ring-brand-500' : ''}`}>
              {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-brand-600 text-white border-brand-700">Popular</div>}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">{p.priceLabel}</div>
              <ul className="mt-5 space-y-2 text-sm flex-1">{p.features.map(f => <li key={f} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 flex-none mt-0.5" />{f}</li>)}</ul>
              <Link href="/pro" className={`btn mt-6 ${p.highlight ? 'btn-primary' : 'btn-outline'}`}>{p.cta}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
