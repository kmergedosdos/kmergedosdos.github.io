import React from 'react'
import './index.css'

function Projects() {
  return (
    <section className="projects" id='projects'>
      <h2 className="projects__header">
        Recent projects I've done
      </h2>
      <p className="projects__body">
        These are some of the projects I have worked on so far.
      </p>
      <div className="projects__list">
        ...
      </div>
      <button className="btn">View all projects</button>
    </section>
  )
}

export default Projects