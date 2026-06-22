import { ArrowRight } from 'lucide-react';
import React from 'react'
import Container from '../ui/container';
import { SectionProps } from '@/types';

const Section = ({
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  bg = "bg-white",
  children,
}: SectionProps) => (
  <section className={`py-20 ${bg}`}>
     <Container>
         
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/8 px-3 py-1.5 rounded-full mb-3">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl text-sm md:text-base">
            {subheading}
          </p>
        </div>
        {ctaLabel && (
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {children}
     </Container>
     
    
  </section>
);
export default Section
