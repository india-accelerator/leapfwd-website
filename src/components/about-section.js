export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Small Heading */}
          <h2 className="text-sm sm:text-2xl font-semibold text-[#3F64AB] mb-4 uppercase tracking-widest">
            PROGRAM OVERVIEW
          </h2>
          
          {/* Main Heading */}
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-black mb-6 uppercase tracking-wide">
            ARTHAX ACCELERATOR
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#123C6B] mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-black max-w-5xl mx-auto leading-relaxed">
            ArthaX is a joint accelerator initiative powered by Tipsons Group and India Accelerator, purpose-built for fintech startups operating at the intersection of wealth management, financial infrastructure, and regulatory technology. The program is designed to bridge the gap between promising early-stage founders and the institutional access, mentorship, and distribution pathways they need to scale.
          </p>
        </div>

        {/* Benefits Grid - 2x2 Layout */}
        <div className="md:grid md:grid-cols-2 md:gap-6 max-w-6xl mx-auto">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {/* Benefit 1: Market Enablement */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Expert Guidance & Mentorship
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Structured mentorship from domain specialists across wealth management, compliance, digital rails, and go-to-market strategy.
                </p>
              </div>
            </div>

            {/* Benefit 2: One-to-One Mentorship */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Strategic Partnerships & Market Access
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  A defined pilot pathway with Tipsons Group or partner institutions, providing real-world market feedback and institutional credibility.
                </p>
              </div>
            </div>

            {/* Benefit 3: Industry Access */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Funding & Investor Engagement
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Direct access to investors for Seed through early Series A rounds, including India Accelerator’s network of 2,000+ active angels and its Finvolve fund platform.
                </p>
              </div>
            </div>

            {/* Benefit 4: Business Generation Support */}
            <div 
              className="min-w-[85vw] p-8 flex items-start gap-4 snap-center"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Go-to-Market and Scaling Support
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Tailored go-to-market support, visibility within the WealthTech ecosystem through curated events and partner showcases, and post-program partner integration support.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:contents">
            {/* Benefit 1: Market Enablement */}
            <div 
              className="p-8 flex items-start gap-4"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Expert Guidance & Mentorship
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Structured mentorship from domain specialists across wealth management, compliance, digital rails, and go-to-market strategy.
                </p>
              </div>
            </div>

            {/* Benefit 2: One-to-One Mentorship */}
            <div 
              className="p-8 flex items-start gap-4"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Strategic Partnerships & Market Access
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  A defined pilot pathway with Tipsons Group or partner institutions, providing real-world market feedback and institutional credibility.
                </p>
              </div>
            </div>

            {/* Benefit 3: Industry Access */}
            <div 
              className="p-8 flex items-start gap-4"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Funding & Investor Engagement
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Direct access to investors for Seed through early Series A rounds, including India Accelerator’s network of 2,000+ active angels and its Finvolve fund platform.
                </p>
              </div>
            </div>

            {/* Benefit 4: Business Generation Support */}
            <div 
              className="p-8 flex items-start gap-4"
              style={{
                background: 'linear-gradient(150.62deg, #557FD0 1.67%, #3F64AB 91.03%)'
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">
                  Go-to-Market and Scaling Support
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  Tailored go-to-market support, visibility within the WealthTech ecosystem through curated events and partner showcases, and post-program partner integration support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
