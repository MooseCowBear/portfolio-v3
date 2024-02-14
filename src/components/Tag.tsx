import "../styles/tag.css";

type TagProps = {
  tag: string;
};

export function Tag({ tag }: TagProps) {
  return <div className="tag">{tag}</div>;
}
