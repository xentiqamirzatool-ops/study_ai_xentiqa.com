import Link from 'next/link';
export default function About() {
  return (
    <div className="container-wide py-12 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold">About StudyAI</h1>
      <p className="mt-4 text-lg text-ink-600">A free AI education platform.</p>
      <div className="card p-6 mt-8">
        <h2 className="text-xl font-bold">Mission</h2>
        <p className="text-ink-700 mt-2">Make every person AI-literate in 30 days.</p>
        <Link href="/courses" className="btn btn-primary mt-4">Browse courses</Link>
      </div>
    </div>
  );
}
