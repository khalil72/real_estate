import ProjectCard from '@/components/project-card'
import Section from '@/components/section'
import { PROJECTS } from '@/data'
import React from 'react'

const Project = () => {
  return (
    <Section
        id="projects"
        eyebrow="New Developments"
        heading="Property Projects"
        subheading="Invest early in Pakistan's most anticipated residential and commercial developments."
        ctaLabel="All projects"
        bg="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>
  )
}

export default Project
