import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'StudyAI',
    short_name: 'StudyAI',
    description:
      'Learn AI, Machine Learning, Python, Prompt Engineering, and modern AI tools with interactive lessons, quizzes, flashcards, and an AI tutor.',

    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0f172a',
    theme_color: '#2563eb',

    lang: 'en',
    dir: 'ltr',

    categories: [
      'education',
      'productivity',
      'technology',
      'developer',
      'ai',
    ],

    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}