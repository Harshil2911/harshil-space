import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';
import { VENTURES } from '@/components/sections/Ventures';

export const metadata: Metadata = {
  title: 'Ventures | Workcin · Nexplacers · Triver Lab · Symrex',
  description:
    'Explore the four ventures built by Harshil Raval: Workcin (AI automation), Nexplacers (talent intelligence), Triver Lab (startup lab), and Symrex (digital infrastructure).',
  alternates: { canonical: 'https://harshilraval.com/ventures' },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': VENTURES.map((v) => ({
    '@type': 'Organization',
    name: v.name,
    url: `https://harshilraval.com${v.href}`,
    founder: { '@type': 'Person', name: 'Harshil Raval' },
    description: v.description,
  })),
};

export default function VenturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <main style={{ paddingTop: '72px' }}>
        {/* Header */}
        <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(91,138,240,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="section-container" style={{ textAlign: 'center' }}>
            <AnimateIn>
              <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
              <h1 className="font-display" style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '0.75rem',
              }}>
                The Ventures
              </h1>
              <p style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: '1rem', maxWidth: '520px', margin: '1rem auto 0' }}>
                Four companies built on one thesis: AI-native systems outlast everything else.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* All venture detail cards */}
        <section className="section-pad">
          <div className="section-container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {VENTURES.map((venture, i) => (
                <AnimateIn key={venture.id} from={i % 2 === 0 ? 'left' : 'right'} delay={0.05}>
                  <div
                    className={`glass-card ${venture.colorClass}`}
                    style={{
                      padding: 'clamp(2rem, 4vw, 3rem)',
                      border: `1px solid ${venture.accentColor}25`,
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '3rem',
                      alignItems: 'start',
                    }}
                      className="venture-detail-grid"
                    >
                      <div>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <span style={{ fontSize: '2.5rem' }}>{venture.emoji}</span>
                          <div>
                            <h2 className="font-display" style={{
                              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                              fontWeight: 900,
                              color: '#F2F2FF',
                              letterSpacing: '-0.02em',
                            }}>
                              {venture.name}
                            </h2>
                            <div className="font-mono" style={{ fontSize: '0.72rem', color: venture.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                              {venture.tagline}
                            </div>
                          </div>
                        </div>

                        <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: '580px', marginBottom: '1.5rem' }}>
                          {venture.description}
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                          {venture.tags.map((tag) => (
                            <span key={tag} style={{
                              padding: '0.25rem 0.75rem',
                              borderRadius: '100px',
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.68rem',
                              background: `${venture.accentColor}12`,
                              border: `1px solid ${venture.accentColor}30`,
                              color: venture.accentColor,
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link href={venture.href} className="btn-primary" id={`venture-explore-${venture.id}`} style={{ background: venture.accentColor === '#A8FF57' ? '#A8FF57' : undefined, color: venture.accentColor === '#A8FF57' ? '#050508' : undefined }}>
                          Explore {venture.name} →
                        </Link>
                      </div>

                      {/* Stats */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '180px' }}>
                        {venture.stats.map((stat) => (
                          <div key={stat.label} className="stat-badge" style={{ alignItems: 'flex-start', border: `1px solid ${venture.accentColor}20` }}>
                            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: venture.accentColor }}>
                              {stat.value}
                            </span>
                            <span className="font-mono" style={{ fontSize: '0.62rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .venture-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
