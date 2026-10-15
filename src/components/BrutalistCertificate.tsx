import React, { useState } from 'react';
import { CertificateData } from '../types';
import { playTactileClick } from '../utils/audio';

interface BrutalistCertificateProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export const BrutalistCertificate: React.FC<BrutalistCertificateProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(certificate.hash);
    playTactileClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = `OFFICIAL DISPATCH: I have allocated capital to @hardiksharma under the Industrial Growth Protocol (Ref: ${certificate.certificateId}). Backing singular human velocity is non-negotiable. ⚡️`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 overflow-y-auto">
      <div className="w-full max-w-xl my-8">
        {/* Top Control */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="btn-brutal px-3 py-1 border border-white text-white text-xs hover:bg-white hover:text-black transition-colors"
          >
            [ CLOSE ESC ]
          </button>
        </div>

        {/* Industrial Dispatch Certificate */}
        <div className="border-2 border-white bg-black p-6 sm:p-10 font-mono text-white relative">
          {/* Corner Crosshairs */}
          <div className="absolute top-2 left-2 text-xs text-neutral-500">+</div>
          <div className="absolute top-2 right-2 text-xs text-neutral-500">+</div>
          <div className="absolute bottom-2 left-2 text-xs text-neutral-500">+</div>
          <div className="absolute bottom-2 right-2 text-xs text-neutral-500">+</div>

          {/* Certificate Header */}
          <div className="border-b border-white pb-4 mb-6">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase mb-2">
              <span>SYSTEM DISPATCH // MIL-SPEC 2026</span>
              <span className="text-brutal-red font-bold">[ OFFICIAL LEDGER ]</span>
            </div>
            <h2 className="font-industrial text-2xl sm:text-3xl font-black text-white tracking-tight">
              PATRON EQUITY TOKEN
            </h2>
            <div className="text-xs text-neutral-400 mt-1 uppercase">
              HARDIK SHARMA // HUMAN GROWTH FUND
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 mb-8 text-xs leading-relaxed uppercase">
            <div>
              <span className="text-neutral-500 block text-[10px]">RECIPIENT / PATRON IDENTIFIER:</span>
              <span className="text-lg font-bold text-white tracking-wide">
                {certificate.patronName}
              </span>
            </div>

            <div className="p-3 border border-neutral-800 bg-neutral-950">
              <span className="text-neutral-500 block text-[10px] mb-1">ATTESTATION STATEMENT:</span>
              <p className="text-neutral-300">
                THIS CERTIFICATE CONFIRMS AN UNCONDITIONAL ALLOCATION TO THE RUNWAY AND COMPUTE CAPACITIES OF HARDIK SHARMA. LIQUIDITY HAS BEEN DIRECTLY SECURED FOR SILICON, COMPUTE CLUSTERS, AND HIGH-VELOCITY DEEP WORK.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="p-2 border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">CERTIFICATE ID:</span>
                <span className="font-bold text-white">{certificate.certificateId}</span>
              </div>
              <div className="p-2 border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">EQUITY TRANCHE:</span>
                <span className="font-bold text-brutal-green">{certificate.tierName}</span>
              </div>
              <div className="p-2 border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">DATE OF RECORD:</span>
                <span className="font-bold text-white">{certificate.issuedAt}</span>
              </div>
              <div className="p-2 border border-neutral-800">
                <span className="text-neutral-500 block text-[9px]">AUTHENTICATION:</span>
                <span className="font-bold text-brutal-green">[ VERIFIED ]</span>
              </div>
            </div>
          </div>

          {/* Cryptographic SHA-256 Hash */}
          <div className="p-3 border border-neutral-800 bg-neutral-950 mb-8 flex items-center justify-between gap-2">
            <div className="truncate">
              <span className="text-[9px] text-neutral-500 block">SHA-256 LEDGER HASH:</span>
              <code className="text-[11px] text-neutral-300 truncate block">
                {certificate.hash}
              </code>
            </div>
            <button
              onClick={handleCopyHash}
              className="btn-brutal px-2.5 py-1 border border-neutral-700 hover:border-white text-[10px] text-white flex-shrink-0"
            >
              {copied ? '[ COPIED ]' : '[ COPY ]'}
            </button>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playTactileClick}
              className="btn-brutal flex-1 py-3 bg-white hover:bg-neutral-200 text-black font-bold text-xs text-center transition-colors uppercase"
            >
              [ BROADCAST ON X / TWITTER ]
            </a>
            <button
              onClick={() => {
                playTactileClick();
                window.print();
              }}
              className="btn-brutal py-3 px-5 border border-white hover:bg-neutral-900 text-white font-bold text-xs transition-colors uppercase"
            >
              [ PRINT DISPATCH ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
