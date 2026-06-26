import Link from 'next/link';
import { learningPaths } from '@/data/learningPaths';
import { getCourse } from '@/data/courses';
import { levelColor } from '@/lib/utils';

export default function LearningPathsPage() {
  return (
    <>
      <div className="bg-ink-50 border-b border-ink-200">
        <div className="container-wide py-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Learning Roadmaps</h1>
          <p className="mt-2 text-ink-600">Multi-course journeys.</p>
        </div>
      </div>
      <div className="container-wide py-10 grid lg:grid-cols-2 gap-6">
        {learningPaths.map(p => (
          <div id={p.slug} key={p.slug} className="card p-6">
            <div className="flex items-start justify-between mb-3">
              <div><div className="text-3xl mb-2">{p.icon}</div><h2 className="text-xl font-bold">{p.title}</h2><p className="text-sm text-ink-600">{p.description}</p></div>
              <span className={`badge ${levelColor(p.level)}`}>{p.level}</span>
            </div>
            <ol className="mt-4 space-y-3">
              {p.steps.map((s, i) => {
                const c = s.courseSlug ? getCourse(s.courseSlug) : undefined;
                return (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded bg-brand-100 text-brand-700 text-xs flex items-center justify-center font-bold">{i+1}</span>
                    <div><div className="font-medium">{s.title}</div><div className="text-xs text-ink-500">{s.note}</div>
                      {c && <Link href={`/courses/${c.slug}`} className="text-xs text-brand-700 font-medium">Open →</Link>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
}
