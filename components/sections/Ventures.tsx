'use client';
import { useState } from 'react';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import { VENTURES } from '@/lib/ventures';

function VentureCard({ venture, delay = 0 }: { venture: typeof VENTURES[0]; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'venture_card_click', venture: venture.id });
    }
  };

  return (
    <AnimateIn from="bottom" delay={delay}>
      <Link
        href={venture.href}
        onClick={handleClick}
        id={`venture-card-${venture.id}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'block',
          textDecoration: 'none',
          height: '100%',
        }}
      >
        <div
          className={`glass-card ${venture.colorClass}`}
          style={{
            padding: '2rem',
            height: '100%',
            border: `1px solid ${hovered ? venture.accentColor + '40' : 'rgba(91,138,240,0.15)'}`,
            transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: hovered ? `0 20px 60px ${venture.accentColor}20, 0 0 0 1px ${venture.accentColor}20` : 'none',
            transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '2rem', lineHeight: 1 }}>{venture.emoji}</span>
              <div
                className="font-display"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#F2F2FF',
                  marginTop: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {venture.name}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: venture.accentColor,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: '0.25rem',
                }}
              >
                {venture.tagline}
              </div>
            </div>
            <div
              style={{
                width: '36px',
                height: '36px',
                border: `1px solid ${venture.accentColor}40`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: venture.accentColor,
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                transform: hovered ? 'rotate(45deg)' : 'none',
                flexShrink: 0,
              }}
            >
              →
            </div>
          </div>

          {/* Description */}
          <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.65, flexGrow: 1 }}>
            {venture.description}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {venture.stats.map((stat) => (
              <div key={stat.label} style={{ flex: 1, minWidth: '70px' }}>
                <div
                  className="font-display"
                  style={{ fontSize: '1.15rem', fontWeight: 700, color: venture.accentColor }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: '0.6rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {venture.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '100px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem',
                  background: `${venture.accentColor}12`,
                  border: `1px solid ${venture.accentColor}30`,
                  color: venture.accentColor,
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </AnimateIn>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="section-pad" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(91,138,240,0.3), transparent)',
      }} />

      <div className="section-container">
        <AnimateIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#F2F2FF',
              marginTop: '0.5rem',
            }}>
              The Ventures
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
              Four companies. One mission: build systems that outlast trends.
            </p>
          </div>
        </AnimateIn>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '1.25rem',
        }}
          className="ventures-grid"
        >
          {/* Workcin — large left */}
          <div style={{ gridColumn: '1', gridRow: '1 / 3' }}>
            <VentureCard venture={VENTURES[0]} delay={0} />
          </div>
          {/* Nexplacers — small top right */}
          <div style={{ gridColumn: '2', gridRow: '1' }}>
            <VentureCard venture={VENTURES[1]} delay={0.1} />
          </div>
          {/* Triver Lab — small bottom right */}
          <div style={{ gridColumn: '2', gridRow: '2' }}>
            <VentureCard venture={VENTURES[2]} delay={0.2} />
          </div>
        </div>

        {/* Symrex — full width below */}
        <div style={{ marginTop: '1.25rem' }}>
          <VentureCard venture={VENTURES[3]} delay={0.3} />
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/ventures" className="btn-ghost">
            View All Ventures →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ventures-grid { grid-template-columns: 1fr !important; grid-template-rows: unset !important; }
          .ventures-grid > div { grid-column: 1 !important; grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
