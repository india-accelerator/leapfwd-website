"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0052FF] text-white overflow-hidden relative">
      {/* Decorative blurred solids (no gradients) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Ready to scale your WealthTech Startup?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join ArthaX to access institutional integrations, strategic capital, and pilot pathways.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="w-full sm:w-auto px-10 py-5 bg-[#0A0A0A] hover:bg-black transition-colors text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 group">
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-12 border-t border-white/20">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-4 font-semibold">Contact Us</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg">
            <span>If you would like to participate or partner with ArthaX, reach out at:</span>
            <a href="mailto:gunika.grover@indiaaccelerator.co" className="flex items-center gap-2 font-bold hover:text-[#0A0A0A] transition-colors underline decoration-2 underline-offset-4 decoration-white/30 hover:decoration-[#0A0A0A]">
              <Mail className="w-5 h-5" />
              gunika.grover@indiaaccelerator.co
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
