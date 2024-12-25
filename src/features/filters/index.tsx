import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Globe, Search, Tag } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

type FiltersFieldValues = {
  query: string;
  date: Date | undefined;
  category: string;
  source: string;
};

const defaultValues: FiltersFieldValues = {
  query: "",
  date: undefined,
  category: "",
  source: "",
};

export default function Filters() {
  const { handleSubmit, control, register } = useForm<FiltersFieldValues>({
    defaultValues,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-9 w-full"
              {...register("query")}
            />
          </div>

          <Controller
            name="date"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal md:w-[180px]",
                      !value && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {value ? format(value, "dd/MM/yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <CalendarComponent
                    selected={value}
                    onSelect={onChange}
                    mode="single"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />

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
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          <Controller
            control={control}
            name="source"
            render={({ field: { onChange, value } }) => (
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="md:w-[180px]">
                  <Globe className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newsApi">News API</SelectItem>
                  <SelectItem value="newYorkTimes">New York Times</SelectItem>
                  <SelectItem value="reuters">The Guardian</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          <Button type="submit" className="md:w-[120px] ">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}
