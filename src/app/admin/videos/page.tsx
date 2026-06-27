'use client';

import { useState } from 'react';
import {
  Crown,
  Pencil,
  PlayCircle,
  Plus,
  Search,
  Trash2,
  Video,
} from 'lucide-react';
import { videos as seed } from '@/data/videos';

export default function AdminVideosPage() {
  const [list, setList] = useState(seed);
  const [query, setQuery] = useState('');

  const filtered = list.filter((video) =>
    `${video.title} ${video.id}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="badge badge-ai mb-3">
            <Video className="h-3.5 w-3.5" />
            Video Manager
          </div>

          <h1 className="text-3xl font-black text-[var(--text-strong)]">
            Videos
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage premium videos, thumbnails, and lesson video access.
          </p>
        </div>

        <button type="button" className="btn btn-primary">
          <Plus className="h-4 w-4" />
          New Video
        </button>
      </div>

      <div className="card p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search videos..."
            className="input h-12 pl-11"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((video) => (
          <article key={video.id} className="card overflow-hidden">
            <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-700">
              <span className="text-6xl">{video.thumbnail}</span>

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur">
                  <PlayCircle className="h-8 w-8" />
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {video.isPro ? (
                  <span className="badge border-amber-300 bg-amber-100 text-amber-800">
                    <Crown className="h-3 w-3" />
                    Pro
                  </span>
                ) : (
                  <span className="badge border-primary-500/25 bg-primary-500/10 text-primary-500">
                    Free
                  </span>
                )}

                <span className="badge border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-body)]">
                  ID: {video.id}
                </span>
              </div>

              <h2 className="line-clamp-2 text-lg font-black text-[var(--text-strong)]">
                {video.title}
              </h2>

              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary-500/25 bg-primary-500/10 text-primary-500"
                  aria-label="Edit video"
                >
                  <Pencil className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setList((current) =>
                      current.filter((item) => item.id !== video.id),
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-500"
                  aria-label="Delete video"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card p-10 text-center text-sm text-[var(--text-muted)]">
          No videos found.
        </div>
      )}
    </div>
  );
}