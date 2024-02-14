import { ReactNode, createContext, useContext } from "react";
import { useArticles } from "../hooks/useArticles";

type BlogContextProviderProps = {
  children: ReactNode;
};

type BlogContextType = {
  articles: Article[];
  error: boolean;
  loading: boolean;
};

const BlogContext = createContext<BlogContextType | null>(null);

export function useBlogContext() {
  const value = useContext(BlogContext);
  if (value === null) throw Error("Can't be used outside BlogContextProvider");
  return value;
}

export function BlogProvider({ children }: BlogContextProviderProps) {
  const { articles, error, loading } = useArticles(); 

  return (
    <BlogContext.Provider
      value={{
        articles,
        error,
        loading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
