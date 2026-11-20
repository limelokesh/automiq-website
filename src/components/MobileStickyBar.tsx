import {motion, useReducedMotion} from 'motion/react';
import {useEffect, useState} from 'react';
import {SITE} from '../data/site';

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {threshold: 0.05}
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : {y: 72, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1]}}
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#FBF7F0] border-t border-[#1A1816]/12 px-5 py-2.5"
    >
      <a
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-full items-center justify-center rounded-full bg-[#C97B2E] text-[15px] font-medium text-[#1A1816] active:scale-[0.98] transition-transform"
      >
        Book a 20 minute call
      </a>
    </motion.div>
  );
}
