import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Blog — StudyAI',
  description: 'Guides, tutorials, and insights on AI, ML, and prompt engineering.',
};

const POSTS = [
  {
    title: 'How AI tutoring actually works',
    category: 'Product',
    date: 'Jun 2026',
    excerpt: 'A look under the hood at how StudyAI grounds explanations in your current lesson.',
  },
  {
    title: 'Spaced repetition 101',
    category: 'Guides',
    date: 'Jun 2026',
    excerpt: 'Why reviewing at the right interval is the closest thing to a learning cheat code.',
  },
  {
    title: 'Prompt engineering for beginners',
    category: 'AI',
    date: 'May 2026',
    excerpt: 'Five patterns that immediately improve the answers you get from any model.',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">Blog</div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Learn AI, faster
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Guides, tutorials, and product updates from the StudyAI team.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="card flex flex-col p-6">
              <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600" />
              <div className="text-xs font-black uppercase tracking-wide text-primary-500">
                {post.category}
              </div>
              <h2 className="mt-2 text-lg font-black text-[var(--text-strong)]">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-[var(--text-muted)]">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[var(--text-muted)]">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/courses" className="btn btn-primary">
            Start learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
