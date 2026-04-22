'use client';

import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#050508',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(240,106,43,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '2rem' }}>
        {/* Big 500 */}
        <div
          className="font-display"
          style={{
            fontSize: 'clamp(5rem, 16vw, 12rem)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            background:
              'linear-gradient(135deg, rgba(240,106,43,0.25), rgba(91,138,240,0.15))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            userSelect: 'none',
            marginBottom: '1.5rem',
          }}
        >
          500
        </div>

        {/* Label */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.72rem',
            color: '#F06A2B',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Server Error
        </div>

        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 800,
            color: '#F2F2FF',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Something broke on our end.
        </h1>

        <p
          style={{
            color: '#6B7280',
            fontSize: '0.95rem',
            marginBottom: '2.5rem',
            maxWidth: '380px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.65,
          }}
        >
          The system glitched. Harshil&apos;s team has been notified (probably). Try
          again, or head back home.
        </p>

        {/* Error digest for debugging (only in dev) */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <p
            className="font-mono"
            style={{
              color: '#6B7280',
              fontSize: '0.65rem',
              marginBottom: '2rem',
              background: 'rgba(240,106,43,0.08)',
              border: '1px solid rgba(240,106,43,0.2)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              maxWidth: '480px',
              margin: '0 auto 2rem',
              wordBreak: 'break-all',
            }}
          >
            {error.message}
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn-ember" id="error-retry-btn">
            Try Again
          </button>
          <Link href="/" className="btn-ghost" id="error-home-btn">
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
