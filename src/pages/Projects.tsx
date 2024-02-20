import { Navigation } from "../layouts/Navigation";
import { ProjectsContainer } from "../components/ProjectsContainer";
import { Footer } from "../layouts/Footer";

export default function Projects() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <ProjectsContainer />
      </div>
      <Footer />
    </>
  );
}
