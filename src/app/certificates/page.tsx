import Link from 'next/link';
import { Award, CalendarDays, Download, Sparkles, Trophy } from 'lucide-react';

const CERTIFICATES = [
  {
    title: 'AI Fundamentals',
    issued: 'June 2026',
    status: 'Completed',
  },
  {
    title: 'Python for AI',
    issued: 'In Progress',
    status: '60% Complete',
  },
  {
    title: 'Prompt Engineering',
    issued: 'Not Started',
    status: 'Locked',
  },
];

export default function CertificatesPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Award className="h-3.5 w-3.5" />
            Certificates
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Your achievements
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Track completed courses and collect certificates as you progress.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-5 sm:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <div key={certificate.title} className="card overflow-hidden">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-700 p-6 text-white">
                <Trophy className="h-8 w-8" />
                <h2 className="mt-6 text-2xl font-black">{certificate.title}</h2>
                <p className="mt-2 text-sm text-white/80">StudyAI Certificate</p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-muted)]">
                  <CalendarDays className="h-4 w-4" />
                  {certificate.issued}
                </div>

                <div className="badge badge-ai mt-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  {certificate.status}
                </div>

                <button className="btn btn-outline mt-6 w-full">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6">
          <h2 className="text-xl font-black text-[var(--text-strong)]">
            Certificates are demo-ready
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
            Later we will connect certificates to real course completion, PDF generation, and user accounts.
          </p>

          <Link href="/courses" className="btn btn-primary mt-5">
            Continue Learning
          </Link>
        </div>
      </section>
    </>
  );
}