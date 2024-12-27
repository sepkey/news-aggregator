import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/errorMessage";
import Feed from "@/features/feed";
import FeedLoading from "@/features/feed/FeedLoading";
import {
  DataSourceSelector,
  NewsApiFilters,
  NyTimesFilters,
  TheGuardianFilters,
} from "@/features/filters";
import useApiCall from "@/features/filters/useApiCall";
import { dateToGuardianFormat, dateToNyTimesFormat } from "@/lib/format-date";
import { ApiFilters, DataResources } from "@/lib/types";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<{
    dataSource: DataResources;
    filters: Record<string, string | number>;
  }>({
    dataSource: "NEWS_API",
    filters: { q: "", category: "general" },
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

    if (dataSource === "NEWS_API")
      setSelectedOption({
        dataSource,
        filters: { q: others.queryNewsApi, category: others.category },
      });

    if (dataSource === "THE_GUARDIAN") {
      setSelectedOption({
        dataSource,
        filters: {
          q: others.queryGuardian,
          section: others.sectionGuardian,
          "from-date": dateToGuardianFormat(others.dateGuardian?.from),
          "to-date": dateToGuardianFormat(others.dateGuardian?.to),
        },
      });
    }

    if (dataSource === "NY_TIMES") {
      setSelectedOption({
        dataSource,
        filters: {
          q: others.queryNyTimes,
          begin_date: dateToNyTimesFormat(others.dateNyTimes?.from),
          end_date: dateToNyTimesFormat(others.dateNyTimes?.to),
          fq: `section_name:(${others.sectionNyTimes})`,
        },
      });
    }
    await queryClient.invalidateQueries({ queryKey: [dataSource] });
  });

  return (
    <div>
      <FormProvider {...filtersForm}>
        <form onSubmit={onSubmit}>
          <div className="w-full max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <DataSourceSelector />
              {watch("dataSource") === "NEWS_API" && <NewsApiFilters />}
              {watch("dataSource") === "THE_GUARDIAN" && <TheGuardianFilters />}
              {watch("dataSource") === "NY_TIMES" && <NyTimesFilters />}
              <Button type="submit" className="md:w-[120px]">
                Search
              </Button>
            </div>
          </div>
        </form>
        {isLoading ? <FeedLoading /> : <Feed articles={articles} />}
        {isError && (
          <ErrorMessage
            message={error?.message || "Error fetching articles."}
          />
        )}
      </FormProvider>
    </div>
  );
}
