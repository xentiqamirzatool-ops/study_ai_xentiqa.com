import Link from 'next/link';
import {
  Github,
  Linkedin,
  Youtube,
  BookOpen,
  BrainCircuit,
  Sparkles,
} from 'lucide-react';

const PRODUCT = [
  ['Courses', '/courses'],
  ['Learning Paths', '/learning-paths'],
  ['AI Playground', '/ai-playground'],
  ['Pricing', '/pro'],
];

const RESOURCES = [
  ['Blog', '/blog'],
  ['Documentation', '/docs'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
];

const COMPANY = [
  ['About', '/about'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Careers', '/careers'],
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-base)]">
      <div className="container-wide py-16">

        <div className="grid gap-10 lg:grid-cols-4">

          <div>

            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 shadow-glow">
                <BrainCircuit className="h-5 w-5 text-white" />
              </div>

              <span className="text-[var(--text-strong)]">
                Study
                <span className="text-primary-500 dark:text-primary-400">
                  AI
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--text-muted)]">
              Learn Artificial Intelligence through structured courses,
              roadmaps, AI tools and interactive learning experiences.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] hover:border-primary-400 hover:text-primary-500"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] hover:border-primary-400 hover:text-primary-500"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] hover:border-primary-400 hover:text-primary-500"
              >
                <Youtube className="h-4 w-4" />
              </a>

            </div>
          </div>

          <div>

            <h3 className="font-semibold text-[var(--text-strong)]">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {PRODUCT.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm text-[var(--text-muted)] hover:text-primary-500"
                >
                  {title}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-[var(--text-strong)]">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {RESOURCES.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm text-[var(--text-muted)] hover:text-primary-500"
                >
                  {title}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-[var(--text-strong)]">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {COMPANY.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm text-[var(--text-muted)] hover:text-primary-500"
                >
                  {title}
                </Link>
              ))}

            </div>

            <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-5">

              <div className="flex items-center gap-2 text-primary-500">

                <Sparkles className="h-5 w-5" />

                <span className="font-semibold">
                  AI Powered Learning
                </span>

              </div>

              <p className="mt-3 text-sm text-[var(--text-muted)] leading-6">
                Master AI, Machine Learning, Prompt Engineering and modern
                AI tools with interactive lessons.
              </p>

              <Link
                href="/courses"
                className="btn btn-primary mt-5 w-full"
              >
                <BookOpen className="h-4 w-4" />
                Start Learning
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} StudyAI.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/terms">
                Terms
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}