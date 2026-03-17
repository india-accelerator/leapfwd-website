"use client";

import Image from "next/image";

export function AboutUsSection() {
  return (
    <section 
      id="about-us"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #E8F0FA 0%, #F5F8FB 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-sm sm:text-2xl font-semibold text-[#3F64AB] mb-4 uppercase tracking-widest">
            PROGRAM PARTNERS
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-black mb-6 uppercase tracking-wide">
          Who Is Running the Program
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto mb-8"></div>
        </div>

        {/* Side by Side Company Boxes */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* India Accelerator Box */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center text-center h-full">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/image-79.png"
                    alt="India Accelerator"
                    width={120}
                    height={40}
                    className="h-12 w-auto"
                  />
                </div>
                {/* Description */}
                <p className="text-base text-black leading-relaxed text-left">
                  India Accelerator is India's leading fund-led accelerator with deep strengths in startup ecosystem building. It empowers promising early-stage founders with access to institutional distribution pathways, structured mentorship, and investors.
                </p>
              </div>
            </div>

            {/* VS Fortune Box */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center text-center h-full">
                {/* Logo */}
                <div className="mb-6">
                  <div className="h-20 flex items-center justify-center font-bold text-2xl text-[#3F64AB]">
                    TIPSONS GROUP
                  </div>
                </div>
                {/* Description */}
                <p className="text-base text-black leading-relaxed text-left">
                  Tipsons Group (and its digital arm, Techwealth Capital Services) brings deep complementary strengths in financial markets. Tipsons provides ArthaX startups with a defined pilot pathway, real-time market validation, and revenue opportunities through its 5,000+ corporate relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

