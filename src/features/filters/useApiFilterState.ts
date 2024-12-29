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
  const [selectedOption, setSelectedOption] = useState<DataSourceFilters>(
    initDatasourceFilters
  );
  const { isLoading, isError, articles, error } =
    useGetArticles(selectedOption);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryClient = useQueryClient();

  const form = useForm<ApiFilters>({
    defaultValues: {
      ...selectedOption.filters,
      dataSource: selectedOption.dataSource,
    },
  });
  const { handleSubmit, watch } = form;

  const onSubmit = handleSubmit(async (data) => {
    const { dataSource, ...others } = data;
    const filters = buildFilters(
      dataSource,
      others,
      searchParams,
      setSearchParams
    );
    setSelectedOption({
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

      setSelectedOption((prevOption) => ({
        ...prevOption,
        filters: { ...prevOption.filters, page: newPage },
      }));

      await queryClient.invalidateQueries({ queryKey: [dataSource] });
    },
    [searchParams, setSearchParams, form, queryClient]
  );

  useFormReset(form, searchParams, setSearchParams);

  useKey('Enter', () => onSubmit());
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
