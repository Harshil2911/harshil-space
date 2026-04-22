import type { Metadata } from 'next';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'About Harshil Raval | Serial Entrepreneur & AI Founder',
  description:
    'The full story of Harshil Raval — from Ahmedabad to building 4 AI-era ventures. Philosophy, timeline, and the systems thinking behind every decision.',
  alternates: { canonical: 'https://harshil.space/about' },
};

const TIMELINE = [
  { year: '2021', title: 'The Spark', desc: 'Identified a critical gap: Indian SMBs were drowning in manual workflows that AI could automate. The research phase began.', color: '#5B8AF0' },
  { year: '2022', title: 'Workcin Founded', desc: 'Launched Workcin with a clear mission — make enterprise-grade AI automation accessible to every business. First 10 clients acquired in month one.', color: '#a78bfa' },
  { year: '2023', title: 'Nexplacers & Triver Lab', desc: 'Expanded into talent intelligence with Nexplacers and opened Triver Lab as an experimentation engine for new ventures.', color: '#A8FF57' },
  { year: '2024', title: 'Symrex Launch', desc: 'Launched Symrex to solve the digital infrastructure problem that Workcin clients kept raising. Now protecting 50+ businesses.', color: '#F06A2B' },
  { year: '2025', title: '100+ Clients Milestone', desc: 'Crossed 100 clients across all four ventures. Moved into a larger Ahmedabad HQ and doubled the team.', color: '#5B8AF0' },
  { year: '2026', title: 'Global Expansion', desc: 'Taking Workcin AI automation global. Series A conversations underway. The next chapter starts now.', color: '#F06A2B' },
];

export default function AboutPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 40% 40%, rgba(91,138,240,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="section-container">
            <div style={{ maxWidth: '780px' }}>
              <AnimateIn>
                <div className="section-label">About</div>
                <h1
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: '#F2F2FF',
                    marginTop: '1rem',
                    lineHeight: 1.05,
                  }}
                >
                  The Founder <br />
                  <span style={{ color: '#5B8AF0' }}>Behind the Machines</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <p style={{
                  fontSize: '1.15rem',
                  color: '#6B7280',
                  lineHeight: 1.75,
                  marginTop: '1.5rem',
                  maxWidth: '620px',
                }}>
                  Harshil Raval doesn&apos;t just build products — he architects systems. Four companies. One philosophy.
                  Ahmedabad to the world.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-pad">
          <div className="section-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
              className="about-detail-grid"
            >
              <AnimateIn from="left">
                <div>
                  <div className="section-label">Philosophy</div>
                  <h2 className="font-display" style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                    fontWeight: 800,
                    color: '#F2F2FF',
                    letterSpacing: '-0.02em',
                    marginTop: '0.75rem',
                    marginBottom: '1.5rem',
                  }}>
                    Systems First. <br />Everything Else Second.
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { title: '🤖 AI-Native Thinking', desc: 'Every product is designed assuming AI will handle the 80% — humans focus on the 20% that actually needs judgment.' },
                      { title: '⚙️ Build for Scale', desc: 'A system that works for 10 customers should work for 10,000 without a proportional headcount increase.' },
                      { title: '📍 Rooted in India', desc: 'Ahmedabad is the base, not a limitation. Building world-class products from Tier-2 India is the thesis, not the constraint.' },
                      { title: '🔁 Iterate in Public', desc: 'Ship early, learn fast, improve constantly. The market is the best product manager.' },
                    ].map((item) => (
                      <div key={item.title} style={{
                        padding: '1.2rem',
                        borderRadius: '12px',
                        background: 'rgba(13,13,20,0.7)',
                        border: '1px solid rgba(91,138,240,0.12)',
                      }}>
                        <div className="font-display" style={{ fontWeight: 700, color: '#F2F2FF', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                          {item.title}
                        </div>
                        <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn from="right" delay={0.1}>
                <div>
                  <div className="section-label">Full Bio</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.75rem' }}>
                    {[
                      'Harshil Raval grew up in Ahmedabad, Gujarat — a city known for its entrepreneurial spirit and relentless hustle. From an early age, he was obsessed with how systems work: why some businesses scale effortlessly while others struggle with linear growth problems.',
                      'At 22, he identified the automation gap in Indian SMBs and founded Workcin — an AI automation company that has since deployed over 100 intelligent workflows across 12+ industries. Workcin is not just a software company; it\'s a new operating model for how modern businesses run.',
                      'As Workcin scaled, Harshil noticed adjacent problems worth solving. Nexplacers emerged from the broken hiring experience in India\'s fast-growing startup ecosystem. Triver Lab became the experimentation engine where ideas get stress-tested before becoming standalone companies. Symrex was born from the infrastructure and security gaps Workcin clients kept flagging.',
                      'His approach is simple: find a systemic problem, design the solution at scale, and launch before you\'re ready. He believes Indian entrepreneurs are building the infrastructure of the next wave of global technology — and that the best is still ahead.',
                      'Outside of work, Harshil is passionate about mentoring the next generation of founders, documenting his building journey on social media, and staying grounded in the city that made him.',
                    ].map((para, i) => (
                      <p key={i} style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.75 }}>{para}</p>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-pad" style={{ background: 'rgba(13,13,20,0.4)' }}>
          <div className="section-container">
            <AnimateIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Timeline</div>
              <h2 className="font-display" style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '0.5rem',
              }}>
                The Journey
              </h2>
            </AnimateIn>

            <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '1.7rem',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(91,138,240,0.4), rgba(91,138,240,0.2), transparent)',
              }} />

              {TIMELINE.map((item, i) => (
                <AnimateIn key={item.year} from="left" delay={i * 0.1}>
                  <div style={{
                    display: 'flex',
                    gap: '2rem',
                    paddingLeft: '1rem',
                    paddingBottom: '2.5rem',
                  }}>
                    {/* Node */}
                    <div style={{
                      width: '1.4rem',
                      height: '1.4rem',
                      borderRadius: '50%',
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}`,
                      flexShrink: 0,
                      marginTop: '0.25rem',
                      boxShadow: `0 0 12px ${item.color}40`,
                    }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span className="font-mono" style={{ fontSize: '0.7rem', color: item.color, letterSpacing: '0.1em' }}>
                          {item.year}
                        </span>
                        <span className="font-display" style={{ fontWeight: 700, fontSize: '1rem', color: '#F2F2FF' }}>
                          {item.title}
                        </span>
                      </div>
                      <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
