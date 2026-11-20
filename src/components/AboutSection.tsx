import {SITE} from '../data/site';
import {MagneticButton} from './MagneticButton';
import {RevealBlock, RevealLine} from './Reveal';
import {MediaFrame} from './RichMedia';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#FBF7F0] py-16 sm:py-24 lg:py-[120px] border-b border-[#1A1816]/12"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[68ch]">
          <RevealBlock>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#1A1816]/12 bg-[#1A1816]">
                <MediaFrame
                  src="/me.jpg"
                  alt={SITE.name}
                  fallbackMark={SITE.initials}
                  markSizeClass="text-[28px]"
                  revealClip={false}
                />
              </div>
              <p className="text-[15px] font-medium text-[#2E2B29]">
                {SITE.city}
              </p>
            </div>
          </RevealBlock>

          <h2 className="mt-7 font-serif text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.0] text-[#1A1816] text-balance">
            <RevealLine>A note from {SITE.name}</RevealLine>
          </h2>

          <RevealBlock delay={0.1}>
            <p className="mt-8 text-[20px] sm:text-[22px] leading-[1.65] text-[#1A1816]">
              {SITE.aboutLetter}
            </p>
          </RevealBlock>

          <RevealBlock delay={0.16}>
            <p className="mt-8 font-script text-[42px] sm:text-[48px] leading-none text-[#1A1816]">
              {SITE.firstName}
            </p>

            <div className="mt-8">
              <MagneticButton
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C97B2E] text-[#1A1816] hover:bg-[#b86d23] px-7 py-4 text-[16px] min-h-[48px]"
              >
                Book a 20 minute call with {SITE.firstName}
              </MagneticButton>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
