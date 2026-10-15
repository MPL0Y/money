import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheThesis } from './components/TheThesis';
import { LiveMetrics } from './components/LiveMetrics';
import { AllocationSlider } from './components/AllocationSlider';
import { TiersGrid, INVESTMENT_TIERS } from './components/TiersGrid';
import { TerminalSection } from './components/TerminalSection';
import { AngelTicker } from './components/AngelTicker';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PaymentModal } from './components/PaymentModal';
import { CertificateModal } from './components/CertificateModal';
import { InvestmentTier, CertificateData } from './types';

export const App: React.FC = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<InvestmentTier | null>(null);
  const [customAmount, setCustomAmount] = useState<number | undefined>(undefined);
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);

  const handleOpenAllocate = (tierId?: string) => {
    if (tierId) {
      const match = INVESTMENT_TIERS.find((t) => t.id === tierId);
      if (match) {
        setSelectedTier(match);
        setCustomAmount(undefined);
      }
    } else {
      setSelectedTier(INVESTMENT_TIERS[1]); // Default to Neural Compute ($250)
      setCustomAmount(undefined);
    }
    setIsPaymentOpen(true);
  };

  const handleSelectTier = (tier: InvestmentTier) => {
    setSelectedTier(tier);
    setCustomAmount(undefined);
    setIsPaymentOpen(true);
  };

  const handleCommitSliderAmount = (amount: number) => {
    setSelectedTier(null);
    setCustomAmount(amount);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = (certificate: CertificateData) => {
    setIsPaymentOpen(false);
    setActiveCertificate(certificate);
  };

  const scrollToTiers = () => {
    const el = document.getElementById('tiers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-obsidian-950 text-neutral-200 selection:bg-amber-400/20 selection:text-amber-200">
      {/* Background Generative Canvas & Noise */}
      <BackgroundCanvas />

      {/* Floating Island Navigation */}
      <Navbar onOpenAllocate={() => handleOpenAllocate()} />

      {/* Main Experience */}
      <main className="relative z-20">
        <Hero
          onOpenAllocate={() => handleOpenAllocate()}
          onExploreTiers={scrollToTiers}
        />

        <TheThesis />

        <LiveMetrics />

        <AllocationSlider onCommitAmount={handleCommitSliderAmount} />

        <TiersGrid onSelectTier={handleSelectTier} />

        <TerminalSection onOpenAllocate={() => handleOpenAllocate()} />

        <AngelTicker />

        <FAQSection />
      </main>

      {/* Agency Luxury Footer */}
      <Footer />

      {/* Modals */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        tier={selectedTier}
        customAmount={customAmount}
        onSuccess={handlePaymentSuccess}
      />

      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};

export default App;
