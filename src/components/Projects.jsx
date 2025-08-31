import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="container my-5" id="project">
      <h1 className="text-center fw-bold text-primary mb-5">My Projects</h1>

      <div className="row g-4 justify-content-center">
        <div className="col-md-4 d-flex justify-content-center">
          <ProjectCard title="Kuch V" desc="hsfbs sjfnrf sjfsoirjf sgsoirgj sgksrjgsoi sijoirjgrdg sjsrjgsorlg." />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <ProjectCard title="Kuch V" desc="hsfbs sjfnrf sjfsoirjf sgsoirgj sgksrjgsoi sijoirjgrdg sjsrjgsorlg." />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <ProjectCard title="Kuch V" desc="hsfbs sjfnrf sjfsoirjf sgsoirgj sgksrjgsoi sijoirjgrdg sjsrjgsorlg." />
        </div>
      </div>
    </div>
  )
}
