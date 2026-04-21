'use client';
import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  from?: 'bottom' | 'left' | 'right' | 'fade';
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.7,
  from = 'bottom',
  className = '',
  style = {},
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  const initialTransform = {
    bottom: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    fade: 'none',
  }[from];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'none';
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        filter: from === 'fade' ? 'blur(4px)' : 'none',
        transition: `opacity ${duration}s ease, transform ${duration}s ease, filter ${duration}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
