import { formatDate } from '@/lib/format-date';
import { removeFalsyValues } from '@/lib/helpers';
import type { ApiFilters, DataResources } from '@/lib/types';

export function buildFilters(
  dataSource: DataResources,
  data: Omit<ApiFilters, 'dataSource'>
) {
  let filters: Record<string, string | number> = { page: 1 };

  switch (dataSource) {
    case 'NEWS_API': {
      filters = {
        ...filters,
        q: data.queryNewsApi,
        category: data.category,
      };
      break;
    }

    case 'THE_GUARDIAN': {
      filters = {
        ...filters,
        q: data.queryGuardian,
        section: data.sectionGuardian,
        ...(data.dateGuardian && {
          'from-date': formatDate(data.dateGuardian.from, 'yyyy-MM-dd'),
          'to-date': formatDate(data.dateGuardian.to, 'yyyy-MM-dd'),
        }),
      };
      break;
    }

    case 'NY_TIMES': {
      filters = {
        ...filters,
        q: data.queryNyTimes,
        ...(data.dateNyTimes && {
          begin_date: formatDate(data.dateNyTimes.from, 'YYYYMMDD'),
          end_date: formatDate(data.dateNyTimes.to, 'YYYYMMDD'),
        }),
        ...(data.sectionNyTimes && {
          fq: `section_name:(${data.sectionNyTimes})`,
        }),
      };
      break;
    }
    default:
      throw new Error(`Unsupported data source: ${dataSource}`);
  }
  const cleanedFilters = removeFalsyValues(filters);
  return cleanedFilters;
}
