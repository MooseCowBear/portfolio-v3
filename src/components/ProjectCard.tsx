import "../styles/projects.css";
import { Tag } from "./Tag";
import { Carousel } from "./Carousel";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`gradient ${project.name
        .replace(/\s+/g, "-")
        .toLowerCase()}-gradient rounded`}
    >
      <section className="project-card">
        <Carousel project={project} />
        <div className="description">
          <div className="header">
            <h3>{project.name}</h3>
            {project.wip && <Tag tag={"wip"} />}
          </div>
          <ul>
            {project.bullets.map((bullet, index) => {
              return <li key={index}>{bullet}</li>;
            })}
            <li>{`Built with: ${project.stack.join(", ")}`}</li>
          </ul>
          <div className="links">
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
