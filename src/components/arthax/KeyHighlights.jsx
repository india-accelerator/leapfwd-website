"use client";

import { motion } from "framer-motion";
import { Briefcase, Link, ArrowUpRight, BarChart } from "lucide-react";

const highlights = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Investment Preparation",
    desc: "Access to investors for Seed to Series A rounds through India Accelerator's established angel network and Finvolve fund platform."
  },
  {
    icon: <ArrowUpRight className="w-6 h-6" />,
    title: "Expansion Strategies",
    desc: "Hands-on support to build or refine integration pathways with banks, NBFCs, and API partners — designed to help startups move from product to distribution at institutional scale."
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: "Market Access & Pilots",
    desc: "A defined pilot pathway with Tipsons Group or its partner institutions, offering real-time market validation and revenue opportunities."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Corporate Linkages",
    desc: "Exposure to Tipsons Group's 5,000+ corporate relationships and India Accelerator's 30+ corporate partners, alongside visibility in the broader WealthTech ecosystem."
  }
];

export function KeyHighlights() {
  return (
    <section className="py-24 bg-white text-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Key Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="bg-white border-2 border-gray-100 hover:border-[#0052FF] p-8 rounded-3xl transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-100 text-[#0A0A0A] group-hover:bg-[#0052FF] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
