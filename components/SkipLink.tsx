'use client';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        zIndex: -1,
      }}
      onFocus={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.position = 'fixed';
        el.style.left = '1rem';
        el.style.top = '1rem';
        el.style.width = 'auto';
        el.style.height = 'auto';
        el.style.overflow = 'visible';
        el.style.zIndex = '99999';
        el.style.background = '#5B8AF0';
        el.style.color = '#fff';
        el.style.padding = '0.75rem 1.5rem';
        el.style.borderRadius = '8px';
        el.style.fontFamily = "'Space Grotesk', sans-serif";
        el.style.fontWeight = '700';
      }}
      onBlur={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.width = '1px';
        el.style.height = '1px';
        el.style.zIndex = '-1';
      }}
    >
      Skip to main content
    </a>
  );
}
