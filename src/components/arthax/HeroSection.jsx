"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Rocket } from "lucide-react";
import logo from "@/assets/arthax-pogram.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white pt-24 pb-20 overflow-hidden">
      {/* Background purely solid, no gradients. Subtle patterns or noise can be achieved via images, but we'll stick to pure CSS solids and blurred shapes */}
      
      {/* Subtle background glow effect using a solid div with massive blur - no gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Powered by Tipsons Group & India Accelerator</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center items-center mb-12 relative h-48"
          >
            <Image 
              src={logo} 
              alt="ArthaX Accelerator Logo" 
              className="absolute w-auto h-[250%] object-contain drop-shadow-xl rotate-90 grayscale brightness-0 invert" 
              priority
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Accelerating India's next generation of WealthTech founders — from product to pilot to scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0052FF] hover:bg-[#0040CC] transition-colors text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 group">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2">
              View Program Details
            </button>
          </motion.div>

          {/* Key Details Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-[#0052FF]" />
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1 tracking-wide uppercase">Applications Close</p>
                <p className="font-semibold text-white">TBA</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <Rocket className="w-6 h-6 text-[#0052FF]" />
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1 tracking-wide uppercase">Cohort Kickoff</p>
                <p className="font-semibold text-white">TBA</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
              <Users className="w-6 h-6 text-[#0052FF]" />
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1 tracking-wide uppercase">Demo Day</p>
                <p className="font-semibold text-white">TBA</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
