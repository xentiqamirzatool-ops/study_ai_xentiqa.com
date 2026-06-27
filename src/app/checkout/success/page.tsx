import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';

export const metadata = { title: 'Payment successful — StudyAI' };

export default function CheckoutSuccessPage() {
  return (
    <div className="container-wide flex justify-center py-20">
      <div className="card max-w-md p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h1 className="mt-6 text-2xl font-black tracking-tight text-[var(--text-strong)]">
          You&apos;re Pro! 🎉
        </h1>

        <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
          Welcome aboard. Your subscription is active and a receipt is on its way
          to your email. AI tools, certificates, and premium courses are now
          unlocked.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <Link href="/dashboard" className="btn btn-primary">
            Start learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/settings/billing" className="btn btn-outline">
            <Download className="h-4 w-4" />
            View billing
          </Link>
        </div>
      </div>
    </div>
  );
}
