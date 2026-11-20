import {motion, useReducedMotion, useScroll, useTransform} from 'motion/react';
import {useEffect, useRef, useState} from 'react';
import {SITE, type WorkItem} from '../data/site';
import {RevealLine} from './Reveal';
import {MediaFrame} from './RichMedia';

function WorkCard({item, className = ''}: {item: WorkItem; className?: string}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[28px] border border-[#1A1816]/12 bg-[#FBF7F0] ${className}`}
    >
      <div className="h-[58%] min-h-[220px] w-full overflow-hidden border-b border-[#1A1816]/12">
        <MediaFrame
          src={item.image}
          alt={item.alt}
          fallbackMark={item.number}
          markSizeClass="text-[100px] sm:text-[136px]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-[15px] font-medium tracking-wide text-[#2E2B29] tabular-nums">
            {item.number}
          </p>
          <h3 className="mt-2 font-serif text-[30px] sm:text-[38px] leading-[1.05] text-[#1A1816]">
            {item.title}
          </h3>
        </div>

        <div className="mt-6 space-y-2.5 text-[16px] sm:text-[18px] leading-[1.55] text-[#2E2B29] max-w-[60ch]">
          <p>
            <strong className="font-semibold text-[#1A1816]">Today: </strong>
            {item.today}
          </p>
          <p>
            <strong className="font-semibold text-[#1A1816]">
              With {SITE.businessName}:{' '}
            </strong>
            {item.withAutomiq}
          </p>
        </div>
      </div>
    </article>
  );
}

export function WhatIDoSection() {
  const shouldReduceMotion = useReducedMotion();
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewWidth = viewportRef.current.clientWidth;
      setMaxShift(Math.max(0, trackWidth - viewWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const {scrollYProgress} = useScroll({
    target: pinContainerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0.04, 0.94], [0, -maxShift]);

  if (shouldReduceMotion) {
    return (
      <section
        id="what-i-do"
        className="bg-[#FBF7F0] py-16 sm:py-24 lg:py-[120px] border-b border-[#1A1816]/12"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] text-[#1A1816]">
            What I do
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {SITE.workItems.map((item) => (
              <WorkCard key={item.number} item={item} className="min-h-[480px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="what-i-do" className="bg-[#FBF7F0] border-b border-[#1A1816]/12">
      {/* Mobile & tablet: sideways swipeable cards */}
      <div className="lg:hidden py-16 sm:py-20 overflow-x-clip">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <h2 className="font-serif text-[44px] sm:text-[54px] leading-[1.0] text-[#1A1816]">
            <RevealLine>What I do</RevealLine>
          </h2>
        </div>

        <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 sm:px-8 pb-4 no-scrollbar">
          {SITE.workItems.map((item) => (
            <WorkCard
              key={item.number}
              item={item}
              className="w-[84vw] max-w-[340px] sm:max-w-[460px] min-h-[470px] shrink-0 snap-center"
            />
          ))}
        </div>
      </div>

      {/* Desktop: pinned section with scroll-driven horizontal slide */}
      <div ref={pinContainerRef} className="hidden lg:block relative h-[280vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16">
          <div className="mx-auto w-full max-w-[1320px] px-12">
            <h2 className="font-serif text-[72px] leading-[1.0] text-[#1A1816]">
              What I do
            </h2>
          </div>

          <div
            ref={viewportRef}
            className="mt-10 mx-auto w-full max-w-[1320px] px-12 overflow-visible"
          >
            <motion.div ref={trackRef} style={{x}} className="flex gap-8 w-max">
              {SITE.workItems.map((item) => (
                <WorkCard
                  key={item.number}
                  item={item}
                  className="w-[68vw] max-w-[880px] h-[62vh] min-h-[460px] max-h-[580px] shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
