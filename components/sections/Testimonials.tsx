'use client';
import AnimateIn from '@/components/AnimateIn';

const TESTIMONIALS = [
  {
    quote: "Harshil's team at Workcin automated our entire onboarding pipeline. What used to take 3 days now runs in 4 hours — without any manual intervention. The ROI was clear within the first month.",
    name: 'Priya Sharma',
    role: 'COO',
    company: 'TechFlow Solutions',
    avatar: 'P',
    color: '#5B8AF0',
    offset: 0,
  },
  {
    quote: "Working with Harshil is like having a startup co-founder who has already built 10 companies. The systems thinking he brings to every problem is genuinely rare.",
    name: 'Arjun Mehta',
    role: 'Founder',
    company: 'Meridian Labs',
    avatar: 'A',
    color: '#a78bfa',
    offset: 40,
  },
  {
    quote: "Nexplacers found us our best engineer in 8 days. The matching quality was miles above traditional recruitment — it felt like AI actually understood our culture, not just the job description.",
    name: 'Kavya Nair',
    role: 'VP Engineering',
    company: 'Stackline',
    avatar: 'K',
    color: '#A8FF57',
    offset: 0,
  },
  {
    quote: "I've worked with a dozen AI automation vendors. Harshil's approach is different — he builds for scale, not just the demo. Six months in and our automations still haven't broken.",
    name: 'Rohan Desai',
    role: 'CEO',
    company: 'Vantage Capital',
    avatar: 'R',
    color: '#F06A2B',
    offset: 60,
  },
  {
    quote: "Triver Lab helped us validate our idea in 3 weeks with real user data. They didn't just confirm our hypothesis — they challenged it in ways that made our final product 10x better.",
    name: 'Sneha Patel',
    role: 'Product Lead',
    company: 'Nuvora',
    avatar: 'S',
    color: '#5B8AF0',
    offset: 20,
  },
  {
    quote: "Harshil is the kind of founder who makes you feel like your problem is the most important thing in the world. That energy combined with genuine technical depth is rare. Hire him before his schedule fills up.",
    name: 'Vikram Joshi',
    role: 'Investor',
    company: 'Insight Ventures',
    avatar: 'V',
    color: '#a78bfa',
    offset: 80,
  },
];

function TestimonialCard({ t, delay }: { t: typeof TESTIMONIALS[0]; delay: number }) {
  return (
    <AnimateIn from="bottom" delay={delay}>
      <div
        className="glass-card"
        style={{
          padding: '1.75rem',
          marginTop: `${t.offset}px`,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          border: `1px solid rgba(${t.color === '#A8FF57' ? '168,255,87' : t.color === '#F06A2B' ? '240,106,43' : t.color === '#a78bfa' ? '167,139,250' : '91,138,240'},0.15)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Stars */}
        <div style={{ color: '#F06A2B', fontSize: '0.85rem', letterSpacing: '2px' }}>★★★★★</div>

        {/* Quote */}
        <p style={{
          color: '#9ca3af',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          fontStyle: 'italic',
        }}>
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: `${t.color}20`,
            border: `1.5px solid ${t.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: t.color,
            flexShrink: 0,
          }}>
            {t.avatar}
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#F2F2FF' }}>
              {t.name}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6B7280' }}>
              {t.role} · {t.company}
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export default function Testimonials() {
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

  return (
    <section id="testimonials" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(91,138,240,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <AnimateIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Social Proof</div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#F2F2FF',
            marginTop: '0.5rem',
          }}>
            What People Say
          </h2>
          <p style={{ color: '#6B7280', fontSize: '1rem', marginTop: '0.75rem' }}>
            Clients, collaborators, and investors on working with Harshil.
          </p>
        </AnimateIn>

        {/* 3-column staggered mosaic */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1.25rem',
          alignItems: 'start',
        }}
          className="testimonials-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {col1.map((t, i) => <TestimonialCard key={i} t={t} delay={i * 0.1} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
            {col2.map((t, i) => <TestimonialCard key={i} t={t} delay={i * 0.1 + 0.1} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {col3.map((t, i) => <TestimonialCard key={i} t={t} delay={i * 0.1 + 0.2} />)}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid > div { margin-top: 0 !important; }
        }
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
