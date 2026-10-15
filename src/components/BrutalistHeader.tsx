import React, { useState } from 'react';
import { isSoundEnabled, setSoundEnabled, playTactileClick } from '../utils/audio';

export const BrutalistHeader: React.FC = () => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playTactileClick();
  };

  return (
    <header className="border-b border-brutal-border bg-brutal-bg text-[11px] font-mono tracking-wider uppercase text-brutal-dim">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left Unit Specs */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 bg-brutal-red inline-block" />
            HARDIK SHARMA // 2026
          </span>
          <span className="text-brutal-border">|</span>
          <span className="hidden sm:inline">REF: TRANCHE-04</span>
          <span className="text-brutal-border hidden sm:inline">|</span>
          <span className="hidden md:inline">SYSTEM: ASYMMETRIC CAPITAL</span>
        </div>

        {/* Right Status Indicators */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-brutal-green">
            <span className="w-1.5 h-1.5 bg-brutal-green animate-pulse inline-block" />
            <span className="font-bold">ALLOCATION ACTIVE</span>
          </div>

          <button
            onClick={toggleSound}
            className="px-2 py-0.5 border border-brutal-border hover:border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            [ AUDIO: {soundOn ? 'ON' : 'OFF'} ]
          </button>
        </div>
      </div>
    </header>
  );
};
