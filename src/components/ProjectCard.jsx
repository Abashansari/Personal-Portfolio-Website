import React from 'react'

export default function ProjectCard({ title, desc }) {
  return (
    <div className="card text-center mb-4 shadow-lg border rounded-3" style={{ width: "22rem" }}>

      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{title}</h5>
        <p className="card-text text-muted">{desc}</p>
        <a href="#" className="btn btn-outline-primary btn-sm mt-2">View Project</a>
      </div>

    </div>
  )
}
