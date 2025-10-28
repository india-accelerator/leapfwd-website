"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/bubble-background";

export function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/herobg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      ></div>
      {/* Bubble Background */}
      <BubbleBackground 
        interactive={true}
        colors={{
          first: "18,113,255",
          second: "221,74,255", 
          third: "0,220,255",
          fourth: "200,50,50",
          fifth: "180,180,50",
          sixth: "140,100,255"
        }}
        className="absolute inset-0 z-0"
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
        LeapFWD - Accelerating the Future of Building
        </h1>
        
        {/* Description */}
        <div className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed space-y-6">
          <p>
            LeapFWD is a PropTech & ConTech Accelerator Program jointly driven by India Accelerator (IA) and VS Fortune built to drive innovation, enable rapid growth, and scale breakthrough technologies in the real estate and construction ecosystem.
          </p>
          <p>
            Designed for early- and growth-stage startups, LeapFWD bridges innovation with market scalability through mentorship, enterprise partnerships, investor access, and industry validation.
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center">
           <Button 
             asChild
             variant="outline"
             effect="hoverUnderline"
             size="lg"
             className="bg-transparent text-white px-8 py-3 rounded-[50px] border border-white hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
           >
             <Link 
               href="#about-us"
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
               }}
             >
               LEARN MORE
             </Link>
           </Button>
          <Button 
            asChild
            variant="default"
            effect="expandIcon"
            size="lg"
            icon={ArrowRight}
            iconPlacement="right"
            className="bg-[#fff] text-black px-8 py-3 rounded-[50px] hover:bg-[#fff] transition-colors duration-200 font-medium text-lg"
          >
            <Link href="https://indiaaccelerator.co/leapfwd-program/apply/" target="_blank" rel="noopener noreferrer">
              APPLY NOW
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
