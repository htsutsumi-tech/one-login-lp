import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Concept from "@/components/Concept";
import AINative from "@/components/AINative";
import BuildScope from "@/components/BuildScope";
import Partnership from "@/components/Partnership";
import Security from "@/components/Security";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PainPoints />
      <Concept />
      <AINative />
      <BuildScope />
      <Partnership />
      <Security />
      <CTASection />
      <Footer />
    </main>
  );
}
