import "../styles/projects.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { useState } from "react";
import { categories } from "../data/project_categories";
import { filterProjects } from "../utils/projects";

export function ProjectsContainer() {
  const [category, setCategory] = useState(0);

  const displayedProjects = filterProjects(projects, categories[category]);

  const buttonClass = (n: number) => {
    return category == n ? "active" : "inactive";
  };

  return (
    <div className="projects">
      <div className="header">
        <h1>projects</h1>
        <div className="selection">
          <button className={buttonClass(0)} onClick={() => setCategory(0)}>
            {categories[0]}
          </button>
          <button className={buttonClass(1)} onClick={() => setCategory(1)}>
            {categories[1]}
          </button>
          <button className={buttonClass(2)} onClick={() => setCategory(2)}>
            {categories[2]}
          </button>
        </div>
      </div>
      {displayedProjects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </div>
  );
}
