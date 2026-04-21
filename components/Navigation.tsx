'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Connect', href: '/connect' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(5,5,8,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(91,138,240,0.1)' : 'none',
        }}
      >
        <div
          className="section-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: '1.2rem',
              color: '#F2F2FF',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#5B8AF0' }}>H</span>
            <span style={{ color: '#F06A2B', fontSize: '0.7em' }}>.</span>
            <span>R</span>
            <span style={{ color: '#F06A2B', fontSize: '0.7em' }}>.</span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="animated-link"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: pathname === link.href ? '#5B8AF0' : '#6B7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/connect" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
              Let&apos;s Talk
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#F2F2FF',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger-btn"
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: menuOpen ? '#5B8AF0' : '#F2F2FF',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#F2F2FF',
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: menuOpen ? '#5B8AF0' : '#F2F2FF',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.4s ease, opacity 0.3s ease',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
        className="mobile-menu"
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '2rem',
              color: pathname === link.href ? '#5B8AF0' : '#F2F2FF',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 0.07}s`,
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/connect" className="btn-primary" style={{ marginTop: '1rem' }}>
          Let&apos;s Talk →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
