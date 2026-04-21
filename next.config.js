/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Scripts: self, inline (Next.js requires), GTM, Meta Pixel, LinkedIn
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://snap.licdn.com https://cal.id",
      // Styles: self, inline (Tailwind/CSS-in-JS), Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self, data URIs (inline SVG), blob, and all HTTPS (for OG/social)
      "img-src 'self' data: blob: https:",
      // API calls: self, Formspree, Vercel Analytics, Cal.id
      "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://cal.id",
      // iFrames: Cal.id booking embed
      "frame-src https://cal.id",
      // Workers: self only
      "worker-src 'self' blob:",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,

  // Security headers on every route
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ['gray-matter'],
  },
};

module.exports = nextConfig;
