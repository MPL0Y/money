import React from 'react';
import { InvestmentTier } from '../types';
import { IconArrowUpRight, IconCheck, IconSparkles } from './Icons';
import { playTactileClick, playTierSelect } from '../utils/audio';

interface TiersGridProps {
  onSelectTier: (tier: InvestmentTier) => void;
}

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: 'synaptic',
    name: 'The Synaptic Catalyst',
    code: 'TIER-01 // COGNITIVE FUEL',
    amount: 50,
    cadence: 'one-time or monthly',
    tagline: 'Direct fuel for intense flow sessions & reading velocity.',
    description: 'Underwrites single-origin espresso reserves, technical monographs, and uninterrupted creative flow hours.',
    accentColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    perks: [
      'Genesis Backer ledger inclusion',
      'Cryptographic Angel Proof-of-Belief Token',
      'Access to private Intelligence Signal telegram',
      'Instant digital Patron Certificate generation',
    ],
    metricsImpact: {
      computeBonus: '+20 GPU Hrs',
      throughputMultiplier: '1.2x Focus',
      enterpriseMoat: 'Foundation',
    },
  },
  {
    id: 'neural',
    name: 'Neural Compute Backer',
    code: 'TIER-02 // H100 GPU POOL',
    amount: 250,
    cadence: 'one-time allocation',
    tagline: 'Fuels dedicated GPU compute clusters & fine-tuning experiments.',
    description: 'Directly finances tensor cluster hours, high-token API inference, and exploratory multi-modal model weights.',
    accentColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
    popular: true,
    perks: [
      'All Tier 01 Genesis privileges',
      'Quarterly "State of the Mind" Deep Intelligence Memo',
      'Direct priority access to private open-source repos',
      'Private 1-on-1 text channel with Hardik',
      'High-resolution vector investor badge',
    ],
    metricsImpact: {
      computeBonus: '+120 GPU Hrs',
      throughputMultiplier: '2.5x Velocity',
      enterpriseMoat: 'Strategic Moat',
    },
  },
  {
    id: 'hardware',
    name: 'Hyper-Velocity Lab Patron',
    code: 'TIER-03 // SILICON & RIGS',
    amount: 1000,
    cadence: 'sovereign tranche',
    tagline: 'Underwrites specialized hardware, dev-kits & prototype silicon.',
    description: 'Powers custom workstations, high-fidelity audio monitors, robotics/edge hardware kits, and laboratory setup.',
    accentColor: 'border-cyan-400/40 text-cyan-300 bg-cyan-400/10',
    perks: [
      'All Tier 01 & 02 privileges',
      'Permanent tribute credit in open-source headers',
      'Quarterly 1-on-1 Strategy & Architecture Video Session',
      'Co-ideation priority for future venture spin-outs',
      'Physical engraved brass token dispatched worldwide',
    ],
    metricsImpact: {
      computeBonus: '+600 GPU Hrs',
      throughputMultiplier: '5.0x Force Multiplier',
      enterpriseMoat: 'Hardware Lab',
    },
  },
  {
    id: 'sovereign',
    name: 'The Sovereign Syndicate',
    code: 'TIER-04 // FOUNDING PATRON',
    amount: 5000,
    cadence: 'syndicate equity tranche',
    tagline: 'Buys complete unconstrained existential autonomy.',
    description: 'Dissolves all financial drag. Hardik operates in absolute freedom to build generational software paradigms.',
    accentColor: 'border-violet-400/40 text-violet-300 bg-violet-400/10',
    perks: [
      'Lifetime Founding Patron ranking & keynote honors',
      'Direct mobile phone hotline & priority signal advisory',
      'Private annual dinner invitation & mastermind session',
      'First right of allocation on any future commercial venture',
      'Immortalized in the Genesis block of Hardik.capital',
    ],
    metricsImpact: {
      computeBonus: 'Unconstrained',
      throughputMultiplier: '∞ Autonomy',
      enterpriseMoat: 'Generational Alpha',
    },
  },
];

export const TiersGrid: React.FC<TiersGridProps> = ({ onSelectTier }) => {
  return (
    <section id="tiers" className="relative py-28 md:py-36 px-4 max-w-7xl mx-auto">
      {/* Eyebrow and Section Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="eyebrow-badge mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          ALLOCATION TRANCHES
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Select Your Conviction{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Tranche.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light">
          Every tier gives you direct attribution, measurable compute impact, and an unforgeable digital angel certificate.
        </p>
      </div>

      {/* Grid of Double-Bezel Hardware Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INVESTMENT_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`double-bezel-outer relative group flex flex-col ${
              tier.popular ? 'ring-1 ring-amber-400/30' : ''
            }`}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-obsidian-950 font-bold text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center gap-1.5">
                <IconSparkles size={11} />
                MOST ACTIVE TRANCHE
              </div>
            )}

            <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-obsidian-900 relative">
              <div>
                {/* Header code */}
                <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-4">
                  {tier.code}
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {tier.name}
                </h3>

                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-heading font-bold text-4xl text-white tracking-tight">
                    ${tier.amount.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    / {tier.cadence}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Micro Metric Tag */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Impact:</span>
                  <span className="text-amber-300 font-semibold">{tier.metricsImpact.computeBonus}</span>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                    TRANCHE PRIVILEGES
                  </div>
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light leading-snug">
                      <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/10 text-emerald-400">
                        <IconCheck size={12} />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    playTierSelect();
                    onSelectTier(tier);
                  }}
                  className={`btn-nested group w-full py-3.5 px-4 rounded-full font-semibold text-xs tracking-wide flex items-center justify-between transition-all duration-300 ${
                    tier.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-obsidian-950 shadow-glow-gold'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>Allocate ${tier.amount.toLocaleString()}</span>
                  <div className="btn-nested-icon w-6 h-6 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                    <IconArrowUpRight size={12} className={tier.popular ? 'text-black' : 'text-white'} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
