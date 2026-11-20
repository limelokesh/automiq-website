import {motion, useMotionValue, useReducedMotion, useSpring} from 'motion/react';
import {type ReactNode, useRef} from 'react';

interface MagneticButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  href,
  target,
  rel,
  onClick,
  children,
  className = '',
  ariaLabel,
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, {stiffness: 260, damping: 20, mass: 0.4});
  const y = useSpring(rawY, {stiffness: 260, damping: 20, mass: 0.4});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.16;
    const offsetY = (e.clientY - centerY) * 0.16;
    rawX.set(Math.max(-8, Math.min(8, offsetX)));
    rawY.set(Math.max(-6, Math.min(6, offsetY)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-sans font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B2E] cursor-pointer';

  const motionProps = shouldReduceMotion
    ? {}
    : {
        style: {x, y},
        whileTap: {scale: 0.97},
        transition: {duration: 0.15, ease: [0.16, 1, 0.3, 1] as const},
      };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      {...motionProps}
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={`${baseClasses} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${baseClasses} ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}
