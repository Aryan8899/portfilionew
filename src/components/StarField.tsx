"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    type Star = {
      x: number; y: number; r: number;
      phase: number; speed: number;
      type: number; base: number; flicker: number;
    };

    const stars: Star[] = Array.from({ length: 250 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.025 + 0.01,
      type: Math.floor(Math.random() * 3),
      base: 0.15 + Math.random() * 0.2,
      flicker: 0.45 + Math.random() * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.phase += s.speed;

        let a: number;
        if (s.type === 0) {
          a = s.base + s.flicker * Math.sin(s.phase);
        } else if (s.type === 1) {
          a = s.base + s.flicker * Math.pow(Math.sin(s.phase), 3);
        } else {
          a = s.base + s.flicker * Math.sin(s.phase * 1.5);
        }

        if (s.r > 1.1 && a > 0.4) {
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          g.addColorStop(0, `rgba(200,220,255,${a * 0.25})`);
          g.addColorStop(1, "rgba(200,220,255,0)");
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,235,255,${a})`;
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}