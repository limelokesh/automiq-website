import {motion, useReducedMotion} from 'motion/react';
import {type ReactNode} from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealLine({children, delay = 0, className = ''}: RevealLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={`block ${className}`}>{children}</span>;
  }

  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{y: '105%', opacity: 0}}
        whileInView={{y: '0%', opacity: 1}}
        viewport={{once: true, amount: 0.25}}
        transition={{duration: 0.72, delay, ease: EASE}}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface RevealBlockProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealBlock({children, delay = 0, className = ''}: RevealBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.65, delay, ease: EASE}}
    >
      {children}
    </motion.div>
  );
}

interface ClipImageRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ClipImageReveal({
  children,
  delay = 0,
  className = '',
}: ClipImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{clipPath: 'inset(100% 0% 0% 0%)', opacity: 0.85}}
      whileInView={{clipPath: 'inset(0% 0% 0% 0%)', opacity: 1}}
      viewport={{once: true, amount: 0.15}}
      transition={{duration: 0.85, delay, ease: EASE}}
    >
      {children}
    </motion.div>
  );
}
