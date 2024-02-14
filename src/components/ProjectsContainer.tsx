import "../styles/projects.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export function ProjectsContainer() {

  return (
    <div className="projects">
      <h1>projects</h1>
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </div>
  );
}
