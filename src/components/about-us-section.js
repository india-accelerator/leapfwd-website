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
            ABOUT US
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-black mb-6 uppercase tracking-wide">
          Driving Innovation Through Partnership
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
                  India Accelerator (IA) is India's leading fund-led accelerator, empowering early-stage startups with access to capital, mentorship, enterprise networks, and investor connects. Recognised for its domain-focused programs across PropTech, FinTech, EV, HealthTech, and more, IA has been instrumental in nurturing some of India's most promising technology ventures.
                </p>
              </div>
            </div>

            {/* VS Fortune Box */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center text-center h-full">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/v_s_fortune_logo.jpeg.jpg"
                    alt="VS Fortune"
                    width={120}
                    height={40}
                    className="h-20 w-auto"
                  />
                </div>
                {/* Description */}
                <p className="text-base text-black leading-relaxed text-left">
                  VS Fortune Management and Consulting Pvt. Ltd., is a strategic advisory & business management firm committed to driving innovation, partnerships & sustainable growth. Through LeapFWD, VS Fortune supports the PropTech & ConTech ecosystem by facilitating industry collaborations, investor linkages & strategic scale-up pathways for high-potential startup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

