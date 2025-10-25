"use client";

import { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export function ProgramBenefits() {
  const containerRef = useRef(null);
  const benefit1Ref = useRef(null);
  const benefit2Ref = useRef(null);
  const benefit3Ref = useRef(null);
  const benefit4Ref = useRef(null);
  const benefit5Ref = useRef(null);

  return (
    <section
      id="benefits"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(113.24deg, #EBF4FF 16.61%, #E3EAF3 90.48%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm sm:text-2xl font-medium  text-[#3F64AB] mb-6 uppercase tracking-wide">
            LEAPFWD PROGRAM BENEFITS
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 uppercase tracking-wide">
            SHAPING THE FUTURE OF REAL ESTATE
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto mt-6"></div>
          
          </h3>
        </div>

        {/* Benefits with Connected Design */}
        <div className="relative" ref={containerRef}>
          {/* Single Row with 5 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div ref={benefit1Ref} className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  1
                </div>
                <Image
                  src="/Container1.png"
                  alt="Business Growth & Market Access Support"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-black mb-3">
                  Business Growth & Market Access Support
                </h3>
                <p className="text-[#3F64AB] text-sm leading-relaxed">
                  Support for B2B/B2G linkages, lead generation, business model refinement, and pitch preparation.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div ref={benefit2Ref} className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  2
                </div>
                <Image
                  src="/Container2.png"
                  alt="Funding And Investor Access"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-black mb-3">
                  Funding And Investor Access
                </h3>
                <p className="text-[#3F64AB] text-sm leading-relaxed">
                  Access to funding opportunities through investor connects, pitch sessions, and curated introductions.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div ref={benefit3Ref} className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  3
                </div>
                <Image
                  src="/Container3.png"
                  alt="Build Strategic Partnerships & Pilot Opportunities"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-black mb-3">
                  Build Strategic Partnerships & Pilot Opportunities
                </h3>
                <p className="text-[#3F64AB] text-sm leading-relaxed">
                  Connect with corporates, government agencies, and innovation platforms for pilots and partnerships.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div ref={benefit4Ref} className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  4
                </div>
                <Image
                  src="/Container4.png"
                  alt="Market Acceleration & Industry Partnerships"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-black mb-3">
                  Market Acceleration & Industry Partnerships
                </h3>
                <p className="text-[#3F64AB] text-sm leading-relaxed">
                  Strategic industry linkages and go-to-market support for customer and market expansion.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex flex-col items-center relative">
              {/* Icon Circle */}
              <div ref={benefit5Ref} className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                  5
                </div>
                <Image
                  src="/Container5.png"
                  alt="Guidance from Industry Veterans & Investors"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold text-black mb-3">
                  Guidance from Industry Veterans & Investors
                </h3>
                <p className="text-[#3F64AB] text-sm leading-relaxed">
                  Access to seasoned domain experts, investors, and mentors.
                </p>
              </div>
            </div>
          </div>

          {/* Animated Beams - Hidden on Mobile */}
          <div className="hidden lg:block">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={benefit1Ref}
              toRef={benefit2Ref}
              pathColor="#3F64AB"
              pathWidth={2}
              pathOpacity={0.3}
              gradientStartColor="#BFDBFE"
              gradientStopColor="#60a5fa"
              duration={12}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={benefit2Ref}
              toRef={benefit3Ref}
              pathColor="#3F64AB"
              pathWidth={2}
              pathOpacity={0.3}
              gradientStartColor="#BFDBFE"
              gradientStopColor="#60a5fa"
              duration={12}
              delay={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={benefit3Ref}
              toRef={benefit4Ref}
              pathColor="#3F64AB"
              pathWidth={2}
              pathOpacity={0.3}
              gradientStartColor="#BFDBFE"
              gradientStopColor="#60a5fa"
              duration={12}
              delay={6}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={benefit4Ref}
              toRef={benefit5Ref}
              pathColor="#3F64AB"
              pathWidth={2}
              pathOpacity={0.3}
              gradientStartColor="#BFDBFE"
              gradientStopColor="#60a5fa"
              duration={8}
              delay={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
