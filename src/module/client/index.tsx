import React from "react";
import HeroSection from "./hero-section";
import FeatureProperty from "./feature-property";
import Property from "./property";
import Project from "./project";
import AgentSection from "./agent";
import ContactForm from "./contact-form";

const ClientModule = () => {
  return (
    <main className="min-h-screen space-y-4">
      <HeroSection />
      <FeatureProperty />
      <Property />
      <Project />
      <AgentSection />
      <ContactForm />


    </main>
  );
};

export default ClientModule;
