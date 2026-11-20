import {useId} from 'react';

interface FilmGrainProps {
  className?: string;
}

export function FilmGrain({className = ''}: FilmGrainProps) {
  const filterId = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay ${className}`}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.82"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
