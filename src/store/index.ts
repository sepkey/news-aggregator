import { Article } from "@/lib/types";
import { create } from "zustand";

type SessionStoreState = {
  articles: Article[];
  setArticles: (article: Article[]) => void;
  guardianSections: string[];
  setGuardianSections: (sections: string[]) => void;
  newsApiCategories: string[];
  setNewsApiCategories: (categories: string[]) => void;
};

const useArticleStore = create<SessionStoreState>((set) => ({
  articles: [],
  guardianSections: ["culture", "community"],
  newsApiCategories: ["general", "business"],
  setArticles: (newArticles) => set(() => ({ articles: [...newArticles] })),
  setGuardianSections: (sections) =>
    set(() => ({ guardianSections: sections })),
  setNewsApiCategories: (categories) =>
    set(() => ({ newsApiCategories: categories })),
}));

export default useArticleStore;
