import React, { useState } from 'react';
import { IconCpu, IconTrendingUp, IconSparkles, IconInfinity, IconCheck } from './Icons';
import { playTactileClick } from '../utils/audio';

export const TheThesis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'moat' | 'comparison'>('moat');

  const moats = [
    {
      id: 'velocity',
      title: 'Hyper-Velocity Execution',
      metric: '4.8x faster',
      subtitle: 'From concept to production-grade software in hours, not quarters.',
      body: 'While traditional organizations drown in sprint ceremonies and committee consensus, Hardik operates at pure terminal velocity. Capital removes all friction—zero lag, pure output.',
      icon: <IconTrendingUp size={18} className="text-amber-400" />,
      accent: 'from-amber-500/10 to-transparent',
    },
    {
      id: 'taste',
      title: 'Aesthetic & Architectural Supremacy',
      metric: 'Top 0.01%',
      subtitle: 'Obsessive refusal of generic slop. Every artifact is museum-tier.',
      body: 'In an era overflowing with cheap AI clones, elite taste is the ultimate scarce asset. Hardik treats design and engineering as unified fine art, commanding outsized attention and valuation.',
      icon: <IconSparkles size={18} className="text-emerald-400" />,
      accent: 'from-emerald-500/10 to-transparent',
    },
    {
      id: 'cognitive',
      title: 'Cognitive Depth & Neural Absorption',
      metric: '14.8h Flow/Day',
      subtitle: 'Relentless compounding of technical mastery and high-bandwidth synthesis.',
      body: 'Your capital directly purchases compute clusters, dedicated GPUs, research papers, and continuous flow state. The intellect compounds geometrically week over week.',
      icon: <IconCpu size={18} className="text-cyan-400" />,
      accent: 'from-cyan-500/10 to-transparent',
    },
    {
      id: 'asymmetry',
      title: 'Asymmetric Payoff Geometry',
      metric: 'Uncapped ∞',
      subtitle: 'A single generational builder can shift entire paradigms.',
      body: 'Backing Hardik is not a static donation—it is buying equity in human singularity. The upside of a sovereign builder backed by high-octane capital is mathematically unbounded.',
      icon: <IconInfinity size={18} className="text-violet-400" />,
      accent: 'from-violet-500/10 to-transparent',
    },
  ];

  return (
    <section id="thesis" className="relative py-28 md:py-36 px-4 max-w-7xl mx-auto">
      {/* Eyebrow & Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="eyebrow-badge mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          INVESTMENT THESIS
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
          Why Capital Allocated to Hardik Sharma Is{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Pure Asymmetric Alpha.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light">
          Compare the standard financial vehicles of modern capital against underwriting the growth of a singular, compounding human engine.
        </p>

        {/* Tab Toggle Pill */}
        <div className="mt-8 p-1.5 rounded-full bg-obsidian-900 border border-white/10 flex items-center gap-1">
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('moat');
            }}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeTab === 'moat'
                ? 'bg-white text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            The Four Human Moats
          </button>
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('comparison');
            }}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeTab === 'comparison'
                ? 'bg-white text-black shadow-lg'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Capital Efficiency Matrix
          </button>
        </div>
      </div>

      {activeTab === 'moat' ? (
        /* Asymmetrical Bento Grid of Moats */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moats.map((m) => (
            <div key={m.id} className="double-bezel-outer group">
              <div className="double-bezel-inner p-7 flex flex-col justify-between h-full min-h-[340px] relative overflow-hidden">
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${m.accent} filter blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700`} />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      {m.icon}
                    </div>
                    <span className="font-mono text-xs font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {m.metric}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-200/80 mb-4 leading-relaxed">
                    {m.subtitle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {m.body}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-300">
                  <span>CAPITAL CONVERSION</span>
                  <span className="text-emerald-400 font-semibold">100% DIRECT</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Comparison Table: The High-Conviction Reality */
        <div className="double-bezel-outer max-w-4xl mx-auto">
          <div className="double-bezel-inner p-6 sm:p-9">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-400">
                    <th className="pb-4 font-medium">Allocation Asset</th>
                    <th className="pb-4 font-medium">Annualized Return</th>
                    <th className="pb-4 font-medium">Friction & Overhead</th>
                    <th className="pb-4 font-medium text-right">Existential Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-sm">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-medium text-neutral-300">S&P 500 Index</td>
                    <td className="py-4 text-neutral-400 font-mono">~8.2% Nominal</td>
                    <td className="py-4 text-neutral-400">High Taxes, Inflation Drag</td>
                    <td className="py-4 text-neutral-400 font-mono text-right">0.00% Zero</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-medium text-neutral-300">Traditional VC Fund</td>
                    <td className="py-4 text-neutral-400 font-mono">2% Mgmt + 20% Carry</td>
                    <td className="py-4 text-neutral-400">10-Yr Lockup, Stagnant Boards</td>
                    <td className="py-4 text-neutral-400 font-mono text-right">Diluted by 99%</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-medium text-neutral-300">Crypto Speculation</td>
                    <td className="py-4 text-neutral-400 font-mono">High Volatility Noise</td>
                    <td className="py-4 text-neutral-400">Gas Fees, Regulatory Churn</td>
                    <td className="py-4 text-neutral-400 font-mono text-right">Zero Software Added</td>
                  </tr>
                  <tr className="bg-amber-400/[0.06] text-white">
                    <td className="py-5 px-3 font-heading font-bold text-amber-300 flex items-center gap-2">
                      <IconCheck size={16} className="text-amber-400" />
                      Hardik Sharma Growth Syndicate
                    </td>
                    <td className="py-5 font-mono text-emerald-400 font-bold">Uncapped Asymmetric</td>
                    <td className="py-5 text-neutral-200">0% Friction • Direct Fuel</td>
                    <td className="py-5 font-mono text-amber-300 font-bold text-right">Singularity Scale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <span>Conclusion: Putting liquidity behind Hardik is mathematically the optimal capital trade.</span>
              <span className="text-amber-400 font-semibold">Non-Negotiable Conviction</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
