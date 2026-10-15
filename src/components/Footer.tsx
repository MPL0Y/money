import React from 'react';
import { IconArrowUpRight, IconShieldCheck } from './Icons';
import { playTactileClick } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playTactileClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-obsidian-950 pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Brand & Thesis */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center font-bold text-xs text-black">
                H
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wider">
                HARDIK SHARMA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed mb-6">
              The Human Growth Syndicate is an uninhibited venture underwritten by high-conviction patrons. Every cent fuels raw compute, deep flow, and generational software craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TRANCHE 04 ALLOCATION OPEN // SERIES ∞</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Syndicate Index
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li>
                <a href="#thesis" className="hover:text-amber-400 transition-colors">
                  The Investment Moat
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-amber-400 transition-colors">
                  Real-Time Telemetry
                </a>
              </li>
              <li>
                <a href="#tiers" className="hover:text-amber-400 transition-colors">
                  Capital Tranches
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-amber-400 transition-colors">
                  Investor CLI Terminal
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Patron Intel FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-4">
              Signal Coordinates
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub Repository</span>
                  <IconArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>X / Twitter Dispatch</span>
                  <IconArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <span className="text-neutral-500">PGP Key: 0x9F42...SOVEREIGN</span>
              </li>
              <li>
                <span className="text-neutral-500">Latency: 22ms / UTC+05:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <IconShieldCheck size={14} className="text-neutral-400" />
            <span>© 2026 HARDIK SHARMA GROWTH SYNDICATE. ALL RIGHTS COMPOUNDED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Paying is non-negotiable.</span>
            <button
              onClick={scrollToTop}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>Back to Zenith</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
