'use client';
import { useEffect, useRef, useState } from 'react';
import AnimateIn from '@/components/AnimateIn';

const STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discover',
    desc: 'Understanding the gap the market hasn\'t solved yet. Deep research, customer interviews, competitive analysis — relentlessly.',
    color: '#5B8AF0',
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Architect',
    desc: 'Building systems, not just products. Every decision is a design constraint. Scalability is baked in from day one.',
    color: '#a78bfa',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Launch',
    desc: 'Ship fast, iterate faster. The market is the only real validation engine. Perfect is the enemy of shipped.',
    color: '#A8FF57',
  },
  {
    num: '04',
    icon: '📈',
    title: 'Scale',
    desc: 'AI-powered growth loops that compound. Systems designed to run themselves while Harshil builds the next thing.',
    color: '#F06A2B',
  },
];

export default function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate dot traveling
          let step = 0;
          const interval = setInterval(() => {
            setActiveStep(step % 4);
            step++;
          }, 800);
          // Clean up after one cycle
          setTimeout(() => {
            clearInterval(interval);
            setActiveStep(3);
          }, 3500);
          observer.unobserve(section);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(13,13,20,0.5) 50%, transparent 100%)',
        position: 'relative',
      }}
    >
      <div className="section-container">
        <AnimateIn style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>The Process</div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#F2F2FF',
              marginTop: '0.5rem',
            }}
          >
            How He Works
          </h2>
        </AnimateIn>

        {/* Desktop: horizontal timeline */}
        <div className="process-desktop">
          <div style={{ position: 'relative', display: 'flex', gap: '0', alignItems: 'stretch' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute',
              top: '2.2rem',
              left: '4%',
              right: '4%',
              height: '2px',
              background: 'rgba(91,138,240,0.15)',
              zIndex: 0,
            }}>
              <div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #5B8AF0, #a78bfa, #A8FF57, #F06A2B)',
                  width: `${((activeStep + 1) / 4) * 100}%`,
                  transition: 'width 0.8s ease',
                  borderRadius: '1px',
                }}
              />
            </div>

            {STEPS.map((step, i) => (
              <AnimateIn key={step.num} from="bottom" delay={i * 0.12} style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    padding: '0 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {/* Circle node */}
                  <div style={{
                    width: '4.4rem',
                    height: '4.4rem',
                    borderRadius: '50%',
                    background: i <= activeStep ? `${step.color}20` : 'rgba(13,13,20,0.9)',
                    border: `2px solid ${i <= activeStep ? step.color : 'rgba(91,138,240,0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    marginBottom: '1.5rem',
                    transition: 'all 0.5s ease',
                    boxShadow: i <= activeStep ? `0 0 20px ${step.color}30` : 'none',
                    flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>

                  <div
                    className="font-mono"
                    style={{ fontSize: '0.6rem', color: step.color, letterSpacing: '0.15em', marginBottom: '0.5rem' }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: i <= activeStep ? '#F2F2FF' : '#6B7280',
                      marginBottom: '0.75rem',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {step.title}
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical accordion */}
        <div className="process-mobile">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.num} from="bottom" delay={i * 0.1}>
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(91,138,240,0.1)',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `1.5px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  {step.icon}
                </div>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.6rem', color: step.color, letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
                    {step.num}
                  </div>
                  <div className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: '#F2F2FF', marginBottom: '0.5rem' }}>
                    {step.title}
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        .process-mobile { display: none; }
        @media (max-width: 768px) {
          .process-desktop { display: none; }
          .process-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}
