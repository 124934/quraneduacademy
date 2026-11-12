import React from 'react';
import { ISLAMIC_BG_PATTERN } from '../assets/bgPattern';

interface IslamicPatternProps {
  variant?: 'light' | 'dark' | 'subtle';
  opacity?: number;
  patternType?: 'star8' | 'girih' | 'arabesque';
  className?: string;
  size?: number;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({
  variant = 'light',
  opacity,
  className = '',
  size,
}) => {
  // Pattern sizing responsive to mobile vs desktop
  const backgroundSize = size
    ? `${size}px auto`
    : variant === 'dark'
    ? '280px auto'
    : '320px auto';

  if (variant === 'dark') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
        style={{
          opacity: opacity !== undefined ? opacity : 0.14,
          backgroundImage: `url("${ISLAMIC_BG_PATTERN}")`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          backgroundSize,
          filter: 'invert(1) brightness(1.7) contrast(1.1)',
        }}
        aria-hidden="true"
      />
    );
  }

  // Light and subtle variants - render clean, prominent, and sharp
  const defaultOpacity = variant === 'subtle' ? 0.3 : 0.45;
  const appliedOpacity = opacity !== undefined ? opacity : defaultOpacity;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        opacity: appliedOpacity,
        backgroundImage: `url("${ISLAMIC_BG_PATTERN}")`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top center',
        backgroundSize,
      }}
      aria-hidden="true"
    />
  );
};
