export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harshil.space';

  const posts = [
    {
      slug: 'why-indian-startups-fail-to-automate',
      title: 'Why Most Indian Startups Fail to Automate (And How to Fix It)',
      date: '2026-04-01',
      excerpt:
        "Most automation projects fail not because of technology, but because of culture. Here's the real reason your automation ROI keeps disappointing — and the framework that actually fixes it.",
    },
    {
      slug: 'ai-automation-roi-90-days',
      title: 'AI Automation ROI: What to Measure in Your First 90 Days',
      date: '2026-03-01',
      excerpt:
        "The vanity metrics of automation — tasks automated, hours saved — tell you nothing about business value. Here's the measurement framework that actually moves the needle.",
    },
    {
      slug: 'building-4-companies-before-30',
      title: 'Building 4 Companies Before 30: What I Learned',
      date: '2026-02-01',
      excerpt:
        'Four ventures in under four years. The learnings are sometimes uncomfortable, always useful. No advice column fluff — just the unfiltered truth.',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Harshil Raval — Founder Insights</title>
    <link>${siteUrl}/blog</link>
    <description>AI automation, startup building, and founder lessons from building 4 companies in Ahmedabad, India.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/api/og?title=Blog&amp;sub=Founder+Insights+by+Harshil+Raval</url>
      <title>Harshil Raval — Founder Insights</title>
      <link>${siteUrl}/blog</link>
    </image>
    ${posts
      .map(
        (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${siteUrl}/blog/${p.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt}]]></description>
      <author>hello@harshil.space (Harshil Raval)</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
