'use client';
import AnimateIn from '@/components/AnimateIn';

const STATS = [
  { value: '4', label: 'Ventures Built' },
  { value: 'AI', label: 'First Approach' },
  { value: 'IN', label: 'Ahmedabad-Based' },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(240,106,43,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
      }} />

      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}
          className="about-grid"
        >
          {/* Left: Pull quote */}
          <AnimateIn from="left">
            <div style={{ position: 'relative', paddingTop: '2rem' }}>
              {/* Giant quote mark */}
              <div
                className="font-display"
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '-1rem',
                  fontSize: '12rem',
                  lineHeight: 1,
                  color: '#5B8AF0',
                  opacity: 0.08,
                  fontWeight: 900,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              <blockquote
                className="font-display"
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: '#F2F2FF',
                  position: 'relative',
                  zIndex: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                &ldquo;I don&apos;t just build companies. I build the systems that make companies{' '}
                <span style={{ color: '#5B8AF0' }}>unstoppable.</span>&rdquo;
              </blockquote>

              {/* Attribution */}
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #5B8AF0, #F06A2B)',
                }} />
                <span className="font-mono" style={{ fontSize: '0.72rem', color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Harshil Raval · Founder
                </span>
              </div>

              {/* Floating stat badges */}
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
              }}>
                {STATS.map((stat) => (
                  <div key={stat.label} className="stat-badge">
                    <span className="stat-badge-value">{stat.value}</span>
                    <span className="stat-badge-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right: Bio */}
          <AnimateIn from="right" delay={0.15}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>About</div>

              {/* Portrait placeholder with duotone */}
              <div style={{
                width: '100%',
                maxWidth: '340px',
                height: '260px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(91,138,240,0.2), rgba(240,106,43,0.15))',
                border: '1px solid rgba(91,138,240,0.2)',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: 'rgba(91,138,240,0.4)',
                }}>
                  H
                </div>
                {/* Duotone overlay effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(91,138,240,0.15) 0%, rgba(240,106,43,0.1) 100%)',
                  mixBlendMode: 'color',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(5,5,8,0.8)',
                  borderRadius: '8px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: '#5B8AF0',
                  letterSpacing: '0.08em',
                }}>
                  📍 Ahmedabad, Gujarat, India
                </div>
              </div>

              {/* Bio paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  From Ahmedabad, Gujarat — Harshil Raval started with a simple but audacious vision: to make AI accessible
                  and transformative for businesses of all sizes. That vision became Workcin, and Workcin became the blueprint
                  for a new kind of startup — AI-native from day one.
                </p>
                <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  Harshil&apos;s philosophy is rooted in systems thinking. He doesn&apos;t just build products; he architechts
                  ecosystems. Automation, scale, and intelligence aren&apos;t buzzwords in his world — they&apos;re design constraints
                  applied to every decision he makes, from hiring to product roadmaps.
                </p>
                <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  Beyond the ventures, he&apos;s driven by the belief that India&apos;s entrepreneurial wave is just beginning.
                  He builds for a global stage while staying grounded in the grit and ingenuity of his home city.
                </p>
              </div>

              <a href="/about" className="btn-ghost" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                Full Story →
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
