import { Clock } from "lucide-react";
import { Anime } from "@/types/anime";
export default function CardContent({
  title,
  episodes,
  year,
  genres,
  synopsis,
}: Anime) {
  return (
    <div className="flex flex-col flex-1 p-4 gap-3 relative">
      <div className="flex flex-row justify-between items-center text-xs text-gray-400 font-medium">
        <span className="flex items-center gap-1">
          <Clock size={12} /> {episodes ? `${episodes} EP` : "? EP"}
        </span>
        <span className="text-brand">{year || "Unknown"}</span>
      </div>

      <h4 className="font-poppins font-bold text-lg leading-tight line-clamp-2 group-hover:text-brand transition-colors md:text-xl lg:text-2xl">
        {title}
      </h4>

      <p className="line-clamp-3 text-xs text-gray-400 font-light leading-relaxed md:text-sm lg:text-base">
        {synopsis}
      </p>
      {genres && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2 mb-2">
          {genres.slice(0, 3).map((genre) => (
            <span
              key={genre.mal_id}
              className="text-[10px] px-2 py-1 bg-secondary text-white/80 rounded-md border border-white/5 whitespace-nowrap"
            >
              {genre.name}
            </span>
          ))}

          {genres.length > 3 && (
            <span className="text-[10px] px-2 py-1 text-gray-500">
              +{genres.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
