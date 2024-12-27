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
  const { register, control } = useFormContext<ApiFilters>();
  const { newsApiCategories } = useStore();

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
              {newsApiCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
}
