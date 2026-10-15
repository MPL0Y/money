import React from 'react';
import { IconCpu, IconTrendingUp, IconSparkles, IconInfinity, IconShieldCheck } from './Icons';

export const LiveMetrics: React.FC = () => {
  return (
    <section id="telemetry" className="relative py-28 md:py-36 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="eyebrow-badge mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM TELEMETRY // REAL-TIME
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Live Operational{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-400">
            Performance Gauges.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light">
          Real-time diagnostics of Hardik's cognitive throughput, raw execution velocity, and compute consumption.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1: Massive Primary Focus (col-span-2 row-span-2) */}
        <div className="md:col-span-2 lg:col-span-2 double-bezel-outer group">
          <div className="double-bezel-inner p-8 flex flex-col justify-between h-full min-h-[420px] bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-obsidian-950 relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconCpu size={18} />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                    COGNITIVE THROUGHPUT
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  FLOW STATE LOCK
                </div>
              </div>

              <div className="font-heading text-6xl sm:text-7xl font-bold text-white tracking-tight mb-2">
                14.8<span className="text-3xl text-neutral-400 font-light">h / day</span>
              </div>
              <p className="text-sm font-mono text-neutral-400 mb-6">
                Deep, uninterrupted neural flow state. Top 0.02% world rank in uninhibited technical concentration.
              </p>
            </div>

            {/* Sparkline Visual Simulation */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-3">
                <span>7-Day Sustained Velocity Curve</span>
                <span className="text-emerald-400 font-semibold">+18.4% WoW Compounding</span>
              </div>
              
              {/* Custom SVG Waveform Line */}
              <div className="h-20 w-full overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 65 Q 40 40, 80 50 T 160 30 T 240 38 T 320 15 T 400 8 L 400 80 L 0 80 Z"
                    fill="url(#metricGrad)"
                  />
                  <path
                    d="M 0 65 Q 40 40, 80 50 T 160 30 T 240 38 T 320 15 T 400 8"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Glowing pulse dot at tip */}
                  <circle cx="400" cy="8" r="4" fill="#34d399" className="animate-ping" />
                  <circle cx="400" cy="8" r="4" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Ship Velocity */}
        <div className="double-bezel-outer group">
          <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-obsidian-900">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <IconTrendingUp size={18} />
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Ship Frequency
              </div>
              <div className="font-heading text-4xl font-bold text-white mb-2">
                48 <span className="text-xl text-neutral-400 font-normal">commits/wk</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Relentless zero-compromise shipping. Models fine-tuned, UI components architected, and systems deployed in production.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Production Deploy</span>
              <span className="text-amber-400 font-semibold">Continuous</span>
            </div>
          </div>
        </div>

        {/* Card 3: Compute Infrastructure */}
        <div className="double-bezel-outer group">
          <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-obsidian-900">
            <div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <IconCpu size={18} />
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Active Compute
              </div>
              <div className="font-heading text-4xl font-bold text-white mb-2">
                4x H100
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Dedicated tensor clusters allocated for local synthesis, agentic loops, and multi-modal distillation experiments.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Cluster Load</span>
              <span className="text-cyan-400 font-semibold">97.8% Saturated</span>
            </div>
          </div>
        </div>

        {/* Card 4: Taste Benchmark */}
        <div className="double-bezel-outer group">
          <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-obsidian-900">
            <div>
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
                <IconSparkles size={18} />
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Taste Threshold
              </div>
              <div className="font-heading text-4xl font-bold text-white mb-2">
                $150k+
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Zero tolerance for generic UI/UX templates. Strictly Apple, Linear, and Awwwards caliber craftsmanship.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Agency Caliber</span>
              <span className="text-violet-400 font-semibold">Elite Tier</span>
            </div>
          </div>
        </div>

        {/* Card 5: Enterprise Moat & Return (col-span-2) */}
        <div className="md:col-span-2 lg:col-span-3 double-bezel-outer group">
          <div className="double-bezel-inner p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-obsidian-900 via-obsidian-900 to-obsidian-850">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  STRATEGIC SUMMARY
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs font-mono text-neutral-400">CAPITAL ROTATION OPPORTUNITY</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Capital Direct-Injection: Maximum Conversion Efficiency
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Every single rupee and dollar sent directly funds compute credits, books, hardware development kits, uninterrupted living runway, and sovereign intellectual property. Zero administrative bloat. Zero middle-tier leakage.
              </p>
            </div>

            <div className="flex flex-col sm:items-end w-full sm:w-auto">
              <div className="text-3xl font-heading font-bold text-white tracking-tight flex items-center gap-1.5">
                <IconInfinity size={26} className="text-amber-400" />
                <span>Return Potential</span>
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1">
                <IconShieldCheck size={14} /> 100% Transparent Allocations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
