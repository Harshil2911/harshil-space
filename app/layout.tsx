import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import MobileCTA from '@/components/MobileCTA';
import Loader from '@/components/Loader';

export const metadata: Metadata = {
  metadataBase: new URL('https://harshilraval.com'),
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
    url: 'https://harshilraval.com',
    title: 'Harshil Raval | AI Automation Founder & Serial Entrepreneur',
    description:
      'Building systems that think, scale, and outlast. Founder of Workcin, Nexplacers, Triver Lab & Symrex.',
    siteName: 'Harshil Raval',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Harshil Raval — AI Automation Founder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshil Raval | AI Automation Founder',
    description: 'Building systems that think, scale, and outlast.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://harshilraval.com' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harshil Raval',
  url: 'https://harshilraval.com',
  jobTitle: 'Serial Entrepreneur & AI Automation Founder',
  worksFor: { '@type': 'Organization', name: 'Workcin' },
  address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' },
  sameAs: [
    'https://linkedin.com/in/harshilravalll',
    'https://instagram.com/harshilravalll',
    'https://instagram.com/hrshil.30',
    'https://facebook.com/harshilravalll',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Grain/noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Loader />
        <Navigation />
        <main>{children}</main>
        <MobileCTA />
      </body>
    </html>
  );
}
