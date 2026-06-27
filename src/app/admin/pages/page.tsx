'use client';

import { useMemo, useState } from 'react';
import {
  Bold,
  Code,
  Eye,
  FileText,
  Heading1,
  Heading2,
  Italic,
  Link2,
  List,
  Pencil,
  Plus,
  Quote,
  Save,
  Star,
  Trash2,
} from 'lucide-react';

interface PageRow {
  id: string;
  slug: string;
  title: string;
  status: 'Published' | 'Draft';
  author: string;
  body: string;
}

const SEED: PageRow[] = [
  {
    id: 'p1',
    slug: '/',
    title: 'Home',
    status: 'Published',
    author: 'Super Admin',
    body: '# Welcome\n\nA free AI platform.',
  },
  {
    id: 'p2',
    slug: '/about',
    title: 'About',
    status: 'Published',
    author: 'Sarah Chen',
    body: '# About\n\nOur **mission** is to make AI learning simple.',
  },
  {
    id: 'p3',
    slug: '/contact',
    title: 'Contact',
    status: 'Published',
    author: 'David Kim',
    body: '# Contact\n\nhello@studyai.com',
  },
];

function renderMarkdown(markdown: string) {
  return markdown
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-black mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-black mt-6 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-[var(--bg-subtle)] px-1 py-0.5">$1</code>')
    .split('\n\n')
    .map((paragraph) =>
      paragraph.startsWith('<')
        ? paragraph
        : `<p class="my-3 leading-8 text-[var(--text-body)]">${paragraph}</p>`,
    )
    .join('');
}

export default function AdminPagesPage() {
  const [list, setList] = useState<PageRow[]>(SEED);
  const [activeId, setActiveId] = useState(SEED[0].id);
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');
  const [query, setQuery] = useState('');

  const filtered = list.filter((page) =>
    `${page.title} ${page.slug} ${page.status} ${page.author}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  const active = useMemo(
    () => list.find((page) => page.id === activeId) ?? list[0],
    [list, activeId],
  );

  function updatePage(patch: Partial<PageRow>) {
    setList((current) =>
      current.map((page) =>
        page.id === active.id ? { ...page, ...patch } : page,
      ),
    );
  }

  function wrap(before: string, after = before) {
    const textarea = document.getElementById('md-editor') as HTMLTextAreaElement | null;

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const next =
      active.body.slice(0, start) +
      before +
      active.body.slice(start, end) +
      after +
      active.body.slice(end);

    updatePage({ body: next });
  }

  function addPage() {
    const page: PageRow = {
      id: `p${Date.now()}`,
      slug: '/new-page',
      title: 'New page',
      status: 'Draft',
      author: 'You',
      body: '# New page\n\nStart writing your page content here.',
    };

    setList((current) => [page, ...current]);
    setActiveId(page.id);
    setTab('edit');
  }

  function deletePage(id: string) {
    setList((current) => {
      const next = current.filter((page) => page.id !== id);
      setActiveId(next[0]?.id ?? '');
      return next;
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="badge badge-ai mb-3">
            <FileText className="h-3.5 w-3.5" />
            Pages Manager
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            Pages
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage homepage, about, contact, and other static content pages.
          </p>
        </div>

        <div className="flex gap-2">
          <button type="button" onClick={addPage} className="btn btn-outline">
            <Plus className="h-4 w-4" />
            New
          </button>

          <button type="button" className="btn btn-primary">
            <Save className="h-4 w-4" />
            Save
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="card p-6">
          <FileText className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.length}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Total pages
          </div>
        </div>

        <div className="card p-6">
          <Star className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.filter((page) => page.status === 'Published').length}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Published
          </div>
        </div>

        <div className="card p-6">
          <Pencil className="h-6 w-6 text-primary-500" />
          <div className="mt-4 text-3xl font-black text-[var(--text-strong)]">
            {list.filter((page) => page.status === 'Draft').length}
          </div>
          <div className="text-sm font-bold text-[var(--text-muted)]">
            Drafts
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <aside className="card self-start p-4 xl:sticky xl:top-24">
          <div className="relative mb-4">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search pages..."
              className="input h-12"
            />
          </div>

          <div className="space-y-2">
            {filtered.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setActiveId(page.id)}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  page.id === active.id
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-[var(--border)] bg-[var(--bg-subtle)] hover:border-primary-400'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-black text-[var(--text-strong)]">
                      {page.title}
                    </div>
                    <div className="mt-1 truncate font-mono text-xs text-[var(--text-muted)]">
                      {page.slug}
                    </div>
                  </div>

                  <span
                    className={`badge ${
                      page.status === 'Published'
                        ? 'border-success/25 bg-success/10 text-success'
                        : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]'
                    }`}
                  >
                    {page.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {active ? (
          <main className="card overflow-hidden">
            <div className="border-b border-[var(--border)] p-5">
              <input
                value={active.title}
                onChange={(event) => updatePage({ title: event.target.value })}
                className="w-full bg-transparent text-2xl font-black text-[var(--text-strong)] outline-none"
              />

              <input
                value={active.slug}
                onChange={(event) => updatePage({ slug: event.target.value })}
                className="mt-2 w-full bg-transparent font-mono text-xs font-bold text-[var(--text-muted)] outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-subtle)] p-3">
              <button
                type="button"
                onClick={() => setTab('edit')}
                className={`rounded-xl px-3 py-2 text-xs font-black ${
                  tab === 'edit'
                    ? 'bg-[var(--surface)] text-primary-500 shadow'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                <Pencil className="mr-1 inline h-3.5 w-3.5" />
                Edit
              </button>

              <button
                type="button"
                onClick={() => setTab('preview')}
                className={`rounded-xl px-3 py-2 text-xs font-black ${
                  tab === 'preview'
                    ? 'bg-[var(--surface)] text-primary-500 shadow'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                <Eye className="mr-1 inline h-3.5 w-3.5" />
                Preview
              </button>

              <div className="mx-2 h-6 w-px bg-[var(--border)]" />

              {[
                { action: () => wrap('# ', ''), icon: Heading1 },
                { action: () => wrap('## ', ''), icon: Heading2 },
                { action: () => wrap('**', '**'), icon: Bold },
                { action: () => wrap('*', '*'), icon: Italic },
                { action: () => wrap('* ', ''), icon: List },
                { action: () => wrap('> ', ''), icon: Quote },
                { action: () => wrap('`', '`'), icon: Code },
                { action: () => wrap('[text](', 'https://)'), icon: Link2 },
              ].map((button, index) => {
                const Icon = button.icon;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={button.action}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-primary-500"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => deletePage(active.id)}
                className="ml-auto flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-500"
                aria-label="Delete page"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {tab === 'edit' ? (
              <textarea
                id="md-editor"
                value={active.body}
                onChange={(event) => updatePage({ body: event.target.value })}
                className="min-h-[560px] w-full resize-none bg-[var(--surface)] p-6 font-mono text-sm leading-7 text-[var(--text-body)] outline-none"
              />
            ) : (
              <div
                className="prose-content min-h-[560px] p-8"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(active.body),
                }}
              />
            )}
          </main>
        ) : (
          <main className="card p-10 text-center text-sm text-[var(--text-muted)]">
            No page selected.
          </main>
        )}
      </div>
    </div>
  );
}