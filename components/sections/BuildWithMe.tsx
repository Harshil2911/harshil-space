'use client';
import { useState, FormEvent, useEffect } from 'react';
import AnimateIn from '@/components/AnimateIn';

const BUDGET_OPTIONS = [
  'Under ₹50,000',
  '₹50K – ₹2L',
  '₹2L – ₹10L',
  '₹10L – ₹50L',
  '₹50L+',
  "Let's discuss",
];

// Load Cal.id embed script
function useCalEmbed() {
  useEffect(() => {
    if ((window as any).Cal) return; // already loaded

    const script = document.createElement('script');
    script.src = 'https://cal.id/embed-link/embed.js';
    script.async = true;
    script.onload = () => {
      const Cal = (window as any).Cal;
      if (!Cal) return;
      Cal('init', 'default', { origin: 'https://cal.id' });
      Cal.ns['default']('inline', {
        elementOrSelector: '#my-cal-inline',
        config: { layout: 'month_view' },
        calLink: 'nexplacers/harshil-pr',
      });
      Cal.ns['default']('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#007ee5' },
          dark: { 'cal-brand': '#5B8AF0' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };
    document.head.appendChild(script);
  }, []);
}

export default function BuildWithMe() {
  useCalEmbed();

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showCal, setShowCal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'contact_form_submit' });
    }

    try {
      const res = await fetch('https://formspree.io/f/xaqlpyjq', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', company: '', message: '', budget: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleOpenCal = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'calendly_open' });
    }
    setShowCal((prev) => !prev);
  };

  return (
    <section
      id="connect"
      className="section-pad"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Dramatic radial gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 20% 50%, rgba(91,138,240,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(240,106,43,0.1) 0%, transparent 55%),
            radial-gradient(ellipse 40% 80% at 50% 0%, rgba(91,138,240,0.06) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(91,138,240,0.4), rgba(240,106,43,0.4), transparent)',
        }}
      />

      <div className="section-container">
        <AnimateIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Get in Touch
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#F2F2FF',
              marginTop: '0.5rem',
              lineHeight: 1.05,
            }}
          >
            Have a Problem
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #F06A2B, #5B8AF0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Worth Solving?
            </span>
          </h2>
          <p
            style={{
              color: '#6B7280',
              fontSize: '1.05rem',
              marginTop: '1rem',
              maxWidth: '520px',
              margin: '1rem auto 0',
            }}
          >
            Whether you need AI automation, a co-founder, or just a bold conversation — let&apos;s
            talk.
          </p>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="connect-grid"
        >
          {/* ── Contact form ────────────────────────────────────── */}
          <AnimateIn from="left">
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F2F2FF', marginBottom: '0.75rem' }}
                  >
                    Message Received!
                  </div>
                  <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                    Harshil will respond within 24 hours. Looking forward to building something great
                    together.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.68rem',
                          color: '#6B7280',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '0.4rem',
                        }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.68rem',
                          color: '#6B7280',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '0.4rem',
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input"
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem',
                        color: '#6B7280',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Company / Project
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="What are you building?"
                      className="form-input"
                      id="contact-company"
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem',
                        color: '#6B7280',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                      }}
                    >
                      What are you building? *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about the problem you're solving, where you're stuck, or what you'd like to explore together..."
                      rows={4}
                      className="form-input"
                      id="contact-message"
                      style={{ resize: 'vertical', minHeight: '100px' }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.68rem',
                        color: '#6B7280',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Budget Range (optional)
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input"
                      id="contact-budget"
                    >
                      <option value="">Select a range...</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option
                          key={o}
                          value={o}
                          style={{ background: '#0D0D14', color: '#F2F2FF' }}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-ember"
                    id="contact-submit"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send It →'}
                  </button>

                  {status === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'center' }}>
                      Something went wrong. Try emailing directly:{' '}
                      <a href="mailto:hello@harshilraval.com" style={{ color: '#5B8AF0' }}>
                        hello@harshilraval.com
                      </a>
                    </p>
                  )}
                </form>
              )}
            </div>
          </AnimateIn>

          {/* ── Right column ────────────────────────────────────── */}
          <AnimateIn from="right" delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Cal.id booking card */}
              <div
                className="glass-card"
                style={{ padding: '2rem', border: '1px solid rgba(91,138,240,0.2)', overflow: 'hidden' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                <div
                  className="font-display"
                  style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F2F2FF', marginBottom: '0.4rem' }}
                >
                  Prefer a call?
                </div>
                <p
                  style={{ color: '#6B7280', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.6 }}
                >
                  Book a free 30-minute strategy session directly on Harshil&apos;s calendar.
                </p>

                <button
                  onClick={handleOpenCal}
                  className="btn-primary"
                  id="calendly-btn"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: showCal ? '1.25rem' : 0 }}
                >
                  {showCal ? '✕ Close Calendar' : '📅 Book a 30-Min Call'}
                </button>

                {/* Inline Cal.id embed — shown on toggle */}
                <div
                  id="my-cal-inline"
                  style={{
                    width: '100%',
                    height: showCal ? '520px' : '0',
                    overflow: 'hidden',
                    transition: 'height 0.4s ease',
                    borderRadius: '12px',
                  }}
                />
              </div>

              {/* Direct contact */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    color: '#6B7280',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  Direct Contact
                </div>
                <a
                  href="mailto:hello@harshilraval.com"
                  style={{
                    color: '#5B8AF0',
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  className="animated-link"
                >
                  📧 hello@harshilraval.com
                </a>
              </div>

              {/* Social links */}
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    color: '#6B7280',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  Find Me Online
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { label: 'LinkedIn', url: 'https://linkedin.com/in/harshilravalll', icon: '💼' },
                    {
                      label: 'Instagram (Business)',
                      url: 'https://instagram.com/harshilravalll',
                      icon: '📸',
                    },
                    {
                      label: 'Instagram (Personal)',
                      url: 'https://instagram.com/hrshil.30',
                      icon: '🌟',
                    },
                    { label: 'Facebook', url: 'https://facebook.com/harshilravalll', icon: '🌐' },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).dataLayer) {
                          (window as any).dataLayer.push({
                            event: 'social_follow_click',
                            platform: link.label,
                          });
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        color: '#6B7280',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        transition: 'color 0.2s ease',
                        padding: '0.25rem 0',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#5B8AF0';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280';
                      }}
                    >
                      <span>{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connect-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
