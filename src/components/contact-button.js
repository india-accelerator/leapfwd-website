"use client";

import { Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip delayDuration={0} open={true}>
          <TooltipTrigger asChild>
            <a
              href="mailto:leapfwd@indiaaccelerator.co"
              className="inline-flex items-center justify-center w-14 h-14 bg-[#3F64AB] text-white rounded-full shadow-lg hover:bg-[#2d4a7c] transition-all duration-200 hover:scale-110"
              aria-label="Contact us"
            >
              <Mail className="h-6 w-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            sideOffset={12}
            className="bg-black text-white border-none"
          >
            <p>Contact us</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

