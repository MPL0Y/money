import React from 'react';

export const BrutalistLedger: React.FC = () => {
  const records = [
    { id: 'LOG-881', patron: 'ALEX V.', amount: '25,000 INR', note: 'SHIPS FASTER THAN 10-PERSON TEAMS.' },
    { id: 'LOG-882', patron: 'NATHALIE C.', amount: '10,000 INR', note: 'OBSESSIVE TASTE. GENERATIONAL VELOCITY.' },
    { id: 'LOG-883', patron: 'MARCUS S.', amount: '5,000 INR', note: 'BUYING ASYMMETRIC HUMAN ALPHA.' },
    { id: 'LOG-884', patron: 'KAVYA S.', amount: '2,500 INR', note: 'NON-NEGOTIABLE TRADE.' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="border border-brutal-border bg-brutal-dark">
        <div className="p-4 border-b border-brutal-border flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
            [ DECLASSIFIED BACKER LEDGER ]
          </span>
          <span className="text-[10px] font-mono text-brutal-dim">
            IMMUTABLE TRANSACTION LOG
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-brutal-border text-brutal-dim text-[10px] uppercase bg-brutal-surface">
                <th className="p-3">ENTRY ID</th>
                <th className="p-3">PATRON ENTITY</th>
                <th className="p-3">INJECTION</th>
                <th className="p-3">DISPATCH NOTE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brutal-border">
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-brutal-surface/50 transition-colors">
                  <td className="p-3 text-brutal-dim">{r.id}</td>
                  <td className="p-3 text-white font-bold">{r.patron}</td>
                  <td className="p-3 text-brutal-green font-bold">{r.amount}</td>
                  <td className="p-3 text-brutal-text">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
