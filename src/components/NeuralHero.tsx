'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export default function NeuralHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let nodes: NodePoint[] = [];

    const createNodes = () => {
      const count = width < 420 ? 34 : width < 640 ? 42 : 54;

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.8 + 1.1,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      createNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0b1020');
      gradient.addColorStop(0.55, '#101225');
      gradient.addColorStop(1, '#151022');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x <= 0 || node.x >= width) node.vx *= -1;
          if (node.y <= 0 || node.y >= height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = width < 420 ? 86 : 112;

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node, index) => {
        const pulse = Math.sin(Date.now() / 500 + index) * 0.45 + 0.75;

        ctx.shadowColor = index % 13 === 0 ? '#8b5cf6' : '#22d3ee';
        ctx.shadowBlur = 14;

        ctx.fillStyle = index % 13 === 0 ? '#8b5cf6' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
      <div className="flex h-9 items-center justify-between border-b border-slate-800 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        </div>
        <div>Live Neural Movement</div>
      </div>

      <canvas
        ref={canvasRef}
        className="block h-[280px] w-full sm:h-[340px] lg:h-[390px]"
        aria-label="Live neural movement animation"
      />

      <div className="absolute bottom-3 left-4 font-mono text-xs text-slate-500">
        [3 · 5 · 5 · 2]
      </div>

      <div className="absolute bottom-3 right-4 flex items-center gap-2 font-mono text-xs text-cyan-300">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        signals flowing
      </div>
    </div>
  );
}