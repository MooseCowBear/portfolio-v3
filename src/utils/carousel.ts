export const getImages = (project: Project, dark: boolean) => {
  if ((dark && project.images.dark) || !project.images.light) {
    // dark mode OR project only has a dark mode
    return project.images.dark;
  } else if (project.images.light) {
    // if light mode OR project has no dark mode
    return project.images.light;
  } else {
    // project has no images, shouldn't ever be in this situation
    return [];
  }
};
