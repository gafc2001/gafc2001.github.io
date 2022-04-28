import React from 'react'
import { TechSkill } from './TechSkill'
import { Section } from "./../Section"
export const Skill = ({data}) => {
  return (
    <Section title={data.tech_skills.title}>
        <div className="mb-3">
            <TechSkill techs={data.tech_skills.technologies} />
        </div>
    </Section>
  )
}
