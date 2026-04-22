import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';

const POSTS: Record<string, {
  title: string; tag: string; tagColor: string; date: string; readTime: string;
  content: string[];
}> = {
  'why-indian-startups-fail-to-automate': {
    title: 'Why Most Indian Startups Fail to Automate (And How to Fix It)',
    tag: 'Strategy', tagColor: '#5B8AF0',
    date: 'April 2026', readTime: '8 min',
    content: [
      'Every Indian founder I talk to wants to automate. They\'ve heard the pitch: save time, cut costs, scale faster. They\'ve seen the case studies. They\'ve bought the tools. And yet, six months later, most automation projects are dead in the water.',
      'The reason isn\'t the technology. Modern AI automation tools are genuinely good. The reason is culture — specifically, the deeply human resistance to changing how work gets done.',
      'Here\'s what I\'ve learned from deploying over 100 AI workflows at Workcin: automation fails when it\'s imposed top-down, when it creates uncertainty without replacing it with clarity, and when the ROI is measured in the wrong currency (hours saved is not the same as money made).',
      '**The Three Failure Modes**\n\nFailure Mode 1: Leadership buys the tool, the team hates it. Automation imposed without adoption training is just expensive chaos. Your team will find workarounds. They always do.\n\nFailure Mode 2: Automating the wrong thing first. Don\'t automate your core product workflow on day one. Start with the tedious admin tasks that nobody wants to do. Early wins build trust.\n\nFailure Mode 3: No owner. Every automation needs a human owner — someone who validates it, monitors it, and improves it. "Set and forget" is a myth.',
      '**The Fix: The Automation Adoption Framework**\n\nStart with pain, not possibility. Find the process that makes people groan and automate that first. Not the strategic workflow, the annoying one.\n\nMeasure revenue impact, not activity. Track what changed in revenue, conversion, or customer satisfaction — not just "hours saved."\n\nCreate automation champions. Train two or three people to become internal experts. Internal champions are more credible than vendors.',
      'Automation isn\'t a tool problem. It\'s an organizational change problem. The companies that win with AI are the ones that treat automation as a culture shift, not a software purchase.',
    ],
  },
  'ai-automation-roi-90-days': {
    title: 'AI Automation ROI: What to Measure in Your First 90 Days',
    tag: 'AI', tagColor: '#A8FF57',
    date: 'March 2026', readTime: '6 min',
    content: [
      'When a client asks me "what\'s the ROI on your automation?", I ask them back: "ROI measured how?" The answer to that question determines whether the project succeeds or fails.',
      'Most automation projects measure the wrong things in the first 90 days. They count tasks automated, hours theoretically saved, and errors reduced. These are leading indicators — they\'re not business outcomes.',
      '**What to Track in Days 1–30**\n\nProcess completion rate: Did the automation actually complete the task, or just partially? You want > 95% completion rate before calling it a success.\n\nError rate comparison: What\'s the error rate now vs. before? Automation should reduce errors by at least 60% to be worth the switch cost.\n\nHuman time to intervene: How often does a human have to manually fix something? This tells you how much training data you need.',
      '**Days 31–60: Business Impact**\n\nNow start measuring outcomes. How has the automated process affected your conversion rate, response time, or customer satisfaction score? These are the numbers your CFO cares about.\n\nAt Workcin, we measure a simple metric for every client: Revenue Per Human Hour. If an automation frees up 10 hours per week, and the team redirects that time to revenue-generating activities, does revenue per human hour go up? That\'s the real question.',
      '**Days 61–90: Scale Readiness**\n\nBy day 90, you should know: Can this automation handle 5x the volume it handles today? If the answer is no, you\'ve built a fragile system, not a scalable one. This is where most DIY automations break.',
      'The 90-day ROI framework isn\'t about proving automation works. It\'s about learning what the automation is actually telling you about your business. The data from a good automation is as valuable as the automation itself.',
    ],
  },
  'building-4-companies-before-30': {
    title: 'Building 4 Companies Before 30: What I Learned',
    tag: 'Founder', tagColor: '#F06A2B',
    date: 'February 2026', readTime: '10 min',
    content: [
      'Let me be honest: I didn\'t plan to build four companies. Workcin was the plan. The rest emerged from problems I couldn\'t stop thinking about once I started paying attention to the world through the lens of a builder.',
      'But four companies in four years has compressed a decade of founder education into a very short time. Here\'s what I actually learned — not the LinkedIn version, the real version.',
      '**Lesson 1: The First Hire Is More Important Than the First Customer**\n\nYour first hire sets the cultural DNA. Hire someone fast because you\'re desperate and you\'ll spend the next 6 months managing a values mismatch. I made this mistake twice. It\'s expensive in every way.',
      '**Lesson 2: Revenue Cures Almost Everything**\n\nCo-founder conflicts, investor pressure, product uncertainty — a growing revenue number is the best therapy for all of these. In the early days, obsess over revenue. Not funding. Revenue.\n\nFunding is a tool. Revenue is proof.',
      '**Lesson 3: The Product You Ship Is Never the Product You Imagined**\n\nAnd that\'s okay. The product you imagined was built on assumptions. The product you ship is built on evidence. Evidence always beats assumptions. Fall in love with the problem, not your solution.',
      '**Lesson 4: Building in India Is a Competitive Advantage**\n\nI used to think building from Ahmedabad was a constraint. Now I know it\'s a feature. Our operational costs are lower, our team is more grounded, and our proximity to the real problems of Indian SMBs makes our product insights sharper than those of founders building from co-working spaces in Bangalore trying to sound global.',
      '**Lesson 5: Saying No Is a Superpower**\n\nThe biggest risk in building multiple companies isn\'t running out of money. It\'s running out of focus. Every opportunity that looks good is actually a decision to not do something else. Ruthless prioritization is not a productivity hack. It\'s a survival skill.',
      'I\'m still learning. Every day. But if I could give one piece of advice to the version of me who started this journey: trust the compound effect of systems, be patient with people, and never confuse activity with progress.',
    ],
  },
};

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.content[0].slice(0, 155),
    alternates: { canonical: `https://harshil.space/blog/${params.slug}` },
    openGraph: { type: 'article', title: post.title, publishedTime: post.date },
  };
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug];

  if (!post) {
    return (
      <>
        <main style={{ paddingTop: '72px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="font-display" style={{ fontSize: '2rem', color: '#F2F2FF' }}>Post not found</h1>
            <Link href="/blog" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>← Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: 'Harshil Raval' },
    publisher: { '@type': 'Person', name: 'Harshil Raval' },
    datePublished: post.date,
    url: `https://harshil.space/blog/${params.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main style={{ paddingTop: '72px' }}>
        <article>
          {/* Header */}
          <header style={{ padding: '5rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(91,138,240,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div className="section-container" style={{ maxWidth: '760px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/blog" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#6B7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  ← Blog
                </Link>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: post.tagColor, background: `${post.tagColor}15`, border: `1px solid ${post.tagColor}30`, padding: '0.2rem 0.6rem', borderRadius: '100px' }}>
                  {post.tag}
                </span>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280' }}>{post.date} · {post.readTime} read</span>
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F2F2FF', lineHeight: 1.1 }}>
                {post.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(91,138,240,0.1)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(91,138,240,0.15)', border: '1.5px solid rgba(91,138,240,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#5B8AF0' }}>
                  H
                </div>
                <div>
                  <div className="font-display" style={{ fontWeight: 600, color: '#F2F2FF', fontSize: '0.9rem' }}>Harshil Raval</div>
                  <div className="font-mono" style={{ fontSize: '0.65rem', color: '#6B7280' }}>Founder, Workcin · Ahmedabad</div>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="section-container" style={{ maxWidth: '760px', paddingBottom: '6rem' }}>
            {post.content.map((para, i) => (
              <p key={i} style={{
                color: i === 0 ? '#9ca3af' : '#6B7280',
                fontSize: i === 0 ? '1.1rem' : '0.97rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontWeight: i === 0 ? 400 : 400,
                whiteSpace: 'pre-wrap',
              }}>
                {para}
              </p>
            ))}

            {/* Author CTA */}
            <div className="glass-card" style={{ padding: '2rem', marginTop: '3rem', border: '1px solid rgba(91,138,240,0.15)' }}>
              <div className="font-display" style={{ fontWeight: 700, color: '#F2F2FF', marginBottom: '0.5rem' }}>Want to work with Harshil?</div>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Whether you need AI automation, a strategic conversation, or a bold idea partner — he&apos;s open to it.</p>
              <Link href="/connect" className="btn-primary">Let&apos;s Talk →</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
