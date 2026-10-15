import React, { useState } from 'react';
import { IconSoundOn, IconSoundOff } from './Icons';
import { isSoundEnabled, setSoundEnabled, playTactileClick } from '../utils/audio';

export const Header: React.FC = () => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playTactileClick();
  };

  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-emerald-400 flex items-center justify-center font-bold text-xs text-black shadow-md">
          H
        </div>
        <div>
          <span className="font-heading font-bold text-sm tracking-wide text-white block">
            Hardik Sharma
          </span>
          <span className="text-[10px] font-mono text-neutral-400 block -mt-0.5">
            Growth Patronage // 2026
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Allocation</span>
        </div>

        <button
          onClick={toggleSound}
          title={soundOn ? 'Mute Soundscape' : 'Enable Soundscape'}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-colors"
        >
          {soundOn ? <IconSoundOn size={14} /> : <IconSoundOff size={14} />}
        </button>
      </div>
    </header>
  );
};
