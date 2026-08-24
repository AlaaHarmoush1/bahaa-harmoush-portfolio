// Minimal inline icon set (stroke-based, matches Instagram's line-icon style).
// Usage: <Icon name="heart" size={18} />

const PATHS = {
  heart: (
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
  ),
  comment: (
    <path d="M12 2C6.48 2 2 6.02 2 11c0 2.61 1.28 4.95 3.32 6.6-.13 1.36-.6 2.87-1.5 4.15 1.7-.14 3.53-.85 4.86-1.78A11.6 11.6 0 0 0 12 20c5.52 0 10-4.02 10-9s-4.48-9-10-9z" />
  ),
  share: (
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  ),
  bookmark: (
    <path d="M6 2h12a1 1 0 0 1 1 1v18l-7-4-7 4V3a1 1 0 0 1 1-1z" />
  ),
  grid: (
    <path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zm12-12h6v6h-6V3zm0 12h6v6h-6v-6z" />
  ),
  reel: (
    <>
      <path d="M2 8.5A2.5 2.5 0 0 1 4.5 6h15A2.5 2.5 0 0 1 22 8.5v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-10z" />
      <path d="m6 6 2.5-3.5M12 6l2.5-3.5M18 6l2.5-3.5" strokeLinecap="round" />
    </>
  ),
  tag: (
    <>
      <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L3.83 9.59A2 2 0 0 0 3.24 11l9.58 9.59a2 2 0 0 0 2.83 0l4.94-4.94a2 2 0 0 0 0-2.24z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  close: (
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
  ),
  chevronLeft: <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  chevronRight: <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />,
  verified: (
    <path d="M12 2 9.6 4.4 6.3 4l-1 3.3L2 9l1.7 3-1.7 3 3.3 1 1 3.3 3.3-.4L12 21l2.4-2.1 3.3.4 1-3.3 3.3-1-1.7-3 1.7-3-3.3-1-1-3.3-3.3.4L12 2z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        strokeLinecap="round"
      />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.9 12.1l-.3.5.9 3.3-3.4-.9-.5.3A8 8 0 1 1 12 4zm-3.1 3.6c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.1 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4z" />
  ),
};

// The reel icon's play-button ticks are stroke-only marks that vanish when
// drawn in the same solid fill color, so it always renders in outline style.
const OUTLINE_ONLY = new Set(["reel"]);

export function Icon({ name, size = 20, filled = false, className }) {
  const path = PATHS[name];
  if (!path) return null;
  const isFilled = filled && !OUTLINE_ONLY.has(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={isFilled ? 1 : 1.8}
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
