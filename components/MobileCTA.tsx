'use client';

export default function MobileCTA() {
  return (
    <div
      className="mobile-sticky-cta"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(5,5,8,0.95)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(91,138,240,0.15)',
        padding: '0.75rem 1.5rem',
        zIndex: 998,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <a
        href="/connect"
        className="btn-primary"
        style={{ flex: 1, justifyContent: 'center', padding: '0.85rem 1rem' }}
        id="mobile-cta-btn"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({ event: 'mobile_cta_click' });
          }
        }}
      >
        Let&apos;s Talk →
      </a>
      <a
        href="https://linkedin.com/in/harshilravalll"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(91,138,240,0.1)',
          border: '1px solid rgba(91,138,240,0.25)',
          borderRadius: '12px',
          color: '#5B8AF0',
          textDecoration: 'none',
          fontSize: '1.1rem',
          flexShrink: 0,
        }}
      >
        in
      </a>
    </div>
  );
}
