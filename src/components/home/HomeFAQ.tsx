const FAQS = [
  {
    question: 'Is StudyAI free?',
    answer:
      'Yes. StudyAI has a free plan so learners can start with beginner courses and basic learning tools without a credit card.',
  },
  {
    question: 'What makes StudyAI different?',
    answer:
      'StudyAI combines structured courses with AI assistance, quizzes, notes, roadmaps, and progress tracking so learners know exactly what to study next.',
  },
  {
    question: 'Can beginners use StudyAI?',
    answer:
      'Yes. StudyAI is designed for beginners first, with simple explanations, guided roadmaps, and step-by-step lessons.',
  },
  {
    question: 'Will StudyAI support AI tutor features?',
    answer:
      'Yes. The product roadmap includes an AI tutor, AI playground, quiz generator, flashcards, summaries, and coding assistant.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'Yes. The design is mobile-first and will support desktop, laptop, tablet, and mobile screens.',
  },
];

export default function HomeFAQ() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="container-wide py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-primary-500">
            FAQ
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[var(--text-strong)] sm:text-4xl">
            Questions before you start?
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            Simple answers about StudyAI, the learning experience, and what comes next.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {FAQS.map((item) => (
            <div key={item.question} className="card p-6">
              <h3 className="text-base font-black text-[var(--text-strong)]">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}