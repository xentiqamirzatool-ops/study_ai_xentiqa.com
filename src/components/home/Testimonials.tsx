import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Raman',
    role: 'Data Analyst',
    quote:
      'StudyAI cut my study time in half. The AI tutor explains difficult topics like a patient personal mentor.',
    rating: 5,
  },
  {
    name: 'Sam Khan',
    role: 'Python Learner',
    quote:
      'The roadmap helped me stop jumping between random videos. I finally know what to learn next.',
    rating: 5,
  },
  {
    name: 'Mina Patel',
    role: 'ML Beginner',
    quote:
      'The quizzes and notes make every lesson feel interactive. It is much easier to remember what I learn.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="container-wide py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
          Loved by learners
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
          Learn with confidence
        </h2>

        <p className="mt-4 text-[var(--text-muted)]">
          StudyAI is designed to make learning clear, practical, and motivating from the first lesson.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div key={item.name} className="card relative p-6">
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-500/20" />

            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--text-body)]">
              “{item.quote}”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-sm font-black text-white">
                {item.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>

              <div>
                <div className="font-black text-[var(--text-strong)]">
                  {item.name}
                </div>

                <div className="text-sm text-[var(--text-muted)]">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}