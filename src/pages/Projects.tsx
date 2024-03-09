import { Navigation } from "../layouts/Navigation";
import { ProjectsContainer } from "../components/ProjectsContainer";
import { Footer } from "../layouts/Footer";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="A small selection of things that I have built."
        />
      </Helmet>
      <div className="wrapper">
        <Navigation page="projects" />
        <ProjectsContainer />
      </div>
      <Footer />
    </>
  );
}
