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
    background_color: '#0b1020',
    theme_color: '#0b1020',

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
      { src: '/logo.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}