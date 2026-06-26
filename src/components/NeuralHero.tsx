'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  baseSize: number;
  vx: number;
  vy: number;
  glow: number;
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

export default function NeuralHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });

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
      const count = width < 420 ? 36 : width < 768 ? 50 : 72;

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize: Math.random() * 1.8 + 1.3,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        glow: 0,
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

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, '#0B1020');
      bg.addColorStop(0.5, '#111827');
      bg.addColorStop(1, '#1E1B4B');

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const pointer = pointerRef.current;

      nodes.forEach((node) => {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (pointer.active) {
            const dx = node.x - pointer.x;
            const dy = node.y - pointer.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const influence = 115;

            if (distance < influence) {
              const force = (1 - distance / influence) * 1.8;
              const angle = Math.atan2(dy, dx);

              node.vx += Math.cos(angle) * force * 0.045;
              node.vy += Math.sin(angle) * force * 0.045;
              node.glow = Math.min(1, node.glow + force * 0.08);
            }
          }

          node.vx *= 0.992;
          node.vy *= 0.992;

          if (node.x <= 0 || node.x >= width) node.vx *= -1;
          if (node.y <= 0 || node.y >= height) node.vy *= -1;

          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        }

        node.glow *= 0.94;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = width < 420 ? 92 : 125;

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const glow = Math.max(a.glow, b.glow);

            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * (0.22 + glow * 0.55)})`;
            ctx.lineWidth = 1 + glow * 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (pointer.active) {
        const radial = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          130,
        );

        radial.addColorStop(0, 'rgba(196, 181, 253, 0.22)');
        radial.addColorStop(0.35, 'rgba(129, 140, 248, 0.12)');
        radial.addColorStop(1, 'rgba(129, 140, 248, 0)');

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 130, 0, Math.PI * 2);
        ctx.fill();
      }

      nodes.forEach((node, index) => {
        const pulse = Math.sin(Date.now() / 500 + index) * 0.45 + 0.85;
        const isAccent = index % 9 === 0;
        const size = node.baseSize * pulse + node.glow * 4;

        ctx.shadowColor = node.glow > 0.2 ? '#FFFFFF' : isAccent ? '#C4B5FD' : '#818CF8';
        ctx.shadowBlur = node.glow > 0.2 ? 26 : isAccent ? 18 : 12;
        ctx.fillStyle =
          node.glow > 0.2 ? '#FFFFFF' : isAccent ? '#C4B5FD' : '#818CF8';

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerenter', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerenter', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950 shadow-2xl">
      <div className="flex h-10 items-center justify-between border-b border-slate-800 px-4 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <span>Interactive Neural Movement</span>
      </div>

      <canvas
        ref={canvasRef}
        className="block h-[280px] w-full cursor-crosshair touch-none sm:h-[340px] lg:h-[420px]"
        aria-label="Interactive neural network animation"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(139,92,246,0.22),transparent_32%)]" />

      <div className="absolute bottom-4 left-4 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 font-mono text-xs text-indigo-200">
        pointer.reacts()
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 font-mono text-xs text-violet-200">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
        touch active
      </div>
    </div>
  );
}