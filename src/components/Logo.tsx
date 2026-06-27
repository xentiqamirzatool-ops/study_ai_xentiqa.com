'use client';

import { useState } from 'react';

/**
 * Brand logo. Prefers /logo.png (drop your own image in /public/logo.png);
 * if that's missing or fails to load, falls back to the bundled /logo.svg so
 * the logo is NEVER broken.
 */
export default function Logo({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const [src, setSrc] = useState('/logo.png');

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      onError={() => {
        if (src !== '/logo.svg') setSrc('/logo.svg');
      }}
      alt="StudyAI"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
