import { getTheGuardianSearch } from '@/api/guardian/api';
import { getNewsApiTopHeadline } from '@/api/newsapi/api';
import { getNyTimes } from '@/api/nytimes/api';
import type { Article, DataResources } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

type Props = {
  dataSource: DataResources;
  filters: Record<string, string | number>;
};

export default function useApiCall(options: Props) {
  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [options.dataSource, options],
    queryFn: async () => {
      let articles: Article[] = [];
      if (options.dataSource === 'NEWS_API')
        articles = await getNewsApiTopHeadline({
          ...options.filters,
          pageSize: 10,
        });

      if (options.dataSource === 'THE_GUARDIAN') {
        articles = await getTheGuardianSearch(options.filters);
      }

      if (options.dataSource === 'NY_TIMES') {
        articles = await getNyTimes(options.filters);
      }
      return articles;
    },
    enabled: !!options,
  });

  return {
    articles,
    isLoading,
    isError,
    error,
  };
}
