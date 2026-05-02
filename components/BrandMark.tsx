type BrandMarkProps = {
  size?: number;
  className?: string;
};

export function BrandMark({ size = 28, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={(size * 22) / 28}
      viewBox="0 0 28 22"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="4" cy="19" r="3" fill="currentColor" />
      <circle cx="14" cy="3" r="3" fill="currentColor" />
      <circle cx="24" cy="19" r="3" fill="currentColor" />
      <line x1="6.5" y1="16.8" x2="11.5" y2="5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="16.5" y1="5.8" x2="21.5" y2="16.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="7" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
