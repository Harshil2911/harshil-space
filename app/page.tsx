import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import About from '@/components/sections/About';
import Ventures from '@/components/sections/Ventures';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import BlogTeaser from '@/components/sections/BlogTeaser';
import SocialHub from '@/components/sections/SocialHub';
import BuildWithMe from '@/components/sections/BuildWithMe';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Harshil Raval | AI Automation Founder & Serial Entrepreneur',
  description:
    'Harshil Raval — Serial entrepreneur and AI automation founder in Ahmedabad. Founder of Workcin, Nexplacers, Triver Lab & Symrex. I build systems that think, scale, and outlast.',
  alternates: { canonical: 'https://harshil.space' },
};

// Scroll depth tracking — injected as a client component
function ScrollTracker() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var fired50=false,fired90=false;
            function onScroll(){
              var h=document.documentElement;
              var pct=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
              if(!fired50&&pct>=50){
                fired50=true;
                window.dataLayer&&window.dataLayer.push({event:'scroll_depth_50'});
              }
              if(!fired90&&pct>=90){
                fired90=true;
                window.dataLayer&&window.dataLayer.push({event:'scroll_depth_90'});
              }
            }
            window.addEventListener('scroll',onScroll,{passive:true});
          })();
        `,
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollTracker />
      <Hero />
      <Ticker />
      <About />
      <Ventures />
      <Process />
      <Testimonials />
      <BlogTeaser />
      <SocialHub />
      <BuildWithMe />
      <Footer />
    </>
  );
}
