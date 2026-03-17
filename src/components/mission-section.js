export function MissionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm sm:text-2xl font-medium text-[#3F64AB] mb-4 uppercase tracking-wide">
            ABOUT THE ARTHAX PROGRAM
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold text-black mb-6 uppercase tracking-wide">
            ADDRESSING STRUCTURAL BARRIERS
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto mb-8"></div>
          
          <p className="text-md text-black max-w-4xl mx-auto leading-relaxed">
            India’s wealth market is on a trajectory from $500B to $1.5T by 2030. ArthaX exists to ensure that the fintech startups building the next generation of wealth infrastructure have the partners, access, and support to succeed in this landscape.
          </p>
        </div>

        {/* Four-Step Process Section */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 mb-16">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="lg:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {/* Step 1: Accepting Application */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 min-h-[100px] snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Integration & Procurement Cycles
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Solving slow bank integrations and procurement cycles that stall growth.
                </p>
              </div>
            </div>

            {/* Step 2: Selection */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 min-h-[100px] snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Compliance & RegTech Costs
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Overcoming heavy upfront compliance, licensing, and RegTech costs.
                </p>
              </div>
            </div>

            {/* Step 3: Investment Committee */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 min-h-[100px] snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Institutional Distribution
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Bridging the gap to institutional distribution channels and pilot opportunities.
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 min-h-[100px] snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Risk Framework Adoption
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Navigating bank risk frameworks that limit adoption of early-stage vendors.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:contents">
            {/* Step 1: Accepting Application */}
            <div 
              className="p-8 flex items-start gap-4 min-h-[100px]"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Integration & Procurement Cycles
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Solving slow bank integrations and procurement cycles that stall growth.
                </p>
              </div>
            </div>

            {/* Step 2: Selection */}
            <div 
              className="p-8 flex items-start gap-4 min-h-[100px]"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Compliance & RegTech Costs
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Overcoming heavy upfront compliance, licensing, and RegTech costs.
                </p>
              </div>
            </div>

            {/* Step 3: Investment Committee */}
            <div 
              className="p-8 flex items-start gap-4 min-h-[100px]"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Institutional Distribution
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Bridging the gap to institutional distribution channels and pilot opportunities.
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div 
              className="p-8 flex items-start gap-4 min-h-[100px]"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Risk Framework Adoption
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Navigating bank risk frameworks that limit adoption of early-stage vendors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Section */}
        <div className="text-center">
          <p className="text-lg text-black mb-4 leading-relaxed max-w-4xl mx-auto">
            If you are a startup building in this space and would like to participate or partner with ArthaX, reach out to us at: <strong>gunika.grover@indiaaccelerator.co</strong>
          </p>
          <p className="text-xl font-bold text-black">
            ArthaX - Accelerating WealthTech Innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
