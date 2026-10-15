import React from 'react';
import { IconCpu, IconTrendingUp, IconSparkles } from './Icons';

export const ProofOfWork: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 border-t border-white/[0.08]">
      {/* 3 Key Real Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        <div>
          <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1">
            14.8h
          </div>
          <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-2">
            Daily Flow State
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Uninhibited technical concentration. No meetings. No bureaucratic friction.
          </p>
        </div>

        <div>
          <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1">
            48+
          </div>
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
            Commits / Week
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Continuous production deployment. Systems architected, refined, and shipped.
          </p>
        </div>

        <div>
          <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1">
            100%
          </div>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Direct Runway
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Every rupee directly fuels compute tokens, hardware, books, and living runway.
          </p>
        </div>
      </div>

      {/* 3 Core Tenets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
            <IconTrendingUp size={16} />
          </div>
          <h3 className="font-heading font-semibold text-white text-base mb-2">
            Terminal Velocity
          </h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            While traditional teams spend months in sprint planning and design handoffs, Hardik operates at pure terminal speed from idea to production in hours.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="w-8 h-8 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-4">
            <IconSparkles size={16} />
          </div>
          <h3 className="font-heading font-semibold text-white text-base mb-2">
            Obsessive Taste
          </h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            In an ocean of generic AI slop, taste is the only defensible moat. Every interaction, typeface, and border is considered with museum-level care.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <div className="w-8 h-8 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4">
            <IconCpu size={16} />
          </div>
          <h3 className="font-heading font-semibold text-white text-base mb-2">
            Compound Intellect
          </h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            Your capital directly sponsors dedicated GPU compute, model distillation, and continuous research. The leverage compounds geometrically.
          </p>
        </div>
      </div>
    </section>
  );
};
