import {
  guardianSections,
  newsApiCategories,
  nyTimesSections,
} from '@/lib/constants';
import { create } from 'zustand';

type StoreState = {
  guardianSections: string[];
  setGuardianSections: (sections: string[]) => void;
  nyTimesSections: string[];
  setNyTimesSections: (sections: string[]) => void;
  newsApiCategories: string[];
  setNewsApiCategories: (categories: string[]) => void;
};

const useStore = create<StoreState>((set) => ({
  guardianSections: guardianSections,
  nyTimesSections: nyTimesSections.map((sec) => sec.value).slice(0, 6),
  newsApiCategories: newsApiCategories.map((cat) => cat.value).slice(0, 2),
  setGuardianSections: (sections) =>
    set(() => ({ guardianSections: sections })),
  setNyTimesSections: (sections) => set(() => ({ nyTimesSections: sections })),
  setNewsApiCategories: (categories) =>
    set(() => ({ newsApiCategories: categories })),
}));

export default useStore;
