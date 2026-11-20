import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import {useRef} from 'react';
import {SITE} from '../data/site';
import {FilmGrain} from './FilmGrain';

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function ScrollWord({word, progress, range}: WordProps) {
  const opacity = useTransform(progress, range, [0.24, 1]);

  return (
    <motion.span style={{opacity}} className="inline-block mr-[0.26em]">
      {word}
    </motion.span>
  );
}

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start 0.78', 'end 0.45'],
  });

  const words = SITE.problemSentence.split(' ');

  return (
    <section
      id="problem"
      ref={sectionRef}
      data-ink-section="true"
      className="relative bg-[#1A1816] text-[#FBF7F0] py-20 sm:py-28 lg:py-[144px] overflow-hidden"
    >
      <FilmGrain />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="max-w-[24ch] font-serif text-[36px] sm:text-[54px] lg:text-[72px] leading-[1.06] tracking-[-0.015em]">
          {shouldReduceMotion
            ? SITE.problemSentence
            : words.map((word, index) => {
                const start = index / words.length;
                const end = Math.min(1, start + 1.8 / words.length);
                return (
                  <ScrollWord
                    key={`${word}-${index}`}
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
        </p>
      </div>
    </section>
  );
}
