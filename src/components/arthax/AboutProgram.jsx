"use client";

import { motion } from "framer-motion";

const focusAreas = [
  { area: "Bonds", uses: "Business & KYC APIs; AI for consumer investment identification; Bond pricing and yield curve analytics; Compliance and disclosure automation" },
  { area: "Insurance", uses: "API integrations" },
  { area: "Mutual Fund", uses: "API; AI-driven automation of right scheme selection based on investor behaviour" },
  { area: "Fixed Deposits (FD)", uses: "API integrations" },
  { area: "Alternative Investment Funds", uses: "API; Back-end operations; Reporting and dashboards; AI for return calculation, NAV, and distribution" },
  { area: "Equity", uses: "Platform for unlisted and listed shares; Depository Participant integrations; AI-driven buy/sell strategy; Algo Trading" },
  { area: "Commodity", uses: "Commodity pricing and benchmarking engines; Hedging and exposure analytics; Derivatives payoff modeler; Risk and margin calculation APIs" },
  { area: "REITs / InvITs", uses: "Fractional ownership platforms; Back-end process infrastructure" },
  { area: "Content", uses: "News content platforms; Institutional learning; Capital markets education; Research and literature distribution; AI-led content personalization" },
  { area: "RegTech & Compliance", uses: "KYC and AML automation; Regulatory reporting engines; Surveillance and transaction monitoring" },
  { area: "CRM Tool", uses: "CRM management tools or APIs; Data analysis" }
];

export function AboutProgram() {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About the Program</h2>
            <div className="w-20 h-2 bg-[#0052FF] mb-8"></div>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              ArthaX addresses the structural barriers that prevent promising fintech startups from reaching institutional partners and building sustainable distribution channels in India's rapidly expanding wealth market.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Vision & Goal</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              India's wealth market is on a trajectory from $500B to $1.5T by 2030. UPI-driven behavior has normalized mobile-first financial experiences, retail participation has surged, and demand for multi-asset, AI-personalized portfolios is accelerating.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white font-semibold">ArthaX exists to ensure</strong> that the fintech startups building the next generation of wealth infrastructure have the partners, access, and support to succeed.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold tracking-tight mb-10 text-center">Focus Areas & Use Cases</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="py-4 px-6 font-bold text-lg text-white w-1/4 uppercase tracking-wider text-sm">FinTech Focus Area</th>
                  <th className="py-4 px-6 font-bold text-lg text-white w-3/4 uppercase tracking-wider text-sm">Use Cases & Technologies</th>
                </tr>
              </thead>
              <tbody>
                {focusAreas.map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-semibold text-[#0052FF]">{item.area}</td>
                    <td className="py-5 px-6 text-gray-300 text-sm leading-relaxed">{item.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
