import useApiCall from '@/features/filters/useApiCall';
import { formatDate } from '@/lib/format-date';
import { removeFalsyValues } from '@/lib/helpers';
import type { ApiFilters, DataResources } from '@/lib/types';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useKey } from './useKey';

export default function useApiFilterState() {
  const [selectedOption, setSelectedOption] = useState<{
    dataSource: DataResources;
    filters: Record<string, string | number>;
  }>({
    dataSource: 'NEWS_API',
    filters: { q: '', category: 'general' },
  });

  const queryClient = useQueryClient();

  const { isLoading, isError, articles, error } = useApiCall(selectedOption);
  const filtersForm = useForm<ApiFilters>({
    defaultValues: {
      ...selectedOption.filters,
      dataSource: selectedOption.dataSource,
    },
  });
  const { handleSubmit, watch } = filtersForm;

  const onSubmit = handleSubmit(async (data) => {
    const { dataSource, ...others } = data;

    if (dataSource === 'NEWS_API') {
      const newsApiFilters = removeFalsyValues({
        q: others.queryNewsApi,
        category: others.category,
      });
      setSelectedOption({
        dataSource,
        filters: newsApiFilters,
      });
    }

    if (dataSource === 'THE_GUARDIAN') {
      const guardianFilters = removeFalsyValues({
        q: others.queryGuardian,
        section: others.sectionGuardian,
        ...(others.dateGuardian && {
          'from-date': formatDate(others.dateGuardian.from, 'yyyy-MM-dd'),
          'to-date': formatDate(others.dateGuardian.to, 'yyyy-MM-dd'),
        }),
      });
      setSelectedOption({
        dataSource,
        filters: guardianFilters,
      });
    }

    if (dataSource === 'NY_TIMES') {
      const nyTimesFilter = removeFalsyValues({
        q: others.queryNyTimes,
        ...(others.dateNyTimes && {
          begin_date: formatDate(others.dateNyTimes.from, 'YYYYMMDD'),
          end_date: formatDate(others.dateNyTimes.to, 'YYYYMMDD'),
        }),
        ...(others.sectionNyTimes && {
          fq: `section_name:(${others.sectionNyTimes})`,
        }),
      });
      setSelectedOption({
        dataSource,
        filters: nyTimesFilter,
      });
    }
    await queryClient.invalidateQueries({ queryKey: [dataSource] });
  });

  useKey('Enter', () => onSubmit());

  return { onSubmit, watch, isLoading, isError, articles, error, filtersForm };
}
