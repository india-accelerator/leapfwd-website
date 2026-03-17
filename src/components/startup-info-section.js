import Image from "next/image";

export function StartupInfoSection() {
  return (
    <section id="who-should-apply" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm sm:text-2xl font-medium text-[#3F64AB] mb-4 uppercase tracking-widest">
            WHO SHOULD APPLY
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-black mb-6 uppercase tracking-wide">
            TARGET STARTUP PROFILE & WEALTHTECH SECTORS
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto"></div>
        </div>

        {/* Content Grid - Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Image */}
          <div className="relative ">
            <Image
              src="/dummy-img.png"
              alt="Smart Real Estate Infrastructure"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right: Three Info Boxes */}
          <div className="flex flex-col gap-2">
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Startup Stage & Profile
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>MVP to Seed to early Series A (Technology Readiness Level 4–6).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Functional MVP with early traction or committed customers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regulatory clarity on required licenses.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Strong data security and compliance approach.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Investment Products & Platforms
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bonds & Fixed Income APIs, Yield curve analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutual Funds & AI-driven right scheme selection.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fixed Deposits (FD) & Alternative Investment Funds (AIF).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Equity Platforms (listed and unlisted), Algo Trading.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Alternative Assets & Markets
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Commodity pricing and benchmarking engines.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>REITs / InvITs & Fractional ownership platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Insurance API integrations.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hedging, exposure analytics & derivatives payoff.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Grid - Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Two Info Boxes */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Fintech Content & CRM
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Financial Content & Education discovery.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Institutional learning & Capital markets education.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CRM management tools & Data analysis.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-led content personalization.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                RegTech & Compliance Infrastructure
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>KYC and AML automation.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regulatory reporting engines.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Surveillance and transaction monitoring.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compliance and disclosure automation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <Image
              src="/dummy-img2.png"
              alt="Construction Technology"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

