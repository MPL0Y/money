import React, { useState } from 'react';
import { IconTerminal, IconArrowUpRight } from './Icons';
import { playTactileClick } from '../utils/audio';

interface TerminalSectionProps {
  onOpenAllocate: () => void;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({ onOpenAllocate }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; response: string | React.ReactNode }>>([
    {
      command: 'sys.status',
      response: 'HARDIK_KERNEL v4.2.0-sovereign [ARM64]\nAll neural substrates operational. Flow state: 14.8h/day.\nTranche 04 is currently OPEN for sovereign syndicate allocations.',
    },
    {
      command: 'eval --roi',
      response: 'ROI_PROJECTION: Mathematically uncapped. Traditional equities give 8%. Hardik Sharma converts capital to compounding foundational intelligence at exponential scale.',
    },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    playTactileClick();

    let response: string | React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = `AVAILABLE PROTOCOLS:
  allocate          - Launch investment checkout terminal
  thesis            - Inspect the core investment logic
  metrics           - View live telemetry & GPU load
  why               - Query why capital allocation is non-negotiable
  clear             - Flush terminal screen`;
        break;
      case 'allocate':
      case 'allocate --max':
        response = 'INITIALIZING SYNDICATE CHECKOUT PROTOCOL...';
        setTimeout(() => onOpenAllocate(), 400);
        break;
      case 'thesis':
        response = 'THESIS: Human singularity asset. Investing in Hardik is the highest-conviction capital allocation available in 2026.';
        break;
      case 'metrics':
        response = `CURRENT TELEMETRY:
  - Deep Focus: 14.8 hrs/day (99.98th percentile)
  - Ship Velocity: 48 commits/week (Continuous prod deploys)
  - Cluster Load: 4x H100 Tensor Core GPUs active (97.8%)
  - Cognitive Overhead: 0.00% Zero`;
        break;
      case 'why':
      case 'why-pay':
        response = 'BECAUSE PAYING IS NON-NEGOTIABLE: In an ocean of commoditized AI wrappers, Hardik has the raw taste, stamina, and execution velocity to win hundreds of global awards and build world-shaping software.';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        response = `Command not recognized: '${trimmed}'. Type 'help' for command directory or 'allocate' to invest.`;
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section id="terminal" className="relative py-24 px-4 max-w-4xl mx-auto">
      <div className="double-bezel-outer">
        <div className="double-bezel-inner bg-obsidian-950 p-6 sm:p-8 font-mono text-xs text-neutral-300">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-neutral-400 text-[11px]">
                hardik-growth-kernel — zsh — 80x24
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-neutral-500 uppercase">
              <IconTerminal size={13} className="text-amber-400" />
              <span>INTERACTIVE CLI</span>
            </div>
          </div>

          {/* Quick preset commands */}
          <div className="flex flex-wrap gap-2 mb-4 text-[11px]">
            <span className="text-neutral-500 py-1">Quick Run:</span>
            {['help', 'allocate', 'metrics', 'thesis', 'why', 'clear'].map((c) => (
              <button
                key={c}
                onClick={() => handleCommand(c)}
                className="px-2 py-0.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-amber-300 border border-white/10 transition-colors"
              >
                ${c}
              </button>
            ))}
          </div>

          {/* Terminal Logs & History */}
          <div className="space-y-4 max-h-72 overflow-y-auto mb-4 pr-2">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400">
                  <span className="text-neutral-600">patron@sovereign:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-neutral-300 whitespace-pre-wrap pl-4 border-l border-white/10 font-light leading-relaxed">
                  {item.response}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Prompt Input Line */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-amber-400">patron@sovereign:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'allocate' or 'help' and press Enter..."
              className="flex-1 bg-transparent text-white focus:outline-none caret-amber-400 font-mono text-xs placeholder:text-neutral-600"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-3 py-1 rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/20 text-[10px] transition-colors"
            >
              RUN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
