import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Work | Case Studies & Portfolio',
  description: 'Selected case studies and projects from Harshil Raval\'s portfolio — showcasing AI automation, product launches, and systems built across four ventures.',
  alternates: { canonical: 'https://harshil.space/work' },
};

export default function WorkPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section className="section-pad" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 30% 30%, rgba(91,138,240,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="section-container">
            <AnimateIn>
              <div className="section-label">Portfolio</div>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F2F2FF', marginTop: '0.75rem' }}>
                Selected Work
              </h1>
              <p style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: '0.75rem', maxWidth: '520px' }}>
                A selection of projects, automations, and products built across four ventures and 100+ client engagements.
              </p>
            </AnimateIn>
          </div>
        </section>

        <section style={{ paddingBottom: '8rem' }}>
          <div className="section-container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'AI Lead Processing System', company: 'Workcin Client — E-Commerce', tags: ['AI', 'Automation', 'CRM'], result: '3-day manual process → 2-hour automated pipeline. 100% reduction in data entry errors.', color: '#5B8AF0' },
                { title: 'Intelligent Talent Matching Engine', company: 'Nexplacers', tags: ['AI', 'HRTech', 'Platform'], result: 'Achieved 3x faster placements with 94% 1-year retention vs. industry average of 67%.', color: '#A8FF57' },
                { title: 'Customer Onboarding Automation', company: 'Workcin Client — SaaS', tags: ['AI', 'B2B', 'Onboarding'], result: 'Reduced onboarding time from 2 weeks to 3 days. NPS increased from 32 to 71.', color: '#a78bfa' },
                { title: 'Real-Time Infrastructure Monitor', company: 'Symrex', tags: ['Security', 'Infrastructure'], result: 'Detecting anomalies 40x faster than traditional monitoring. Zero breach record across all clients.', color: '#F06A2B' },
                { title: 'Supply Chain Alert System', company: 'Workcin Client — Manufacturing', tags: ['AI', 'Supply Chain'], result: 'Prevented ₹40L in inventory waste in first quarter through predictive alerts.', color: '#5B8AF0' },
              ].map((item, i) => (
                <AnimateIn key={item.title} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
                  <div className="glass-card" style={{ padding: '2rem', border: `1px solid ${item.color}25`, display: 'flex', gap: '2rem', alignItems: 'start', flexWrap: 'wrap' }}>
                    <div style={{ flexGrow: 1 }}>
                      <div className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.company}</div>
                      <h2 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F2F2FF', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.title}</h2>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {item.tags.map((t) => (
                          <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}30`, padding: '0.2rem 0.6rem', borderRadius: '100px' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <span style={{ color: item.color, fontSize: '1rem', flexShrink: 0 }}>→</span>
                        <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.result}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>Interested in a custom case study or partnership?</p>
              <Link href="/connect" className="btn-primary">Work with Harshil →</Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
