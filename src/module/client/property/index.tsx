import PropertyCard from '@/components/property-card'
import Section from '@/components/section'
import { ALL_PROPERTIES } from '@/data'
import React from 'react'

const Property = () => {
  return (
     <Section
        id="properties"
        eyebrow="Browse"
        heading="All Properties"
        subheading="From cozy apartments to sprawling villas — find what fits your budget and lifestyle."
        ctaLabel="See all listings"
        bg="bg-gray-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PROPERTIES.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </Section>
  )
}

export default Property
