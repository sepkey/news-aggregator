import { allApisFilters } from '@/lib/constants';
import { ApiFilters } from '@/lib/types';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { SetURLSearchParams } from 'react-router';

export function useFormReset(
  form: UseFormReturn<ApiFilters>,
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams
) {
  const { watch, reset } = form;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'dataSource') {
        reset({
          dataSource: value.dataSource,
          queryNewsApi: '',
          category: 'general',
          queryGuardian: '',
          sectionGuardian: '',
          dateGuardian: undefined,
          queryNyTimes: '',
          sectionNyTimes: '',
          dateNyTimes: undefined,
        });

        allApisFilters.forEach((param) => searchParams.delete(param));
        setSearchParams(searchParams);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, reset, searchParams, setSearchParams]);
}
