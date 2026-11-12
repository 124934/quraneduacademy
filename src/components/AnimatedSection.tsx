import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Exact ease-in-out-sine easing curve matching learnquraan.co.uk (AOS.init({easing: "ease-in-out-sine"}))
const EASING_LEARNQURAN = [0.445, 0.05, 0.55, 0.95] as const;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleUp';
  animation?: 'fadeUp' | 'fadeIn' | 'scaleUp';
  tag?: 'section' | 'div';
  id?: string;
  once?: boolean;
  disableMobileAnimation?: boolean;
  disableAnimation?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  variant,
  animation,
  tag = 'section',
  id,
  once = true,
  disableAnimation = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const activeVariant = animation || variant || 'fadeUp';
  const isDisabled = disableAnimation || shouldReduceMotion;

  const getVariants = () => {
    if (isDisabled) {
      return {
        hidden: { opacity: 1, y: 0, scale: 1 },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
    }

    switch (activeVariant) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'scaleUp':
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fadeUp':
      default:
        return {
          hidden: { opacity: 0, y: 26 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const Component = tag === 'section' ? motion.section : motion.div;

  return (
    <Component
      id={id}
      initial={isDisabled ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once, amount: 0.08, margin: '0px 0px -30px 0px' }}
      variants={getVariants()}
      transition={{
        duration: isDisabled ? 0 : 0.55,
        delay: isDisabled ? 0 : delay,
        ease: EASING_LEARNQURAN,
      }}
      className={className.trim()}
    >
      {children}
    </Component>
  );
};

export interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  once?: boolean;
  animation?: 'fadeUp' | 'fadeIn' | 'scale' | 'slideUp';
  disableMobileAnimation?: boolean;
  disableAnimation?: boolean;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
  delay,
  index,
  once = true,
  animation = 'fadeUp',
  disableAnimation = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isDisabled = disableAnimation || shouldReduceMotion;
  const computedDelay =
    delay !== undefined ? delay : index !== undefined ? Math.min(index * 0.06, 0.3) : 0;

  const getInitial = () => {
    if (isDisabled) return { opacity: 1, y: 0, scale: 1 };
    switch (animation) {
      case 'fadeIn':
        return { opacity: 0 };
      case 'scale':
        return { opacity: 0, scale: 0.95 };
      case 'slideUp':
      case 'fadeUp':
      default:
        return { opacity: 0, y: 22 };
    }
  };

  const getAnimate = () => {
    if (isDisabled) return { opacity: 1, y: 0, scale: 1 };
    switch (animation) {
      case 'fadeIn':
        return { opacity: 1 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'slideUp':
      case 'fadeUp':
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount: 0.08, margin: '0px 0px -20px 0px' }}
      transition={{
        duration: isDisabled ? 0 : 0.48,
        delay: isDisabled ? 0 : computedDelay,
        ease: EASING_LEARNQURAN,
      }}
      className={className.trim()}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  once?: boolean;
}> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const yOffset = direction === 'up' ? 18 : direction === 'down' ? -18 : 0;
  const Component = (motion as unknown as Record<string, React.ElementType>)[as] || motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.08, margin: '0px 0px -20px 0px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: EASING_LEARNQURAN,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const AnimatedWords: React.FC<{
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  once?: boolean;
}> = ({ text, className = '', wordClassName = '', delay = 0, once = true }) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.08, margin: '0px 0px -20px 0px' }}
      transition={{ staggerChildren: 0.02, delayChildren: delay }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: EASING_LEARNQURAN },
            },
          }}
          className={`inline-block mr-[0.28em] last:mr-0 ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
