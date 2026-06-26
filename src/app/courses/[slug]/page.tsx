import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses, getCourse } from '@/data/courses';
import { ArrowRight, Star, Clock, Users, BookOpen, Crown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { levelColor } from '@/lib/utils';

export function generateStaticParams() { return courses.map(c => ({ slug: c.slug })); }

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  return (
    <>
      <div className="bg-ink-50 border-b border-ink-200">
        <div className="container-wide py-10">
          <div className="flex items-center gap-2 text-xs text-ink-500 mb-4">
            <Link href="/courses" className="hover:text-brand-700">Courses</Link><ChevronRight className="w-3 h-3" />
            <span className="text-ink-900">{course.title}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`badge ${levelColor(course.level)}`}>{course.level}</span>
            {course.categories.map(c => <span key={c} className="badge bg-white text-ink-700 border-ink-200">{c}</span>)}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
          <p className="mt-3 text-lg text-ink-600">{course.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-ink-600">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{course.hours}h</span>
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{course.lessonsCount} lessons</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{course.students.toLocaleString()}</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 text-amber-400" />{course.rating}</span>
          </div>
        </div>
      </div>
      <div className="container-wide py-10 grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <h2 className="text-xl font-bold mb-3">Overview</h2>
          <p className="text-ink-700">{course.description}</p>
          <div className="mt-6 card p-5 bg-brand-50 border-brand-200">
            <h3 className="text-sm font-semibold text-brand-900 mb-3 uppercase">What you will learn</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {course.lessons.flatMap(l => l.whatYouLearn).slice(0,8).map((x,i) => (
                <div key={i} className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-brand-600 flex-none mt-0.5" />{x}</div>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold mt-10 mb-4">Course Content</h2>
          <div className="card divide-y divide-ink-100">
            {course.lessons.map((l, i) => (
              <Link key={l.slug} href={`/courses/${course.slug}/${l.slug}`} className="flex items-center justify-between p-4 hover:bg-ink-50 group">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded bg-ink-100 text-xs flex items-center justify-center font-semibold">{i+1}</span>
                  <div className="min-w-0">
                    <div className="font-medium group-hover:text-brand-700 truncate">{l.title}</div>
                    <div className="text-xs text-ink-500 truncate">{l.summary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  {l.isPro && <span className="badge bg-amber-50 text-amber-700 border-amber-200"><Crown className="w-3 h-3" />Pro</span>}
                  <span>{l.duration}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="card p-5">
            <div className={`h-32 -mx-5 -mt-5 mb-4 bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl rounded-t-xl`}>{course.cover}</div>
            <Link href={`/courses/${course.slug}/${course.lessons[0].slug}`} className="btn btn-primary w-full">Start Course <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </aside>
      </div>
    </>
  );
}
