import React from 'react'
import { Section } from './../Section'
import { ProjectItem } from './ProjectItem'
import { Alert } from 'react-bootstrap'
export const Project = ({data}) => {
  return (
    <Section title={data.title}>
        <Alert variant="primary">
          <strong>{data.note}</strong>
        </Alert>
        {data.projects.map( item => <ProjectItem key={item.title} data={item}/>)}
    </Section>
  )
}
