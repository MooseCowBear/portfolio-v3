import "../styles/blog.css";
import { ArticleCard } from "./ArticleCard";

type ArticlesProps = {
  articles: Article[];
};

export function Articles({ articles }: ArticlesProps) {
  console.log("passed as props", articles);

  return (
    <div className="article-container">
      {articles.map((article) => {
        return <ArticleCard key={article.guid} article={article} />;
      })}
    </div>
  );
}
