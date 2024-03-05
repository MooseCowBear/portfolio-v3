import "../styles/projects.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export function ProjectsContainer() {

  return (
    <div className="projects">
      <div className="header">
        <h1>projects</h1>
      </div>
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </div>
  );
}
