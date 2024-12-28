import useApiCall from '@/features/filters/useApiCall';
import type { ApiFilters, DataResources } from '@/lib/types';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { buildFilters } from './buildFilters';
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
    const filters = buildFilters(dataSource, others);
    setSelectedOption({
      dataSource,
      filters,
    });

    await queryClient.invalidateQueries({ queryKey: [dataSource] });
  });

  useKey('Enter', () => onSubmit());

  return { onSubmit, watch, isLoading, isError, articles, error, filtersForm };
}
