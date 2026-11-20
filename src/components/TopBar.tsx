import {useEffect, useState} from 'react';
import {SITE} from '../data/site';
import {MagneticButton} from './MagneticButton';
import {BrandLogo} from './RichMedia';

type BarSurface = 'transparent' | 'cream' | 'ink';

export function TopBar() {
  const [surface, setSurface] = useState<BarSurface>('transparent');

  useEffect(() => {
    let rafId = 0;

    const updateSurface = () => {
      const probeY = 36;
      const inkSections = document.querySelectorAll<HTMLElement>('[data-ink-section="true"]');
      let overInk = false;

      inkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          overInk = true;
        }
      });

      if (overInk) {
        setSurface('ink');
      } else if (window.scrollY > 24) {
        setSurface('cream');
      } else {
        setSurface('transparent');
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateSurface);
    };

    updateSurface();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll, {passive: true});

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const surfaceClasses =
    surface === 'ink'
      ? 'bg-[#1A1816] text-[#FBF7F0] border-b border-[#FBF7F0]/12'
      : surface === 'cream'
        ? 'bg-[#FBF7F0] text-[#1A1816] border-b border-[#1A1816]/12'
        : 'bg-transparent text-[#1A1816] border-b border-transparent';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${surfaceClasses}`}
    >
      <div className="mx-auto flex h-16 lg:h-[74px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          aria-label={SITE.businessName}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97B2E] rounded-lg"
        >
          <BrandLogo onInk={surface === 'ink'} />
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-[15px] font-medium"
        >
          <a
            href="#what-i-do"
            className="whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C97B2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97B2E]"
          >
            What I do
          </a>
          <a
            href="#how-we-start"
            className="whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C97B2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97B2E]"
          >
            How it works
          </a>
          <a
            href="#about"
            className="whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#C97B2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97B2E]"
          >
            About
          </a>
        </nav>

        <div className="shrink-0">
          <MagneticButton
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C97B2E] text-[#1A1816] hover:bg-[#b86d23] px-5 py-2.5 text-[14px] min-h-[40px]"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
