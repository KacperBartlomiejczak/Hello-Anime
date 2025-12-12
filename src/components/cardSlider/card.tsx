import { Anime } from "@/types/anime";
import Image from "next/image";
import { Star, Clock } from "lucide-react";
import Link from "next/link";

export default function Card({ ...anime }: Anime) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="group relative bg-secondary-background rounded-xl w-72 md:w-80 h-[510px] flex flex-col shrink-0 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 border border-white/5 hover:border-brand/30"
    >
      <div className="relative w-full h-64 shrink-0 overflow-hidden">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110 rounded-xl"
        />

        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-white flex items-center gap-1">
          <Star size={12} className="text-yellow-400 " />
          {anime.score || "N/A"}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3 relative">
        <div className="flex flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1">
            <Clock size={12} />{" "}
            {anime.episodes ? `${anime.episodes} EP` : "? EP"}
          </span>
          <span className="text-brand">{anime.year || "Unknown"}</span>
        </div>

        <h4 className="font-poppins font-bold text-lg leading-tight line-clamp-2 group-hover:text-brand transition-colors md:text-xl lg:text-2xl">
          {anime.title}
        </h4>

        <p className="line-clamp-3 text-xs text-gray-400 font-light leading-relaxed md:text-sm lg:text-base">
          {anime.synopsis}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2 mb-2">
          {anime.genres.slice(0, 3).map((genre) => (
            <span
              key={genre.mal_id}
              className="text-[10px] px-2 py-1 bg-secondary text-white/80 rounded-md border border-white/5 whitespace-nowrap"
            >
              {genre.name}
            </span>
          ))}

          {anime.genres.length > 3 && (
            <span className="text-[10px] px-2 py-1 text-gray-500">
              +{anime.genres.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
