import { dateDisplay, displayContent, formatTag } from "../utils/articles";
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
            return <Tag key={category} tag={formatTag(category)} />;
          })}
        </div>
        <a href={article.link} target="_blank" rel="noreferrer nofollow">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill=""
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
