/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-void': '#050508',
        'bg-surface': '#0D0D14',
        'electric': '#5B8AF0',
        'ember': '#F06A2B',
        'lime-accent': '#A8FF57',
        'text-primary': '#F2F2FF',
        'text-muted': '#6B7280',
        'glass-border': 'rgba(91,138,240,0.2)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        label: ['Syne', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'dot-travel': 'dotTravel 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91,138,240,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(91,138,240,0.8), 0 0 80px rgba(91,138,240,0.2)' },
        },
        orbit: {
          '0%': { transform: 'rotateX(70deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(70deg) rotateZ(360deg)' },
        },
        dotTravel: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
      backgroundImage: {
        'radial-electric': 'radial-gradient(ellipse at center, rgba(91,138,240,0.15) 0%, transparent 70%)',
        'radial-ember': 'radial-gradient(ellipse at center, rgba(240,106,43,0.15) 0%, transparent 70%)',
        'glass': 'linear-gradient(135deg, rgba(13,13,20,0.8) 0%, rgba(5,5,8,0.6) 100%)',
      },
    },
  },
  plugins: [],
};
