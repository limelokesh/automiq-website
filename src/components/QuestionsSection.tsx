import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {Plus} from 'lucide-react';
import {useId, useState} from 'react';
import {SITE} from '../data/site';
import {MarkedPlaceholder} from './MarkedPlaceholder';
import {RevealLine} from './Reveal';

export function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="questions"
      className="bg-[#FBF7F0] py-16 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] text-[#1A1816]">
              <RevealLine>Questions</RevealLine>
            </h2>
          </div>

          <div className="lg:col-span-8 border-t border-[#1A1816]/12">
            {SITE.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const triggerId = `${baseId}-trigger-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#1A1816]/12"
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B2E]"
                    >
                      <span className="font-serif text-[25px] sm:text-[28px] leading-[1.2] text-[#1A1816]">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-[#1A1816] transition-transform duration-200"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                      >
                        <Plus className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {opacity: 0, y: -6, clipPath: 'inset(0 0 100% 0)'}
                        }
                        animate={{opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)'}}
                        exit={
                          shouldReduceMotion
                            ? {opacity: 0}
                            : {opacity: 0, y: -4, clipPath: 'inset(0 0 100% 0)'}
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.28,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <p className="pb-7 text-[18px] leading-[1.6] text-[#2E2B29] max-w-[64ch]">
                          {faq.hasWhoPlaceholder ? (
                            <>
                              It is built for{' '}
                              <MarkedPlaceholder label="who you help" /> in{' '}
                              {SITE.city} who want each booking request caught,
                              the day&apos;s list kept in one place, and
                              reminders sent on time.
                            </>
                          ) : (
                            faq.answer
                          )}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
