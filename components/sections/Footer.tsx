'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Connect', href: '/connect' },
];

const SOCIAL = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/harshilravalll', char: 'in' },
  { label: 'Instagram', url: 'https://instagram.com/harshilravalll', char: '◯' },
  { label: 'Facebook', url: 'https://facebook.com/harshilravalll', char: 'f' },
];

export default function Footer() {
  const [ahmedabadHovered, setAhmedabadHovered] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(5,5,8,0.98)',
      borderTop: '1px solid rgba(91,138,240,0.1)',
      padding: '4rem 0 2rem',
    }}>
      <div className="section-container">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '3rem',
        }}
          className="footer-grid"
        >
          {/* Left: Logo + tagline */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#F2F2FF',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.1rem',
              }}
            >
              <span style={{ color: '#5B8AF0' }}>H</span>
              <span style={{ color: '#F06A2B', fontSize: '0.7em' }}>.</span>
              <span>R</span>
              <span style={{ color: '#F06A2B', fontSize: '0.7em' }}>.</span>
            </Link>
            <p
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: '#6B7280',
                marginTop: '0.75rem',
                letterSpacing: '0.05em',
                lineHeight: 1.6,
                maxWidth: '240px',
              }}
            >
              Building Systems That Think, Scale, and Outlast.
            </p>
          </div>

          {/* Center: Nav */}
          <nav>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="animated-link"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    color: '#6B7280',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F2F2FF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right: Social icons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(91,138,240,0.08)',
                  border: '1px solid rgba(91,138,240,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6B7280',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#5B8AF0';
                  el.style.borderColor = 'rgba(91,138,240,0.4)';
                  el.style.background = 'rgba(91,138,240,0.15)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#6B7280';
                  el.style.borderColor = 'rgba(91,138,240,0.2)';
                  el.style.background = 'rgba(91,138,240,0.08)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {s.char}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(91,138,240,0.2), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Bottom strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p
            className="font-mono"
            style={{ fontSize: '0.68rem', color: '#6B7280', letterSpacing: '0.04em' }}
          >
            © {currentYear} Harshil Raval · Built with ambition in{' '}
            <span
              onMouseEnter={() => setAhmedabadHovered(true)}
              onMouseLeave={() => setAhmedabadHovered(false)}
              style={{
                cursor: 'default',
                color: ahmedabadHovered ? '#F2F2FF' : '#6B7280',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
            >
              Ahmedabad
              {ahmedabadHovered && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '1.2rem',
                    animation: 'float 1s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                >
                  🇮🇳
                </span>
              )}
            </span>
            , India
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              href="/ventures/workcin"
              className="font-mono animated-link"
              style={{ fontSize: '0.68rem', color: '#6B7280', textDecoration: 'none' }}
            >
              Workcin
            </Link>
            <Link
              href="/ventures/nexplacers"
              className="font-mono animated-link"
              style={{ fontSize: '0.68rem', color: '#6B7280', textDecoration: 'none' }}
            >
              Nexplacers
            </Link>
            <Link
              href="/ventures/triver-lab"
              className="font-mono animated-link"
              style={{ fontSize: '0.68rem', color: '#6B7280', textDecoration: 'none' }}
            >
              Triver Lab
            </Link>
            <Link
              href="/ventures/symrex"
              className="font-mono animated-link"
              style={{ fontSize: '0.68rem', color: '#6B7280', textDecoration: 'none' }}
            >
              Symrex
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footer-grid > div:last-child { justify-content: flex-start !important; }
        }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-4px)} }
      `}</style>
    </footer>
  );
}
