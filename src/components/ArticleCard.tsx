import { dateDisplay, displayContent } from "../utils/articles";
import "../styles/blog.css";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="article">
      <div className="header">
        <h2>{article.title}</h2>
        <span>{dateDisplay(article.pubDate)}</span>
      </div>
      <p>{displayContent(article.content)}</p>
      <a href={article.link} target="_blank" rel="noreferrer nofollow">
        view on Medium
      </a>
    </div>
  );
}
