import useGetArticles from '@/features/filters/useGetArticles';
import type { ApiFilters, DataResources } from '@/lib/types';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import { buildFilters } from './buildFilters';
import { useFormReset } from './useFormReset';
import { useKey } from './useKey';

type DataSourceFilters = {
  dataSource: DataResources;
  filters: Record<string, string | number>;
};

const initDatasourceFilters: DataSourceFilters = {
  dataSource: 'NEWS_API',
  filters: { category: 'general' },
};

export default function useApiFilterState() {
  const [selectedResource, setSelectedResource] = useState<DataSourceFilters>(
    initDatasourceFilters
  );
  const { isLoading, isError, articles, error } =
    useGetArticles(selectedResource);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryClient = useQueryClient();

  const form = useForm<ApiFilters>({
    defaultValues: {
      ...selectedResource.filters,
      dataSource: selectedResource.dataSource,
    },
  });
  const { handleSubmit, watch } = form;

  const onSubmit = handleSubmit(async (data) => {
    const { dataSource, ...rawFilters } = data;
    const filters = buildFilters(dataSource, rawFilters);

    const newSearchParams = new URLSearchParams();

    Object.entries(filters).forEach(([k, v]) => {
      if (v) newSearchParams.set(k, String(v));
    });

    setSearchParams(newSearchParams);

    setSelectedResource({
      dataSource,
      filters,
    });

    await queryClient.invalidateQueries({ queryKey: [dataSource] });
  });

  const changePage = useCallback(
    async (direction: 'next' | 'previous') => {
      const currentPage = parseInt(searchParams.get('page') || '1', 10);
      const newPage =
        direction === 'next' ? currentPage + 1 : Math.max(1, currentPage - 1);

      searchParams.set('page', newPage.toString());
      setSearchParams(searchParams);

      const { dataSource } = form.getValues();

      setSelectedResource((prev) => ({
        ...prev,
        filters: { ...prev.filters, page: newPage },
      }));

      await queryClient.invalidateQueries({ queryKey: [dataSource] });
    },
    [searchParams, setSearchParams, form, queryClient]
  );

  useFormReset(form);

  useKey('Enter', onSubmit);
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  return {
    onSubmit,
    watch,
    isLoading,
    isError,
    articles,
    error,
    form,
    changePage,
    currentPage,
  };
}
