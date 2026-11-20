import {SITE} from '../data/site';
import {FilmGrain} from './FilmGrain';
import {BrandLogo} from './RichMedia';

export function Footer() {
  return (
    <footer
      data-ink-section="true"
      className="relative bg-[#1A1816] text-[#FBF7F0] border-t border-[#FBF7F0]/12 pt-12 pb-24 md:pb-12 overflow-hidden"
    >
      <FilmGrain />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex items-center gap-5">
            <BrandLogo onInk />
            <span className="text-[15px] text-[#FBF7F0]/80">{SITE.city}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBF7F0] hover:underline underline-offset-4 decoration-[#C97B2E]"
            >
              Book a 20 minute call
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[#FBF7F0]/85 hover:text-[#FBF7F0] hover:underline underline-offset-4 decoration-[#C97B2E]"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#FBF7F0]/12 pt-6 text-[14px] text-[#FBF7F0]/65">
          {SITE.year} {SITE.businessName}
        </div>
      </div>
    </footer>
  );
}
