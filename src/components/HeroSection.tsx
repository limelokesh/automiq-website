import {motion, useReducedMotion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import {SITE} from '../data/site';
import {MagneticButton} from './MagneticButton';
import {MarkedPlaceholder} from './MarkedPlaceholder';
import {RevealBlock, RevealLine} from './Reveal';
import {MediaFrame} from './RichMedia';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const archY = useTransform(scrollYProgress, [0, 1], [0, 56]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-[#FBF7F0] pt-24 pb-16 sm:pt-28 lg:pt-36 lg:pb-[120px] overflow-x-clip"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Right on desktop, top on phone: Arch Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div
              style={shouldReduceMotion ? undefined : {y: archY}}
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-none border border-[#1A1816]/12 bg-[#1A1816]">
                <MediaFrame
                  src="/me.jpg"
                  alt={`${SITE.name}, founder of ${SITE.businessName}`}
                  fallbackMark={SITE.initials}
                  markSizeClass="text-[112px] sm:text-[144px]"
                />
              </div>

              <div className="mt-3 sm:mt-0 sm:absolute sm:bottom-5 sm:-left-6 max-w-[280px] rounded-[20px] border border-[#1A1816]/12 bg-[#FBF7F0] px-4 py-3 text-[14px] leading-snug text-[#1A1816]">
                <p className="font-medium">
                  {SITE.name}, founder of {SITE.businessName}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Left on desktop, below arch on phone: Promise & CTA */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <RevealBlock>
              <p className="mb-5 text-[16px] sm:text-[18px] text-[#2E2B29]">
                For <MarkedPlaceholder label="who you help" /> in {SITE.city}
              </p>
            </RevealBlock>

            <h1 className="font-serif text-[44px] sm:text-[62px] lg:text-[78px] xl:text-[86px] leading-[1.0] tracking-[-0.02em] text-[#1A1816] text-balance">
              <RevealLine>
                {SITE.promise.beforeAccent}
                <em className="italic font-normal text-[#C97B2E]">
                  {SITE.promise.accentWord}
                </em>
              </RevealLine>
              <RevealLine delay={0.08}>{SITE.promise.afterAccent.trim()}</RevealLine>
            </h1>

            <RevealBlock delay={0.16}>
              <p className="mt-6 max-w-[54ch] text-[18px] leading-[1.6] text-[#2E2B29]">
                {SITE.whatISetUpLine}
              </p>
            </RevealBlock>

            <RevealBlock delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <MagneticButton
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C97B2E] text-[#1A1816] hover:bg-[#b86d23] px-7 py-4 text-[16px] min-h-[48px]"
                >
                  Book a 20 minute call
                </MagneticButton>

                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[16px] font-medium text-[#1A1816] underline decoration-[#1A1816]/25 underline-offset-4 hover:decoration-[#1A1816] transition-colors py-2"
                >
                  {SITE.email}
                </a>
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
