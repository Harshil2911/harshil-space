'use client';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

const POSTS = [
  {
    slug: 'why-indian-startups-fail-to-automate',
    tag: 'Strategy',
    tagColor: '#5B8AF0',
    date: 'Apr 2026',
    readTime: '8 min',
    title: 'Why Most Indian Startups Fail to Automate (And How to Fix It)',
    excerpt: 'Most automation projects fail not because of technology, but because of culture. Here\'s the real reason your automation ROI keeps disappointing — and the framework I use to fix it.',
  },
  {
    slug: 'ai-automation-roi-90-days',
    tag: 'AI',
    tagColor: '#A8FF57',
    date: 'Mar 2026',
    readTime: '6 min',
    title: 'AI Automation ROI: What to Measure in Your First 90 Days',
    excerpt: 'The vanity metrics of automation — tasks automated, hours saved — tell you nothing about business value. Here\'s the measurement framework that actually moves the needle.',
  },
  {
    slug: 'building-4-companies-before-30',
    tag: 'Founder',
    tagColor: '#F06A2B',
    date: 'Feb 2026',
    readTime: '10 min',
    title: 'Building 4 Companies Before 30: What I Learned',
    excerpt: 'Four ventures in four years has taught me things no MBA program covers. The learnings are sometimes uncomfortable, always useful.',
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog-teaser" className="section-pad">
      <div className="section-container">
        <AnimateIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">Thought Leadership</div>
              <h2 className="font-display" style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '0.5rem',
              }}>
                Fresh from the Mind
              </h2>
            </div>
            <Link href="/blog" className="btn-ghost" style={{ flexShrink: 0 }}>
              All Articles →
            </Link>
          </div>
        </AnimateIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          className="blog-grid"
        >
          {POSTS.map((post, i) => (
            <AnimateIn key={post.slug} from="bottom" delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                id={`blog-card-${post.slug}`}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({ event: 'blog_read_click', post: post.slug });
                  }
                }}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <article
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    border: '1px solid rgba(91,138,240,0.12)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = `${post.tagColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(91,138,240,0.12)';
                  }}
                >
                  {/* Tag + meta */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: post.tagColor,
                      background: `${post.tagColor}15`,
                      border: `1px solid ${post.tagColor}30`,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                    }}>
                      {post.tag}
                    </span>
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.65rem', color: '#6B7280' }}
                    >
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Decorative line */}
                  <div style={{ height: '1px', background: `linear-gradient(90deg, ${post.tagColor}40, transparent)` }} />

                  {/* Title */}
                  <h3 className="font-display" style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#F2F2FF',
                    lineHeight: 1.35,
                    letterSpacing: '-0.01em',
                    flexGrow: 1,
                  }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.65 }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(91,138,240,0.08)',
                    marginTop: 'auto',
                  }}>
                    <span className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280' }}>{post.date}</span>
                    <span style={{ fontSize: '0.85rem', color: post.tagColor }}>Read →</span>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
