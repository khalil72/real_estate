import AgentCard from '@/components/agent-card'
import Section from '@/components/section'
import { AGENTS } from '@/data'
import React from 'react'

const AgentSection = () => {
  return (
    <Section
        id="agents"
        eyebrow="Our Team"
        heading="Meet Our Agents"
        subheading="Experienced, verified professionals ready to guide you through every step of your property journey."
        ctaLabel="All agents"
        bg="bg-gray-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>
      </Section>
  )
}

export default AgentSection
