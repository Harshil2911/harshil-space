'use client';
import AnimateIn from '@/components/AnimateIn';

const SOCIAL_LINKS = [
  {
    platform: 'Instagram (Business)',
    handle: '@harshilravalll',
    url: 'https://instagram.com/harshilravalll',
    icon: '📸',
    color: '#F06A2B',
    bg: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    followers: '12K+',
    content: 'Business insights, venture updates & AI automation tips',
  },
  {
    platform: 'Instagram (Personal)',
    handle: '@hrshil.30',
    url: 'https://instagram.com/hrshil.30',
    icon: '🌟',
    color: '#a78bfa',
    bg: 'linear-gradient(135deg, #6f63c5 0%, #a855f7 100%)',
    followers: '5K+',
    content: 'Behind the scenes of building, life in Ahmedabad & founder moments',
  },
  {
    platform: 'LinkedIn',
    handle: 'harshilravalll',
    url: 'https://linkedin.com/in/harshilravalll',
    icon: '💼',
    color: '#5B8AF0',
    bg: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
    followers: '8K+',
    content: 'Founder thoughts, venture milestones & industry insights',
  },
  {
    platform: 'Facebook',
    handle: '@harshilravalll',
    url: 'https://facebook.com/harshilravalll',
    icon: '🌐',
    color: '#60a5fa',
    bg: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)',
    followers: '3K+',
    content: 'Community updates, events & long-form posts',
  },
];

export default function SocialHub() {
  const trackSocial = (platform: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'social_follow_click', platform });
    }
  };

  return (
    <section id="social" className="section-pad" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(240,106,43,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <AnimateIn style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Follow the Journey</div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#F2F2FF',
            marginTop: '0.5rem',
          }}>
            Join the Community
          </h2>
          <p style={{ color: '#6B7280', fontSize: '1rem', marginTop: '0.75rem' }}>
            Follow Harshil across platforms for real-time updates on all four ventures.
          </p>
        </AnimateIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}
          className="social-grid"
        >
          {SOCIAL_LINKS.map((social, i) => (
            <AnimateIn key={social.platform} from="bottom" delay={i * 0.08}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`social-link-${social.platform.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => trackSocial(social.platform)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    border: `1px solid rgba(91,138,240,0.12)`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3)`;
                    e.currentTarget.style.borderColor = `${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(91,138,240,0.12)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {/* Platform icon circle */}
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: social.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem',
                        flexShrink: 0,
                      }}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-display" style={{ fontWeight: 700, color: '#F2F2FF', fontSize: '0.95rem' }}>
                          {social.platform}
                        </div>
                        <div className="font-mono" style={{ fontSize: '0.7rem', color: social.color }}>
                          {social.handle}
                        </div>
                      </div>
                    </div>

                    {/* Follower count */}
                    <div style={{
                      background: `${social.color}15`,
                      border: `1px solid ${social.color}30`,
                      borderRadius: '8px',
                      padding: '0.3rem 0.6rem',
                      textAlign: 'center',
                    }}>
                      <div className="font-display" style={{ fontSize: '0.85rem', fontWeight: 700, color: social.color }}>
                        {social.followers}
                      </div>
                      <div className="font-mono" style={{ fontSize: '0.55rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Followers
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {social.content}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: social.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}>
                    Follow →
                  </div>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .social-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
