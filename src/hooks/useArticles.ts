import { useEffect, useState } from "react";

export const useArticles = () => {
  const initialArticles: Article[] = [];
  const [articles, setArticles] = useState(initialArticles);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getArticles = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moosecowbear",
          { mode: "cors", signal: abortController.signal }
        );

        if (response.status >= 400) {
          console.log(response.status);
          throw new Error("server error");
        }
        const data = await response.json();
        setArticles(data.items);
        setError(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    };
    getArticles();

    return () => {
      abortController.abort(); // cancel request if unmount
    };
  }, []);

  return { articles, error, loading };
};
