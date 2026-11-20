import {useState} from 'react';
import {FilmGrain} from './FilmGrain';
import {ClipImageReveal} from './Reveal';

interface BrandLogoProps {
  onInk?: boolean;
  className?: string;
}

export function BrandLogo({onInk = false, className = ''}: BrandLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const content = !imgFailed ? (
    <img
      src="/logo.png"
      alt="Automiq"
      onError={() => setImgFailed(true)}
      className="h-7 w-auto object-contain block"
    />
  ) : (
    <span className="inline-flex items-center gap-2 font-serif text-[26px] leading-none tracking-tight whitespace-nowrap shrink-0">
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 rounded-full bg-[#C97B2E]"
      />
      <span>Automiq</span>
    </span>
  );

  if (onInk) {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-[#FBF7F0] px-3 py-1.5 text-[#1A1816] ${className}`}
      >
        {content}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{content}</span>;
}

interface MediaFrameProps {
  src: string;
  alt: string;
  fallbackMark: string;
  className?: string;
  markSizeClass?: string;
  revealClip?: boolean;
}

export function MediaFrame({
  src,
  alt,
  fallbackMark,
  className = '',
  markSizeClass = 'text-[110px] sm:text-[148px]',
  revealClip = true,
}: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  const inner = (
    <div className={`relative h-full w-full overflow-hidden bg-[#1A1816] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover block"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full items-center justify-center overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, #1A1816 12%, #2E2B29 52%, #C97B2E 115%)',
          }}
        >
          <FilmGrain />
          <span
            aria-hidden="true"
            className={`font-serif italic select-none leading-none outline-serif ${markSizeClass}`}
          >
            {fallbackMark}
          </span>
        </div>
      )}
    </div>
  );

  if (!revealClip) {
    return inner;
  }

  return <ClipImageReveal className="h-full w-full">{inner}</ClipImageReveal>;
}
