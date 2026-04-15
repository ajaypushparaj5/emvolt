import Navbar from "@/components/ui/Navbar";
import CanvasSequence from "@/components/scroll/CanvasSequence";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionMission } from "@/components/sections/VisionMission";
import { Services } from "@/components/sections/Services";

import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Navbar />
      <CanvasSequence />

      <div className="relative z-10">
        <HeroSection />
        <VisionMission />
        <Services />

        <Footer />
      </div>
      <FloatingWhatsApp />
    </main>
  );
}
