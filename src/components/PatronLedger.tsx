import React from 'react';
import { IconShieldCheck } from './Icons';

export const PatronLedger: React.FC = () => {
  const patrons = [
    { name: 'Alex V.', amount: '₹25,000', note: 'Hardik ships faster than 10-person teams. Keep going.' },
    { name: 'Nathalie C.', amount: '₹10,000', note: 'Incredible taste. Easiest allocation decision of the month.' },
    { name: 'Marcus S.', amount: '₹5,000', note: 'Funding human velocity over passive assets.' },
    { name: 'Kavya S.', amount: '₹2,500', note: 'Non-negotiable trade.' },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12 border-t border-white/[0.08]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-heading font-semibold text-white text-base">
            Recent Backers
          </h3>
          <p className="text-xs text-neutral-400 font-mono">
            Recorded on the Hardik Sharma Genesis Ledger
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <IconShieldCheck size={14} />
          <span>Verified Ledger</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {patrons.map((p, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-xs text-white">{p.name}</span>
              <span className="font-mono text-xs text-amber-300 font-semibold">{p.amount}</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-light italic leading-relaxed">
              "{p.note}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
