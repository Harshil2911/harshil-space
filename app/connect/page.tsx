import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import AnimateIn from '@/components/AnimateIn';
import BuildWithMe from '@/components/sections/BuildWithMe';

export const metadata: Metadata = {
  title: 'Connect | Work with Harshil Raval',
  description:
    'Get in touch with Harshil Raval — for AI automation, co-founder conversations, investor discussions, or just a bold idea worth exploring.',
  alternates: { canonical: 'https://harshil.space/connect' },
};

export default function ConnectPage() {
  return (
    <>
      <main style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 0 2rem' }}>
          <div className="section-container" style={{ textAlign: 'center' }}>
            <AnimateIn>
              <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
              <h1 className="font-display" style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#F2F2FF',
                marginTop: '0.75rem',
              }}>
                Let&apos;s Build Something <br />
                <span style={{ color: '#5B8AF0' }}>Worth Building</span>
              </h1>
            </AnimateIn>
          </div>
        </section>
        <BuildWithMe />
      </main>
      <Footer />
    </>
  );
}
