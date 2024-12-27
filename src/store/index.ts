import {
  guardianSections,
  newsApiCategorySources,
  nyTimesSections,
} from "@/lib/constants";
import { create } from "zustand";

type StoreState = {
  guardianSections: string[];
  setGuardianSections: (sections: string[]) => void;
  nyTimesSections: string[];
  setNyTimesSections: (sections: string[]) => void;
  newsApiCategories: string[];
  setNewsApiCategories: (categories: string[]) => void;
  newsApiCategorySources: {
    value: string;
    sources: string[];
  }[];
  setNewsApiCategorySources: (categorySource: {
    value: string;
    sources: string[];
  }) => void;
  updateCategorySources: (category: string, sources: string[]) => void;
  resetCategory: (category: string) => void;
};

const useStore = create<StoreState>((set) => ({
  guardianSections: guardianSections,
  nyTimesSections: nyTimesSections.map((sec) => sec.value).slice(0, 6),
  newsApiCategories: ["general", "business"],
  newsApiCategorySources: newsApiCategorySources.slice(0, 3),
  setGuardianSections: (sections) =>
    set(() => ({ guardianSections: sections })),
  setNyTimesSections: (sections) => set(() => ({ nyTimesSections: sections })),
  setNewsApiCategories: (categories) =>
    set(() => ({ newsApiCategories: categories })),
  setNewsApiCategorySources: (categoryResources) => {
    set((state) => ({
      newsApiCategorySources: [
        ...state.newsApiCategorySources,
        categoryResources,
      ],
    }));
  },
  updateCategorySources: (category, sources) =>
    set((state) => ({
      newsApiCategorySources: state.newsApiCategorySources.map((item) =>
        item.value === category ? { ...item, sources } : item
      ),
    })),
  resetCategory: (category) =>
    set((state) => ({
      newsApiCategorySources: state.newsApiCategorySources.map((item) =>
        item.value === category ? { ...item, sources: [] } : item
      ),
    })),
}));

export default useStore;
