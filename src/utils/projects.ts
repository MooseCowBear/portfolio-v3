export const filterProjects = (projects: Project[], filter: string) => {
  return projects.filter((project) => project.stack.includes(filter));
};
