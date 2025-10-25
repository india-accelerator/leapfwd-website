"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isSubNavVisible, setIsSubNavVisible] = useState(true);
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make sub-navbar sticky when scrolled past the main navbar (64px = h-16)
      setIsSubNavSticky(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar - Not Fixed */}
      <nav className="relative top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/leapfwd-img.png"
                  alt="Program Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
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
                <Link href="https://indiaaccelerator.co/leapfwd-program/apply/" target="_blank" rel="noopener noreferrer">
                  APPLY NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sub Navbar - Becomes Sticky on Scroll */}
      <div 
        className={`${isSubNavSticky ? 'fixed top-0' : 'relative'} left-0 right-0 z-50 bg-[#E8F4FF] border-b border-gray-200 transition-all duration-300 overflow-hidden ${
          isSubNavVisible ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Left Content */}
            <div className="flex items-center gap-2 flex-1">
              <p className="text-sm text-black">
                Empowering visionary founders and pioneering startups to redefine innovation in{" "}
                <Link href="#proptech" className="text-blue-600 hover:underline font-medium">
                  PropTech
                </Link>
                {" "}and{" "}
                <Link href="#construction-tech" className="text-blue-600 hover:underline font-medium">
                  Construction-Tech
                </Link>
                .
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsSubNavVisible(false)}
              className="ml-4 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
