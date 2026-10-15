import confetti from 'canvas-confetti';

export const triggerLuxuriousConfetti = () => {
  const colors = ['#f59e0b', '#34d399', '#38bdf8', '#ffffff', '#eab308'];

  // Left burst
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
    drift: 0.1,
  });

  // Right burst
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
    drift: -0.1,
  });

  // Center golden star shower
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fde68a', '#ffffff'],
      scalar: 1.25,
      ticks: 300,
      gravity: 0.8,
    });
  }, 200);
};
