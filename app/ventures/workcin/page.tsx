import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Workcin | AI Automation & Workflow Intelligence',
  description:
    'Workcin automates what holds businesses back. AI-powered workflows, deployed in days, not months. Founded by Harshil Raval in Ahmedabad.',
  alternates: { canonical: 'https://harshil.space/ventures/workcin' },
};

const FEATURES = [
  { icon: '🤖', title: 'AI Workflow Builder', desc: 'Visual drag-and-drop workflow builder powered by LLMs. Non-technical teams can create complex automations in hours.' },
  { icon: '🔗', title: '200+ Integrations', desc: 'Connect any tool — CRM, ERP, email, chat, databases. If it has an API, Workcin can automate it.' },
  { icon: '📊', title: 'Real-Time Analytics', desc: 'Track automation performance, ROI metrics, and error rates from a single dashboard. No blind spots.' },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'SOC 2 compliant, end-to-end encryption, role-based access. Enterprise security without the enterprise overhead.' },
  { icon: '⚡', title: 'Sub-Second Execution', desc: 'Automations that run in real-time. No batch delays. No latency surprises. Built on event-driven architecture.' },
  { icon: '🧠', title: 'Intelligent Error Handling', desc: 'Self-healing workflows that detect, diagnose, and recover from failures — before your team notices.' },
];

const USE_CASES = [
  { industry: 'E-Commerce', case: 'Automated order processing, inventory sync, and customer communication workflows.' },
  { industry: 'SaaS', case: 'Onboarding automation, churn prediction triggers, and customer health score monitoring.' },
  { industry: 'Professional Services', case: 'Proposal generation, CRM updates, invoicing, and client reporting — all automated.' },
  { industry: 'Manufacturing', case: 'Supply chain alerts, quality control reporting, and vendor communication automation.' },
  { industry: 'Healthcare', case: 'Appointment reminders, patient follow-up sequences, and compliance reporting workflows.' },
  { industry: 'Real Estate', case: 'Lead routing, property matching, document collection, and follow-up cadences.' },
];

export default function WorkcinPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(91,138,240,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="section-container">
            <div className="grid-asymmetric">
              <AnimateIn>
                <div className="section-label">Venture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>🚀</span>
                  <h1 className="font-display" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#F2F2FF',
                  }}>
                    Workcin
                  </h1>
                </div>
                <p className="font-mono" style={{ color: '#5B8AF0', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                  AI Automation & Workflow Intelligence
                </p>
                <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '560px', marginBottom: '2rem' }}>
                  Workcin automates what holds businesses back. We wire AI into the backbone of your operations —
                  from lead workflows to internal systems — so your team focuses on what matters: growth.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/connect" className="btn-primary" id="workcin-demo-cta">
                    Request a Demo →
                  </Link>
                  <Link href="/connect" className="btn-ghost">
                    Talk to Harshil
                  </Link>
                </div>
              </AnimateIn>

              {/* Stats panel */}
              <AnimateIn from="right" delay={0.15}>
                <div style={{
                  background: 'rgba(13,13,20,0.8)',
                  border: '1px solid rgba(91,138,240,0.2)',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                }}>
                  {[
                    { value: '100+', label: 'Workflows Deployed' },
                    { value: '40h', label: 'Saved Per Client / Mo' },
                    { value: '12+', label: 'Industries Served' },
                    { value: '99.9%', label: 'Uptime Guarantee' },
                    { value: '< 48h', label: 'Avg Time to Deploy' },
                    { value: '4.9★', label: 'Client Rating' },
                  ].map((stat) => (
                    <div key={stat.label} className="stat-badge" style={{ border: '1px solid rgba(91,138,240,0.15)' }}>
                      <span className="stat-badge-value">{stat.value}</span>
                      <span className="stat-badge-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-pad" style={{ background: 'rgba(13,13,20,0.3)' }}>
          <div className="section-container">
            <AnimateIn style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Platform Features</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F2F2FF', marginTop: '0.5rem' }}>
                Built Different
              </h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="features-grid">
              {FEATURES.map((f, i) => (
                <AnimateIn key={f.title} from="bottom" delay={i * 0.07}>
                  <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid rgba(91,138,240,0.12)', height: '100%' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                    <div className="font-display" style={{ fontWeight: 700, color: '#F2F2FF', marginBottom: '0.5rem', fontSize: '1rem' }}>{f.title}</div>
                    <p style={{ color: '#6B7280', fontSize: '0.87rem', lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-pad">
          <div className="section-container">
            <AnimateIn style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Use Cases</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F2F2FF', marginTop: '0.5rem' }}>
                Automation Across Every Industry
              </h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="use-cases-grid">
              {USE_CASES.map((uc, i) => (
                <AnimateIn key={uc.industry} from="bottom" delay={i * 0.06}>
                  <div style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    background: 'rgba(13,13,20,0.7)',
                    border: '1px solid rgba(91,138,240,0.1)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#5B8AF0',
                      boxShadow: '0 0 8px #5B8AF0',
                      marginTop: '0.35rem',
                      flexShrink: 0,
                    }} />
                    <div>
                      <div className="font-display" style={{ fontWeight: 700, color: '#5B8AF0', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{uc.industry}</div>
                      <p style={{ color: '#6B7280', fontSize: '0.87rem', lineHeight: 1.6 }}>{uc.case}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0', background: 'rgba(13,13,20,0.5)' }}>
          <div className="section-container" style={{ textAlign: 'center' }}>
            <AnimateIn>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#F2F2FF', marginBottom: '1rem' }}>
                Ready to Automate?
              </h2>
              <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '2rem' }}>Let Workcin show you what 40 hours of saved work per month feels like.</p>
              <Link href="/connect" className="btn-primary" id="workcin-bottom-cta" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Book a Free Discovery Call →
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .features-grid, .use-cases-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
