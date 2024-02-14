import { dateDisplay, displayContent } from "../utils/articles";
import { Tag } from "./Tag";
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
      <div className="footer">
        <div className="tags">
          {article.categories.map((category) => {
            return <Tag key={category} tag={category} />;
          })}
        </div>
        <a href={article.link} target="_blank" rel="noreferrer nofollow">
          Read on Medium
        </a>
      </div>
    </div>
  );
}
