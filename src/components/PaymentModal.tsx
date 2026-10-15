import React, { useState } from 'react';
import { InvestmentTier, CertificateData } from '../types';
import {
  IconCross,
  IconArrowUpRight,
  IconQrCode,
  IconCopy,
  IconCheck,
  IconShieldCheck,
  IconLock,
} from './Icons';
import { playTactileClick, playAllocationSuccessSound } from '../utils/audio';
import { triggerLuxuriousConfetti } from '../utils/confetti';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier?: InvestmentTier | null;
  customAmount?: number;
  onSuccess: (certificate: CertificateData) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  tier,
  customAmount,
  onSuccess,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'card' | 'crypto'>('upi');
  const [patronName, setPatronName] = useState('');
  const [patronNote, setPatronNote] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cryptoCurrency, setCryptoCurrency] = useState<'USDC' | 'SOL' | 'ETH'>('USDC');
  const [isQrZoomed, setIsQrZoomed] = useState(false);

  if (!isOpen) return null;

  const finalAmount = tier ? tier.amount : customAmount || 500;
  const inrAmount = Math.round(finalAmount * 86.5);
  const upiId = 'hardikksharmaaa-1@okicici';
  const cryptoAddresses: Record<string, string> = {
    USDC: '7XqP...hardik...88SolanaBase',
    SOL: 'HS99HardikGrowthFundSolanaX8',
    ETH: '0xHardikSharmaGrowthFund9999aC',
  };

  const handleCopy = (text: string, type: 'upi' | 'crypto') => {
    navigator.clipboard.writeText(text);
    playTactileClick();
    if (type === 'upi') {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else {
      setCopiedCrypto(true);
      setTimeout(() => setCopiedCrypto(false), 2000);
    }
  };

  const handleCompleteAllocation = () => {
    setIsProcessing(true);
    playTactileClick();

    setTimeout(() => {
      setIsProcessing(false);
      playAllocationSuccessSound();
      triggerLuxuriousConfetti();

      const cert: CertificateData = {
        certificateId: `HS-${Math.floor(100000 + Math.random() * 900000)}`,
        patronName: patronName.trim() || 'Anonymous Sovereign Angel',
        amount: finalAmount,
        tierName: tier ? tier.name : 'Custom Sovereign Allocation',
        issuedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        hash: `0x${Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
        tierCode: tier ? tier.code : 'SOVEREIGN-CUSTOM-TRANCHE',
        patronNote: patronNote.trim() || undefined,
      };

      onSuccess(cert);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
      <div className="double-bezel-outer w-full max-w-xl max-h-[92vh] overflow-y-auto">
        <div className="double-bezel-inner bg-obsidian-900 p-6 sm:p-8 relative">
          {/* Close button */}
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <IconCross size={14} />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="eyebrow-badge mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              CAPITAL ALLOCATION TERMINAL
            </div>
            <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
              {tier ? tier.name : 'Custom Sovereign Syndicate'}
            </h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-heading text-3xl font-bold text-amber-400">
                ${finalAmount.toLocaleString()} USD
              </span>
              <span className="text-xs font-mono text-neutral-400">
                (≈ ₹{inrAmount.toLocaleString()} INR)
              </span>
            </div>
          </div>

          {/* Patron Credentials Input */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                Patron Name or Entity (for Certificate)
              </label>
              <input
                type="text"
                placeholder="e.g. Satoshi N. or Leave empty for Anonymous Angel"
                value={patronName}
                onChange={(e) => setPatronName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/50 font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                Dispatch Note to Hardik (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Keep compounding, Hardik. We're all in."
                value={patronNote}
                onChange={(e) => setPatronNote(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/50 font-mono text-xs"
              />
            </div>
          </div>

          {/* Payment Method Selector Tabs */}
          <div className="mb-6">
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Select Settlement Rail
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-white/[0.03] border border-white/10">
              {[
                { id: 'upi', label: 'UPI / QR', sub: 'Instant GPay/PhonePe' },
                { id: 'card', label: 'Cards / Apple Pay', sub: 'Global 1-Click' },
                { id: 'crypto', label: 'Crypto', sub: 'USDC / SOL / ETH' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedMethod(m.id as any);
                  }}
                  className={`py-2 px-3 rounded-xl text-left transition-all ${
                    selectedMethod === m.id
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs">{m.label}</div>
                  <div className="text-[9px] font-mono opacity-70 hidden sm:block">
                    {m.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rail Specific Details */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-6">
            {selectedMethod === 'upi' && (
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Visual QR Code Display from GooglePay_QR.PNG */}
                <div className="relative group/qr flex-shrink-0 cursor-pointer" onClick={() => setIsQrZoomed(true)}>
                  <div className="w-36 sm:w-44 rounded-2xl bg-white p-2.5 flex flex-col items-center justify-center shadow-2xl ring-1 ring-white/30 transition-transform duration-300 group-hover/qr:scale-105">
                    <img
                      src="/GooglePay_QR.png"
                      alt="Google Pay UPI QR Code - Hardik Sharma"
                      className="w-full h-auto rounded-xl object-contain"
                    />
                  </div>
                  <div className="text-[10px] text-center font-mono text-neutral-400 mt-2 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      Google Pay / UPI
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <IconCheck size={10} /> Verified
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-white text-base mb-1">
                    Hardik Sharma
                  </h4>

                  <p className="text-xs text-neutral-300 font-light mb-3">
                    Scan using Google Pay, PhonePe, Paytm, CRED, or any UPI app.
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <code className="text-xs font-mono bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg text-white">
                      {upiId}
                    </code>
                    <button
                      onClick={() => handleCopy(upiId, 'upi')}
                      className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
                      title="Copy UPI ID"
                    >
                      {copiedUpi ? <IconCheck size={14} className="text-emerald-400" /> : <IconCopy size={14} />}
                    </button>
                  </div>

                  {/* Direct Mobile UPI Deep Link */}
                  <div className="flex justify-center sm:justify-start">
                    <a
                      href={`upi://pay?pa=${upiId}&pn=Hardik%20Sharma&am=${inrAmount}&cu=INR&tn=Hardik%20Sharma%20Growth%20Fund`}
                      onClick={playTactileClick}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-obsidian-950 font-semibold text-xs hover:bg-amber-300 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95"
                    >
                      <span>Pay directly via UPI App</span>
                      <IconArrowUpRight size={13} className="text-obsidian-950" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'card' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Direct Encrypted Gateway</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <IconLock size={12} /> 256-Bit TLS
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span>Apple Pay & Google Pay Supported</span>
                  <span className="text-amber-400 font-bold">1-TAP VERIFIED</span>
                </div>
                <p className="text-xs text-neutral-400 font-light">
                  Simulated settlement or direct card tokenization. Click confirm to process and issue your cryptographic angel certificate.
                </p>
              </div>
            )}

            {selectedMethod === 'crypto' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {(['USDC', 'SOL', 'ETH'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        playTactileClick();
                        setCryptoCurrency(curr);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        cryptoCurrency === curr
                          ? 'bg-amber-400 text-black font-bold'
                          : 'bg-white/[0.05] text-neutral-300 border border-white/10'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 mb-1">
                    Send {cryptoCurrency} to sovereign vault:
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg text-white truncate flex-1">
                      {cryptoAddresses[cryptoCurrency]}
                    </code>
                    <button
                      onClick={() => handleCopy(cryptoAddresses[cryptoCurrency], 'crypto')}
                      className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-colors"
                    >
                      {copiedCrypto ? <IconCheck size={14} className="text-emerald-400" /> : <IconCopy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleCompleteAllocation}
            disabled={isProcessing}
            className="btn-nested group w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-obsidian-950 font-bold text-sm tracking-wide shadow-glow-gold hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isProcessing ? (
              <span>Confirming on Sovereign Ledger...</span>
            ) : (
              <>
                <span>Complete Allocation & Receive Certificate</span>
                <div className="btn-nested-icon w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
                  <IconArrowUpRight size={13} className="text-black" />
                </div>
              </>
            )}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-500 text-center">
            <IconShieldCheck size={13} className="text-emerald-400" />
            <span>Cryptographic Proof-of-Belief Token Generated Instantly</span>
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
          <div className="relative max-w-sm w-full bg-white p-4 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
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
              Scan with GPay / PhonePe / Paytm
            </div>
            <div className="text-center text-neutral-500 font-mono text-[11px]">
              hardikksharmaaa-1@okicici
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
