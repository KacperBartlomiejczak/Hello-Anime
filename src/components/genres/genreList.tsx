"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Genre {
  mal_id: number;
  name: string;
  count: number;
}

interface GenreListProps {
  genres: Genre[];
}

export default function GenreList({ genres }: GenreListProps) {
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre");

  // Sortujemy gatunki alfabetycznie
  const sortedGenres = [...genres].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold mb-4 font-poppins flex items-center gap-2">
        <span className="w-1 h-6 bg-brand rounded-full block"></span>
        Genres
      </h3>
      
      <div className="flex flex-wrap gap-2 lg:flex-col">
        <Link
          href="/top-anime"
          className={cn(
            "px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-white/5",
            !currentGenre
              ? "bg-brand text-white shadow-lg shadow-brand/20 font-semibold"
              : "bg-secondary-background text-gray-400 hover:bg-white/10 hover:text-white"
          )}
        >
          All Genres
        </Link>

        {sortedGenres.map((genre) => (
          <Link
            key={genre.mal_id}
            href={`/top-anime?genre=${genre.mal_id}`}
            className={cn(
              "px-4 py-2 rounded-lg text-sm transition-all duration-300 border border-white/5 flex justify-between items-center group",
              currentGenre === genre.mal_id.toString()
                ? "bg-brand text-white shadow-lg shadow-brand/20 font-semibold"
                : "bg-secondary-background text-gray-400 hover:bg-white/10 hover:text-white"
            )}
          >
            <span>{genre.name}</span>
            <span 
              className={cn(
                "text-xs px-2 py-0.5 rounded-full bg-black/20",
                currentGenre === genre.mal_id.toString() ? "text-white/80" : "text-gray-600 group-hover:text-gray-400"
              )}
            >
              {genre.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
