'use client';

import { useEffect, useRef, useState } from 'react';

type HeroStat = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: HeroStat[] = [
  {
    label: 'Courses',
    value: 10,
  },
  {
    label: 'Lessons',
    value: 120,
    suffix: '+',
  },
  {
    label: 'Learners',
    value: 100,
    suffix: 'k+',
  },
];

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const nextProgress = Math.min(elapsed / duration, 1);

      setProgress(easeOutCubic(nextProgress));

      if (nextProgress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [visible]);

  return (
    <div ref={ref} className="mt-10 grid max-w-md grid-cols-3 gap-5">
      {STATS.map((stat) => {
        const value = Math.round(stat.value * progress);

        return (
          <div key={stat.label} className="card p-4">
            <div className="text-2xl font-black text-[var(--text-strong)]">
              {value}
              {stat.suffix}
            </div>

            <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}