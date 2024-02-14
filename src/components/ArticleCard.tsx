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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill=""
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
