import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import MobileCTA from '@/components/MobileCTA';
import Loader from '@/components/Loader';
import { SkipLink } from '@/components/SkipLink';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harshil.space';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-56JR7KS9';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Harshil Raval | AI Automation Founder & Serial Entrepreneur',
    template: '%s | Harshil Raval',
  },
  description:
    'Harshil Raval — Serial entrepreneur and AI automation founder based in Ahmedabad, India. Founder of Workcin, Nexplacers, Triver Lab & Symrex. Building systems that think, scale, and outlast.',
  keywords: [
    'AI automation founder India',
    'Harshil Raval entrepreneur Ahmedabad',
    'Workcin AI automation',
    'startup founder portfolio India',
    'AI workflow automation India',
    'serial entrepreneur Gujarat',
  ],
  authors: [{ name: 'Harshil Raval' }],
  creator: 'Harshil Raval',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'Harshil Raval | AI Automation Founder & Serial Entrepreneur',
    description:
      'Building systems that think, scale, and outlast. Founder of Workcin, Nexplacers, Triver Lab & Symrex.',
    siteName: 'Harshil Raval',
    images: [
      {
        url: `/api/og?title=Harshil+Raval&sub=AI+Automation+Founder+%C2%B7+Ahmedabad%2C+India`,
        width: 1200,
        height: 630,
        alt: 'Harshil Raval — AI Automation Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshil Raval | AI Automation Founder',
    description: 'Building systems that think, scale, and outlast.',
    images: [`/api/og?title=Harshil+Raval&sub=AI+Automation+Founder+%C2%B7+Ahmedabad`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harshil Raval',
  url: siteUrl,
  jobTitle: 'AI Automation Founder & Serial Entrepreneur',
  image: `${siteUrl}/harshil-raval-og.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/harshilravalll',
    'https://www.instagram.com/harshilravalll',
    'https://www.instagram.com/hrshil.30',
    'https://www.facebook.com/harshilravalll',
  ],
  founder: [
    { '@type': 'Organization', name: 'Workcin', description: 'AI Automation & Workflow Intelligence' },
    { '@type': 'Organization', name: 'Nexplacers', description: 'Talent & Placement Intelligence' },
    { '@type': 'Organization', name: 'Triver Lab', description: 'Research · Innovation · Execution' },
    { '@type': 'Organization', name: 'Symrex', description: 'Digital Infrastructure & Security' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
        {/* Schema.org Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Accessibility: skip to main content */}
        <SkipLink />

        {/* Grain/noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Loader />
        <Navigation />
        <main id="main-content">{children}</main>
        <MobileCTA />
      </body>
    </html>
  );
}
