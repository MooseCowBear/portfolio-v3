import { Articles } from "../components/Articles";
import { useBlogContext } from "../contexts/BlogContext";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";

export default function Blog() {
  const { articles } = useBlogContext();

  return (
    <>
      <div className="wrapper">
        <Navigation />
        <Articles articles={articles} />
      </div>
      <Footer />
    </>
  );
}
