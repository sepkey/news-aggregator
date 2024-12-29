import { allApisFilters } from '@/lib/constants';
import { ApiFilters } from '@/lib/types';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useSearchParams } from 'react-router';

export function useFormReset(form: UseFormReturn<ApiFilters>) {
  const { watch, reset } = form;
  const [searchParams, setSearchParams] = useSearchParams();

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
