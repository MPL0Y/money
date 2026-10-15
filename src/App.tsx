import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Header } from './components/Header';
import { HeroPayment } from './components/HeroPayment';
import { ProofOfWork } from './components/ProofOfWork';
import { PatronLedger } from './components/PatronLedger';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';
import { CertificateData } from './types';

export const App: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);

  const handleClaimBadge = (cert: CertificateData) => {
    setActiveCertificate(cert);
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#07070a] text-neutral-200 selection:bg-amber-400/20 selection:text-amber-200 flex flex-col justify-between">
      {/* Background Generative Canvas & Atmosphere */}
      <BackgroundCanvas />

      {/* Main Container */}
      <div className="relative z-20 flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroPayment onClaimBadge={handleClaimBadge} />
          <ProofOfWork />
          <PatronLedger />
        </main>
      </div>

      {/* Clean Timeless Footer */}
      <Footer />

      {/* Cryptographic Angel Patron Certificate Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};

export default App;
