import Link from 'next/link';
import {
  Bell,
  CreditCard,
  Lock,
  Mail,
  Palette,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';

const SETTINGS = [
  {
    title: 'Profile',
    description: 'Manage your name, email, and public profile.',
    icon: User,
  },
  {
    title: 'Security',
    description: 'Password, login sessions, and account protection.',
    icon: Lock,
  },
  {
    title: 'Notifications',
    description: 'Control lesson reminders and course updates.',
    icon: Bell,
  },
  {
    title: 'Theme',
    description: 'Use light, dark, or system mode.',
    icon: Palette,
  },
  {
    title: 'Billing',
    description: 'Manage your StudyAI Pro subscription.',
    icon: CreditCard,
  },
  {
    title: 'Privacy',
    description: 'Control data, exports, and privacy preferences.',
    icon: ShieldCheck,
  },
];

export default function SettingsPage() {
  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide py-14">
          <div className="badge badge-ai mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Settings
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[var(--text-strong)] sm:text-5xl">
            Account settings
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
            Manage your StudyAI account, security, billing, notifications, and preferences.
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="card self-start p-4">
            <Link href="/profile" className="side-link">
              <User className="h-4 w-4" />
              Profile
            </Link>

            <Link href="/settings" className="side-link active">
              <Palette className="h-4 w-4" />
              Settings
            </Link>

            <Link href="/pro" className="side-link">
              <CreditCard className="h-4 w-4" />
              Billing
            </Link>

            <Link href="/login" className="side-link">
              <Mail className="h-4 w-4" />
              Login
            </Link>
          </aside>

          <main>
            <div className="grid gap-5 sm:grid-cols-2">
              {SETTINGS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="card p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="text-xl font-black text-[var(--text-strong)]">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {item.description}
                    </p>

                    <button className="btn btn-outline mt-5">
                      Manage
                    </button>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}