import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className='container'>
      <h1>My Projects</h1>
      <div className='row'>
        <div className='col-md-4 d-flex justify-content-between align-itens-center'>
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4 d-flex justify-content-between align-itens-center'>
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
      <ProjectCard title='abash' desc='he is great man sjnks sjfskjf skjfslo sfjeosie jsdvosidr seiosejf' />
        </div>
      </div>
      
    </div>
  )
}
