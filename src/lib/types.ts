export type DataResources = 'NEWS_API' | 'THE_GUARDIAN' | 'NY_TIMES';

export type ApiFilters = {
  dataSource: DataResources;
  ////NEWS API
  queryNewsApi: string;
  category: string;
  ////THE GUARDIAN
  queryGuardian: string;
  dateGuardian?: { from: Date; to: Date };
  sectionGuardian: string;
  //// NY Times
  queryNyTimes: string;
  dateNyTimes?: { from: Date; to: Date };
  sectionNyTimes: string;
};

export type Article = {
  id: string;
  title: string;
  url: string;
  publishedAt: Date;
  description: string;
  source?: string;
  category?: string;
  image?: string;
  author?: string;
};
