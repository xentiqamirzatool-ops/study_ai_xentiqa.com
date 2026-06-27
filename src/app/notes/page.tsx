'use client';

import { useState } from 'react';
import { BookOpen, Plus, Save, Sparkles, StickyNote, Trash2 } from 'lucide-react';

const DEFAULT_NOTES = [
  {
    title: 'AI Fundamentals',
    body: 'AI means machines performing tasks that usually require human intelligence.',
  },
  {
    title: 'Prompt Engineering',
    body: 'A good prompt gives clear instructions, context, format, and examples.',
  },
];

export default function NotesPage() {
  const [notes, setNotes] = useState(DEFAULT_NOTES);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addNote() {
    if (!title.trim() || !body.trim()) return;

    setNotes((current) => [
      {
        title: title.trim(),
        body: body.trim(),
      },
      ...current,
    ]);

    setTitle('');
    setBody('');
  }

  function deleteNote(index: number) {
    setNotes((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <StickyNote className="h-3.5 w-3.5" />
            Notes
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Save your learning notes
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Keep important concepts, explanations, and study reminders in one place.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="card self-start p-6 lg:sticky lg:top-24">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <Plus className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-black text-[var(--text-strong)]">
              New note
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              Add a quick study note. Later these will save to your account.
            </p>

            <label className="mt-6 block text-sm font-bold text-[var(--text-strong)]">
              Title
            </label>

            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="input mt-2"
              placeholder="Example: Transformers"
            />

            <label className="mt-5 block text-sm font-bold text-[var(--text-strong)]">
              Note
            </label>

            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className="input mt-2 min-h-[160px] resize-none leading-7"
              placeholder="Write your note..."
            />

            <button type="button" onClick={addNote} className="btn btn-primary mt-5 w-full">
              <Save className="h-4 w-4" />
              Save Note
            </button>
          </aside>

          <main>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-[var(--text-strong)]">
                  My Notes
                </h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {notes.length} saved notes
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {notes.map((note, index) => (
                <article key={`${note.title}-${index}`} className="card p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteNote(index)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] transition hover:border-rose-500 hover:text-rose-500"
                      aria-label="Delete note"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <h3 className="text-xl font-black text-[var(--text-strong)]">
                    {note.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
              <div className="flex items-center gap-2 font-black text-primary-500">
                <Sparkles className="h-5 w-5" />
                Coming next
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Notes will later support AI summaries, lesson linking, tags, and cloud sync.
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}