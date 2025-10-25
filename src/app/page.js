import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProgramBenefits } from "@/components/program-benefits";
import { MissionSection } from "@/components/mission-section";
import { StartupInfoSection } from "@/components/startup-info-section";
import { AboutUsSection } from "@/components/about-us-section";
import { ApplicationPopup } from "@/components/application-popup";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { ContactButton } from "@/components/contact-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection delay={0}>
        <HeroSection />
      </AnimatedSection>
      
      {/* About Section */}
      <AnimatedSection delay={0}>
        <AboutSection />
      </AnimatedSection>
      
      {/* Program Benefits Section */}
      <AnimatedSection delay={100}>
        <ProgramBenefits />
      </AnimatedSection>
      
      {/* Mission Section */}
      <AnimatedSection delay={100}>
        <MissionSection />
      </AnimatedSection>
      
      {/* About Us Section */}
      <AnimatedSection delay={100}>
        <AboutUsSection />
      </AnimatedSection>
      
      {/* Startup Info Section */}
      <AnimatedSection delay={100}>
        <StartupInfoSection />
      </AnimatedSection>
      
      {/* Footer */}
      <AnimatedSection delay={100}>
        <Footer />
      </AnimatedSection>

      {/* Application Popup */}
      <ApplicationPopup />

      {/* Contact Button */}
      <ContactButton />
    </div>
  );
}
