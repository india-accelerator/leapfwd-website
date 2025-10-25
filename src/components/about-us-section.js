"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function AboutUsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: false
    })
  );
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

        {/* Vertical Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[autoplayPlugin.current]}
            orientation="vertical"
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-mt-1 h-[300px]">
              {/* India Accelerator Slide */}
              <CarouselItem className="pt-1">
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm h-full">
                  <div className="flex flex-col items-center text-center h-full justify-center">
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
                    <p className="text-base sm:text-lg text-black leading-relaxed max-w-4xl">
                      India Accelerator (IA) is India's leading fund-led accelerator, empowering early-stage startups with access to capital, mentorship, enterprise networks, and investor connects. Recognised for its domain-focused programs across PropTech, FinTech, EV, HealthTech, and more, IA has been instrumental in nurturing some of India's most promising technology ventures.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* VS Fortune Slide */}
              <CarouselItem className="pt-1">
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm h-full">
                  <div className="flex flex-col items-center text-center h-full justify-center">
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
                    <p className="text-base sm:text-lg text-black leading-relaxed max-w-4xl">
                      V S Fortune Management and Consulting Pvt. Ltd., part of the Addor Group, is a strategic advisory & business management firm committed to driving innovation, partnerships & sustainable growth. Through LeapFWD, VS Fortune supports the PropTech & ConTech ecosystem by facilitating industry collaborations, investor linkages & strategic scale-up pathways for high-potential startup.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

