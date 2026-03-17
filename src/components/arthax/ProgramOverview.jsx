"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Users2, Landmark, Activity } from "lucide-react";

const problems = [
  {
    icon: <Landmark className="w-8 h-8 text-[#0052FF]" />,
    title: "Slow Bank Integrations",
    description: "Lengthy procurement cycles and legacy rails that stall fast-moving founders from going to market."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#0052FF]" />,
    title: "Heavy Compliance Costs",
    description: "Prohibitive upfront RegTech and licensing costs before building the core product."
  },
  {
    icon: <Users2 className="w-8 h-8 text-[#0052FF]" />,
    title: "Limited Distribution",
    description: "Lack of access to institutional channels, B2B pipelines, and viable pilot opportunities."
  },
  {
    icon: <Activity className="w-8 h-8 text-[#0052FF]" />,
    title: "Strict Risk Frameworks",
    description: "Bank enterprise risk frameworks that systematically limit the adoption of early-stage vendors."
  }
];

export function ProgramOverview() {
  return (
    <section className="py-24 bg-white text-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bridging the gap between early-stage founders and institutional scale.
            </h2>
            <div className="w-20 h-2 bg-[#0052FF] mb-8"></div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              ArthaX is a joint accelerator initiative purpose-built for fintech startups operating at the intersection of wealth management, financial infrastructure, and regulatory technology.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed bg-gray-50 p-6 border-l-4 border-black">
              Co-hosted by Tipsons Group and India Accelerator — combining deep strengths in financial markets and startup ecosystem building.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Core Problems We Solve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="bg-gray-100 text-[#0A0A0A] p-8 rounded-2xl flex flex-col h-full border border-gray-200"
              >
                <div className="mb-6 bg-white shadow-sm p-4 rounded-xl inline-block w-fit">
                  {problem.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#0A0A0A]">{problem.title}</h4>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* High-Level Outcomes Block */}
        <div className="bg-[#f4f4f5] rounded-3xl p-8 lg:p-16 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">High-Level Outcomes You Can Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Diagnostic assessment of product, compliance, and distribution readiness",
              "Hands-on integration support with banks, NBFCs, and API partners",
              "Structured mentorship from domain specialists in wealth, digital rails, and GTM",
              "A defined pilot pathway with Tipsons or partner institutions",
              "Access to investors for Seed to Series A rounds",
              "Post-program support with partner integrations and market access"
            ].map((outcome, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs mt-1">
                  {i + 1}
                </div>
                <p className="text-lg text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
