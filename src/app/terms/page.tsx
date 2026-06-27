export const metadata = {
  title: 'Terms of Service — StudyAI',
  description: 'The terms that govern your use of StudyAI.',
};

const SECTIONS = [
  {
    h: '1. Acceptance of terms',
    p: 'By accessing or using StudyAI, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.',
  },
  {
    h: '2. Your account',
    p: 'You are responsible for the activity on your account and for keeping your credentials secure. You must provide accurate information and be old enough to use the service in your jurisdiction.',
  },
  {
    h: '3. Acceptable use',
    p: 'You agree not to misuse the service, including attempting to disrupt it, access it without authorization, scrape content at scale, or use it for unlawful purposes.',
  },
  {
    h: '4. Content & intellectual property',
    p: 'Course content, software, and branding are owned by StudyAI or its licensors and are provided for your personal learning use. You retain ownership of content you create, such as your notes.',
  },
  {
    h: '5. AI-generated content',
    p: 'AI tools can make mistakes. Output is provided for learning support and should be verified for important decisions. You are responsible for how you use AI-generated content.',
  },
  {
    h: '6. Subscriptions & payments',
    p: 'Paid plans renew until cancelled. You can cancel anytime and retain access through the end of the current billing period. Fees are non-refundable except where required by law.',
  },
  {
    h: '7. Termination',
    p: 'We may suspend or terminate access for violations of these terms. You may stop using the service at any time.',
  },
  {
    h: '8. Disclaimers',
    p: 'The service is provided "as is" without warranties of any kind. We do not guarantee specific learning outcomes.',
  },
  {
    h: '9. Limitation of liability',
    p: 'To the maximum extent permitted by law, StudyAI is not liable for indirect, incidental, or consequential damages arising from your use of the service.',
  },
  {
    h: '10. Changes & contact',
    p: 'We may update these terms; continued use means you accept the changes. Questions? Reach us via the Contact page.',
  },
];

export default function TermsPage() {
  return (
    <div className="container-wide max-w-3xl py-14">
      <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">
        Last updated: June 2026
      </p>

      <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-[var(--text-body)]">
        This is a general template for review. Have it reviewed by legal counsel
        before relying on it for a production launch.
      </div>

      <div className="mt-8 space-y-8">
        {SECTIONS.map((section) => (
          <section key={section.h}>
            <h2 className="text-lg font-black text-[var(--text-strong)]">
              {section.h}
            </h2>
            <p className="mt-2 leading-7 text-[var(--text-body)]">{section.p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
