import React from 'react'
import useLanguage from './../../hooks/useLanguage';
import { Section } from './../Utils/Section';
import { ProjectItem } from './ProjectItem'
export const Project = () => {
  const {lang} = useLanguage();
  const data = lang.project;
  return (
    <Section title={data.title} id="project-section">
        {data.projects.map( item => <ProjectItem key={item.title} data={item}/>)}
    </Section>
  )
}
