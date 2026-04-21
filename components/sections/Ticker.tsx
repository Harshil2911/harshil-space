'use client';

const TICKER_ITEMS = [
  { icon: '⚡', text: 'WORKCIN — AI AUTOMATION' },
  { icon: '🏗️', text: 'NEXPLACERS' },
  { icon: '🔬', text: 'TRIVER LAB' },
  { icon: '🛡️', text: 'SYMREX' },
  { icon: '📍', text: 'AHMEDABAD, INDIA' },
  { icon: '🤝', text: '100+ CLIENTS SERVED' },
  { icon: '🚀', text: '4 VENTURES BUILT' },
  { icon: '🤖', text: 'AI-FIRST APPROACH' },
  { icon: '📈', text: 'SYSTEMS THAT SCALE' },
];

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      style={{
        background: 'rgba(13,13,20,0.9)',
        borderTop: '1px solid rgba(91,138,240,0.12)',
        borderBottom: '1px solid rgba(91,138,240,0.12)',
        padding: '0.9rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0 2rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#5B8AF0',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
            {item.text}
            <span style={{ color: '#F06A2B', margin: '0 0.25rem', opacity: 0.6 }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
