import Link from 'next/link';

export const metadata = {
  title: 'FAQ — StudyAI',
  description: 'Answers to common questions about StudyAI courses, pricing, AI tools, and accounts.',
};

const FAQS = [
  {
    q: 'Is there a free plan?',
    a: 'Yes. StudyAI is free to start — you can browse courses and take core lessons at no cost. Pro unlocks AI tools, certificates, and premium content.',
  },
  {
    q: 'What will I learn?',
    a: 'Structured tracks across AI, Machine Learning, Prompt Engineering, Generative AI, and practical AI tools — from beginner foundations to advanced, production-focused topics.',
  },
  {
    q: 'Do I need any prior experience?',
    a: 'No. Beginner paths assume no background. Intermediate and advanced paths build on earlier courses, and roadmaps guide the order.',
  },
  {
    q: 'How does the AI tutor work?',
    a: 'The AI tutor explains concepts, answers questions in the context of your lesson, and helps you self-test. (Live AI requires an API key to be configured — see your settings.)',
  },
  {
    q: 'Can I get a certificate?',
    a: 'Pro members earn shareable certificates on course completion.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes — you can cancel Pro at any time and keep access until the end of your billing period.',
  },
  {
    q: 'Is my data private?',
    a: 'We are privacy-first by design. See our Privacy Policy for details on what we collect and how it is used.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-16 text-center">
          <div className="badge badge-ai mb-5">Help</div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Questions &amp; answers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Everything you need to know about learning with StudyAI.
          </p>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="card group p-0 [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-bold text-[var(--text-strong)]">
                {item.q}
                <span className="text-primary-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-7 text-[var(--text-body)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-[var(--text-muted)]">
          Still stuck?{' '}
          <Link href="/contact" className="font-bold text-primary-500">
            Contact us
          </Link>
          .
        </div>
      </section>
    </>
  );
}
