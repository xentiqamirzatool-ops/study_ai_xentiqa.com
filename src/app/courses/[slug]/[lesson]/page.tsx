import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses, getLesson } from '@/data/courses';
import { ChevronRight, ChevronLeft, ArrowRight, Crown, Lightbulb, AlertTriangle, BookOpen, Sparkles } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

export function generateStaticParams() {
  const params: { slug: string; lesson: string }[] = [];
  for (const c of courses) for (const l of c.lessons) params.push({ slug: c.slug, lesson: l.slug });
  return params;
}

export default function LessonPage({ params }: { params: { slug: string; lesson: string } }) {
  const data = getLesson(params.slug, params.lesson);
  if (!data) notFound();
  const { course, lesson, prev, next, index } = data;
  return (
    <div className="container-wide py-6 grid lg:grid-cols-[260px_1fr] gap-8">
      <aside className="lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="card p-3">
          <Link href={`/courses/${course.slug}`} className="text-xs font-medium hover:text-brand-700">← {course.title}</Link>
          <div className="mt-3 space-y-0.5">
            {course.lessons.map((l, i) => {
              const active = l.slug === lesson.slug;
              return (
                <Link key={l.slug} href={`/courses/${course.slug}/${l.slug}`} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${active ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-ink-700 hover:bg-ink-50'}`}>
                  <span className={`w-5 h-5 rounded text-[10px] flex items-center justify-center font-bold ${active ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-500'}`}>{i+1}</span>
                  <span className="flex-1 truncate">{l.title}</span>
                  {l.isPro && <Crown className="w-3 h-3 text-amber-500" />}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
      <article>
        <div className="flex items-center gap-2 text-xs text-ink-500 mb-3">
          <Link href={`/courses/${course.slug}`} className="hover:text-brand-700">{course.title}</Link><ChevronRight className="w-3 h-3" />
          <span>Lesson {index+1}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">{lesson.title}</h1>
        <p className="mt-2 text-lg text-ink-600">{lesson.summary}</p>
        <span className="badge bg-ink-100 text-ink-700 border-ink-200 mt-3">{lesson.duration}</span>
        <section className="mt-8 card p-5 bg-brand-50 border-brand-200">
          <div className="flex items-center gap-2 text-brand-900 font-semibold uppercase text-sm"><BookOpen className="w-4 h-4" /> What you will learn</div>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">{lesson.whatYouLearn.map((x,i) => <li key={i} className="flex gap-2"><span className="text-brand-600">✓</span>{x}</li>)}</ul>
        </section>
        <section className="mt-10 prose-content">
          <h2>Explanation</h2>
          {lesson.content.split('\n').map((p, i) => p.trim() ? (
            <p key={i} dangerouslySetInnerHTML={{__html: p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<code>$1</code>')}} />
          ) : null)}
        </section>
        {lesson.code && (
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-600" /> Code Example</h2>
            <CodeBlock code={lesson.code.code} language={lesson.code.language} />
          </section>
        )}
        {lesson.realWorld && (
          <section className="mt-8 card p-5 bg-emerald-50 border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold"><Lightbulb className="w-4 h-4" /> Real-world</div>
            <p className="mt-2 text-sm">{lesson.realWorld}</p>
          </section>
        )}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section className="mt-6 card p-5 bg-amber-50 border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-semibold"><AlertTriangle className="w-4 h-4" /> Mistakes</div>
            <ul className="mt-2 text-sm space-y-1">{lesson.commonMistakes.map((m,i) => <li key={i}>• {m}</li>)}</ul>
          </section>
        )}
        {lesson.practice && (
          <section className="mt-6 card p-5 bg-ink-50">
            <div className="font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-brand-600" /> Practice</div>
            <p className="mt-2 text-sm">{lesson.practice}</p>
          </section>
        )}
        <div className="mt-10 pt-6 border-t border-ink-200 flex justify-between gap-3">
          {prev ? <Link href={`/courses/${course.slug}/${prev.slug}`} className="btn btn-outline"><ChevronLeft className="w-4 h-4" /> Previous</Link> : <div />}
          {next ? <Link href={`/courses/${course.slug}/${next.slug}`} className="btn btn-primary">Next <ArrowRight className="w-4 h-4" /></Link>
                : <Link href={`/courses/${course.slug}`} className="btn btn-primary">Finish <ArrowRight className="w-4 h-4" /></Link>}
        </div>
      </article>
    </div>
  );
}
