import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function Pagination({ currentPage, onPrevious, onNext }: Props) {
  return (
    <div className="flex items-center justify-around">
      <Button
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={currentPage <= 1}
        className="w-28 fl"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <span className="text-sm font-medium">Page {currentPage}</span>
      <Button variant="outline" size="sm" onClick={onNext} className="w-28">
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
