import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import ConceptSolutions from "@/components/ConceptSolutions";
import TrustSignals from "@/components/TrustSignals";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <ConceptSolutions />
      <TrustSignals />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
