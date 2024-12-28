import { formatDate } from '@/lib/format-date';
import { removeFalsyValues } from '@/lib/helpers';
import { ApiFilters, DataResources } from '@/lib/types';

export function buildFilters(
  dataSource: DataResources,
  data: Omit<ApiFilters, 'dataSource'>
) {
  switch (dataSource) {
    case 'NEWS_API':
      return removeFalsyValues({
        q: data.queryNewsApi,
        category: data.category,
      });

    case 'THE_GUARDIAN':
      return removeFalsyValues({
        q: data.queryGuardian,
        section: data.sectionGuardian,
        ...(data.dateGuardian && {
          'from-date': formatDate(data.dateGuardian.from, 'yyyy-MM-dd'),
          'to-date': formatDate(data.dateGuardian.to, 'yyyy-MM-dd'),
        }),
      });

    case 'NY_TIMES':
      return removeFalsyValues({
        q: data.queryNyTimes,
        ...(data.dateNyTimes && {
          begin_date: formatDate(data.dateNyTimes.from, 'YYYYMMDD'),
          end_date: formatDate(data.dateNyTimes.to, 'YYYYMMDD'),
        }),
        ...(data.sectionNyTimes && {
          fq: `section_name:(${data.sectionNyTimes})`,
        }),
      });

    default:
      throw new Error(`Unsupported data source: ${dataSource}`);
  }
}
