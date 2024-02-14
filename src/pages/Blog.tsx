import { Articles } from "../components/Articles";
import { useBlogContext } from "../contexts/BlogContext";
import { Navigation } from "../layouts/Navigation";

export default function Blog() {
  const { articles } = useBlogContext();

  return (
    <>
      <Navigation />
      <Articles articles={articles} />
    </>
  );
}
