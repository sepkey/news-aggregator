import { Article, DataResources } from "@/lib/types";
import { create } from "zustand";

const initParams = {
  page: 1,
  pageSize: 10,
  category: "general",
};

type SessionStoreState = {
  articles: Article[];
  setArticles: (article: Article[]) => void;
  dataSource: DataResources;
  setDataSource: (ds: DataResources) => void;
  newsApiParams: Record<string, string | number>;
  setNewsApiParams: (nap: Record<string, string | number>) => void;
};

const useArticleStore = create<SessionStoreState>((set) => ({
  articles: [],
  dataSource: "NEWS_API",
  newsApiParams: initParams,
  setArticles: (newArticles) => set(() => ({ articles: [...newArticles] })),
  setDataSource: (ds) => set(() => ({ dataSource: ds })),
  setNewsApiParams: (nap) => set(() => ({ newsApiParams: nap })),
}));

export default useArticleStore;
