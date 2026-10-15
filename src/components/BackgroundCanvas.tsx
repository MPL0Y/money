import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  color: string;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with interpolation
    const mouse = {
      x: width / 2,
      y: height / 3,
      targetX: width / 2,
      targetY: height / 3,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Generate ethereal particles
    const particleColors = [
      'rgba(245, 158, 11, ', // Gold
      'rgba(52, 211, 153, ',  // Emerald
      'rgba(56, 189, 248, ',  // Cyan
      'rgba(255, 255, 255, ',  // Pure starlight
    ];

    const particleCount = Math.min(Math.floor((width * height) / 28000), 55);
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.4 + 0.1,
      alpha: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }));

    let step = 0;

    const render = () => {
      step += 0.005;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle radial gradient spotlight tracking cursor
      const cursorGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width * 0.45, 380)
      );
      cursorGlow.addColorStop(0, 'rgba(56, 189, 248, 0.055)');
      cursorGlow.addColorStop(0.35, 'rgba(167, 139, 250, 0.035)');
      cursorGlow.addColorStop(0.7, 'rgba(245, 158, 11, 0.015)');
      cursorGlow.addColorStop(1, 'rgba(3, 3, 5, 0)');

      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Ambient generative orbs fixed in spatial rhythm
      const orb1X = width * 0.2 + Math.sin(step) * 40;
      const orb1Y = height * 0.25 + Math.cos(step * 0.8) * 30;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 400);
      grad1.addColorStop(0, 'rgba(52, 211, 153, 0.06)');
      grad1.addColorStop(1, 'rgba(3, 3, 5, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.82 - Math.cos(step * 0.7) * 50;
      const orb2Y = height * 0.45 + Math.sin(step) * 35;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 450);
      grad2.addColorStop(0, 'rgba(234, 179, 8, 0.05)');
      grad2.addColorStop(1, 'rgba(3, 3, 5, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 3. Render and drift celestial particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse alpha gently
        p.alpha = p.baseAlpha + Math.sin(step * 3 + p.x) * 0.15;
        if (p.alpha < 0.05) p.alpha = 0.05;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      />
      {/* Precision film grain texture overlay on fixed pointer-events-none layer */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-noise opacity-40 mix-blend-overlay" />
    </>
  );
};
