'use client';

import { motion } from 'framer-motion';
import { Crown, Users, Shield } from 'lucide-react';

const committeeData = {
  organizing: [
    { name: 'Dr Sunil Apsing', role: 'President', icon: Crown },
    { name: 'Dr G Veda Prakash', role: 'Conference Secretary', icon: Shield },
    { name: 'Dr Raghuveer Reddy', role: 'Founder-President', icon: Crown },
  ],
  executive: [
    { name: 'Dr B Raja Ramesh', role: 'Vice President' },
    { name: 'P S Jaya Prasad', role: 'Secretary' },
    { name: 'Dr M Kaushik Reddy', role: 'Treasurer' },
  ],
  ecMembers: [
    'Dr G Shashi Kanth',
    'Dr Sukesh Rao',
    'Dr N Somashekhar Reddy',
    'Dr Jagan Mohan Reddy',
    'Dr Puma Chandra Tejaswi',
    'Dr Lalith Mohan',
    'Dr Deepthi Nandan Reddy',
  ],
};

export default function CommitteeSection() {
  return (
    <section id="committee" className="relative bg-black py-32 overflow-hidden">
      {/* Same Background as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f1419_0%,#000000_100%)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-accent/20 rounded-full filter blur-[140px]" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brightBlue/20 rounded-full filter blur-[140px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
          >
            <span className="text-accent font-semibold">Leadership</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
              Organizing
            </span>
            <br />
            <span className="text-white">Committee</span>
          </h2>
        </motion.div>

        {/* Main Committee Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {committeeData.organizing.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent backdrop-blur-xl border border-accent/30 hover:border-accent/60 transition-all duration-500 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <member.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Name */}
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                  {member.role}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Committee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-gradient-to-br from-brightBlue/10 to-transparent backdrop-blur-xl border border-brightBlue/20 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brightBlue/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-brightBlue" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              TAS <span className="text-brightBlue">Executive Committee</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {committeeData.executive.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brightBlue/40 hover:bg-brightBlue/5 transition-all duration-300"
              >
                <p className="text-white font-bold text-lg mb-2 group-hover:text-brightBlue transition-colors">
                  {member.name}
                </p>
                <p className="text-brightBlue/80 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EC Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-white">TAS EC </span>
            <span className="text-accent">Members</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {committeeData.ecMembers.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <p className="text-white font-medium group-hover:text-accent transition-colors">
                  {name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
