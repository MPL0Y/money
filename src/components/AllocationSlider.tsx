import React, { useState } from 'react';
import { IconArrowUpRight, IconCpu, IconSparkles, IconTrendingUp } from './Icons';
import { playTactileClick } from '../utils/audio';

interface AllocationSliderProps {
  onCommitAmount: (amount: number) => void;
}

const sliderPresets = [50, 100, 250, 500, 1000, 2500, 5000, 10000];

export const AllocationSlider: React.FC<AllocationSliderProps> = ({ onCommitAmount }) => {
  const [amount, setAmount] = useState<number>(500);

  const calculateImpact = (val: number) => {
    const gpuHours = Math.round(val * 0.42);
    const deepFlowDays = (val / 75).toFixed(1);
    const enterpriseValue = (val * 18.5).toLocaleString();

    let patronTier = 'Cognitive Fuel Patron';
    if (val >= 5000) patronTier = 'Sovereign Syndicate Member';
    else if (val >= 1000) patronTier = 'Lead Angel Partner';
    else if (val >= 250) patronTier = 'Neural Compute Backer';

    return { gpuHours, deepFlowDays, enterpriseValue, patronTier };
  };

  const impact = calculateImpact(amount);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value, 10);
    setAmount(newVal);
    playTactileClick();
  };

  const handlePresetClick = (preset: number) => {
    setAmount(preset);
    playTactileClick();
  };

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto">
      <div className="double-bezel-outer">
        <div className="double-bezel-inner p-8 sm:p-12 relative overflow-hidden bg-obsidian-900">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow and Title */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="eyebrow-badge mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              DYNAMIC IMPACT CALCULATOR
            </div>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Simulate Your Capital Leverage
            </h3>
            <p className="mt-2 text-sm text-neutral-400 font-light max-w-lg">
              Adjust your contribution to see the immediate mathematical acceleration of Hardik's research & building capacity.
            </p>
          </div>

          {/* Amount Display with Clash Display */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              PROPOSED ALLOCATION
            </div>
            <div className="font-heading font-bold text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 tracking-tight">
              ${amount.toLocaleString()}
            </div>
            <div className="mt-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-300 font-medium">
              {impact.patronTier}
            </div>
          </div>

          {/* Luxury Custom Slider */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative flex items-center">
              <input
                type="range"
                min="25"
                max="10000"
                step="25"
                value={amount}
                onChange={handleSliderChange}
                className="w-full h-3 rounded-full appearance-none cursor-pointer bg-white/[0.08] accent-amber-400 focus:outline-none"
              />
            </div>

            {/* Quick preset chips */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {sliderPresets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetClick(preset)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                    amount === preset
                      ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  ${preset >= 1000 ? `${preset / 1000}k` : preset}
                </button>
              ))}
            </div>
          </div>

          {/* Real-Time Impact Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <IconCpu size={14} className="text-cyan-400" />
                <span>GPU Cluster Fuel</span>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                ~{impact.gpuHours} <span className="text-sm font-normal text-neutral-400">Hours</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-300/80 mt-1">
                Direct H100 Tensor compute
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <IconSparkles size={14} className="text-emerald-400" />
                <span>Deep Work Sprints</span>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                ~{impact.deepFlowDays} <span className="text-sm font-normal text-neutral-400">Days</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-300/80 mt-1">
                Zero distraction building
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <IconTrendingUp size={14} className="text-amber-400" />
                <span>Projected Leverage</span>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                ${impact.enterpriseValue}
              </div>
              <div className="text-[11px] font-mono text-amber-300/80 mt-1">
                Estimated ecosystem alpha
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                playTactileClick();
                onCommitAmount(amount);
              }}
              className="btn-nested group pl-8 pr-3 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-obsidian-950 font-bold text-sm tracking-wide shadow-glow-gold hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] flex items-center gap-4"
            >
              <span>Allocate ${amount.toLocaleString()} to Hardik</span>
              <div className="btn-nested-icon w-8 h-8 rounded-full bg-black/15 flex items-center justify-center">
                <IconArrowUpRight size={14} className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
