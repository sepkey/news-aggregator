import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ApiFilters } from "@/lib/types";
import { Globe } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export default function DataSourceSelector() {
  const { control } = useFormContext<ApiFilters>();

  return (
    <Controller
      control={control}
      name="dataSource"
      render={({ field: { onChange, value } }) => (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="md:w-[180px]">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NEWS_API">News API</SelectItem>
            <SelectItem value="THE_GUARDIAN">The Guardian</SelectItem>
            <SelectItem value="NY_TIMES">New York Times</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
}
