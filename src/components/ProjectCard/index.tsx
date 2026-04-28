import "./index.css";

import { useEffect, useState } from "react";
import TechTile from "../TechTile";
import Modal from "../Modal";
import Markdown from "react-markdown";

interface ProjectCardProps {
  title: string;
  description: string;
  keyImpact: string[];
  technologies: string[];
  markdownLocation: string;
}

export default function ProjectCard({
  title,
  description,
  keyImpact,
  technologies,
  markdownLocation,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    fetch(markdownLocation)
      .then((res) => res.text())
      .then((text) => setMdContent(text));
  }, [markdownLocation]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showDetails]);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <div className="project-card__actions">
        <button
          className={`btn btn--text ${isHovered ? "btn--hovered" : ""}`}
          onClick={() => setShowDetails(true)}
        >
          Show details →
        </button>
        <div className="project-details">
          <Modal open={showDetails} onClose={() => setShowDetails(false)}>
            <Markdown
              components={{
                a: ({ ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" />
                ),
              }}
            >
              {mdContent}
            </Markdown>
          </Modal>
        </div>
      </div>
    </div>
  );
}
