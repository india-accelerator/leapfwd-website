"use client";

import Image from "next/image";
import Link from "next/link";
import programImg from "@/assets/arthax-program.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <>
      {/* Main Navbar - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-6">
              <Link href="/" className="relative flex items-center justify-center w-[160px] h-[40px] overflow-visible">
                <Image
                  src={programImg}
                  alt="Program Logo"
                  className="absolute top-1/2 left-1/2 w-auto h-[160px] max-w-none transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center"
                />
              </Link>
              <Image
                src="/navLogos.png"
                alt="Partner Logos"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm cursor-pointer"
              >
                About the Program
              </a>
              <a 
                href="#benefits" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm cursor-pointer"
              >
                Benefits to Startups
              </a>
              <a 
                href="#who-should-apply" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('who-should-apply')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm cursor-pointer"
              >
                Who Should Apply?
              </a>
            </div>

            {/* Apply Now Button */}
            <div className="flex items-center">
              <Button
                asChild
                variant="default"
                effect="expandIcon"
                size="default"
                icon={ArrowRight}
                iconPlacement="right"
                className="bg-black text-white px-6 py-2 rounded-[50px] hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
              >
                <Link href="https://www.indiaaccelerator.co/arthax-program/apply/" target="_blank" rel="noopener noreferrer">
                  APPLY NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub-navbar section intentionally commented out because this copy was from the older PropTech/Construction-Tech page.
      <div className="relative top-16 left-0 right-0 z-40 bg-[#E8F4FF] border-b border-gray-200">
        ...
      </div>
      */}
    </>
  );
}
