import React from 'react';
import { IconSparkles, IconShieldCheck } from './Icons';

export const AngelTicker: React.FC = () => {
  const backers = [
    {
      name: 'Alexandre V.',
      title: 'Principal AI Researcher',
      avatar: 'AV',
      tier: 'Sovereign Syndicate ($5,000)',
      quote: 'Hardik shipped in 48 hours what a 12-person VC-backed engineering team struggled to spec in 6 months. Funding him is the easiest allocation decision in my portfolio.',
      time: '14m ago',
    },
    {
      name: 'Nathalie Chen',
      title: 'Managing Partner, Frontier Ventures',
      avatar: 'NC',
      tier: 'Lab Patron ($1,000)',
      quote: 'Incredible aesthetic taste paired with deep systems architecture. In a sea of copycat engineers, Hardik is an original force of nature.',
      time: '1h ago',
    },
    {
      name: 'Marcus Sterling',
      title: 'Deep Tech Angel & Ex-Founder',
      avatar: 'MS',
      tier: 'Neural Compute Backer ($250)',
      quote: 'I don’t donate. I buy options on asymmetric talent. Hardik’s trajectory is mathematically compounding at a rate I haven’t seen in a decade.',
      time: '3h ago',
    },
    {
      name: 'Kavya S.',
      title: 'Product Architect',
      avatar: 'KS',
      tier: 'Synaptic Catalyst ($50)',
      quote: 'Every single artifact Hardik touches looks like it won Site of the Year. Paying for his growth is literally non-negotiable.',
      time: '5h ago',
    },
  ];

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="eyebrow-badge mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          PATRON DISPATCHES
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Voices of the{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Growth Syndicate.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light">
          Why angels, sovereign operators, and top researchers consider allocating capital to Hardik a foregone conclusion.
        </p>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {backers.map((b, i) => (
          <div key={i} className="double-bezel-outer">
            <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between h-full bg-obsidian-900">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center font-bold text-xs text-amber-300">
                      {b.avatar}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">
                        {b.name}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-400">
                        {b.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-amber-400 font-semibold">
                      {b.tier}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500">
                      {b.time}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 font-light italic leading-relaxed mb-4">
                  "{b.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <IconShieldCheck size={13} />
                <span>Verified Cryptographic Patron Ledger Entry</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
