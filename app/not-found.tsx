import Link from 'next/link';
import Footer from '@/components/sections/Footer';

export default function NotFound() {
  return (
    <>
      <main style={{
        paddingTop: '72px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(91,138,240,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(6rem, 20vw, 14rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              background: 'linear-gradient(135deg, rgba(91,138,240,0.2), rgba(240,106,43,0.15))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              userSelect: 'none',
              marginBottom: '2rem',
            }}
          >
            404
          </div>

          <div className="font-mono" style={{ fontSize: '0.72rem', color: '#5B8AF0', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Page Not Found
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: '#F2F2FF',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            This page doesn&apos;t exist.
          </h1>

          <p style={{ color: '#6B7280', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '380px', margin: '0 auto 2.5rem' }}>
            But the things Harshil is building definitely do. Head back home.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn-primary">← Back Home</Link>
            <Link href="/ventures" className="btn-ghost">Explore Ventures</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
