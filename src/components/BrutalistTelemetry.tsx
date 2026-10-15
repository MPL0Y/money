import React from 'react';

export const BrutalistTelemetry: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      {/* 3-Column Blueprint Grid */}
      <div className="blueprint-grid border border-brutal-border grid-cols-1 md:grid-cols-3">
        <div className="blueprint-cell p-6">
          <div className="text-[10px] font-mono uppercase text-brutal-dim mb-2">
            TELEMETRY // METRIC-01
          </div>
          <div className="font-industrial text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
            14.8H <span className="text-sm font-mono text-brutal-dim font-normal">/ DAY</span>
          </div>
          <div className="text-xs font-mono font-bold text-brutal-green uppercase mb-1">
            DEEP NEURAL FLOW LOCK
          </div>
          <p className="text-[11px] font-mono text-brutal-dim leading-relaxed uppercase">
            Top 0.02% world rank in uninhibited technical concentration. Zero meetings.
          </p>
        </div>

        <div className="blueprint-cell p-6">
          <div className="text-[10px] font-mono uppercase text-brutal-dim mb-2">
            TELEMETRY // METRIC-02
          </div>
          <div className="font-industrial text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
            48+ <span className="text-sm font-mono text-brutal-dim font-normal">COMMITS</span>
          </div>
          <div className="text-xs font-mono font-bold text-brutal-red uppercase mb-1">
            WEEKLY SHIP CADENCE
          </div>
          <p className="text-[11px] font-mono text-brutal-dim leading-relaxed uppercase">
            Continuous production deployment. Systems architected, tested, and released.
          </p>
        </div>

        <div className="blueprint-cell p-6">
          <div className="text-[10px] font-mono uppercase text-brutal-dim mb-2">
            TELEMETRY // METRIC-03
          </div>
          <div className="font-industrial text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
            100.0%
          </div>
          <div className="text-xs font-mono font-bold text-white uppercase mb-1">
            CAPITAL CONVERSION
          </div>
          <p className="text-[11px] font-mono text-brutal-dim leading-relaxed uppercase">
            Every single rupee directly buys compute clusters, silicon, and runway.
          </p>
        </div>
      </div>
    </section>
  );
};
