import { Button } from '@/components/ui/button';
import Message from '@/components/ui/Message';
import Feed from '@/features/feed';
import FeedLoading from '@/features/feed/FeedLoading';
import {
  DataSourceSelector,
  NewsApiFilters,
  NyTimesFilters,
  TheGuardianFilters,
} from '@/features/filters';
import useApiFilterState from '@/features/filters/useApiFilterState';
import { FormProvider } from 'react-hook-form';

export default function Home() {
  const { articles, error, filtersForm, isError, isLoading, onSubmit, watch } =
    useApiFilterState();
  return (
    <div>
      <FormProvider {...filtersForm}>
        <form onSubmit={onSubmit}>
          <div className="w-full max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <DataSourceSelector />
              {watch('dataSource') === 'NEWS_API' && <NewsApiFilters />}
              {watch('dataSource') === 'THE_GUARDIAN' && <TheGuardianFilters />}
              {watch('dataSource') === 'NY_TIMES' && <NyTimesFilters />}
              <Button type="submit" className="md:w-[120px]">
                Search
              </Button>
            </div>
          </div>
        </form>
        {isLoading ? <FeedLoading /> : <Feed articles={articles} />}
        {isError && (
          <Message
            status="error"
            message={error?.message || 'Error fetching articles.'}
          />
        )}
      </FormProvider>
    </div>
  );
}
