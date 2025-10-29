'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import MedicalTool3D from './MedicalTool3D';

export default function HeroSectionNew() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Parallax values
  const x1 = useTransform(smoothMouseX, [0, window.innerWidth], [-20, 20]);
  const y1 = useTransform(smoothMouseY, [0, window.innerHeight], [-20, 20]);
  const x2 = useTransform(smoothMouseX, [0, window.innerWidth], [20, -20]);
  const y2 = useTransform(smoothMouseY, [0, window.innerHeight], [20, -20]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Deep Dark Background with Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f1419_0%,#000000_100%)]" />
      
      {/* Cinematic Mesh Gradients */}
      <div className="absolute inset-0 opacity-50">
        <motion.div 
          style={{ x: x1, y: y1 }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-accent/40 to-transparent rounded-full filter blur-[150px]" 
        />
        <motion.div 
          style={{ x: x2, y: y2 }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-radial from-brightBlue/40 to-transparent rounded-full filter blur-[150px]" 
        />
        <motion.div 
          style={{ x: x1, y: y2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 to-transparent rounded-full filter blur-[130px]" 
        />
      </div>
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Full Screen 3D Background */}
      <div className="absolute inset-0 z-0">
        <MedicalTool3D />
      </div>

      {/* Content Overlays */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 min-h-screen flex flex-col justify-between p-8 lg:p-16"
      >
        
        {/* Top Left: Title Block */}
        <div className="max-w-4xl">
          <div className="space-y-6">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-accent/90 text-sm font-medium tracking-widest uppercase">Registration Open</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
                  <span className="block text-white mb-4">TASCON</span>
                  <span className="block bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    2026
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/60 font-light leading-relaxed max-w-xl">
                  3rd Annual Conference of the 
                  <span className="text-white font-normal"> Telangana Arthroscopy Society</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-accent to-orange-500 rounded-full text-[#05070d] font-bold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 border-2 border-white/20 hover:border-white/40 rounded-full text-white font-semibold text-lg backdrop-blur-sm transition-all"
                >
                  View Program
                </motion.button>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
              >
                <div>
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/50 text-sm">Expected Attendees</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">2</div>
                  <div className="text-white/50 text-sm">Days of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/50 text-sm">Expert Speakers</div>
                </div>
              </motion.div>
            </div>

            {/* Right: 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative h-[600px] lg:h-[700px]"
            >
              {/* Glowing Card Container */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border border-white/10 overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-brightBlue/10" />
                
                {/* 3D Model */}
                <div className="relative w-full h-full">
                  <MedicalTool3D />
                </div>

                {/* Floating Info Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20"
                >
                  <div className="text-accent text-sm font-semibold mb-1">CME Credits</div>
                  <div className="text-white/80 text-xs">Certified Event</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20"
                >
                  <div className="text-brightBlue text-sm font-semibold mb-1">July 18-19</div>
                  <div className="text-white/80 text-xs">Hyderabad, India</div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-accent/20 to-brightBlue/20 rounded-full blur-[100px]" />
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-6 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
