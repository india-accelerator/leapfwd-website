import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { HeroSection } from "@/components/arthax/HeroSection";
import { ProgramOverview } from "@/components/arthax/ProgramOverview";
import { BenefitsSection } from "@/components/arthax/BenefitsSection";
import { WhoShouldApply } from "@/components/arthax/WhoShouldApply";
import { KeyHighlights } from "@/components/arthax/KeyHighlights";
import { AboutProgram } from "@/components/arthax/AboutProgram";
import { CTASection } from "@/components/arthax/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#0052FF] selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramOverview />
        <BenefitsSection />
        <WhoShouldApply />
        <KeyHighlights />
        <AboutProgram />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
