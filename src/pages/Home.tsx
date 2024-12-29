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
import { Pagination } from '@/features/filters/Pagination';
import useApiFilterState from '@/features/filters/useApiFilterState';
import { FormProvider } from 'react-hook-form';

export default function Home() {
  const {
    articles,
    error,
    form,
    isError,
    isLoading,
    onSubmit,
    watch,
    changePage,
    currentPage,
  } = useApiFilterState();
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <div className="w-full max-w-7xl mx-auto lg:px-4 mb-4">
            <div className="flex flex-col md:flex-row lg:gap-4 gap-2 xl:gap-8">
              <DataSourceSelector />
              {watch('dataSource') === 'NEWS_API' && <NewsApiFilters />}
              {watch('dataSource') === 'THE_GUARDIAN' && <TheGuardianFilters />}
              {watch('dataSource') === 'NY_TIMES' && <NyTimesFilters />}
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>
      </FormProvider>

      {isLoading && <FeedLoading />}

      {!isLoading && isError && (
        <Message
          status="error"
          message={error?.message || 'Error fetching articles.'}
        />
      )}

      {!isLoading && !isError && <Feed articles={articles} />}

      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          onPrevious={() => changePage('previous')}
          onNext={() => changePage('next')}
        />
      </div>
    </div>
  );
}
