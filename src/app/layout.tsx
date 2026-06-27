import type { Metadata, Viewport } from 'next';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import FloatingAIButton from '@/components/FloatingAIButton';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AITutorProvider } from '@/components/ai/AITutorContext';
import AITutorWidget from '@/components/ai/AITutorWidget';

export const metadata: Metadata = {
  title: 'StudyAI — Learn AI, ML & Prompt Engineering',
  description: 'Free, premium learning platform for AI.',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'StudyAI — Learn Smarter. Achieve More.',
    description: 'Free, premium learning platform for AI.',
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudyAI — Learn Smarter. Achieve More.',
    description: 'Free, premium learning platform for AI.',
    images: ['/logo.svg'],
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