import Skeleton from "@/components/ui/skeleton";

export default function FeedLoading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}
