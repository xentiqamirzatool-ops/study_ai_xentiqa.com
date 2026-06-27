import type { MetadataRoute } from 'next';
import { courses } from '@/data/courses';

const BASE_URL = 'https://studyai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const courseRoutes = courses.flatMap((course) => [
    {
      url: `${BASE_URL}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...course.lessons.map((lesson) => ({
      url: `${BASE_URL}/courses/${course.slug}/${lesson.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]);

  const staticRoutes = [
    '',
    '/courses',
    '/learning-paths',
    '/ai-tutor',
    '/ai-quiz',
    '/flashcards',
    '/ai-playground',
    '/code-playground',
    '/pro',
    '/login',
    '/dashboard',
    '/my-courses',
    '/certificates',
    '/achievements',
    '/notes',
    '/bookmarks',
    '/profile',
    '/settings',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}