export function MissionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-2xl font-medium text-[#3F64AB] mb-4 uppercase tracking-wide">
            JOIN THE LEAPFWD MISSION
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold text-black mb-6 uppercase tracking-wide">
            SHAPING THE FUTURE OF PROPTECH & CONTECH
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto mb-8"></div>
          
          <p className="text-md text-black max-w-4xl mx-auto leading-relaxed">
            At LeapFWD, we're redefining the future of real estate and construction - from smart cities and digital infrastructure to automation and sustainability.
          </p>
        </div>

        {/* Four-Step Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                Accepting Application
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Startups are invited to send their pitch deck to <span className="underline">example.com</span>
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
                Selection
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Rigorous selection process by Aroundtown leaders
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
                Investment Committee
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Final selection by prominent VCs, Aroundtown leaders, and industry experts
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
                Launch
              </h4>
              <p className="text-white text-sm leading-relaxed">
                The journey of rapid scale begins
              </p>
            </div>
          </div>
        </div>

        {/* Concluding Section */}
        <div className="text-center">
          <p className="text-lg text-black mb-4 leading-relaxed max-w-4xl mx-auto">
            Join us in our mission to accelerate India's transition toward a data-driven, tech-enabled, and sustainable built ecosystem.
          </p>
          <p className="text-xl font-bold text-black">
            LeapFWD - Where innovation meets impact.
          </p>
        </div>
      </div>
    </section>
  );
}
