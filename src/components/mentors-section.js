"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MentorsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false
    })
  );
  // Mentor data from the image
  const mentors = [
    {
      id: 1,
      name: "Ashwinder R Singh",
      title: "Vice Chairman",
      company: "BCD Group",
      image: "/mentor3.jpeg", // Replace with actual mentor image
    },
    {
      id: 2,
      name: "Sunil Mishra",
      title: "MD, CEO & Chief AI and Technology Officer",
      company: "Anarock",
      image: "/mentor5.jpeg",
    },
    {
      id: 3,
      name: "Rajiv Nehru",
      title: "Dean",
      company: "L&T Institute of Project Management",
      image: "/mentor6.jpeg",
    },
    {
      id: 4,
      name: "Anupam Saxena (MRICS)",
      title: "Head - University Partnerships & Early Engagement",
      company: "RICS India",
      image: "/mentor1.jpeg",
    },
    {
      id: 5,
      name: "Captain K. Srinivas (MCR, MRICS)",
      title: "CEO/Regional Advisory Board Member at",
      company: "RICS South Asia",
      image: "/mentor4.jpeg",
    },
    {
      id: 6,
      name: "Samir Jasuja",
      title: "CEO",
      company: "PropEquity",
      image: "/mentor2.jpeg",
    },
    {
      id: 7,
      name: "Abhay Chawla",
      title: "COO IA Spaces",
      company: "India Accelerator",
      image: "/mentor7.jpeg",
    },
    {
      id: 8,
      name: "John Thomas",
      title: "Real Estate Investor/Director",
      company: "XRE Consultancy",
      image: "/mentor8.jpeg",
    },
  ];

  return (
    <section 
      id="mentors"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm sm:text-2xl font-semibold text-[#3F64AB] mb-4 uppercase tracking-widest">
            OUR MENTORS
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-black mb-6 uppercase tracking-wide">
            Learn from Industry Leaders
          </h3>
          
          {/* Separator Line */}
          <div className="w-16 h-0.5 bg-[#3F64AB] mx-auto mb-8"></div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {mentors.map((mentor) => (
                <CarouselItem key={mentor.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="flex flex-col items-center text-center">
                    {/* Mentor Image with Dark Red Border */}
                    <div className="mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-[#3F64AB]">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Mentor Name */}
                    <h4 className="text-lg font-bold text-black mb-2">
                      {mentor.name}
                    </h4>
                    
                    {/* Mentor Title */}
                    <p className="text-sm text-black mb-1">
                      {mentor.title}
                    </p>
                    
                    {/* Mentor Company */}
                    <p className="text-sm text-black">
                      {mentor.company}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

