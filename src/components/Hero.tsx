import React, { useState, useEffect } from 'react';
import { IconArrowUpRight, IconSparkles, IconTrendingUp, IconShieldCheck } from './Icons';
import { playTactileClick } from '../utils/audio';

interface HeroProps {
  onOpenAllocate: () => void;
  onExploreTiers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAllocate, onExploreTiers }) => {
  // Real-time simulated live ticker of raised capital
  const [raisedAmount, setRaisedAmount] = useState(148750);
  const targetCap = 250000;
  const progressPercent = Math.min(100, Math.round((raisedAmount / targetCap) * 100));

  useEffect(() => {
    // Subtle periodic micro-allocation ticks
    const interval = setInterval(() => {
      setRaisedAmount((prev) => {
        if (prev >= 238000) return prev;
        const jump = Math.random() > 0.6 ? 50 : 25;
        return prev + jump;
      });
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background radial caustic accents */}
      <div className="aurora-mesh w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-transparent -top-20 left-1/2 -translate-x-1/2" />
      <div className="aurora-mesh w-[500px] h-[500px] bg-gradient-to-br from-violet-600/15 via-cyan-500/10 to-transparent top-1/3 -left-48" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        {/* Microscopic Eyebrow */}
        <div className="eyebrow-badge mb-8 group hover:border-amber-400/40 transition-all duration-500 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-amber-200/90 font-medium tracking-widest text-[10px]">
            THE HUMAN GROWTH FUND // SYNDICATE TRANCHE 04
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-300 font-mono text-[9px]">SERIES ∞</span>
        </div>

        {/* Hero Title with Clash Display & Editorial Serif */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Underwrite the growth of{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Hardik Sharma.
          </span>
        </h1>

        {/* Subtitle with High-Conviction Persuasion */}
        <p className="max-w-2xl text-base sm:text-xl text-neutral-300 font-light leading-relaxed mb-10">
          Most capital is wasted on stagnant SaaS or decaying debt. Hardik Sharma converts raw liquidity into{' '}
          <span className="text-white font-medium">compounding intellect</span>,{' '}
          <span className="text-white font-medium">breakthrough engineering velocity</span>, and{' '}
          <span className="text-amber-300 font-medium">uncapped human leverage</span>.
          <br className="hidden sm:inline" /> Paying is not philanthropy. It is an asymmetric conviction.
        </p>

        {/* Nested CTA & Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          {/* Primary Nested Button */}
          <button
            onClick={() => {
              playTactileClick();
              onOpenAllocate();
            }}
            className="btn-nested group w-full sm:w-auto pl-8 pr-3 py-4 rounded-full bg-white hover:bg-neutral-100 text-obsidian-950 font-bold text-sm tracking-wide shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.45)] flex items-center justify-center gap-4"
          >
            <span>Back Hardik's Growth</span>
            <div className="btn-nested-icon w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <IconArrowUpRight size={14} className="text-black" />
            </div>
          </button>

          {/* Secondary Hardware Pill Button */}
          <button
            onClick={() => {
              playTactileClick();
              onExploreTiers();
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-2.5 hover:border-white/20 active:scale-98"
          >
            <span>Inspect Tranche Matrix</span>
            <span className="text-neutral-400 text-xs font-mono">($25 - $10k+)</span>
          </button>
        </div>

        {/* Double-Bezel Live Allocation Telemetry Board */}
        <div className="w-full max-w-2xl double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-7">
            {/* Top Bar with Live Indicator & Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-amber-400">
                  <IconTrendingUp size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Tranche 04 Progress
                  </div>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight flex items-baseline gap-2">
                    ${raisedAmount.toLocaleString()}
                    <span className="text-xs font-mono text-neutral-400 font-normal">
                      / ${targetCap.toLocaleString()} CAP
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-left sm:text-right">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Active Patrons
                  </div>
                  <div className="font-heading font-semibold text-lg text-white">
                    94 Angels
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Status
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Allocating
                  </div>
                </div>
              </div>
            </div>

            {/* Precision Micro Progress Bar */}
            <div className="pt-5">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-2">
                <span>Fund Velocity: 82% allocation velocity</span>
                <span className="text-amber-400 font-semibold">{progressPercent}% Filled</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden p-[1px] border border-white/[0.04]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <IconShieldCheck size={13} className="text-emerald-400" />
                  Instant Angel Certificate Generated
                </span>
                <span className="text-amber-300/80">
                  UPI • Cards • Crypto (USDC/SOL) • Apple Pay
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Live Ribbon */}
        <div className="mt-8 flex items-center gap-3 text-xs text-neutral-400 font-mono">
          <div className="flex -space-x-2 overflow-hidden">
            {['HS', 'NV', 'PG', 'SR', 'AL'].map((init, i) => (
              <div
                key={i}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-obsidian-950 bg-neutral-800 text-[10px] font-bold text-neutral-300 flex items-center justify-center"
              >
                {init}
              </div>
            ))}
          </div>
          <span>
            Backed by visionary founders, deep-tech researchers, and sovereign engineers.
          </span>
        </div>
      </div>
    </section>
  );
};
