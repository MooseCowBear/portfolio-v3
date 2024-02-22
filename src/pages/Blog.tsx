import { Articles } from "../components/Articles";
import { useBlogContext } from "../contexts/BlogContext";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const { articles } = useBlogContext();

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="Some programming-related things I've written."
        />
      </Helmet>
      <div className="wrapper">
        <Navigation />
        <Articles articles={articles} />
      </div>
      <Footer />
    </>
  );
}
