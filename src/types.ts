export interface InvestmentTier {
  id: string;
  name: string;
  code: string;
  amount: number;
  cadence: string;
  tagline: string;
  description: string;
  accentColor: string;
  popular?: boolean;
  perks: string[];
  metricsImpact: {
    computeBonus: string;
    throughputMultiplier: string;
    enterpriseMoat: string;
  };
}

export interface BackerEvent {
  id: string;
  name: string;
  handle: string;
  amount: number;
  tierName: string;
  timeAgo: string;
  quote?: string;
  avatarSeed: string;
}

export interface HardikMetric {
  label: string;
  value: string;
  change: string;
  sublabel: string;
  category: 'cognitive' | 'compute' | 'velocity' | 'impact';
}

export interface CertificateData {
  certificateId: string;
  patronName: string;
  amount: number;
  tierName: string;
  issuedAt: string;
  hash: string;
  tierCode: string;
  patronNote?: string;
}
