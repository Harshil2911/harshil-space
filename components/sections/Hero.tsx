'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load 3D to avoid SSR issues and improve initial LCP
const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(91,138,240,0.08) 0%, transparent 70%)',
      borderRadius: '50%',
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        border: '2px solid rgba(91,138,240,0.3)',
        borderTopColor: '#5B8AF0',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
    </div>
  ),
});

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Trigger staggered entrance after loader
    const delay = sessionStorage.getItem('hr-loaded') ? 100 : 2400;
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, []);

  const trackCTA = (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: eventName });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 65% 50%, rgba(91,138,240,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(240,106,43,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ width: '100%' }}>
        <div className="grid-asymmetric" style={{ minHeight: 'calc(100vh - 72px)' }}>
          {/* Left: Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 0' }}>
            {/* Eyebrow */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease 0.0s, transform 0.7s ease 0.0s',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: '#5B8AF0',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  border: '1px solid rgba(91,138,240,0.25)',
                  borderRadius: '100px',
                  background: 'rgba(91,138,240,0.06)',
                }}
              >
                <span style={{ color: '#F06A2B' }}>◆</span>
                Founder · AI Automation · India
              </span>
            </div>

            {/* H1 */}
            <h1
              ref={h1Ref}
              className="font-display"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '1.2rem',
                marginBottom: '1.2rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
              }}
            >
              I Build Things
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #5B8AF0 0%, #A8FF57 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                That Think.
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                color: '#6B7280',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
              }}
            >
              Founder of{' '}
              <span style={{ color: '#F2F2FF', fontWeight: 500 }}>Workcin</span>,{' '}
              <span style={{ color: '#F2F2FF', fontWeight: 500 }}>Nexplacers</span>,{' '}
              <span style={{ color: '#F2F2FF', fontWeight: 500 }}>Triver Lab</span> &{' '}
              <span style={{ color: '#F2F2FF', fontWeight: 500 }}>Symrex</span>.
              Based in Ahmedabad. Wiring AI into the backbone of tomorrow&apos;s businesses.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s',
              }}
            >
              <Link
                href="/ventures"
                className="btn-primary"
                id="hero-cta-primary"
                onClick={() => trackCTA('hero_cta_click')}
              >
                Explore My Ventures →
              </Link>
              <Link
                href="/connect"
                className="btn-ghost"
                id="hero-cta-secondary"
                onClick={() => trackCTA('hero_secondary_cta_click')}
              >
                Let&apos;s Build Together
              </Link>
            </div>

            {/* Micro stats */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                flexWrap: 'wrap',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
              }}
            >
              {[
                { num: '4', label: 'Ventures' },
                { num: '100+', label: 'Clients' },
                { num: '∞', label: 'Ambition' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#5B8AF0' }}>
                    {stat.num}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Canvas */}
          <div
            style={{
              position: 'relative',
              height: 'clamp(400px, 55vh, 680px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
            }}
          >
            {/* Glow behind canvas */}
            <div style={{
              position: 'absolute',
              inset: '10%',
              background: 'radial-gradient(ellipse, rgba(91,138,240,0.18) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }} />
            <HeroCanvas />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: visible ? 0.5 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6B7280', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #5B8AF0, transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
