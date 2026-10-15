import React, { useState } from 'react';
import { IconArrowUpRight, IconCopy, IconCheck, IconShieldCheck, IconCross } from './Icons';
import { playTactileClick, playTierSelect, playAllocationSuccessSound } from '../utils/audio';
import { triggerLuxuriousConfetti } from '../utils/confetti';
import { CertificateData } from '../types';

interface HeroPaymentProps {
  onClaimBadge: (cert: CertificateData) => void;
}

const PRESET_AMOUNTS = [
  {
    inr: 500,
    usd: 6,
    label: '₹500',
    impact: 'Fuels 2 days of single-origin espresso & technical papers.',
  },
  {
    inr: 1000,
    usd: 12,
    label: '₹1,000',
    impact: 'Unlocks dedicated cloud API tokens for model fine-tuning.',
  },
  {
    inr: 2500,
    usd: 30,
    label: '₹2,500',
    impact: 'Sponsors 1 week of uninterrupted deep flow state.',
  },
  {
    inr: 5000,
    usd: 60,
    label: '₹5,000',
    impact: 'Finances specialized prototyping silicon & hardware dev kits.',
  },
  {
    inr: 25000,
    usd: 300,
    label: '₹25,000',
    impact: 'Underwrites sovereign runway: complete existential freedom to build.',
  },
];

export const HeroPayment: React.FC<HeroPaymentProps> = ({ onClaimBadge }) => {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default ₹1,000
  const [customInr, setCustomInr] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isQrZoomed, setIsQrZoomed] = useState(false);
  const [showAltRails, setShowAltRails] = useState(false);
  const [patronName, setPatronName] = useState('');

  const upiId = 'hardikksharmaaa-1@okicici';

  const activeInr = isCustom
    ? parseInt(customInr || '0', 10) || 1000
    : PRESET_AMOUNTS[selectedIdx].inr;

  const activeImpact = isCustom
    ? `Direct sovereign fuel injected into Hardik's engineering runway.`
    : PRESET_AMOUNTS[selectedIdx].impact;

  const handlePresetSelect = (idx: number) => {
    playTierSelect();
    setIsCustom(false);
    setSelectedIdx(idx);
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    playTactileClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
    playAllocationSuccessSound();
    triggerLuxuriousConfetti();

    const cert: CertificateData = {
      certificateId: `HS-${Math.floor(100000 + Math.random() * 900000)}`,
      patronName: patronName.trim() || 'Anonymous Sovereign Patron',
      amount: Math.round(activeInr / 86.5),
      tierName: `₹${activeInr.toLocaleString()} Patron Allocation`,
      issuedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      hash: `0x${Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      tierCode: `TRANCHE-04-INR-${activeInr}`,
    };

    onClaimBadge(cert);
  };

  const upiDeepLink = `upi://pay?pa=${upiId}&pn=Hardik%20Sharma&am=${activeInr}&cu=INR&tn=Hardik%20Sharma%20Growth%20Fund`;

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: The Narrative & Amount Selector */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-mono tracking-wider text-amber-300 uppercase font-medium">
              Hardik Sharma // Patronage
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Backing Hardik's growth is a{' '}
            <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500">
              non-negotiable
            </span>{' '}
            trade.
          </h1>

          {/* Body */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
            Hardik Sharma builds software with obsessive craft and uncommon velocity. 
            Your money converts directly into compute hours, books, espresso, and uninterrupted flow. 
            Zero bureaucracy. Pure kinetic output.
          </p>

          {/* Amount Picker */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Select Allocation Amount:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {PRESET_AMOUNTS.map((item, idx) => {
                const isActive = !isCustom && selectedIdx === idx;
                return (
                  <button
                    key={item.label}
                    onClick={() => handlePresetSelect(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-400 text-obsidian-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                        : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  playTactileClick();
                  setIsCustom(true);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-tight transition-all duration-300 ${
                  isCustom
                    ? 'bg-amber-400 text-obsidian-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Input */}
            {isCustom && (
              <div className="mt-3 flex items-center gap-2 max-w-xs">
                <span className="text-sm font-mono text-neutral-400">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customInr}
                  onChange={(e) => setCustomInr(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            )}
          </div>

          {/* Dynamic Fuel Projection Card */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-8 max-w-xl">
            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300/90 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Fuel Impact for ₹{activeInr.toLocaleString()}:</span>
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {activeImpact}
            </p>
          </div>

          {/* Claim Patron Certificate Action */}
          <div className="space-y-3 max-w-xl">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your name or handle for the Angel Certificate"
                value={patronName}
                onChange={(e) => setPatronName(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/50 font-mono"
              />
              <button
                onClick={handleClaim}
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-neutral-100 transition-colors shadow-md flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Claim Certificate</span>
                <IconArrowUpRight size={13} />
              </button>
            </div>
            <p className="text-[11px] font-mono text-neutral-400">
              *Scan the QR code on the right with any UPI app, then click Claim Certificate to generate your verified token.
            </p>
          </div>
        </div>

        {/* Right Column: The Sculptural Google Pay QR Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-[2rem] p-1.5 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent border border-white/10 shadow-2xl">
            <div className="rounded-[calc(2rem-0.375rem)] bg-obsidian-900/95 p-6 sm:p-7 flex flex-col items-center text-center relative overflow-hidden">
              {/* Subtle top inner glow */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Verified Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                  Google Pay Verified
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Official Google Pay QR Image */}
              <div
                className="relative group cursor-pointer w-full max-w-[260px] bg-white rounded-2xl p-3 shadow-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => {
                  playTactileClick();
                  setIsQrZoomed(true);
                }}
              >
                <img
                  src="/GooglePay_QR.png"
                  alt="Google Pay QR Code for Hardik Sharma"
                  className="w-full h-auto rounded-xl object-contain"
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-medium">
                  Click to Expand QR
                </div>
              </div>

              {/* Amount Display */}
              <div className="mt-5 mb-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Payment Target
                </div>
                <div className="font-heading text-3xl font-bold text-white tracking-tight">
                  ₹{activeInr.toLocaleString()}{' '}
                  <span className="text-xs font-mono text-neutral-400 font-normal">
                    (≈ ${Math.round(activeInr / 86.5)} USD)
                  </span>
                </div>
              </div>

              {/* UPI ID with 1-Click Copy */}
              <div className="w-full flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 mb-4">
                <code className="text-xs font-mono text-amber-300 truncate pl-1">
                  {upiId}
                </code>
                <button
                  onClick={handleCopyUpi}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-neutral-200 flex items-center gap-1 transition-colors"
                >
                  {copied ? <IconCheck size={12} className="text-emerald-400" /> : <IconCopy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* 1-Tap Mobile UPI App Deep Link */}
              <a
                href={upiDeepLink}
                onClick={playTactileClick}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-obsidian-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Pay via UPI App (GPay / PhonePe)</span>
                <IconArrowUpRight size={14} className="text-obsidian-950" />
              </a>

              {/* Secondary toggle for alternative payment rails */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] w-full">
                <button
                  onClick={() => setShowAltRails(!showAltRails)}
                  className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  {showAltRails ? 'Hide Crypto & Cards ▲' : 'International / Crypto Options ▼'}
                </button>

                {showAltRails && (
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left text-xs font-mono space-y-2 text-neutral-300">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">USDC (Solana / Base):</span>
                      <code className="text-[11px] text-amber-300">7XqP...hardik...88Base</code>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">ETH / Mainnet:</span>
                      <code className="text-[11px] text-amber-300">0xHardikSharma...99aC</code>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom for GooglePay QR */}
      {isQrZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl cursor-zoom-out"
          onClick={() => {
            playTactileClick();
            setIsQrZoomed(false);
          }}
        >
          <div className="relative max-w-sm w-full bg-white p-4 rounded-3xl shadow-2xl">
            <button
              onClick={() => setIsQrZoomed(false)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <IconCross size={16} />
            </button>
            <img
              src="/GooglePay_QR.png"
              alt="Google Pay UPI QR Code - Hardik Sharma"
              className="w-full h-auto rounded-2xl object-contain"
            />
            <div className="text-center mt-3 text-black font-mono text-xs font-semibold">
              Scan with GPay / PhonePe / Paytm / CRED
            </div>
            <div className="text-center text-neutral-500 font-mono text-[11px]">
              hardikksharmaaa-1@okicici
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
