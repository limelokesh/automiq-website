import {motion, useReducedMotion} from 'motion/react';
import {useState} from 'react';
import {SITE} from '../data/site';
import {RevealBlock, RevealLine} from './Reveal';

type Mode = 'without' | 'with';

export function BeforeAfterSection() {
  const [mode, setMode] = useState<Mode>('without');
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0 : 0.32;

  return (
    <section className="bg-[#FBF7F0] py-16 sm:py-24 lg:py-[120px] border-b border-[#1A1816]/12">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] text-[#1A1816] text-balance">
            <RevealLine>Your evening, compared</RevealLine>
          </h2>

          <RevealBlock>
            <div
              role="group"
              aria-label="Compare your evening"
              className="inline-flex rounded-full border border-[#1A1816]/12 bg-[#FBF7F0] p-1.5"
            >
              <button
                type="button"
                aria-pressed={mode === 'without'}
                onClick={() => setMode('without')}
                className={`rounded-full px-5 py-2.5 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B2E] ${
                  mode === 'without'
                    ? 'bg-[#1A1816] text-[#FBF7F0]'
                    : 'text-[#2E2B29] hover:text-[#1A1816]'
                }`}
              >
                Without {SITE.businessName}
              </button>
              <button
                type="button"
                aria-pressed={mode === 'with'}
                onClick={() => setMode('with')}
                className={`rounded-full px-5 py-2.5 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B2E] ${
                  mode === 'with'
                    ? 'bg-[#C97B2E] text-[#1A1816]'
                    : 'text-[#2E2B29] hover:text-[#1A1816]'
                }`}
              >
                With {SITE.businessName}
              </button>
            </div>
          </RevealBlock>
        </div>

        <div className="mt-12 grid grid-cols-1 grid-rows-1 rounded-[28px] border border-[#1A1816]/12 bg-[#FBF7F0] p-6 sm:p-10 lg:p-12">
          <motion.ul
            aria-hidden={mode !== 'without'}
            animate={{opacity: mode === 'without' ? 1 : 0}}
            transition={{duration, ease: [0.16, 1, 0.3, 1]}}
            className={`col-start-1 row-start-1 divide-y divide-[#1A1816]/12 ${
              mode !== 'without' ? 'pointer-events-none select-none' : ''
            }`}
          >
            {SITE.beforeAfter.without.map((line, index) => (
              <li
                key={`without-${index}`}
                className="py-5 first:pt-0 last:pb-0 flex items-baseline gap-5"
              >
                <span className="font-serif text-[26px] leading-none text-[#2E2B29] tabular-nums shrink-0">
                  0{index + 1}
                </span>
                <p className="text-[18px] leading-[1.6] text-[#1A1816] max-w-[64ch]">
                  {line}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.ul
            aria-hidden={mode !== 'with'}
            animate={{opacity: mode === 'with' ? 1 : 0}}
            transition={{duration, ease: [0.16, 1, 0.3, 1]}}
            className={`col-start-1 row-start-1 divide-y divide-[#1A1816]/12 ${
              mode !== 'with' ? 'pointer-events-none select-none' : ''
            }`}
          >
            {SITE.beforeAfter.with.map((line, index) => (
              <li
                key={`with-${index}`}
                className="py-5 first:pt-0 last:pb-0 flex items-baseline gap-5"
              >
                <span className="font-serif text-[26px] leading-none text-[#1A1816] tabular-nums shrink-0">
                  0{index + 1}
                </span>
                <p className="text-[18px] leading-[1.6] text-[#1A1816] max-w-[64ch]">
                  {line}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
