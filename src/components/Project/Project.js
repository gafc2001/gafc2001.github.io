import React from 'react'
import { Section } from './../Section'
import { ProjectItem } from './ProjectItem'
export const Project = ({data}) => {
  return (
    <Section title={data.title}>
        {data.projects.map( item => <ProjectItem key={item.title} data={item}/>)}
    </Section>
  )
}
