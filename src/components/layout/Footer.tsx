'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  return (
    <footer className="border-t border-ink-200 bg-ink-50 mt-20">
      <div className="container-wide py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center"><span className="text-white font-bold text-sm">S</span></span>
            <span>Study<span className="text-brand-600">AI</span></span>
          </Link>
          <p className="mt-3 text-sm text-ink-600">Free AI education platform.</p>
        </div>
        <FC title="Courses" links={[{h:'/courses',l:'All'},{h:'/courses/ai-fundamentals',l:'AI'},{h:'/courses/prompt-engineering',l:'Prompts'}]} />
        <FC title="Learn" links={[{h:'/learning-paths',l:'Roadmaps'},{h:'/ai-playground',l:'AI Lab'},{h:'/code-playground',l:'Code'}]} />
        <FC title="Company" links={[{h:'/about',l:'About'},{h:'/contact',l:'Contact'},{h:'/admin/login',l:'Admin'}]} />
      </div>
      <div className="border-t border-ink-200 bg-white">
        <div className="container-wide py-4 text-xs text-ink-500">© {new Date().getFullYear()} StudyAI.</div>
      </div>
    </footer>
  );
}

function FC({title,links}:{title:string;links:{h:string;l:string}[]}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-900 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-ink-600">{links.map(x => <li key={x.h}><Link href={x.h} className="hover:text-brand-700">{x.l}</Link></li>)}</ul>
    </div>
  );
}
