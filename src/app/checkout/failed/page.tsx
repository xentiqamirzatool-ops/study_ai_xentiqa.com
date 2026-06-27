import Link from 'next/link';
import { ArrowRight, LifeBuoy, XCircle } from 'lucide-react';

export const metadata = { title: 'Payment failed — StudyAI' };

export default function CheckoutFailedPage() {
  return (
    <div className="container-wide flex justify-center py-20">
      <div className="card max-w-md p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15 text-rose-500">
          <XCircle className="h-8 w-8" />
        </div>

        <h1 className="mt-6 text-2xl font-black tracking-tight text-[var(--text-strong)]">
          Payment didn&apos;t go through
        </h1>

        <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
          No charge was made. This can happen if a card is declined or the
          checkout was cancelled. You can try again or use a different payment
          method.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <Link href="/pro" className="btn btn-primary">
            Try again
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            <LifeBuoy className="h-4 w-4" />
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
