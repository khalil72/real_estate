import React from "react";
import HeroSection from "./hero-section";
import FeatureProperty from "./feature-property";
import Property from "./property";
import Project from "./project";
import AgentSection from "./agent";
import ContactForm from "./contact-form";
import SlideUpSection from "@/components/slide-up";

const ClientModule = () => {
  return (
    <main className="min-h-screen space-y-4">
       <SlideUpSection>
        <HeroSection />
      </SlideUpSection>

     <SlideUpSection delay={0.2} duration={1.8}>
  <FeatureProperty />
</SlideUpSection>

   <SlideUpSection delay={0.2} duration={1.8}>
  <FeatureProperty />
</SlideUpSection>

      <SlideUpSection delay={0.05} duration={1.8}>
        <Project />
      </SlideUpSection>

      <SlideUpSection delay={0.05} duration={1.8}>
        <AgentSection />
      </SlideUpSection>

      <SlideUpSection delay={0.05} duration={1.8}>
        <ContactForm />
      </SlideUpSection>
    
    </main>
  );
};

export default ClientModule;
