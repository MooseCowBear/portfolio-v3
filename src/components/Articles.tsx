import { useArticles } from "../hooks/useArticles";

// would be better not to fetch every time, just once per

export function Articles() {
  const { articles, error, loading } = useArticles();

  if (error) return <p>something went wrong</p>;
  if (loading) return <p>loading...</p>;
  console.log(articles);

  return null;
}
