import Image from "next/image";

export function StartupInfoSection() {
  return (
    <section id="who-should-apply" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm sm:text-2xl font-medium text-[#3F64AB] mb-4 uppercase tracking-widest">
            INFORMATION FOR STARTUP
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-black mb-6 uppercase tracking-wide">
            INNOVATE IN FOCUS AREAS OF REAL ESTATE
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
            {/* Box 1: Smart Real Estate Platforms */}
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Smart Real Estate Platforms (PropTech)
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-powered property search & matchmaking.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Virtual & Augmented reality for property tours.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Blockchain-enabled property transactions & smart contracts.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Digital marketplaces for rentals, co-living, and co-working.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Urban Infrastructure & Smart Cities */}
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Urban Infrastructure & Smart Cities
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Smart lighting, parking, and mobility integration.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Building Information Modelling (BIM) for city-level planning.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Digital twins for urban infrastructure simulations.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Resilience technologies for disaster-proof buildings.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Sustainable & Green Building Solutions */}
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Sustainable & Green Building Solutions
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Energy-efficient building materials & smart insulation systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IoT-driven energy and water management.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Waste recycling & reuse technologies at construction sites.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Net-zero emission building solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Grid - Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Two Info Boxes */}
          <div className="flex flex-col gap-4">
            {/* Box 4: Construction Management & Automation */}
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Construction Management & Automation (ConTech)
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI/ML-based project management platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drone-based site surveying & monitoring.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IoT-enabled sensor systems for real-time construction tracking.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Robotics & 3D printing for modular and faster construction.</span>
                </li>
              </ul>
            </div>

            {/* Box 5: Financial & Legal Enablement */}
            <div className="bg-[#F5F8FB] p-2 rounded-lg">
              <h4 className="text-xl font-bold text-black mb-4">
                Financial & Legal Enablement
              </h4>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Digital mortgage & loan approval platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated compliance (RERA, GST, municipal approvals).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-driven property valuation & credit scoring tools.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fractional property investment & REIT-based platforms.</span>
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

