import React, { useState } from 'react';
import { IconArrowUpRight, IconSoundOn, IconSoundOff } from './Icons';
import { isSoundEnabled, setSoundEnabled, playTactileClick } from '../utils/audio';

interface NavbarProps {
  onOpenAllocate: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAllocate }) => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playTactileClick();
    }
  };

  const handleNavClick = (href: string) => {
    playTactileClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pt-5">
          {/* Left Brand Badge */}
          <div className="pointer-events-auto flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                playTactileClick();
              }}
              className="group flex items-center gap-3.5 px-4 py-2 rounded-full bg-obsidian-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:border-white/25 transition-all duration-500"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-emerald-400 flex items-center justify-center font-bold text-[11px] text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-xs tracking-wider text-white group-hover:text-amber-300 transition-colors">
                  HARDIK SHARMA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400">
                  GROWTH SYNDICATE
                </span>
              </div>
            </a>
          </div>

          {/* Center Floating Glass Island Pill (Desktop) */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full island-nav">
            <button
              onClick={() => handleNavClick('#thesis')}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              The Thesis
            </button>
            <button
              onClick={() => handleNavClick('#telemetry')}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              Live Telemetry
            </button>
            <button
              onClick={() => handleNavClick('#tiers')}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              Capital Tranches
            </button>
            <button
              onClick={() => handleNavClick('#terminal')}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              Terminal
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            >
              Intel FAQ
            </button>

            {/* Tranche Status Chip */}
            <div className="ml-2 pl-3 border-l border-white/10 flex items-center gap-2 pr-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-medium">
                TRANCHE 04 ACTIVE
              </span>
            </div>
          </nav>

          {/* Right Action Island */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              title={soundOn ? 'Mute Haptic Soundscape' : 'Enable Haptic Soundscape'}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-obsidian-900/80 backdrop-blur-2xl border border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-500 active:scale-95 shadow-lg"
            >
              {soundOn ? <IconSoundOn size={15} /> : <IconSoundOff size={15} />}
            </button>

            {/* Nested CTA & Island Button */}
            <button
              onClick={() => {
                playTactileClick();
                onOpenAllocate();
              }}
              className="btn-nested group relative inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-obsidian-950 font-semibold text-xs tracking-wide shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)]"
            >
              <span>Allocate Capital</span>
              <div className="btn-nested-icon w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                <IconArrowUpRight size={12} className="text-obsidian-950" />
              </div>
            </button>

            {/* Mobile Hamburger Morph Trigger */}
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 bg-obsidian-900/80 backdrop-blur-2xl border border-white/10 active:scale-95"
              aria-label="Toggle Navigation"
            >
              <span
                className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Overlay Navigation (Fluid Modal Expansion) */}
      <div
        className={`fixed inset-0 z-40 bg-black/85 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          <div className="eyebrow-badge mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            HARDIK SHARMA GROWTH FUND
          </div>

          {[
            { label: 'The Thesis', href: '#thesis' },
            { label: 'Live Telemetry', href: '#telemetry' },
            { label: 'Capital Tranches', href: '#tiers' },
            { label: 'Terminal Protocol', href: '#terminal' },
            { label: 'Patron FAQ', href: '#faq' },
          ].map((item, idx) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{ transitionDelay: `${idx * 60}ms` }}
              className={`font-heading text-2xl font-semibold text-white/90 hover:text-amber-400 transition-all transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAllocate();
              }}
              className="w-full py-4 rounded-full bg-amber-400 text-black font-semibold text-sm tracking-wide shadow-glow-gold flex items-center justify-center gap-2"
            >
              <span>Commit Capital Now</span>
              <IconArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
