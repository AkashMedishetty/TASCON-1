'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MedicalTool3D from './MedicalTool3D';
import AnimatedBackground from './AnimatedBackground';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [attendeeCount, setAttendeeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAttendeeCount((prev) => {
        if (prev >= 500) {
          clearInterval(interval);
          return 500;
        }
        return prev + 10;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Removed problematic scroll animation that was making elements disappear


  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#080b14]"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1420] to-[#1a1f35]" />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-brightBlue rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHBhdGggZD0iTTAgMGgzMDB2MzAwSDB6IiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />

      {/* Main Content - Full Screen Cinematic */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-16">
          {/* Center Stage Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Main CTA */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group"
            >
              {/* Gradient orb effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brightBlue/20 rounded-full blur-3xl group-hover:bg-brightBlue/30 transition-all duration-500" />
              
              <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                ✨ Registration Open
              </span>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                <motion.span 
                  className="inline-block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  TASCON
                </motion.span>
                <br />
                <span className="text-accent drop-shadow-[0_0_30px_rgba(255,178,70,0.5)]">2026</span>
              </h1>

              <p className="text-lg text-white/80 mb-6">
                3rd Annual Conference of<br />
                <span className="text-white font-semibold">Telangana Arthroscopy Society</span>
              </p>

              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,178,70,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full px-6 py-4 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-primary font-bold rounded-full transition-all shadow-lg shadow-accent/30 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-white/60">Event Date</p>
                    <p className="text-white font-bold">July 18 & 19, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brightBlue" />
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="text-white font-bold">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: 3D Tool & Stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[500px] rounded-2xl bg-gradient-to-br from-secondary/30 via-brightBlue/10 to-secondary/20 backdrop-blur-xl border border-white/20 overflow-hidden mb-6 shadow-2xl"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-brightBlue to-accent opacity-20 blur-xl" />
              <div className="relative z-10 w-full h-full">
                <MedicalTool3D />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-xl border border-accent/30 overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Users className="w-8 h-8 text-accent mb-2 drop-shadow-[0_0_10px_rgba(255,178,70,0.5)]" />
                  </motion.div>
                  <p className="text-4xl font-bold text-white mb-1">{attendeeCount}+</p>
                  <p className="text-sm text-white/70">Expected Attendees</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-brightBlue/20 to-brightBlue/5 backdrop-blur-xl border border-brightBlue/30 overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brightBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mb-2 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">🏆</span>
                  </motion.div>
                  <p className="text-sm font-bold text-white mb-1">CME Credits</p>
                  <p className="text-xs text-white/60">Certified Event</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 3: Highlights */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brightBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-accent to-brightBlue rounded-full" />
                  Conference Highlights
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🔬', text: 'Live Surgeries & Video Techniques' },
                    { icon: '💬', text: 'Panel Discussions & Debates' },
                    { icon: '🏆', text: 'Best Paper & Poster Awards' },
                    { icon: '🌍', text: 'International & National Faculty' },
                    { icon: '🛠️', text: 'Workshops & Hands-on Training' },
                    { icon: '🎉', text: 'Gala Dinner & Networking' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      className="flex items-start gap-3 p-3 rounded-lg transition-all cursor-pointer"
                    >
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <p className="text-white/80 group-hover:text-white transition-colors">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">Scroll to explore</p>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-accent/50 transition-colors flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(255,178,70,0.5)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
