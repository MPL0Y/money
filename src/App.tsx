import React, { useState } from 'react';
import { BrutalistHeader } from './components/BrutalistHeader';
import { BrutalistTerminal } from './components/BrutalistTerminal';
import { BrutalistTelemetry } from './components/BrutalistTelemetry';
import { BrutalistLedger } from './components/BrutalistLedger';
import { BrutalistFooter } from './components/BrutalistFooter';
import { BrutalistCertificate } from './components/BrutalistCertificate';
import { CertificateData } from './types';

export const App: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);

  return (
    <div className="relative min-h-[100dvh] bg-brutal-bg text-brutal-text flex flex-col justify-between">
      {/* CRT Scanline Filter Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 crt-overlay opacity-25" />

      {/* Main Structural Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <BrutalistHeader />
        
        <main className="flex-1">
          <BrutalistTerminal onClaimCertificate={(cert) => setActiveCertificate(cert)} />
          <BrutalistTelemetry />
          <BrutalistLedger />
        </main>
      </div>

      <BrutalistFooter />

      {/* Industrial Dispatch Certificate Modal */}
      <BrutalistCertificate
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
};

export default App;
