import React, { useRef } from 'react';
import { CertificateData } from '../types';
import { IconCross, IconShieldCheck, IconCopy, IconCheck } from './Icons';
import { playTactileClick } from '../utils/audio';

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const certRef = useRef<HTMLDivElement | null>(null);

  if (!certificate) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(certificate.hash);
    playTactileClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `I just backed the growth of @hardiksharma in the Sovereign Syndicate Tranche 04 ($${certificate.amount.toLocaleString()}). Backing singular human leverage is non-negotiable. ⚡️`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-3xl overflow-y-auto">
      <div className="w-full max-w-2xl my-8">
        {/* Close Button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-white transition-colors"
          >
            <IconCross size={15} />
          </button>
        </div>

        {/* The Physical Double-Bezel Hardware Certificate */}
        <div ref={certRef} className="double-bezel-outer ring-1 ring-amber-400/40">
          <div className="double-bezel-inner p-8 sm:p-12 bg-gradient-to-b from-obsidian-900 via-obsidian-950 to-black text-center relative overflow-hidden">
            {/* Ambient Gold Nebula */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Corner Decorative Hairline Accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-amber-400/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-amber-400/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-amber-400/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-amber-400/40" />

            {/* Certificate Header */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-[1px] mb-4 shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                <div className="w-full h-full rounded-2xl bg-obsidian-950 flex items-center justify-center font-heading font-bold text-xl text-amber-400">
                  HS
                </div>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-amber-300 font-semibold mb-1">
                HARDIK SHARMA GROWTH SYNDICATE
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ANGEL PATRON EQUITY TOKEN
              </h2>
              <div className="text-xs font-mono text-neutral-400 mt-1">
                TRANCHE 04 // SERIES ∞ SOVEREIGN LEDGER
              </div>
            </div>

            {/* Main Certificate Statement */}
            <div className="my-8 py-6 border-y border-white/[0.08] relative">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                THIS OFFICIAL RECORD ATTESTS THAT
              </p>
              <div className="font-heading text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 mb-3">
                {certificate.patronName}
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
                has unconditionally allocated <span className="font-mono text-amber-300 font-semibold">${certificate.amount.toLocaleString()} USD</span> to the cognitive acceleration, research sovereignty, and relentless engineering throughput of Hardik Sharma.
              </p>

              {certificate.patronNote && (
                <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-amber-200/90 italic max-w-md mx-auto">
                  "{certificate.patronNote}"
                </div>
              )}
            </div>

            {/* Certificate Ledger Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-mono text-xs mb-8">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[9px] uppercase tracking-wider text-neutral-500">Certificate ID</div>
                <div className="font-semibold text-white mt-0.5">{certificate.certificateId}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[9px] uppercase tracking-wider text-neutral-500">Allocation Tier</div>
                <div className="font-semibold text-amber-300 mt-0.5 truncate">{certificate.tierName}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[9px] uppercase tracking-wider text-neutral-500">Date Issued</div>
                <div className="font-semibold text-white mt-0.5">{certificate.issuedAt}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[9px] uppercase tracking-wider text-neutral-500">Status</div>
                <div className="font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                  <IconShieldCheck size={12} /> VERIFIED
                </div>
              </div>
            </div>

            {/* Cryptographic Hash */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between gap-2 text-left mb-8">
              <div className="truncate">
                <div className="text-[9px] font-mono uppercase text-neutral-500">SHA-256 Proof Hash</div>
                <code className="text-[11px] font-mono text-neutral-300 truncate block">
                  {certificate.hash}
                </code>
              </div>
              <button
                onClick={handleCopyHash}
                className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-neutral-300 flex items-center gap-1 transition-colors flex-shrink-0"
              >
                {copied ? <IconCheck size={12} className="text-emerald-400" /> : <IconCopy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Sharing & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTactileClick}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Broadcast on X / Twitter</span>
                <span className="text-neutral-600">↗</span>
              </a>
              <button
                onClick={() => {
                  playTactileClick();
                  window.print();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-xs tracking-wide transition-colors"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
