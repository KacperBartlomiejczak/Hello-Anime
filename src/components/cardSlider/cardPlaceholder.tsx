export default function CardPlaceholder() {
  return (
    <div className="relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg border border-white/5 ">
      {/* Image Placeholder */}
      <div className="relative w-full h-64 shrink-0 bg-linear-to-r from-secondary via-secondary/60 to-secondary bg-size-[200%_100%]]">
        {/* Score Badge Placeholder */}
        <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-md rounded-md w-12 h-6 animate-pulse" />
      </div>

      {/* Content Placeholder */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Episodes & Year */}
        <div className="flex flex-row justify-between items-center">
          <div className="h-3 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-16" />
          <div className="h-3 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-12" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-full" />
          <div className="h-6 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-3/4" />
        </div>

        {/* Synopsis */}
        <div className="space-y-2">
          <div className="h-3 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-full" />
          <div className="h-3 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-full" />
          <div className="h-3 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-2/3" />
        </div>

        {/* Genres */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2 mb-2">
          <div className="h-6 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-16" />
          <div className="h-6 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-20" />
          <div className="h-6 bg-linear-to-r from-secondary via-secondary/60 to-secondary rounded animate-pulse bg-size-[200%_100%]] w-14" />
        </div>
      </div>
    </div>
  );
}
