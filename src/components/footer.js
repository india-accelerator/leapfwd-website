"use client";

import { Linkedin, X, Instagram } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content - Centered Layout */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Links Section */}
          <div>
            <h3 className="text-white text-base font-medium mb-3">Links</h3>
            {/* <ul className="space-y-2">
              <li>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                  Imprint
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                  Data Protection
                </a>
              </li>
            </ul> */}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn Icon with Tooltip */}
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.linkedin.com/company/india-accelerator" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-sm hover:bg-gray-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-black" />
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="bg-white text-black border border-gray-200"
                >
                  <p>Visit our LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* X (Twitter) Icon with Tooltip */}
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a 
                    href="https://x.com/LeapFWD_123" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-sm hover:bg-gray-200 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <X className="h-5 w-5 text-black" />
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="bg-white text-black border border-gray-200"
                >
                  <p>Follow us on X</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Instagram Icon with Tooltip */}
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.instagram.com/indiaaccelerator/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-sm hover:bg-gray-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-black" />
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="bg-white text-black border border-gray-200"
                >
                  <p>Follow us on Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-white text-sm">
              2025 © All rights reserved by LeapFWD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
