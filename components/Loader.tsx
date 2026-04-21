'use client';
import { useEffect, useRef } from 'react';

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLSpanElement>(null);
  const r1Ref = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if already loaded in this session
    if (sessionStorage.getItem('hr-loaded')) {
      if (loaderRef.current) {
        loaderRef.current.style.display = 'none';
      }
      return;
    }

    const loader = loaderRef.current;
    if (!loader) return;

    // Dynamically import GSAP to avoid SSR issues
    const runAnimation = async () => {
      const { gsap } = await import('gsap');

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('hr-loaded', '1');
        },
      });

      // Start: everything invisible
      gsap.set([h1Ref.current, r1Ref.current, dotRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });

      // Animate "H"
      tl.to(h1Ref.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.3);
      // Animate dot
      tl.to(dotRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.55);
      // Animate "R"
      tl.to(r1Ref.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.65);
      // Underline
      tl.to(lineRef.current, { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.9);
      // Hold
      tl.to({}, { duration: 0.5 }, 1.2);
      // Scale up + fade — logo morph feel
      tl.to(
        [h1Ref.current, r1Ref.current, dotRef.current],
        { scale: 1.15, duration: 0.4, ease: 'power2.in' },
        1.7
      );
      // Wipe loader upward
      tl.to(loader, { y: '-100%', duration: 0.7, ease: 'power3.inOut' }, 2.0);
      tl.set(loader, { display: 'none' });
    };

    runAnimation();
  }, []);

  return (
    <div id="loader" ref={loaderRef}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 900,
            color: '#F2F2FF',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.1em',
          }}
        >
          <span ref={h1Ref} style={{ color: '#5B8AF0' }}>H</span>
          <span
            ref={dotRef}
            style={{
              color: '#F06A2B',
              fontSize: '0.6em',
              lineHeight: 0,
              marginBottom: '-0.2em',
            }}
          >
            .
          </span>
          <span ref={r1Ref}>R</span>
          <span
            style={{
              color: '#F06A2B',
              fontSize: '0.6em',
              lineHeight: 0,
              marginBottom: '-0.2em',
            }}
          >
            .
          </span>
        </div>
        <div
          ref={lineRef}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, #5B8AF0, #F06A2B)',
            borderRadius: '1px',
            transformOrigin: 'center',
            marginTop: '0.5rem',
          }}
        />
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: '#6B7280',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginTop: '1rem',
          }}
        >
          Harshil Raval
        </div>
      </div>
    </div>
  );
}
