export default function HeroSkeleton() {
  return (
    <section className="relative w-screen h-screen md:h-screen">
      <div className="absolute inset-0 w-full h-full">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-secondary-background animate-shimmer" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-background/90 lg:bg-linear-to-r lg:from-[#0f172a] lg:via-[#0f172a]/60 lg:to-transparent z-0"></div>

        {/* Content Placeholder */}
        <div className="relative container mx-auto z-10 flex flex-col justify-center h-full px-4 md:px-12">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-lg md:max-w-3xl lg:w-[60%]">
            {/* Title Placeholder */}
            <div className="w-full space-y-3">
              <div className="h-10 md:h-16 bg-secondary/30 rounded-lg w-full animate-shimmer" />
              <div className="h-10 md:h-16 bg-secondary/30 rounded-lg w-3/4 animate-shimmer" />
            </div>

            {/* Score Badge Placeholder */}
            <div className="h-8 w-20 bg-secondary/30 rounded-full animate-shimmer" />

            {/* Synopsis Placeholder */}
            <div className="w-full space-y-2">
              <div className="h-4 bg-secondary/20 rounded w-full animate-shimmer" />
              <div className="h-4 bg-secondary/20 rounded w-full animate-shimmer" />
              <div className="h-4 bg-secondary/20 rounded w-2/3 animate-shimmer" />
            </div>

            {/* Button Placeholder */}
            <div className="mt-4 h-12 w-40 bg-brand/50 rounded-xl animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Chevrons Placeholder (optional) */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="w-12 h-12 bg-white/10 rounded-full animate-shimmer" />
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="w-12 h-12 bg-white/10 rounded-full animate-shimmer" />
      </div>

      {/* Dots Placeholder */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        <div className="w-3 h-3 bg-white/20 rounded-full animate-shimmer" />
        <div className="w-3 h-3 bg-white/20 rounded-full animate-shimmer" />
        <div className="w-3 h-3 bg-white/20 rounded-full animate-shimmer" />
        <div className="w-3 h-3 bg-white/20 rounded-full animate-shimmer" />
        <div className="w-3 h-3 bg-white/20 rounded-full animate-shimmer" />
      </div>
    </section>
  );
}
