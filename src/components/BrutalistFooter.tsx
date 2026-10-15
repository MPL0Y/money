import React from 'react';

export const BrutalistFooter: React.FC = () => {
  return (
    <footer className="border-t border-brutal-border bg-brutal-dark text-[11px] font-mono text-brutal-dim uppercase py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-white font-bold">HARDIK SHARMA</span> // ASYMMETRIC GROWTH SYNDICATE
          <div className="text-[10px] text-neutral-500 mt-0.5">
            HOSTED AT MONEY.AGENTICRABBIT.COM // DEPLOYED VIA CLOUDFLARE WORKERS
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MPL0Y/money"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            [ GITHUB ]
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            [ X / TWITTER ]
          </a>
          <span className="text-brutal-green">[ 200 OK ]</span>
        </div>
      </div>
    </footer>
  );
};
