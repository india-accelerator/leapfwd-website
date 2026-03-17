"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function WhoShouldApply() {
  const criteria = [
    { title: "Functional MVP", desc: "With early traction or committed customers." },
    { title: "Regulatory Clarity", desc: "Clear understanding of required licenses." },
    { title: "Data Security", desc: "Strong compliance and security approach." },
  ];

  return (
    <section className="py-24 bg-[#f4f4f5] text-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who Should Apply?</h2>
            <div className="w-20 h-2 bg-[#0052FF] mb-8"></div>
            <p className="text-xl text-gray-600 mb-8">
              We are looking for fast-moving founders ready to scale.
            </p>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200">
              <h3 className="text-sm font-bold tracking-widest text-[#0052FF] uppercase mb-4">Stage</h3>
              <p className="text-2xl font-semibold mb-2">MVP to Seed</p>
              <p className="text-gray-500">to early Series A</p>
              <p className="text-sm text-gray-400 mt-2">(Technology Readiness Level 4–6)</p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white p-10 rounded-3xl border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold mb-6">Traction & Readiness Expectations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {criteria.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0052FF] shrink-0" />
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0A0A0A] text-white p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF]/20 rounded-full blur-[80px]"></div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Target Industries</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 relative z-10">
                {[
                  "Bonds & Fixed Income",
                  "Mutual Funds & Insurance",
                  "Fixed Deposits (FD)",
                  "Alternative Investment Funds",
                  "Equity Platforms",
                  "Commodities",
                  "REITs / InvITs",
                  "Financial Content & Education",
                  "RegTech & Compliance",
                  "CRM Tools & Data Analytics"
                ].map((industry, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]"></div>
                    <span className="text-sm text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4 p-6 bg-red-50 text-red-900 rounded-2xl border border-red-100">
              <AlertCircle className="w-6 h-6 shrink-0 text-red-500" />
              <div>
                <h4 className="font-bold mb-1">Not a fit for</h4>
                <p className="text-sm leading-relaxed">
                  The program does not consider pure trading products, unregulated high-risk offerings, or generic personal finance apps without defensible differentiators.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
