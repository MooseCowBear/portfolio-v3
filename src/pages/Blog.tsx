import { Articles } from "../components/Articles";
import { useBlogContext } from "../contexts/BlogContext";

export default function Blog() {
  const { articles } = useBlogContext();

  return (
    <>
      <h1>blog</h1>
      <Articles articles={articles}/>
    </>
  );
}
