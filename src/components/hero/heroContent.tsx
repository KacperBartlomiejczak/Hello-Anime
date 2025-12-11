import { Anime } from "@/types/anime";
import { Star, Play } from "lucide-react";

interface HeroContentProps {
  anime: Anime;
}

export default function HeroContent({ anime }: HeroContentProps) {
  return (
    <div className="relative container mx-auto z-10 flex flex-col justify-center h-full px-4 md:px-12">
      <div className="flex flex-col items-start gap-4 md:gap-6 max-w-lg md:max-w-2xl lg:w-[60%]">
        <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white leading-tight">
          {anime.title}
        </h2>
        <div className="flex flex-row gap-2 bg-secondary text-white px-3 py-1 rounded-full items-center shadow-lg">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <p className="font-bold text-sm">{anime.score}</p>
        </div>
        <p className="line-clamp-3 md:line-clamp-4 text-gray-300 text-sm md:text-base leading-relaxed">
          {anime.synopsis}
        </p>
        <button className="mt-4 flex items-center gap-2 bg-brand hover:bg-brand/70 transition-colors text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-brand/20 cursor-pointer">
          <Play />
          Watch now
        </button>
      </div>
    </div>
  );
}
