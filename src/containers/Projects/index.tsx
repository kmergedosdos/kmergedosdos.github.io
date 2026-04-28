import "./index.css";

import ProjectCard from "../../components/ProjectCard";
import projects from "./projects.json";

function Projects() {
  return (
    <section className="projects" id="work">
      <h2 className="projects__header">Featured work</h2>
      <div className="projects__list">
        {projects.map((project) => (
          <div key={project.id} className="projects__list__item">
            <ProjectCard
              title={project.title}
              description={project.description}
              keyImpact={project.keyImpact}
              technologies={project.technologies}
              markdownLocation={project.markdownLocation}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
