import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { courses } from '@/data/courses';
import { plans } from '@/data/plans';
import CourseCard from '@/components/CourseCard';
import NeuralHero from '@/components/NeuralHero';
import HeroStats from '@/components/home/HeroStats';
import TrustedBy from '@/components/home/TrustedBy';
import AIFeatures from '@/components/home/AIFeatures';
import LearningRoadmap from '@/components/home/LearningRoadmap';
import Testimonials from '@/components/home/Testimonials';
import HomeFAQ from '@/components/home/HomeFAQ';
import FinalCTA from '@/components/home/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';

const TOPICS = [
  { name: 'AI', icon: '🧠' },
  { name: 'Machine Learning', icon: '📊' },
  { name: 'Prompts', icon: '✨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Agents', icon: '🤖' },
  { name: 'GenAI', icon: '🎨' },
];

export default function HomePage() {
  const featured = courses.slice(0, 6);

  return (
    <>
      <section className="neural-bg border-b border-[var(--border)]">
        <div className="container-wide grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <ScrollReveal>
            <div>
              <div className="badge badge-ai mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                AI-powered learning
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
                Learn smarter, <span className="ai-gradient-text">not harder.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-body)]">
                Your personal AI tutor explains, quizzes, and coaches you through
                structured courses in AI, ML, Python, prompt engineering, and modern AI tools.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/courses" className="btn btn-primary">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/learning-paths" className="btn btn-outline">
                  Explore Roadmaps
                </Link>
              </div>

              <HeroStats />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <NeuralHero />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal>
        <AIFeatures />
      </ScrollReveal>

      <ScrollReveal>
        <LearningRoadmap />
      </ScrollReveal>

      <section className="container-wide py-16">
        <ScrollReveal>
          <div className="mb-8">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
              Browse
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
              Popular topics
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TOPICS.map((topic, index) => (
            <ScrollReveal key={topic.name} delay={index * 60}>
              <Link href="/courses" className="card group block p-5 text-center">
                <div className="text-3xl transition-transform group-hover:scale-110">
                  {topic.icon}
                </div>

                <div className="mt-3 text-sm font-bold text-[var(--text-strong)] group-hover:text-primary-500">
                  {topic.name}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="container-wide py-16">
          <ScrollReveal>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
                  Popular
                </div>

                <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
                  Featured courses
                </h2>
              </div>

              <Link href="/courses" className="btn btn-outline">
                View all {courses.length}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course, index) => (
              <ScrollReveal key={course.slug} delay={index * 70}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <section className="container-wide py-16">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
              Membership
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
              Free forever. Pro when ready.
            </h2>

            <p className="mt-4 text-[var(--text-muted)]">
              Start learning for free, then unlock AI tools, certificates, and advanced learning features.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 90}>
              <div
                className={`card relative flex h-full flex-col p-6 ${
                  plan.highlight ? 'border-primary-500 shadow-glow' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="badge badge-ai absolute -top-3 left-1/2 -translate-x-1/2">
                    Popular
                  </div>
                )}

                <h3 className="text-xl font-black text-[var(--text-strong)]">
                  {plan.name}
                </h3>

                <div className="mt-3 text-3xl font-black text-[var(--text-strong)]">
                  {plan.priceLabel}
                </div>

                <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--text-body)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pro"
                  className={`btn mt-6 ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <HomeFAQ />
      </ScrollReveal>

      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}