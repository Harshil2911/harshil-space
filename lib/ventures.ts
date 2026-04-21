// Shared venture data — no 'use client', safe to import in server and client components

export const VENTURES = [
  {
    id: 'workcin',
    emoji: '🚀',
    name: 'Workcin',
    tagline: 'AI Automation & Workflow Intelligence',
    description:
      'We automate what holds businesses back. Workcin wires AI into the backbone of your operations — from lead workflows to internal systems.',
    stats: [
      { value: '100+', label: 'Workflows Deployed' },
      { value: '40h', label: 'Saved / Client / Mo' },
      { value: '12+', label: 'Industries Served' },
    ],
    tags: ['AI', 'SaaS', 'B2B', 'Automation'],
    colorClass: 'venture-workcin',
    accentColor: '#5B8AF0',
    href: '/ventures/workcin',
    size: 'large',
  },
  {
    id: 'nexplacers',
    emoji: '🏗️',
    name: 'Nexplacers',
    tagline: 'Talent & Placement Intelligence',
    description:
      'A next-generation placement platform connecting top talent with the right opportunities through intelligent matching systems.',
    stats: [
      { value: '500+', label: 'Placements Made' },
      { value: '4.9★', label: 'Avg Rating' },
      { value: '3x', label: 'Faster Hiring' },
    ],
    tags: ['HRTech', 'B2B', 'Platform'],
    colorClass: 'venture-nexplacers',
    accentColor: '#A8FF57',
    href: '/ventures/nexplacers',
    size: 'small',
  },
  {
    id: 'triver-lab',
    emoji: '🔬',
    name: 'Triver Lab',
    tagline: 'Research · Innovation · Execution',
    description:
      'A startup laboratory where ambitious ideas get stress-tested, validated, and turned into market-ready products.',
    stats: [
      { value: '6', label: 'Projects Live' },
      { value: '12', label: 'Experiments Run' },
      { value: '∞', label: 'Ideas Pipeline' },
    ],
    tags: ['R&D', 'Product', 'Lab'],
    colorClass: 'venture-triver',
    accentColor: '#a78bfa',
    href: '/ventures/triver-lab',
    size: 'small',
  },
  {
    id: 'symrex',
    emoji: '🛡️',
    name: 'Symrex',
    tagline: 'Protection Systems for the Digital Age',
    description:
      "Building resilient digital infrastructure and security systems that protect businesses from threats they haven't anticipated yet.",
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '0', label: 'Breaches' },
      { value: '24/7', label: 'Monitoring' },
    ],
    tags: ['Security', 'Infrastructure', 'B2B'],
    colorClass: 'venture-symrex',
    accentColor: '#F06A2B',
    href: '/ventures/symrex',
    size: 'large',
  },
];

export type Venture = (typeof VENTURES)[number];
