import PropertyCard from '@/components/property-card'
import Section from '@/components/section'
import { FEATURED_PROPERTIES } from '@/data'


const FeatureProperty = () => {
  return (
     <Section
        id="featured"
        eyebrow="Hand-Picked"
        heading="Featured Properties"
        subheading="Exclusive listings curated by our top agents — premium homes in prime locations."
        ctaLabel="View all featured"
        bg="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROPERTIES.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </Section>
  )
}

export default FeatureProperty
