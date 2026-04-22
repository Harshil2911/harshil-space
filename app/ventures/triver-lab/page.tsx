import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Triver Lab | Startup Research & Innovation Lab',
  description:
    'Triver Lab is Harshil Raval\'s experimentation engine — where ambitious ideas get stress-tested, validated, and turned into market-ready products.',
  alternates: { canonical: 'https://harshil.space/ventures/triver-lab' },
};

export default function TriveLabPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section className="section-pad" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(167,139,250,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="section-container">
            <div className="grid-asymmetric">
              <AnimateIn>
                <div className="section-label">Venture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🔬</span>
                  <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F2F2FF' }}>
                    Triver Lab
                  </h1>
                </div>
                <p className="font-mono" style={{ color: '#a78bfa', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Research · Innovation · Execution
                </p>
                <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2rem' }}>
                  Triver Lab is the experimentation engine behind Harshil&apos;s venture portfolio. It&apos;s where ambitious ideas
                  get stress-tested with real users, validated with data, and turned into standalone companies — or shut down fast.
                  No ego. Just evidence.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/connect" className="btn-primary" id="triverlab-collab-cta">
                    Collaborate with the Lab →
                  </Link>
                  <Link href="/connect" className="btn-ghost">Pitch an Idea</Link>
                </div>
              </AnimateIn>

              <AnimateIn from="right" delay={0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { value: '6', label: 'Active Projects' },
                    { value: '12', label: 'Experiments Completed' },
                    { value: '3', label: 'Spun Into Companies' },
                    { value: '< 3wk', label: 'Avg Validation Time' },
                  ].map((stat) => (
                    <div key={stat.label} className="stat-badge" style={{ flexDirection: 'row', justifyContent: 'space-between', border: '1px solid rgba(167,139,250,0.15)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.68rem', color: '#6B7280', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</span>
                      <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a78bfa' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: 'rgba(13,13,20,0.3)' }}>
          <div className="section-container">
            <AnimateIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: '#F2F2FF', letterSpacing: '-0.02em' }}>
                How the Lab Works
              </h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="lab-grid">
              {[
                { icon: '💡', title: 'Idea Intake', desc: 'Ideas come from market gaps, founder intuition, and client pain points surfaced by Workcin and Nexplacers.' },
                { icon: '🧪', title: '3-Week Sprint', desc: 'Every idea gets exactly 3 weeks to prove or disprove its core hypothesis with real users and real data.' },
                { icon: '📊', title: 'Data-Driven Kill/Ship Decision', desc: 'Kill fast if the data says no. Ship as an MVP if it gets signal. No emotional attachment to the idea.' },
                { icon: '🚀', title: 'Spin-Out or Integrate', desc: 'Validated products either become standalone ventures or get integrated into an existing company in the portfolio.' },
              ].map((f, i) => (
                <AnimateIn key={f.title} from="bottom" delay={i * 0.08}>
                  <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid rgba(167,139,250,0.12)', height: '100%' }}>
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
                Have an Idea Worth Testing?
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Pitch it to Triver Lab. We&apos;ll give you an honest answer in 3 weeks.</p>
              <Link href="/connect" className="btn-primary" id="triverlab-bottom-cta">
                Pitch to Triver Lab →
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 640px) { .lab-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
