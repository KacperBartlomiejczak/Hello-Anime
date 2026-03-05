export default function AnimeNewsSekeleton() {
  return (
    <div className="flex flex-row mt-10">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className=" w-full animate-pulse">
          <div className="flex flex-col items-center group">
            <div className="relative w-60 aspect-2/3 mb-2 overflow-hidden rounded-lg">
              
              <div className="absolute w-full h-full rounded-lg bg-black/30 group-hover:scale-102 transition-transform"></div>
            </div>
            <div className="text-center line-clamp-2 group-hover:text-brand transition-colors bg-black/30 w-2/3 h-5 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
