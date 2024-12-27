import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ApiFilters } from "@/lib/types";
import useStore from "@/store";
import { Search, Tag } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export default function NewsApiFilters() {
  const { register, control, watch } = useFormContext<ApiFilters>();
  const { newsApiCategorySources } = useStore();

  return (
    <>
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9 w-full"
          {...register("queryNewsApi")}
        />
      </div>

      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, value } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="md:w-[180px]">
              <Tag className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {newsApiCategorySources.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Controller
        control={control}
        name="sourceNewApi"
        render={({ field: { onChange, value } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="md:w-[180px]">
              <Tag className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              {newsApiCategorySources
                .find((itm) => itm.value === watch("category"))
                ?.sources.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
}
