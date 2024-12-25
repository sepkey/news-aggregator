export type DataResources = "NEWS_API" | "THE_GUARDIAN" | "NY_TIMES";

export type NewsApiFilters = {
  query: string;
  category: string;
  dataSource: DataResources;
};

export type Article = {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: string | Date;
  description: string;
  image?: string;
  author?: string;
};
