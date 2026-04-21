import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Nexplacers | Talent & Placement Intelligence',
  description:
    'Nexplacers connects top talent with the right opportunities through intelligent matching systems. Next-generation recruitment by Harshil Raval.',
  alternates: { canonical: 'https://harshilraval.com/ventures/nexplacers' },
};

export default function NexplacersPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section className="section-pad" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(168,255,87,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="section-container">
            <div className="grid-asymmetric">
              <AnimateIn>
                <div className="section-label">Venture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🏗️</span>
                  <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F2F2FF' }}>
                    Nexplacers
                  </h1>
                </div>
                <p className="font-mono" style={{ color: '#A8FF57', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Talent & Placement Intelligence
                </p>
                <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2rem' }}>
                  Nexplacers is a next-generation placement platform that connects top talent with the right opportunities
                  through intelligent AI matching — not keyword filters. Built for the era where culture fit matters as much as credentials.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/connect" className="btn-primary" id="nexplacers-cta" style={{ background: '#A8FF57', color: '#050508' }}>
                    Get Started →
                  </Link>
                  <Link href="/connect" className="btn-ghost">Find Talent</Link>
                </div>
              </AnimateIn>

              <AnimateIn from="right" delay={0.15}>
                <div style={{ background: 'rgba(13,13,20,0.8)', border: '1px solid rgba(168,255,87,0.15)', borderRadius: '20px', padding: '2rem' }}>
                  {[
                    { value: '500+', label: 'Successful Placements' },
                    { value: '4.9★', label: 'Avg Client Rating' },
                    { value: '3x', label: 'Faster Hiring' },
                    { value: '94%', label: 'Retention at 1 Year' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ padding: '1rem 0', borderBottom: '1px solid rgba(168,255,87,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: '#6B7280', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</span>
                      <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#A8FF57' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* What sets us apart */}
        <section className="section-pad" style={{ background: 'rgba(13,13,20,0.3)' }}>
          <div className="section-container">
            <AnimateIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: '#F2F2FF', letterSpacing: '-0.02em' }}>
                Why Nexplacers?
              </h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="features-grid">
              {[
                { icon: '🧠', title: 'AI-Powered Matching', desc: 'Deep-learning models that understand context, culture, and career trajectory — not just keyword matching.' },
                { icon: '⚡', title: 'Speed Without Sacrifice', desc: 'Source qualified candidates in 48 hours. Without the usual trade-off between speed and quality.' },
                { icon: '🤝', title: 'Human-in-the-Loop', desc: 'Our talent partners review every match. AI finds the signal, humans validate the fit.' },
              ].map((f, i) => (
                <AnimateIn key={f.title} from="bottom" delay={i * 0.1}>
                  <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid rgba(168,255,87,0.12)', height: '100%' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                    <div className="font-display" style={{ fontWeight: 700, color: '#F2F2FF', marginBottom: '0.5rem', fontSize: '1rem' }}>{f.title}</div>
                    <p style={{ color: '#6B7280', fontSize: '0.87rem', lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 0' }}>
          <div className="section-container" style={{ textAlign: 'center' }}>
            <AnimateIn>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#F2F2FF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Hire Smarter with Nexplacers
              </h2>
              <Link href="/connect" className="btn-primary" id="nexplacers-bottom-cta" style={{ background: '#A8FF57', color: '#050508' }}>
                Talk to Our Team →
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .features-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
