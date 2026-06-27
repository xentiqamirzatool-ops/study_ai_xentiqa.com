import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'StudyAI — Learn Smarter. Achieve More.';
export const size = { width: 1200, height: 630 }; // 1.91:1
export const contentType = 'image/png';

const OFFERINGS = ['Courses', 'AI Tutor', 'Roadmaps', 'Quizzes', 'Flashcards', 'Certificates'];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'radial-gradient(130% 130% at 100% 0%, #3730A3 0%, #1E1B4B 45%, #0B1020 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              boxShadow: '0 14px 40px rgba(99,102,241,0.55)',
            }}
          >
            {/* simple robot mark */}
            <div
              style={{
                width: 52,
                height: 40,
                borderRadius: 14,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 12, background: '#4338CA' }} />
              <div style={{ width: 12, height: 12, borderRadius: 12, background: '#7C3AED' }} />
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>
            Study<span style={{ color: '#A5B4FC' }}>AI</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            <span>Learn smarter,</span>
            <span style={{ color: '#A78BFA' }}>not harder.</span>
          </div>
          <div style={{ fontSize: 32, color: '#C7D2FE', maxWidth: 920 }}>
            Your personal AI tutor — structured courses in AI, ML, Python &amp; prompt engineering.
          </div>
        </div>

        {/* Offerings */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {OFFERINGS.map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#E0E7FF',
                  padding: '12px 22px',
                  borderRadius: 999,
                  border: '1px solid rgba(165,180,252,0.35)',
                  background: 'rgba(99,102,241,0.18)',
                  display: 'flex',
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: '#818CF8', fontWeight: 700, display: 'flex' }}>
            study.ai.xentiqa.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
