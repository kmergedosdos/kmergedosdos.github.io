import TechTile from "../TechTile";
import "./index.css";

interface ProjectCardProps {
  title: string;
  description: string;
  keyImpact: string[];
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  keyImpact,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h4 className="project-card__title">{title}</h4>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__key-impact">
        {keyImpact.map((impact, index) => (
          <li key={index}>{impact}</li>
        ))}
      </ul>
      <div className="project-card__technologies">
        {technologies.map((tech) => (
          <TechTile key={tech} title={tech} />
        ))}
      </div>
    </div>
  );
}
