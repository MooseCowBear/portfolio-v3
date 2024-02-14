type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`${project.name} gradient`}>
      <section className="project-card">
        <div className="carousel-placeholder"></div>
        <div className="description">
          <h3>{project.name}</h3>
          <ul>
            {project.bullets.map((bullet) => {
              return <li>{bullet}</li>;
            })}
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
