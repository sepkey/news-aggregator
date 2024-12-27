import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { nyTimesSections } from "@/lib/constants";
import { ApiFilters } from "@/lib/types";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search, Tag } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export default function NyTimesFilters() {
  const { register, control } = useFormContext<ApiFilters>();

  return (
    <>
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9 w-full"
          {...register("queryNyTimes")}
        />
      </div>
      <Controller
        control={control}
        name="dateNyTimes"
        render={({ field: { value, onChange } }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value?.from ? (
                  value.to ? (
                    <>
                      {format(value.from, "LLL dd, y")} -{" "}
                      {format(value.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(value.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={value?.from}
                selected={value}
                onSelect={onChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        )}
      />

      <Controller
        control={control}
        name="sectionNyTimes"
        render={({ field: { onChange, value } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="md:w-[180px]">
              <Tag className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent>
              {nyTimesSections.map((section) => (
                <SelectItem value={section}>{section}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
}
