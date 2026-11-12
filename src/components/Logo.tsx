import React from 'react';
import { IslamicLogo } from './IslamicLogo';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold' | 'white';
  showText?: boolean;
  className?: string;
  isFooter?: boolean;
  tagline?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark',
  showText = true,
  className = '',
  isFooter = false,
  tagline = 'Online Quran Academy',
}) => {
  const isLight = variant === 'light' || variant === 'white';
  const isGold = variant === 'gold';

  // Responsive emblem sizes
  const iconSizeMap = {
    sm: 'w-7 h-8',
    md: 'w-9 h-10 sm:w-11 sm:h-12',
    lg: 'w-12 h-14 sm:w-14 sm:h-16',
    xl: 'w-16 h-20',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none text-left ${className}`}>
      {/* Golden Quran & Dome Emblem */}
      <div className={`relative ${iconSizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <IslamicLogo
          className="w-full h-full drop-shadow-sm"
          color={isLight ? '#FFFFFF' : '#FCB205'}
        />
      </div>

      {/* Typography:
          Line 1: Quran Education
          Line 2: Online Quran Academy
      */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif font-extrabold tracking-wide leading-tight ${
              isFooter
                ? 'text-base sm:text-lg font-sans font-bold tracking-wide text-white'
                : size === 'sm'
                ? 'text-sm text-[#072C1E]'
                : size === 'lg'
                ? 'text-xl sm:text-2xl text-[#072C1E]'
                : size === 'xl'
                ? 'text-2xl sm:text-3xl text-[#072C1E]'
                : 'text-base sm:text-lg md:text-[19px] text-[#072C1E]'
            } ${isLight ? '!text-white' : ''} ${isGold ? '!text-[#072C1E]' : ''}`}
          >
            <span className={isLight ? 'text-white' : 'text-[#072C1E]'}>Quran </span>
            <span className={isLight ? 'text-[#FCB205]' : 'text-[#FCB205]'}>Education</span>
          </span>

          <span
            className={`tracking-wider uppercase font-semibold leading-tight ${
              isFooter
                ? 'text-xs text-[#FCB205] mt-0.5 tracking-wider font-serif'
                : 'text-xs sm:text-[13px] text-[#0A3826] mt-0.5'
            } ${isLight ? '!text-emerald-100' : ''}`}
          >
            {tagline}
          </span>
        </div>
      )}
    </div>
  );
};
