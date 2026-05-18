
'use client';

import { useState, useEffect } from 'react';

const WORDS = [ 'Collaboration','Communication','Creativity'];

export default function HeroHeading() {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];
    let timeout;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 140);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 140);
      } else {
        // move to next word, loop back to 0
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setDeleting(false);
        timeout = setTimeout(() => {}, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <h1 className="text-2xl md:text-[56px] font-bold leading-[110%] text-[#0f172a] text-center">
      Unlock Seamless{' '}

      <span className="inline-flex items-center text-[#1e719b]">
        <span>{displayed}</span>
        <span className="inline-block w-0.75 lg:w-[7px] h-9.5 lg:h-[71px] bg-[#1e719b] ml-1 rounded-sm animate-blink" />
      </span>

      {' '}with SynergyCloud:{' '}
      <br />
      Where Teams Connect and Ideas Flourish!
    </h1>
  );
}