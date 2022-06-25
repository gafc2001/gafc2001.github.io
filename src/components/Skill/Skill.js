import React from 'react'
import useLanguage from './../../hooks/useLanguage';
import { TechSkill } from './TechSkill'
import { Section } from "./../Section"
export const Skill = () => {
  const {lang} = useLanguage();
  const data = lang.skills;
  return (
    <Section title={data.tech_skills.title} id="tech-section">
        <div className="mb-3">
            <TechSkill techs={data.tech_skills.technologies} />
        </div>
    </Section>
  )
}
