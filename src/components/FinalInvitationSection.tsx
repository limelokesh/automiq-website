import {SITE} from '../data/site';
import {FilmGrain} from './FilmGrain';
import {MagneticButton} from './MagneticButton';
import {RevealBlock, RevealLine} from './Reveal';

export function FinalInvitationSection() {
  return (
    <section
      id="invitation"
      data-ink-section="true"
      className="relative bg-[#1A1816] text-[#FBF7F0] py-20 sm:py-28 lg:py-[140px] overflow-hidden"
    >
      <FilmGrain />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-[20ch]">
          <h2 className="font-serif text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.02em] text-balance">
            <RevealLine>Let&apos;s give your evenings back</RevealLine>
          </h2>
        </div>

        <RevealBlock delay={0.12}>
          <div className="mt-10 flex flex-col items-start gap-5">
            <MagneticButton
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C97B2E] text-[#1A1816] hover:bg-[#d88939] px-8 py-4 text-[16px] min-h-[50px]"
            >
              Book a 20 minute call
            </MagneticButton>

            <a
              href={`mailto:${SITE.email}`}
              className="text-[16px] text-[#FBF7F0]/85 underline decoration-[#FBF7F0]/30 underline-offset-4 hover:text-[#FBF7F0] hover:decoration-[#FBF7F0] transition-colors py-1"
            >
              {SITE.email}
            </a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
