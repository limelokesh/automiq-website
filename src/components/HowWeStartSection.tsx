import {motion, useReducedMotion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import {SITE} from '../data/site';
import {MarkedPlaceholder} from './MarkedPlaceholder';
import {RevealBlock, RevealLine} from './Reveal';

export function HowWeStartSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const {scrollYProgress} = useScroll({
    target: listRef,
    offset: ['start 0.72', 'end 0.75'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="how-we-start"
      className="bg-[#FBF7F0] py-16 sm:py-24 lg:py-[120px] border-b border-[#1A1816]/12"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] text-[#1A1816] text-balance">
              <RevealLine>How we start</RevealLine>
            </h2>
          </div>

          <div ref={listRef} className="lg:col-span-8 relative pl-8 sm:pl-12">
            {/* Background hairline track */}
            <div
              aria-hidden="true"
              className="absolute left-2 sm:left-3 top-2 bottom-2 w-[2px] bg-[#1A1816]/12"
            />
            {/* Accent line filling on scroll */}
            <motion.div
              aria-hidden="true"
              style={
                shouldReduceMotion
                  ? {scaleY: 1, originY: 0}
                  : {scaleY: lineScaleY, originY: 0}
              }
              className="absolute left-2 sm:left-3 top-2 bottom-2 w-[2px] bg-[#C97B2E] will-change-transform"
            />

            <ol className="space-y-12 sm:space-y-16">
              {SITE.steps.map((step, index) => (
                <li key={step.number} className="relative">
                  {/* Small mark on line */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] sm:-left-[41px] top-2.5 h-3 w-3 rounded-full border-2 border-[#C97B2E] bg-[#FBF7F0]"
                  />

                  <RevealBlock delay={index * 0.06}>
                    <p className="text-[14px] font-medium tracking-wide text-[#2E2B29] tabular-nums">
                      {step.number}
                    </p>

                    <h3 className="mt-2 font-serif text-[30px] sm:text-[40px] leading-[1.08] text-[#1A1816]">
                      {step.title}
                      {step.hasKindPlaceholder && (
                        <MarkedPlaceholder label="kind of business" />
                      )}
                    </h3>

                    <p className="mt-3 text-[18px] leading-[1.6] text-[#2E2B29] max-w-[60ch]">
                      {step.detail}
                    </p>

                    {index === SITE.steps.length - 1 && (
                      <div className="mt-6 inline-block rounded-[20px] border border-[#1A1816]/12 bg-[#FBF7F0] px-6 py-4">
                        <p className="text-[18px] font-semibold text-[#1A1816] tabular-nums">
                          {SITE.price}
                        </p>
                      </div>
                    )}
                  </RevealBlock>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
