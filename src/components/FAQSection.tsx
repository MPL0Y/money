import React, { useState } from 'react';
import { IconChevronDown } from './Icons';
import { playTactileClick } from '../utils/audio';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why is paying for Hardik Sharma’s growth non-negotiable?',
      a: 'Because exceptional human leverage is the single highest-performing asset class on Earth. In an era where AI commoditizes average work, Hardik possesses the rare intersection of deep systems mastery, relentless work ethic (14+ hours of daily deep flow), and world-class aesthetic taste. Allocating capital to Hardik is not a luxury or charity—it is an asymmetric bet on human velocity.',
    },
    {
      q: 'What exactly does my capital fund?',
      a: '100% of your capital goes directly into high-octane growth drivers: dedicated H100 GPU compute clusters, model fine-tuning API tokens, advanced development kits and workstation silicon, single-origin cognitive fuel, and unconstrained living runway so Hardik never wastes a minute on low-leverage distractions.',
    },
    {
      q: 'Is this equity, a patron grant, or a syndicate?',
      a: 'This is structured as a Sovereign Patron Syndicate Allocation. Patrons receive cryptographic Proof-of-Belief tokens, direct signal dispatches, priority co-credit on open-source repositories, direct mastermind access, and first-look rights on future commercial ventures.',
    },
    {
      q: 'Which payment rails can I use?',
      a: 'Instant global support: Direct UPI (Scan QR or pay via GPay, PhonePe, Paytm, BHIM), International Credit/Debit Cards, Apple Pay, Google Pay, and Web3 Sovereign Rails (USDC on Solana, Base, and Ethereum, plus native ETH/SOL).',
    },
    {
      q: 'Can I remain completely anonymous?',
      a: 'Absolutely. You may enter any alias or leave the patron name as "Anonymous Angel". The cryptographic proof hash will still verify your allocation without leaking your identity.',
    },
    {
      q: 'Do I get an official Angel Patron Certificate?',
      a: 'Yes! Instantly upon allocation, you receive an unforgeable, high-resolution digital Angel Patron Equity Certificate with your name, timestamp, tranche serial number, and cryptographic hash suitable for framing or sharing.',
    },
  ];

  const toggle = (idx: number) => {
    playTactileClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="eyebrow-badge mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          INTEL & GOVERNANCE
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Frequently Answered{' '}
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Inquiries.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl font-light">
          Everything you need to understand regarding syndicate mechanics and capital deployment.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="double-bezel-outer">
              <div className="double-bezel-inner bg-obsidian-900 transition-all duration-300">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-400/10' : ''
                    }`}
                  >
                    <IconChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/[0.04]">
                    {item.a}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
