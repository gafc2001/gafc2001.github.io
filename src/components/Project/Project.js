import React from 'react'
import useLanguage from './../../hooks/useLanguage';
import { Section } from './../Section'
import { ProjectItem } from './ProjectItem'
import { Alert } from 'react-bootstrap'
export const Project = () => {
  const {lang} = useLanguage();
  const data = lang.project;
  return (
    <Section title={data.title} id="project-section">
        <Alert variant="primary">
          <strong>{data.note}</strong>
        </Alert>
        {data.projects.map( item => <ProjectItem key={item.title} data={item}/>)}
    </Section>
  )
}
