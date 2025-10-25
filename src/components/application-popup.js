"use client";

import { useState, useEffect } from "react";
import { Rocket, Calendar, Users, Presentation, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function ApplicationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        {/* Content */}
        <div className="p-8">
            {/* Logos */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <Image
                src="/logos.png"
                alt="India Accelerator"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Heading */}
            <DialogTitle className="text-2xl sm:text-2xl font-bold text-center text-black mb-2 uppercase">
              APPLICATION OPENEING POP UP
            </DialogTitle>

            {/* Subheading */}
            <p className="text-center text-gray-700 mb-6 font-medium">
              The LeapFWD Program is live!
            </p>
            <p className="text-center text-gray-600 mb-8 text-sm">
              PropTech and ConTech startups, this is your moment.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-8">
              {/* Applications Close */}
              {/* <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-[#3F64AB]" />
                  <span className="text-gray-700 font-medium">Applications Close</span>
                </div>
                <span className="text-gray-600 text-sm">1st November 2025</span>
              </div> */}

              {/* Program Start */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#3F64AB]" />
                  <span className="text-gray-700 font-medium">Program Start</span>
                </div>
                <span className="text-gray-600 text-sm">October 2025</span>
              </div>

              {/* Cohort Kickstarts */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#3F64AB]" />
                  <span className="text-gray-700 font-medium">Cohort Kickstarts</span>
                </div>
                <span className="text-gray-600 text-sm">December 2025</span>
              </div>

              {/* Demo Day */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Presentation className="h-5 w-5 text-[#3F64AB]" />
                  <span className="text-gray-700 font-medium">Demo Day</span>
                </div>
                <span className="text-gray-600 text-sm">February 2025</span>
              </div>
            </div>

            {/* Apply Now Button */}
            <Button
              asChild
              variant="default"
              effect="expandIcon"
              size="lg"
              icon={ArrowRight}
              iconPlacement="right"
              className="w-full bg-[#1F3C7B] text-white py-3 rounded-full hover:bg-[#2d5199] transition-colors duration-200 font-semibold text-lg mb-3"
              onClick={() => setIsOpen(false)}
            >
              <Link href="https://indiaaccelerator.co/leapfwd-program/apply/" target="_blank" rel="noopener noreferrer">
                APPLY NOW
              </Link>
            </Button>

            {/* Live Badge */}
            <p className="text-center text-sm text-gray-600 font-medium">
              Application is now LIVE
            </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

