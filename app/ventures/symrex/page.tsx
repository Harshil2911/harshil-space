import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Symrex | Digital Infrastructure & Security Systems',
  description:
    'Symrex builds resilient digital infrastructure and security systems that protect businesses from threats they haven\'t anticipated yet. Founded by Harshil Raval.',
  alternates: { canonical: 'https://harshil.space/ventures/symrex' },
};

export default function SymrexPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section className="section-pad" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(240,106,43,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="section-container">
            <div className="grid-asymmetric">
              <AnimateIn>
                <div className="section-label">Venture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🛡️</span>
                  <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F2F2FF' }}>
                    Symrex
                  </h1>
                </div>
                <p className="font-mono" style={{ color: '#F06A2B', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  Protection Systems for the Digital Age
                </p>
                <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2rem' }}>
                  Symrex builds resilient digital infrastructure and intelligent security systems that protect businesses
                  from threats they haven&apos;t anticipated yet. We don&apos;t just respond to breaches — we prevent them
                  with AI-powered threat detection built for the modern stack.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/connect" className="btn-ember" id="symrex-audit-cta">
                    Request a Security Audit →
                  </Link>
                  <Link href="/connect" className="btn-ghost">Learn More</Link>
                </div>
              </AnimateIn>

              <AnimateIn from="right" delay={0.15}>
                <div style={{ background: 'rgba(13,13,20,0.8)', border: '1px solid rgba(240,106,43,0.15)', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
                    { value: '0', label: 'Security Breaches', icon: '🛡️' },
                    { value: '24/7', label: 'Active Monitoring', icon: '👁️' },
                    { value: '< 5 min', label: 'Incident Response', icon: '🚨' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(240,106,43,0.1)', paddingBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span>{stat.icon}</span>
                        <span className="font-mono" style={{ fontSize: '0.7rem', color: '#6B7280', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{stat.label}</span>
                      </div>
                      <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F06A2B' }}>{stat.value}</span>
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
                What Symrex Protects
              </h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="symrex-features-grid">
              {[
                { icon: '🔐', title: 'Infrastructure Security', desc: 'End-to-end encryption, zero-trust architecture, and continuous vulnerability scanning for your entire stack.' },
                { icon: '🤖', title: 'AI Threat Detection', desc: 'ML models trained on millions of attack patterns — detecting anomalies in real-time before they become incidents.' },
                { icon: '📋', title: 'Compliance Management', desc: 'Automated compliance monitoring for SOC 2, ISO 27001, GDPR, and industry-specific frameworks.' },
              ].map((f, i) => (
                <AnimateIn key={f.title} from="bottom" delay={i * 0.1}>
                  <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid rgba(240,106,43,0.12)', height: '100%' }}>
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
                Secure Your Business Before It&apos;s Too Late
              </h2>
              <Link href="/connect" className="btn-ember" id="symrex-bottom-cta" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Get a Free Security Assessment →
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`@media (max-width: 768px) { .symrex-features-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
