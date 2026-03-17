"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, Handshake } from "lucide-react";

const benefits = [
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Expert Guidance & Mentorship",
    description: "Structured mentorship from domain specialists across wealth management, compliance, digital rails, and go-to-market strategy.",
    bgColor: "bg-[#0A0A0A]"
  },
  {
    icon: <Handshake className="w-8 h-8 text-white" />,
    title: "Strategic Partnerships & Market Access",
    description: "A defined pilot pathway with Tipsons Group or partner institutions, providing real-world market feedback and institutional credibility.",
    bgColor: "bg-[#0052FF]"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Funding & Investor Engagement",
    description: "Direct access to investors for Seed through early Series A rounds, including India Accelerator's network of 2,000+ active angels.",
    bgColor: "bg-gray-200"
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Go-to-Market & Scaling Support",
    description: "Tailored go-to-market support, visibility within the WealthTech ecosystem through curated events, and post-program integration.",
    bgColor: "bg-white border border-gray-200"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white text-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Benefits to Startups</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The resources, mentorship, and access you need to overcome structural barriers in the WealthTech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className={`p-10 rounded-3xl ${benefit.bgColor} ${benefit.bgColor.includes("bg-[#0A0A0A]") || benefit.bgColor.includes("bg-[#0052FF]") ? "text-white" : "text-[#0A0A0A]"}`}
            >
              <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center ${benefit.bgColor.includes("white") || benefit.bgColor.includes("gray") ? "bg-[#0A0A0A]" : "bg-white/10"}`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className={`text-lg leading-relaxed ${benefit.bgColor.includes("white") || benefit.bgColor.includes("gray") ? "text-gray-700" : "text-gray-300"}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
