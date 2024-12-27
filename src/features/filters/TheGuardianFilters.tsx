import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formatDate } from '@/lib/format-date';
import type { ApiFilters } from '@/lib/types';
import { cn } from '@/lib/utils';
import useStore from '@/store';
import { Calendar as CalendarIcon, Search, Tag } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

export default function TheGuardianFilters() {
  const { register, control } = useFormContext<ApiFilters>();
  const { guardianSections } = useStore();
  return (
    <>
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9 w-full"
          {...register('queryGuardian')}
        />
      </div>
      <Controller
        control={control}
        name="dateGuardian"
        render={({ field: { value, onChange } }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  'justify-start text-left font-normal',
                  !value && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value?.from ? (
                  value.to ? (
                    <>
                      {formatDate(value.from, 'LLL dd, y')} -{' '}
                      {formatDate(value.to, 'LLL dd, y')}
                    </>
                  ) : (
                    formatDate(value.from, 'LLL dd, y')
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
        name="sectionGuardian"
        render={({ field: { onChange, value } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="md:w-[180px]">
              <Tag className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent>
              {guardianSections.map((section) => (
                <SelectItem key={section} value={section}>
                  {section}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
}
