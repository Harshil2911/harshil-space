import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Blog | Founder Insights from Harshil Raval',
  description:
    'AI automation, startup building, and founder lessons from Harshil Raval. Real insights from building 4 companies in India.',
  alternates: { canonical: 'https://harshilraval.com/blog' },
};

const POSTS = [
  {
    slug: 'why-indian-startups-fail-to-automate',
    tag: 'Strategy', tagColor: '#5B8AF0',
    date: 'April 2026', readTime: '8 min',
    title: 'Why Most Indian Startups Fail to Automate (And How to Fix It)',
    excerpt: 'Most automation projects fail not because of technology, but because of culture. Here\'s the real reason your automation ROI keeps disappointing — and the framework that actually fixes it.',
  },
  {
    slug: 'ai-automation-roi-90-days',
    tag: 'AI', tagColor: '#A8FF57',
    date: 'March 2026', readTime: '6 min',
    title: 'AI Automation ROI: What to Measure in Your First 90 Days',
    excerpt: 'The vanity metrics of automation — tasks automated, hours saved — tell you nothing about business value. Here\'s the measurement framework that actually moves the needle.',
  },
  {
    slug: 'building-4-companies-before-30',
    tag: 'Founder', tagColor: '#F06A2B',
    date: 'February 2026', readTime: '10 min',
    title: 'Building 4 Companies Before 30: What I Learned',
    excerpt: 'Four ventures in under four years. The learnings are sometimes uncomfortable, always useful. No advice column fluff — just the unfiltered truth.',
  },
];

export default function BlogPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section className="section-pad" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(91,138,240,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="section-container">
            <AnimateIn>
              <div className="section-label">Blog</div>
              <h1 className="font-display" style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '0.75rem',
                marginBottom: '0.75rem',
              }}>
                Founder Insights
              </h1>
              <p style={{ color: '#6B7280', fontSize: '1.05rem', maxWidth: '520px' }}>
                AI, automation, startup building, and the unfiltered truth about building companies from Ahmedabad.
              </p>
            </AnimateIn>
          </div>
        </section>

        <section style={{ paddingBottom: '8rem' }}>
          <div className="section-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="blog-list-grid">
              {POSTS.map((post, i) => (
                <AnimateIn key={post.slug} from="bottom" delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <article
                      className="glass-card blog-card-hover"
                      style={{
                        padding: '2rem',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        border: '1px solid rgba(91,138,240,0.12)',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: post.tagColor, background: `${post.tagColor}15`, border: `1px solid ${post.tagColor}30`, padding: '0.2rem 0.6rem', borderRadius: '100px' }}>{post.tag}</span>
                        <span className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280' }}>{post.readTime} read</span>
                      </div>
                      <h2 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F2F2FF', lineHeight: 1.3, letterSpacing: '-0.01em', flexGrow: 1 }}>{post.title}</h2>
                      <p style={{ color: '#6B7280', fontSize: '0.87rem', lineHeight: 1.65 }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid rgba(91,138,240,0.08)' }}>
                        <span className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280' }}>{post.date}</span>
                        <span style={{ fontSize: '0.85rem', color: post.tagColor }}>Read →</span>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 1024px) { .blog-list-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .blog-list-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
