import React from 'react'

export default function ProjectCard({title,desc}) {
  return (
    <div>
      <div className="card text-center mb-3 ml-6 mt-6" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
  </div>
</div>
    </div>
  )
}
