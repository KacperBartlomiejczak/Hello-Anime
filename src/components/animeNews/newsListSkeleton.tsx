import { Skeleton } from "../ui/skeleton";

export default function NewsListSkeleton() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 justify-center w-full mt-4 flex-1 min-h-0">
      {/* 1. Szkielet dla MainNews (Lewa część - xl:w-[70%]) */}
      <div className="group flex flex-col w-full gap-3 items-start justify-start xl:w-[70%] p-4 mb-5">
        <Skeleton className="w-full aspect-video md:aspect-min-[21/9] min-h-[400px] rounded-2xl shadow-lg" />
        <div className="flex flex-col gap-2 w-full mt-2 px-1">
          <div className="flex justify-between items-center w-full">
            <Skeleton className="h-5 w-24 rounded" />
            <Skeleton className="h-10 w-28 rounded-lg" />
          </div>
        </div>
      </div>

      {/* 2. Szkielet dla NewsListing (Prawa część - xl:w-[30%]) */}
      <div className="grid grid-cols-1 gap-3 flex-1 w-full lg:grid-cols-2 xl:grid-cols-1 lg:w-full xl:w-[30%] overflow-hidden min-h-0 px-4 xl:px-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col w-[95%] border-brand/20 border p-3 rounded-xl bg-background shadow-brand/10 shadow-sm min-h-[90px]"
          >
            <div className="space-y-2 mt-1">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>

            <div className="flex flex-row w-full items-center justify-between mt-auto pt-4">
              <Skeleton className="h-3 w-1/3 rounded" />
              <Skeleton className="h-3 w-1/4 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
