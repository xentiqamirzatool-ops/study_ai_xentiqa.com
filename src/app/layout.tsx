import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import FloatingAIButton from '@/components/FloatingAIButton';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'StudyAI — Learn AI, ML & Prompt Engineering',
  description: 'Free, premium learning platform for AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-body)] pb-20 lg:pb-0">
        <ThemeProvider>
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <FloatingAIButton />

          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}