import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Harshil Raval';
  const sub = searchParams.get('sub') || 'AI Automation Founder · Ahmedabad, India';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#050508',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#F2F2FF',
          position: 'relative',
        }}
      >
        {/* Grid lines (decorative) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(91,138,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(91,138,240,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display: 'flex',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #5B8AF0, #F06A2B)',
          display: 'flex',
        }} />

        {/* Domain label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '28px',
        }}>
          <div style={{
            width: '32px', height: '2px',
            background: '#5B8AF0',
            display: 'flex',
          }} />
          <span style={{ color: '#5B8AF0', fontSize: '16px', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex' }}>
            HARSHIL.SPACE
          </span>
        </div>

        {/* Main title */}
        <div style={{
          fontSize: title.length > 40 ? '52px' : '68px',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '24px',
          letterSpacing: '-0.03em',
          display: 'flex',
          maxWidth: '900px',
        }}>
          {title}
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '28px',
          color: '#6B7280',
          display: 'flex',
          marginBottom: '0px',
        }}>
          {sub}
        </div>

        {/* Venture pills */}
        <div style={{
          position: 'absolute', bottom: '60px', left: '80px',
          display: 'flex', gap: '12px',
        }}>
          {['Workcin', 'Nexplacers', 'Triver Lab', 'Symrex'].map((v) => (
            <div key={v} style={{
              background: 'rgba(91,138,240,0.12)',
              border: '1px solid rgba(91,138,240,0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              fontSize: '14px',
              color: '#5B8AF0',
              display: 'flex',
            }}>
              {v}
            </div>
          ))}
        </div>

        {/* Ember badge */}
        <div style={{
          position: 'absolute', bottom: '60px', right: '80px',
          background: '#F06A2B',
          borderRadius: '100px',
          padding: '12px 28px',
          fontSize: '18px',
          color: '#fff',
          fontWeight: 700,
          display: 'flex',
        }}>
          harshil.space
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
