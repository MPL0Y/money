import React, { useState } from 'react';
import { CertificateData } from '../types';
import { playTactileClick, playTierSelect, playAllocationSuccessSound } from '../utils/audio';
import { triggerLuxuriousConfetti } from '../utils/confetti';

interface BrutalistTerminalProps {
  onClaimCertificate: (cert: CertificateData) => void;
}

const PRESET_AMOUNTS = [
  { inr: 500, label: '500 INR', impact: '2 DAYS ESPRESSO + TECHNICAL MONOGRAPHS' },
  { inr: 1000, label: '1,000 INR', impact: 'DEDICATED CLOUD GPU TOKENS + FINE-TUNING' },
  { inr: 2500, label: '2,500 INR', impact: '1 WEEK UNINTERRUPTED DEEP FLOW RUNWAY' },
  { inr: 5000, label: '5,000 INR', impact: 'SPECIALIZED PROTOTYPING HARDWARE & SILICON' },
  { inr: 25000, label: '25,000 INR', impact: 'SOVEREIGN RUNWAY: ABSOLUTE AUTONOMY' },
];

export const BrutalistTerminal: React.FC<BrutalistTerminalProps> = ({ onClaimCertificate }) => {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default 1,000 INR
  const [customInr, setCustomInr] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);
  const [patronName, setPatronName] = useState('');
  const [showCrypto, setShowCrypto] = useState(false);
  const [isQrZoomed, setIsQrZoomed] = useState(false);

  const upiId = 'hardikksharmaaa-1@okicici';

  const activeInr = isCustom
    ? parseInt(customInr || '0', 10) || 1000
    : PRESET_AMOUNTS[selectedIdx].inr;

  const activeImpact = isCustom
    ? 'DIRECT CAPITAL INJECTION INTO HARDIK SHARMA RUNWAY'
    : PRESET_AMOUNTS[selectedIdx].impact;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    playTactileClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectPreset = (idx: number) => {
    playTierSelect();
    setIsCustom(false);
    setSelectedIdx(idx);
  };

  const handleClaim = () => {
    playAllocationSuccessSound();
    triggerLuxuriousConfetti();

    const cert: CertificateData = {
      certificateId: `HS-${Math.floor(100000 + Math.random() * 900000)}`,
      patronName: patronName.trim() || 'ANONYMOUS SOVEREIGN PATRON',
      amount: Math.round(activeInr / 86.5),
      tierName: `INR ${activeInr.toLocaleString()} ALLOCATION`,
      issuedAt: new Date().toISOString().split('T')[0],
      hash: `0x${Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      tierCode: `UNIT-HARDIK-${activeInr}`,
    };

    onClaimCertificate(cert);
  };

  const upiDeepLink = `upi://pay?pa=${upiId}&pn=Hardik%20Sharma&am=${activeInr}&cu=INR&tn=Hardik%20Sharma%20Growth%20Fund`;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-16">
      {/* Monolithic Industrial Header */}
      <div className="border border-brutal-border bg-brutal-dark p-6 sm:p-10 mb-8 relative">
        {/* Top corner markers */}
        <div className="absolute top-2 left-2 text-[10px] text-brutal-dim font-mono">+</div>
        <div className="absolute top-2 right-2 text-[10px] text-brutal-dim font-mono">+</div>

        <div className="text-[11px] font-mono tracking-widest text-brutal-red uppercase mb-3 flex items-center gap-2">
          <span>[ PROTOCOL: DIRECT HUMAN PATRONAGE ]</span>
          <span className="text-brutal-border">///</span>
          <span className="text-white">NON-NEGOTIABLE</span>
        </div>

        <h1 className="font-industrial text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.92] mb-5">
          FUND HARDIK SHARMA
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-4 border-t border-brutal-border">
          <p className="text-xs sm:text-sm font-mono text-brutal-text max-w-2xl leading-relaxed uppercase">
            Hardik Sharma converts raw liquidity into compounding software, neural compute, and uninhibited execution speed. Zero corporate drag. Zero middle-tier leakage.
          </p>
          <div className="text-[11px] font-mono text-brutal-dim uppercase sm:text-right flex-shrink-0">
            <div>STATUS: UNRESTRICTED</div>
            <div className="text-brutal-green">[ READY FOR ALLOCATION ]</div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Blueprint Grid */}
      <div className="blueprint-grid border border-brutal-border grid-cols-1 lg:grid-cols-12">
        {/* CELL A: CONTROLS & TELEMETRY (8 Cols) */}
        <div className="blueprint-cell lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-brutal-border">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                [ 01 // SELECT RUNWAY TRANCHE ]
              </span>
              <span className="text-[10px] font-mono text-brutal-dim">
                CURRENCY: INR (₹)
              </span>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {PRESET_AMOUNTS.map((item, idx) => {
                const isActive = !isCustom && selectedIdx === idx;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleSelectPreset(idx)}
                    className={`btn-brutal p-3 border text-left text-xs transition-colors ${
                      isActive
                        ? 'border-brutal-red bg-brutal-red text-black font-bold'
                        : 'border-brutal-border bg-brutal-surface text-white hover:border-white'
                    }`}
                  >
                    <div className="font-mono text-[10px] opacity-75">TRANCHE 0{idx + 1}</div>
                    <div className="font-mono font-bold text-sm mt-0.5">{item.label}</div>
                  </button>
                );
              })}

              <button
                onClick={() => {
                  playTactileClick();
                  setIsCustom(true);
                }}
                className={`btn-brutal p-3 border text-left text-xs transition-colors ${
                  isCustom
                    ? 'border-brutal-red bg-brutal-red text-black font-bold'
                    : 'border-brutal-border bg-brutal-surface text-white hover:border-white'
                }`}
              >
                <div className="font-mono text-[10px] opacity-75">VARIABLE</div>
                <div className="font-mono font-bold text-sm mt-0.5">CUSTOM</div>
              </button>
            </div>

            {/* Custom Input */}
            {isCustom && (
              <div className="mb-6 p-3 border border-brutal-border bg-brutal-surface">
                <label className="block text-[10px] font-mono uppercase text-brutal-dim mb-1">
                  SPECIFY VARIABLE ALLOCATION (INR):
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-brutal-red font-bold">₹</span>
                  <input
                    type="number"
                    value={customInr}
                    onChange={(e) => setCustomInr(e.target.value)}
                    placeholder="ENTER AMOUNT"
                    className="w-full bg-black border border-brutal-border px-3 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-brutal-red"
                  />
                </div>
              </div>
            )}

            {/* Telemetry Impact Readout */}
            <div className="border border-brutal-border bg-brutal-dark p-4 mb-8">
              <div className="text-[10px] font-mono text-brutal-dim uppercase mb-1">
                RUNWAY CONVERSION SPECIFICATION:
              </div>
              <div className="text-xs font-mono font-bold text-brutal-green tracking-wide">
                &gt;&gt;&gt; {activeImpact}
              </div>
            </div>

            {/* Patron Handle Input */}
            <div className="mb-6">
              <label className="block text-[10px] font-mono uppercase text-brutal-dim mb-1.5">
                PATRON NAME / ALIAS (FOR DISPATCH LEDGER):
              </label>
              <input
                type="text"
                value={patronName}
                onChange={(e) => setPatronName(e.target.value)}
                placeholder="LEAVE EMPTY FOR ANONYMOUS SOVEREIGN"
                className="w-full bg-brutal-surface border border-brutal-border px-4 py-2.5 text-xs font-mono text-white placeholder:text-neutral-600 focus:outline-none focus:border-white"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-brutal-border flex flex-col sm:flex-row gap-3">
            <a
              href={upiDeepLink}
              onClick={playTactileClick}
              className="btn-brutal flex-1 py-3.5 px-6 bg-brutal-red hover:bg-[#ff4444] text-black font-bold text-xs tracking-wider text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>[ 01: PAY VIA UPI APP ]</span>
              <span>&gt;&gt;&gt;</span>
            </a>

            <button
              onClick={handleClaim}
              className="btn-brutal py-3.5 px-6 border border-white hover:bg-white hover:text-black text-white font-bold text-xs tracking-wider transition-colors"
            >
              [ 02: CLAIM CERTIFICATE ]
            </button>
          </div>
        </div>

        {/* CELL B: GOOGLE PAY SCHEMATIC DOCK (5 Cols) */}
        <div className="blueprint-cell lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between items-center text-center relative">
          {/* Corner crosshairs */}
          <div className="absolute top-3 left-3 text-xs text-brutal-dim font-mono">+</div>
          <div className="absolute top-3 right-3 text-xs text-brutal-dim font-mono">+</div>
          <div className="absolute bottom-3 left-3 text-xs text-brutal-dim font-mono">+</div>
          <div className="absolute bottom-3 right-3 text-xs text-brutal-dim font-mono">+</div>

          <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-brutal-border">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                [ 02 // SCAN TERMINAL ]
              </span>
              <span className="text-[10px] font-mono text-brutal-green">
                ● GOOGLE PAY VERIFIED
              </span>
            </div>

            {/* Target Readout */}
            <div className="mb-4 text-center">
              <div className="text-[10px] font-mono text-brutal-dim uppercase">TARGET INJECTION:</div>
              <div className="font-industrial text-3xl font-black text-white tracking-tight">
                INR {activeInr.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-brutal-dim">
                (≈ ${Math.round(activeInr / 86.5)} USD)
              </div>
            </div>

            {/* Official Google Pay QR Code */}
            <div
              className="relative mx-auto w-full max-w-[240px] bg-white p-3 border-2 border-white cursor-pointer hover:border-brutal-red transition-colors group"
              onClick={() => {
                playTactileClick();
                setIsQrZoomed(true);
              }}
            >
              <img
                src="/GooglePay_QR.png"
                alt="Google Pay UPI QR Code - Hardik Sharma"
                className="w-full h-auto object-contain block"
              />
              <div className="text-[9px] font-mono text-black font-bold uppercase mt-2 tracking-wider">
                [ CLICK TO ENLARGE ]
              </div>
            </div>

            {/* UPI ID Box with 1-Click Copy */}
            <div className="mt-5 w-full flex items-center justify-between border border-brutal-border bg-brutal-surface p-2">
              <code className="text-xs font-mono text-brutal-text truncate pl-2 font-bold">
                {upiId}
              </code>
              <button
                onClick={handleCopyUpi}
                className="btn-brutal px-3 py-1 bg-white hover:bg-neutral-200 text-black text-[11px] font-bold transition-colors flex-shrink-0"
              >
                {copied ? '[ COPIED ]' : '[ COPY ID ]'}
              </button>
            </div>
          </div>

          {/* Alternative Rails Dropdown */}
          <div className="w-full mt-6 pt-4 border-t border-brutal-border text-left">
            <button
              onClick={() => setShowCrypto(!showCrypto)}
              className="text-[10px] font-mono uppercase text-brutal-dim hover:text-white transition-colors flex items-center justify-between w-full"
            >
              <span>{showCrypto ? '[-] HIDE ALTERNATIVE RAILS' : '[+] REVEAL CRYPTO VAULT RAILS'}</span>
              <span>{showCrypto ? '▲' : '▼'}</span>
            </button>

            {showCrypto && (
              <div className="mt-2 p-3 border border-brutal-border bg-brutal-dark text-[11px] font-mono space-y-2">
                <div>
                  <span className="text-brutal-dim block text-[10px]">USDC (SOLANA / BASE):</span>
                  <code className="text-white select-all">7XqP...hardik...88Base</code>
                </div>
                <div>
                  <span className="text-brutal-dim block text-[10px]">ETH / MAINNET:</span>
                  <code className="text-white select-all">0xHardikSharma...99aC</code>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Zoom for GooglePay QR */}
      {isQrZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 cursor-zoom-out"
          onClick={() => {
            playTactileClick();
            setIsQrZoomed(false);
          }}
        >
          <div className="relative max-w-sm w-full bg-white p-4 border-4 border-brutal-red text-black">
            <button
              onClick={() => setIsQrZoomed(false)}
              className="absolute -top-10 right-0 text-white font-mono text-xs uppercase"
            >
              [ CLOSE X ]
            </button>
            <img
              src="/GooglePay_QR.png"
              alt="Google Pay UPI QR Code - Hardik Sharma"
              className="w-full h-auto object-contain block"
            />
            <div className="text-center mt-3 font-mono text-xs font-bold uppercase">
              SCAN WITH GPAY / PHONEPE / PAYTM
            </div>
            <div className="text-center font-mono text-[11px] text-neutral-600">
              hardikksharmaaa-1@okicici
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
