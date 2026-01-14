import CardPlaceholder from "@/components/cardSlider/cardPlaceholder";

export default function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 justify-center mt-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <CardPlaceholder key={i} />
      ))}
    </div>
  );
}
