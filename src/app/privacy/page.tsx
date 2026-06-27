export const metadata = {
  title: 'Privacy Policy — StudyAI',
  description: 'How StudyAI collects, uses, and protects your data.',
};

const SECTIONS = [
  {
    h: '1. Overview',
    p: 'This Privacy Policy explains what information StudyAI ("we", "us") collects, how we use it, and the choices you have. By using StudyAI you agree to the practices described here.',
  },
  {
    h: '2. Information we collect',
    p: 'Account details you provide (such as name and email), learning activity (courses, lessons, progress, quiz results), and technical data (device, browser, and usage analytics). We do not sell your personal data.',
  },
  {
    h: '3. How we use information',
    p: 'To provide and personalize the learning experience, track your progress, improve our courses and AI tools, communicate with you, and keep the service secure.',
  },
  {
    h: '4. AI features',
    p: 'When you use AI tools, your inputs may be processed by a third-party model provider to generate responses. We do not include unnecessary personal data in these requests and apply safeguards to protect your information.',
  },
  {
    h: '5. Cookies & analytics',
    p: 'We use essential cookies to run the service and limited analytics to understand usage. You can control cookies through your browser settings.',
  },
  {
    h: '6. Data sharing',
    p: 'We share data only with service providers that help us operate StudyAI (such as hosting, payments, and AI providers), under appropriate confidentiality and security terms, or where required by law.',
  },
  {
    h: '7. Your rights',
    p: 'Depending on your location, you may have rights to access, correct, export, or delete your personal data. Contact us to exercise these rights.',
  },
  {
    h: '8. Data security & retention',
    p: 'We use industry-standard measures to protect your data and retain it only as long as needed to provide the service or meet legal obligations.',
  },
  {
    h: '9. Changes',
    p: 'We may update this policy from time to time. Material changes will be posted here with an updated date.',
  },
  {
    h: '10. Contact',
    p: 'Questions about privacy? Reach us via the Contact page.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="container-wide max-w-3xl py-14">
      <h1 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
        Privacy Policy
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
