// Shared GovGazette brand mark — a scale/gavel glyph in a rounded square.
export function BrandMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  const inner = Math.round(size * 0.55)
  return (
    <div
      className={`bg-ink rounded-[26%] flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={inner} height={inner} viewBox="0 0 20 20" fill="none">
        <path d="M4 16.5L10 3L16 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.4 12.5H14.6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// Classical columns mark used on the auth screens.
export function ColumnsMark({ size = 26, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L21 8H3L12 3Z" />
      <path d="M4 8v9M9 8v9M15 8v9M20 8v9" />
      <path d="M2.5 20h19" />
    </svg>
  )
}

export function Wordmark({ dark = false, size = 'md' }: { dark?: boolean; size?: 'sm' | 'md' }) {
  return (
    <span
      className={`font-display font-bold tracking-tight ${size === 'sm' ? 'text-[15px]' : 'text-lg'} ${dark ? 'text-white' : 'text-ink'}`}
    >
      GovGazette
    </span>
  )
}
