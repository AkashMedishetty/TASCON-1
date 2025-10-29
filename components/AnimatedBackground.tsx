'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Orb class for floating gradient spheres
    class Orb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 150 + 100;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        
        const colors = [
          'rgba(255, 178, 70, 0.15)',   // accent
          'rgba(26, 58, 82, 0.2)',      // secondary
          'rgba(33, 150, 243, 0.15)',   // brightBlue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
      }

      draw() {
        if (!ctx) return;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create orbs
    const orbs: Orb[] = [];
    for (let i = 0; i < 5; i++) {
      orbs.push(new Orb());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 26, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas for animated orbs */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(60px)' }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Hyderabad monument silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Charminar inspired silhouette */}
          <path
            d="M100 300 L100 100 L120 80 L120 50 L130 50 L130 80 L150 100 L150 300 Z"
            fill="rgba(255, 255, 255, 0.1)"
          />
          <path
            d="M200 300 L200 150 L220 130 L220 100 L230 100 L230 130 L250 150 L250 300 Z"
            fill="rgba(255, 178, 70, 0.1)"
          />
          <path
            d="M320 300 L320 120 L340 100 L340 70 L350 70 L350 100 L370 120 L370 300 Z"
            fill="rgba(255, 255, 255, 0.1)"
          />
          
          {/* Buddha statue silhouette */}
          <ellipse cx="500" cy="200" rx="40" ry="80" fill="rgba(255, 178, 70, 0.08)" />
          <circle cx="500" cy="140" r="30" fill="rgba(255, 178, 70, 0.08)" />
          
          {/* More monument shapes */}
          <path
            d="M650 300 L650 130 L670 110 L670 80 L680 80 L680 110 L700 130 L700 300 Z"
            fill="rgba(255, 255, 255, 0.1)"
          />
          <path
            d="M800 300 L800 160 L820 140 L820 110 L830 110 L830 140 L850 160 L850 300 Z"
            fill="rgba(33, 150, 243, 0.1)"
          />
          <path
            d="M950 300 L950 140 L970 120 L970 90 L980 90 L980 120 L1000 140 L1000 300 Z"
            fill="rgba(255, 255, 255, 0.1)"
          />
          <path
            d="M1080 300 L1080 110 L1100 90 L1100 60 L1110 60 L1110 90 L1130 110 L1130 300 Z"
            fill="rgba(255, 178, 70, 0.1)"
          />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/80" />
    </>
  );
}
