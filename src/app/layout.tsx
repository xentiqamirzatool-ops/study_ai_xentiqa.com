import type { Metadata, Viewport } from 'next';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import FloatingAIButton from '@/components/FloatingAIButton';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AITutorProvider } from '@/components/ai/AITutorContext';
import AITutorWidget from '@/components/ai/AITutorWidget';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://study.ai.xentiqa.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'StudyAI — Learn AI, ML & Prompt Engineering',
  description:
    'StudyAI is a premium, AI-first learning platform — courses, roadmaps, an AI tutor, quizzes, flashcards, and more.',
  icons: {
    // Prefer your PNG logo; SVG kept as a fallback declaration.
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'StudyAI',
    title: 'StudyAI — Learn Smarter. Achieve More.',
    description: 'Courses, roadmaps, an AI tutor, quizzes and flashcards to learn AI faster.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'StudyAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudyAI — Learn Smarter. Achieve More.',
    description: 'Courses, roadmaps, an AI tutor, quizzes and flashcards to learn AI faster.',
    images: ['/logo.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b1020',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex w-full max-w-full flex-col overflow-x-clip bg-[var(--bg-base)] text-[var(--text-body)] pb-20 lg:pb-0">
        <ThemeProvider>
          <AITutorProvider>
            <Header />

            <main className="w-full max-w-full flex-1 overflow-x-clip">
              {children}
            </main>

            <Footer />

            <FloatingAIButton />

            <MobileBottomNav />

            <AITutorWidget />
          </AITutorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}